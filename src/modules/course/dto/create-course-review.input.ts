// create-course-review.input.ts
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, Min, Max } from 'class-validator';

@InputType()
export class CreateCourseReviewInput {
  @Field(() => Int)
  @IsNotEmpty()
  courseId: number;

  @Field(() => Int)
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rating: number;

  @Field()
  @IsNotEmpty()
  comment: string;

  @Field(() => Int)
  userId: number;
}
