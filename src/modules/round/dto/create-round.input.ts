import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateRoundInput {
  @Field(() => Int)
  userId: number;

  @Field()
  date: Date;

  // ... add other round properties as needed
}
