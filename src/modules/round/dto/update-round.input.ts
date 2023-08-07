import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateRoundInput } from './create-round.input';

@InputType()
export class UpdateRoundInput extends PartialType(CreateRoundInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  date?: Date;

  // ... add other round properties as needed
}
