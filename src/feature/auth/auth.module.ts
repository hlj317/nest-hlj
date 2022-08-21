import { Module } from '@nestjs/common';
import { UserModule } from '../../user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { RedisCacheModule } from '../../cache/redisCache.module';

@Module({
  imports: [
    UserModule
    // RedisCacheModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
