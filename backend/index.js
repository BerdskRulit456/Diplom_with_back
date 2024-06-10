import express from 'express';
import mongoose from 'mongoose';
import { registerValidator } from './validation/auth.js';
import {checkMe, login, register, sendEmail, courses, resPass, newDataUser} from './Controllers/UserController.js';
import AuthCheck from './AuthCheck.js';
import cors from 'cors';
import http from 'http';

mongoose.connect('mongodb+srv://admin:sqwr@cluster0.p1t6dke.mongodb.net/Diplom?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB is connecting"))
  .catch((err) => console.log(err));

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.post('/setNewData', newDataUser);
app.get('/courses', courses);
app.post('/login', login);
app.post('/register', registerValidator, register);
app.get('/auth/me', AuthCheck, checkMe);
app.post('/authEmail', sendEmail);
app.post('/resetPassword', resPass);

server.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("SERVER IS OK");
});
