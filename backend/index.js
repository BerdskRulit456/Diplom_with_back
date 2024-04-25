import express from 'express';
import mongoose from 'mongoose';
import { registerValidator } from './validation/auth.js';
import {checkMe, login, register} from './Controllers/UserController.js'
import AuthCheck from './AuthCheck.js';

mongoose.connect('mongodb+srv://admin:sqwr@cluster0.p1t6dke.mongodb.net/Diplom?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("DB is connecting")).catch((err) => console.log(err))

const app = express();
app.use(express.json())

app.post('/login', login) 
app.post('/register', registerValidator, register)
app.get('/auth/me', AuthCheck, checkMe)
app.listen(4444, (err) => {
  if(err){
    return console.log(err)
  }

  console.log("SERVER IS OK")
})

