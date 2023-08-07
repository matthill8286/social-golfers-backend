import { Mongoose } from 'mongoose';
import {
  PostCommentSchema,
  PostLikeSchema,
  PostSchema,
} from './models/post.model';

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (mongoose: Mongoose) => mongoose.model('Post', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'POST_LIKE_REPOSITORY',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('PostLike', PostLikeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'POST_COMMENT_REPOSITORY',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('PostComment', PostCommentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
