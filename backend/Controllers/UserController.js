import UsersModel from "../models/Users.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator';


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