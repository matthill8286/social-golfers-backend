import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

/** Cross-Module Imports **/
import { User } from 'src/modules/user/models/user.model';

/** Local Imports **/
import { AuthService } from '../auth.service';
import { CreateUserInput } from 'src/modules/user/dto/create-user.input';

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(input: CreateUserInput): Promise<User> {
    const account = await this.authService.getAuthenticatedUser(input);

    if (!account) {
      throw new UnauthorizedException();
    }

    return account;
  }
}
