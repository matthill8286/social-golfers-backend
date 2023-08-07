import { Resolver, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { BadRequestException } from '@nestjs/common';
import { User } from '../user/models/user.model';
import { CreateUserInput } from '../user/dto/create-user.input';
import { JwtModel } from 'src/libs/security/jwt';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => JwtModel)
  async login(@Args('input') input: CreateUserInput): Promise<JwtModel> {
    const result = await this.authService.login(input);

    if (result) {
      return result;
    }

    throw new BadRequestException(
      'Could not log-in with the provided credentials',
    );
  }

  @Query(() => JwtModel)
  async register(@Args('user') user: CreateUserInput): Promise<JwtModel> {
    const result = await this.authService.register(user);

    if (result) {
      return result;
    }

    throw new BadRequestException('Could not register');
  }

  @Query(() => User)
  async refreshToken(@Args('token') token: string) {
    return this.authService.refreshToken(token);
  }
}
