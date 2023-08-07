import { PassportModule } from '@nestjs/passport';
import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtAuthGuardName } from './constants';
import { JwtAuthStrategy, LocalAuthStrategy } from './strategies';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from 'src/libs/security/jwt';

@Module({
  imports: [
    JwtModule,
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: [JwtAuthGuardName] }),
  ],
  providers: [AuthService, AuthResolver, JwtAuthStrategy, LocalAuthStrategy],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
