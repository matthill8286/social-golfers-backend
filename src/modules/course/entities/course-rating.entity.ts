import { Prop, Schema } from '@nestjs/mongoose';

import { User } from 'src/modules/user/models/user.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractDocument } from 'src/libs/database/mongo';
import mongoose from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class CourseRating extends AbstractDocument {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User)
  user: User;

  @Prop()
  @Field(() => Number)
  rating: number;
}
