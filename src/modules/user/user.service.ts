import { Injectable, UseGuards } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { JwtAuthGuard } from '../auth/guards';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>, // private readonly courseService: CourseService,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const user = await this.userModel.create(createUserInput);
    return user.save();
  }

  @UseGuards(JwtAuthGuard)
  async findAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  @UseGuards(JwtAuthGuard)
  async findUserById(id: Types.ObjectId): Promise<User> {
    return this.userModel.findOne({ id });
  }

  @UseGuards(JwtAuthGuard)
  async findUserByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email });
  }

  @UseGuards(JwtAuthGuard)
  async updateUser(
    id: number,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    await this.userModel.updateOne({ id }, updateUserInput);
    return this.userModel.findOne({ id });
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.userModel.findOne({ id });
    await this.userModel.deleteOne({ id });
    return user.save();
  }
}
