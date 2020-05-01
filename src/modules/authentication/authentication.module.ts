import { AUTHENTICATION_JWT_SECRET } from '@src/constants';
import { AuthenticationController } from '@src/modules/authentication/authentication.controller';
import { AuthenticationService } from '@src/modules/authentication/authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@src/modules/authentication/passport/jwt.strategy';
import { LocalStrategy } from '@src/modules/authentication/passport/local.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: AUTHENTICATION_JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule,
    UsersModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy],
})
export class AuthenticationModule {}
