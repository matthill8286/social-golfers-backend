import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';
// import { CourseReview } from './entities/course-review.entity';

@Resolver((of) => [Course])
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Mutation(() => Course)
  async createCourse(
    @Args('input') createCourseInput: CreateCourseInput,
  ): Promise<Course> {
    return this.courseService.createCourse(createCourseInput);
  }

  @Query(() => [Course])
  async getAllCourses(): Promise<Course[]> {
    return this.courseService.findAllCourses();
  }

  @Query(() => Course)
  async getCourseById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Course> {
    return this.courseService.findCourseById(id);
  }

  @Mutation(() => Course)
  async updateCourse(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') updateCourseInput: UpdateCourseInput,
  ): Promise<Course> {
    return this.courseService.updateCourse(id, updateCourseInput);
  }

  @Mutation(() => Course)
  async deleteCourse(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Course> {
    return this.courseService.deleteCourse(id);
  }

  // @Query(() => [CourseReview])
  // async getCourseReviews(
  //   @Args('id', { type: () => Int }) courseId: number,
  // ): Promise<CourseReview[]> {
  //   return this.courseService.getCourseReviews(courseId);
  // }
}
