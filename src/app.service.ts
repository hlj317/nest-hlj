import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello hlj!';
  }
  getAdmin(): string {
    return '恭喜进入后台！';
  }
}
