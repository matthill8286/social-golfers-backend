import { Mongoose } from 'mongoose';
import { CourseSchema } from './models/course.model';

export const courseProviders = [
  {
    provide: 'COURSE_REPOSITORY',
    useFactory: (mongoose: Mongoose) => mongoose.model('Course', CourseSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
