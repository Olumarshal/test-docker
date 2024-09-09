import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Directly use the .env variable
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
