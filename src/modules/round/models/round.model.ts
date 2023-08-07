import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { AbstractDocument } from 'src/libs/database/mongo';
import { Course } from 'src/modules/course/entities/course.entity';
import { User } from 'src/modules/user/models/user.model';

@Schema()
@ObjectType()
export class Round extends AbstractDocument {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  @Field(() => User)
  userId: User['_id'];

  @Prop()
  @Field(() => Course)
  course: Course;

  @Prop()
  @Field(() => Date)
  date: Date;

  @Prop()
  @Field(() => Number)
  score: number;

  @Prop()
  @Field(() => Number)
  handicap: number;
}

export type RoundDocument = Round & Document;

export const RoundSchema = SchemaFactory.createForClass(Round);
