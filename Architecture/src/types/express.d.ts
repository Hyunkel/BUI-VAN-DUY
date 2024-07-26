import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Hoặc thay thế bằng kiểu cụ thể hơn nếu bạn biết cấu trúc của decoded
    }
  }
}
