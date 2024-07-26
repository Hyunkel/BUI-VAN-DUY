import { User } from '../models/userModel';

export const updateScoreService = async (userId: string, score: number) => {
  const user = await User.findOneAndUpdate(
    { userId },
    { $inc: { score } },
    { new: true, upsert: true }
  );
  return user.score;
};
