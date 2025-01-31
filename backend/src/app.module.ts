import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

if (!process.env.MONGO_URI) {
  throw new Error('La variable de entorno MONGO_URI no está definida');
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }



