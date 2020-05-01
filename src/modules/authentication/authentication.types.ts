import { Request } from '@src/types';
import { UserInfoDTO } from '@src/modules/authentication/dto/user-info.dto';

export interface UserRequest extends Request {
  user: UserInfoDTO;
}
