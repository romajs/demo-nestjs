import * as R from 'ramda';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@src/modules/users/models/user.model';
import { UserInfoDTO } from '@src/modules/authentication/dto/user-info.dto';
import { UsersService } from '@src/modules/users/users.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validate(
    username: string,
    password: string,
  ): Promise<UserInfoDTO | null> {
    const user: User = await this.usersService.findOneByUsername(username);
    if (R.pathEq(['password'], password)(user)) {
      return R.pick(['id', 'username'], user);
    }
    return null;
  }

  async login(user: UserInfoDTO) {
    const payload = R.pick(['id', 'username'], user);
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
