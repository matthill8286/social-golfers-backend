import { Prop, Schema } from '@nestjs/mongoose';

import { User } from 'src/modules/user/models/user.model';
import { CourseRating } from './course-rating.entity';
import { CourseReview } from './course-review.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbstractDocument } from 'src/libs/database/mongo';
import { Round } from 'src/modules/round/models/round.model';
import mongoose from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Course extends AbstractDocument {
  @Prop()
  @Field(() => String)
  name: string;

  @Prop()
  @Field(() => String)
  location: string;

  @Prop()
  @Field(() => Int)
  par: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Round' })
  @Field(() => [Round])
  rounds: Round[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CourseReview' })
  @Field(() => [CourseReview])
  reviews: CourseReview[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CourseRating' })
  @Field(() => [CourseRating])
  ratings: CourseRating[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User)
  favoritedBy: User[];
}
