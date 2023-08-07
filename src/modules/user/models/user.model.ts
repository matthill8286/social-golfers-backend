import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Exclude, Type } from 'class-transformer';
import { Post } from 'src/modules/post/entities/post.entity';
import { AbstractDocument } from 'src/libs/database/mongo';
import { EUserStatus } from '../enums';
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = User &
  Document & {
    password: string;
    lowercaseEmail: string;
    passwordReset?: {
      token: string;
      expiration: Date;
    };
    checkPassword(password: string): Promise<boolean>;
  };

@ObjectType({ description: 'user' })
@Schema({ timestamps: true })
export class User extends AbstractDocument {
  @Prop({ unique: true })
  @Field(() => String)
  email: string;

  @Prop()
  @Field(() => String)
  name: string;

  @Prop()
  @Exclude()
  @Field(() => String)
  password: string;

  @Prop()
  @Field(() => Number)
  handicap: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Post' })
  @Type(() => Post)
  @Field(() => [Post])
  posts: Post[];

  @Field(() => String)
  status: EUserStatus;

  @Prop({
    type: Boolean,
    default: true,
  })
  @Field(() => Boolean)
  enabled: boolean;

  @Field(() => Date)
  @Prop()
  timestamp: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.checkPassword = function (
  password: string,
): Promise<boolean> {
  const user = this as UserDocument;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (error, isMatch) => {
      if (error) {
        reject(error);
      }

      resolve(isMatch);
    });
  });
};
