import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateRoundInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  date?: Date;

  // ... add other round properties as needed
}
