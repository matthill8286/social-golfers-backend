import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/modules/user/models/user.model';
import { PostLike } from './post-like.entity';
import { PostComment } from './post-comment.entity';
import { Type } from 'class-transformer';
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractDocument } from 'src/libs/database/mongo';

@ObjectType()
@Schema({ timestamps: true })
export class Post extends AbstractDocument {
  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Type(() => User)
  @Field(() => User)
  user: User;

  @Type(() => PostLike)
  @Field(() => [PostLike])
  likes: PostLike[];

  @Type(() => PostComment)
  @Field(() => [PostComment])
  comments: PostComment[];
}
