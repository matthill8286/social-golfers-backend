import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { AbstractDocument } from 'src/libs/database/mongo';
import { Course } from 'src/modules/course/entities/course.entity';
import { User } from 'src/modules/user/models/user.model';

@ObjectType()
@Schema({ timestamps: true })
export class CourseReview extends AbstractDocument {
  @Prop()
  @Field(() => Int)
  id: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User)
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  @Field(() => Course)
  course?: Course;

  @Prop()
  @Field(() => Int)
  courseId: number;

  @Prop()
  @Field(() => Int)
  rating: number;

  @Prop()
  @Field(() => String)
  comment: string;
}
