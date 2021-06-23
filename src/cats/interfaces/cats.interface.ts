/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface Cat extends Document {
  id?: string;
  breed: string;
  price: number;
}
