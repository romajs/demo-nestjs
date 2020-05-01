import { IsNotEmpty } from 'class-validator';

export class UserInfoDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;
}
