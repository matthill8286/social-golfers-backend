import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FavoriteCourseInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  courseId: number;
}
