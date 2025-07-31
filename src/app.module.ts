import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
import { TeacherModule } from './Teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AdminModule,TeacherModule, TypeOrmModule.forRoot(
    {
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'manage',
      database:'campusNest',
      autoLoadEntities:true,
      synchronize:true,
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
