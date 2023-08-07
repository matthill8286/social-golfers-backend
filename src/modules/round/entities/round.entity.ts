import { Field } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { AbstractDocument } from 'src/libs/database/mongo';
import { Course } from 'src/modules/course/entities/course.entity';
import { User } from 'src/modules/user/models/user.model';

@Schema()
export class Round extends AbstractDocument {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  @Field(() => User)
  user: User;

  @Prop()
  @Field(() => Course)
  course: Course;

  @Prop()
  @Field(() => Date)
  date: Date;

  @Prop()
  @Field(() => Number)
  score: number;
}
