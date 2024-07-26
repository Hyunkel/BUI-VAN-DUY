// Tạo router và gán các route
import { Router } from 'express';
const router = Router();
import { Request, Response } from 'express';
import { ThrowReturn } from '../utils/errorUtils';
import  RecordModel  from '../models/record'; // Đúng cách nhập phần tử được đặt tên

// Tạo bản ghi mới
export const createRecordModel = async (req: Request, res: Response) => {
  const { name, age, score } = req.body;
  const newRecordModel = new RecordModel({ name, age, score });
  await newRecordModel.save();
  res.sendData(newRecordModel);
};

// Lấy tất cả bản ghi
export const getRecordModels = async (req: Request, res: Response) => {
  const RecordModels = await RecordModel.find();
  res.sendData(RecordModels);
};

// Cập nhật bản ghi
export const updateRecordModel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, score } = req.body;
  const updatedRecordModel = await RecordModel.findByIdAndUpdate(id, { name, age, score }, { new: true });
  if (!updatedRecordModel) throw new ThrowReturn('RecordModel not found', 404);
  res.sendData(updatedRecordModel);
};

// Xoá bản ghi
export const deleteRecordModel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedRecordModel = await RecordModel.findByIdAndDelete(id);
  if (!deletedRecordModel) throw new ThrowReturn('RecordModel not found', 404);
  res.sendData({ message: 'RecordModel deleted successfully' });
};

router.post('/RecordModels', createRecordModel);
router.get('/RecordModels', getRecordModels);
router.put('/RecordModels/:id', updateRecordModel);
router.delete('/RecordModels/:id', deleteRecordModel);

export default router;
