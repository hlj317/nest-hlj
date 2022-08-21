import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisCacheService } from './redisCache.service';
import customConfig from '../config';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true, // 作用于全局
        load: [customConfig], // 加载自定义配置项
    }),
    CacheModule.registerAsync({
      inject: [ConfigService], 
      useFactory: (configService: ConfigService) => configService.get('REDIS_CONFIG')
    })
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService]
})
export class RedisCacheModule {}