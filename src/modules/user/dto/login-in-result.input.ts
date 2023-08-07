import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../models/user.model';

@ObjectType()
export class LoginResult {
  @Field(() => User)
  user: User;
  @Field(() => String)
  token: string;
}
