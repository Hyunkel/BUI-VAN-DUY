import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  score: { type: Number, required: true, default: 0 }
});

export const User = model('User', userSchema);
