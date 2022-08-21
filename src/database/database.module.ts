import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import customConfig from '../config';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true, // 作用于全局
        load: [customConfig], // 加载自定义配置项
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService], 
      useFactory: (configService: ConfigService) => configService.get('DATABASE_CONFIG')
    }),
  ],
})
export class DatabaseModule {}