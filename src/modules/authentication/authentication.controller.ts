import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from '@src/types';

import { AuthenticationService } from '@src/modules/authentication/authentication.service';
import { LocalAuthGuard } from '@src/modules/authentication/guards/local-auth.guard';
import { UserRequest } from '@src/modules/authentication/authentication.types';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}
  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: UserRequest, @Res() res: Response) {
    const result = await this.authenticationService.login(req.user);
    res.status(200).send(result);
  }
}
