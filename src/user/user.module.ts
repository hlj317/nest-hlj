import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RedisCacheModule } from '../cache/redisCache.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RedisCacheModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
