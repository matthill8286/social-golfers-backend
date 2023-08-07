import { Prop, Schema } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from 'src/modules/user/models/user.model';
import { AbstractDocument } from 'src/libs/database/mongo';
import mongoose from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class FavoriteCourse extends AbstractDocument {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Field(() => User)
  user: User;
}
