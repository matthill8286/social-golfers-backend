import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../models/user.model';

@ObjectType()
export class SignOutResult {
  @Field(() => User)
  user: User;
  @Field(() => null)
  token: null;
}
