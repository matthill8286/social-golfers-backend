import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class JwtModel {
  @ApiProperty()
  @Field(() => String)
  accessToken: string;

  @ApiProperty()
  @Field(() => String)
  refreshToken: string;
}
