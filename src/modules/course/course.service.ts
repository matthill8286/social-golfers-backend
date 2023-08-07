import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';
// import { User, UserDocument } from 'src/modules/user/models/user.model';
import { CourseReview } from './entities/course-review.entity';
import { CreateCourseReviewInput } from './dto/create-course-review.input';
// import { UpdateCourseReviewInput } from './dto/update-course-review.input';
import { CourseDocument } from './models/course.model';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private readonly courseModel: Model<CourseDocument>, // @InjectModel(CourseReview.name) // private readonly courseReviewModel: Model<CourseReview>, // @InjectModel(User.name) // private readonly userModel: Model<UserDocument>,
  ) {}

  async createCourse(createCourseInput: CreateCourseInput): Promise<Course> {
    const course = await this.courseModel.create(createCourseInput);
    return course;
  }

  async findAllCourses(): Promise<Course[]> {
    return this.courseModel.find();
  }

  async findCourseById(id: number): Promise<Course> {
    return this.courseModel.findOne({ id });
  }

  async updateCourse(
    id: number,
    updateCourseInput: UpdateCourseInput,
  ): Promise<Course> {
    await this.courseModel.updateOne({ id }, updateCourseInput);
    return this.courseModel.findOne({ id });
  }

  async deleteCourse(id: number): Promise<Course> {
    const course = await this.courseModel.findOne({ id });
    await this.courseModel.deleteOne({ id });
    return course;
  }

  async createCourseReview(
    createCourseReviewInput: CreateCourseReviewInput,
  ): Promise<CourseReview> {
    const { courseId, userId, rating, comment } = createCourseReviewInput;
    const course = await this.courseModel.findOne({ id: courseId });
    const review = new CourseReview();
    review.course = course;
    review.rating = rating;
    review.comment = comment;

    // Fetch the user from the Model and assign it to the review
    // Assuming you have a User entity and userModel injected
    // review.user = await this.userModel.findOne({ id: userId });
    return review;
  }

  // getCourseReviews(
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   courseId: number,
  // ): CourseReview[] | PromiseLike<CourseReview[]> {
  //   throw new Error('Method not implemented.');
  // }

  // async updateCourseReview(
  //   updateCourseReviewInput: UpdateCourseReviewInput,
  // ): Promise<CourseReview> {
  //   const { id, rating, comment } = updateCourseReviewInput;
  //   await this.courseReviewModel.updateOne({ id }, { rating, comment });
  //   return this.courseReviewModel.findOne({ id });
  // }

  // async deleteCourseReview(id: number): Promise<CourseReview> {
  //   const review = await this.courseReviewModel.findOne({ id });
  //   await this.courseReviewModel.deleteOne({ id });
  //   return review;
  // }
}
