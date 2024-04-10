import mongoose from 'mongoose';

mongoose
  .connect('mongodb://127.0.0.1:27017/auth_db')
  .then((db) => console.log('Mongodb database is connected'))
  .catch((error) => console.log(error));
