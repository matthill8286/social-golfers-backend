import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCourseInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int)
  userId?: number;

  // ... add other course properties as needed
}
