import UsersModel from "../models/Users.js";
import Courses from "../models/Courses.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator';
import * as nodemailer from 'nodemailer'

export const courses = async(req,res) => {
  try{
    const courses = await Courses.find();
    res.json(courses);

  }
  catch(e){
    res.status(500).json({ message: err.message });
  }
}

export const login = async(req,res) => {
    try{
  
      const user = await UsersModel.findOne({email: req.body.email})
  
      if(!user){
        return res.status(404).json({
          message: 'Пользователь не найден'
        })
      }
  
      const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
  
      if(!isValidPass){
        return res.status(400).json({
          message: 'Неверный логин или пароль'
        })
      }
  
      const token = jwt.sign(
        {
          _id:user._id
        },
        'secret123',
        {
          expiresIn: '30d'
        })
  
        const {passwordHash, ...userData} = user._doc
  
      res.json({...userData, token})
  
    } catch(err){
      console.log(err);
      res.status(500).json({
        message: "Не удалось авторизоваться"
      })
    }
}

export const register = async (req, res) => {
    try{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
      }
  
      const existingUser = await UsersModel.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(500).json({
          message: "Пользователь с такой почтой уже зарегистрирован"
        });
      }
      
      const checkEmailCode = async() => {
        try{
          const response = await axios.post('/authEmail', { email });
        }
        catch(e){
          console.log(e)
        }
      }

      const password = req.body.password
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
  
      const doc = new UsersModel({
        fullName: req.body.fullName,
        email: req.body.email,
        passwordHash: hash
      })
  
      const user = await doc.save()
  
      const token = jwt.sign(
        {
          _id:user._id
        },
        'secret123',
        {
          expiresIn: '30d'
        })
  
        const {passwordHash, ...userData} = user._doc
  
      res.json({...userData, token})
    }
    catch(err){
      console.log(err);
      res.status(500).json({
        message: "Не удалось зарегистрироваться"
      })
    }
  }

export const checkMe = async (req, res) =>{
  try{
    const user = await UsersModel.findById(req.UserId)

    if(!user){
      return res.status(404).json({
        message: "Пользователь не найден"
      })
    }
    const {passwordHash, ...userData} = user._doc
    res.json({userData})
  }
  catch(err){
    return res.status(403).json({message: 'Нет доступа'})
  }
}

export const sendEmail = async (req, res) => {
  const codeForEmail = Math.floor(Math.random() * (100000 - 9999 + 1) + 9999);
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tigranoganisyan2004@gmail.com',
        pass: 'wxla beap wiry tfkj'
      }
    });

    const mailOptions = {
      from: 'tigranoganisyan2004@gmail.com',
      to: req.body.email,
      subject: 'Тема письма',
      text: 'Текст письма',
      html: 'your code ' + codeForEmail
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, code: codeForEmail });  // Возвращаем код в ответе
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


  
    // Отправьте письмо
    //   await transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });