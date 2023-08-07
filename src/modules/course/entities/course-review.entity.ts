import { Prop, Schema } from '@nestjs/mongoose';
import { Course } from 'src/modules/course/entities/course.entity';
import { User } from 'src/modules/user/models/user.model';

@Schema({ timestamps: true })
export class CourseReview {
  @Prop()
  id: number;

  @Prop()
  user: User;

  @Prop()
  userId: number;

  @Prop()
  course?: Course;

  @Prop()
  courseId: number;

  @Prop()
  rating: number;

  @Prop()
  comment: string;
}
