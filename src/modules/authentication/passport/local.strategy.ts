import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthenticationService } from '@src/modules/authentication/authentication.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserInfoDTO } from '../dto/user-info.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserInfoDTO> {
    const user = await this.authenticationService.validate(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
