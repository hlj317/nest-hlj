import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as ejsMate from 'ejs-mate';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const env = process.env.NODE_ENV || 'development';
  // 设置静态资源目录
  if(env === "development"){
    app.useStaticAssets(join(__dirname,'..','vue/dist'));
  }else{
    app.useStaticAssets(join(__dirname,'..','../vue/dist'));
  }
  // 获取根目录 nest-cnode
  const rootDir = join(__dirname, '..');
  // 指定视图引擎 处理.html后缀文件
  app.engine('html', ejsMate);
  // 视图引擎
  app.set('view engine', 'html');
  // 配置模板（视图）的基本目录
  if(env === "development"){
    app.setBaseViewsDir(join(rootDir, 'vue/dist/pages'));
  }else{
    app.setBaseViewsDir(join(rootDir, '../vue/dist/pages'));
  }
  //开启跨域
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
