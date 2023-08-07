import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCourseInput {
  @Field()
  name: string;

  @Field(() => Int)
  userId: number;

  // ... add other course properties as needed
}
