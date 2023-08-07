import { Prop, Schema } from '@nestjs/mongoose';
import { Field } from '@nestjs/graphql';
import { Types } from 'mongoose';

import { User } from 'src/modules/user/models/user.model';
import { Course } from './course.entity';

@Schema({ timestamps: true })
export class FavoriteCourse {
  @Field(() => String, { nullable: true })
  @Prop()
  _id?: Types.ObjectId;

  @Prop()
  user: User;

  @Prop()
  course: Course;

  @Prop()
  courseId: number;
}
