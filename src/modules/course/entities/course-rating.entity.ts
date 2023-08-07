import { Prop, Schema } from '@nestjs/mongoose';

import { User } from 'src/modules/user/models/user.model';
import { Course } from './course.entity';

@Schema({ timestamps: true })
export class CourseRating {
  @Prop()
  id: string;

  @Prop()
  user: User;

  @Prop()
  course: Course;

  @Prop()
  rating: number;
}
