import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
<<<<<<< HEAD

@Module({
  imports: [AdminModule],
=======
import { TeacherModule } from './Teacher/teacher.module';

@Module({
  imports: [AdminModule,TeacherModule],
>>>>>>> d5171c0 (added teacher)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
