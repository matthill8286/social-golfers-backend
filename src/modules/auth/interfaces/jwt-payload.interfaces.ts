import { Types } from 'mongoose';

export interface JwtPayload {
  email: string;
  _id: Types.ObjectId;
  expiration?: Date;
}
