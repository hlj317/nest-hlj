import {User} from '../entities/user.entity';

export class PageResultDto {
  data: User[];
  page: number;
  limit: number;
  totalCount: number;
}