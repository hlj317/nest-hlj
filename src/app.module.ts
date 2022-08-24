import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { ConfigModule } from './config/config.module';
import { FeatureModule } from './feature/feature.module';
import { AuthenticationMiddleware } from "./middleware/authentication.middleware";
import { DatabaseModule } from './database/database.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    NotesModule,
    ConfigModule,
    FeatureModule,
    DatabaseModule,
    HomeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
//使用中间件
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthenticationMiddleware)
        .forRoutes('user','notes');    //只对user路径的路由生效，多个路由用逗号隔开
     }
}