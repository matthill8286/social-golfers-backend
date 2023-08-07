import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';

/** Libs Imports **/
import { EncryptionService } from '../../libs/security/encryption';
import { JwtModel, JwtService, JwtType } from '../../libs/security/jwt/index';

/** Cross-Module Imports **/
import { User } from '../user/models/user.model';
import { UserService } from '../user/user.service';
import { CreateUserInput } from '../user/dto/create-user.input';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private _userService: UserService,
  ) {}

  async register(input: CreateUserInput): Promise<JwtModel> {
    const password = await EncryptionService.hashPassword(input.password);

    const user = await this._userService.createUser({
      email: input.email,
      password,
    });

    this.logger.log(password);

    return this.jwtService.generateJwt({
      id: user._id,
      type: JwtType.AppLogin,
    });
  }

  async login(input: CreateUserInput): Promise<JwtModel> {
    const user = await this.getAuthenticatedUser(input);

    return {
      ...this.jwtService.generateJwt({
        id: user._id,
        type: JwtType.AppLogin,
      }),
    };
  }

  public async getAuthenticatedUser(input: CreateUserInput): Promise<User> {
    try {
      const user = await this._userService.findUserByEmail(
        input.email.toLowerCase(),
      );

      if (
        !(await EncryptionService.validatePassword(
          input.password,
          user.password,
        ))
      ) {
        throw new UnauthorizedException();
      }

      user.password = undefined;
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  refreshToken(token: string): JwtModel {
    return this.jwtService.refreshToken(token);
  }
}
