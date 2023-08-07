import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';
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
}
