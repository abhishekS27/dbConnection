/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const catSchema = new mongoose.Schema({
  breed: {type: String , required: true},
  price: {type: Number , required: true},
});