import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ThrowReturn } from '../utils/throwReturn';

export const generateToken = (req: Request, res: Response) => {
  const { userId } = req.body; // Giả sử bạn nhận userId từ body

  if (!userId) {
    throw new ThrowReturn('User ID is required');
  }

  // Tạo token
  const data =`CmTxFbcFjo0DkIUJMrVeLvfVQ0Ol1mu4`;
  console.log("process.env.JWT_SECRET",process.env.JWT_SECRET);
  const token = jwt.sign({ id: userId }, data as string, {
    expiresIn: '1h' // Token sẽ hết hạn sau 1 giờ
  });

  res.sendData({ token }); // Trả về token
};
