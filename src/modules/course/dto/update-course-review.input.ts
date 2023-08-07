// update-course-review.input.ts
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, Min, Max } from 'class-validator';
import { CreateCourseReviewInput } from './create-course-review.input';

@InputType()
export class UpdateCourseReviewInput extends PartialType(
  CreateCourseReviewInput,
) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

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
