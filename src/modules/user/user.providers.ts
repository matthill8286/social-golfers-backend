import { Mongoose } from 'mongoose';
import { UserSchema } from './models/user.model';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
