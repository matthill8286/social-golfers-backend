import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  username?: string;
  @Field(() => String)
  email?: string;
  @Field(() => String)
  password?: string;
  @Field(() => Boolean)
  enabled?: boolean;

  // ... add other user properties as needed
}
