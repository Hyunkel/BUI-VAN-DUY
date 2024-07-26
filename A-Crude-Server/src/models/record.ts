import { Schema, model, Document } from 'mongoose';

// Định nghĩa interface cho tài liệu Record
interface IRecord extends Document {
    name: string;
    age: number;
    score: number;
}

// Định nghĩa Schema cho Record và chỉ định tên collection
const recordSchema = new Schema<IRecord>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    score: { type: Number, required: true }
}, { collection: 'Record' }); // Chỉ định tên collection
// Xóa trường __v khỏi kết quả trả về
recordSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    }
});

recordSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    }
});

// Tạo model từ Schema
const RecordModel = model<IRecord>('Record', recordSchema);

export default RecordModel;
