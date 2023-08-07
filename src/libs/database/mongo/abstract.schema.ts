import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema } from '@nestjs/mongoose';
import { Exclude, Transform, Type } from 'class-transformer';
import { Field } from '@nestjs/graphql';
import { Types } from 'mongoose';

export const defaultSchemaOptions = {
  versionKey: false,
  virtuals: true,
  timestamps: true,
  toJSON: { virtuals: true },
};

@Schema(defaultSchemaOptions)
export class AbstractDocument {
  @Exclude()
  @Type(() => String)
  @Field(() => String, { nullable: true })
  @ApiProperty({ name: 'id', type: String })
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @ApiProperty()
  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @ApiProperty()
  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}
