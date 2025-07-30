import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getAdmin(): string {
    return this.adminService.getAdmin();
  }

  @Get('/:id')
  getAdminById(@Param('id', ParseIntPipe) adminId: number): string {
    return this.adminService.getAdminbyId(adminId);
  }

  @Post('upload')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(pdf)$/i)) {
          cb(null, true);
        } 
        else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'Accepts Only PDF'), false);
        }
      },
      limits: { fileSize: 1048576*10 }, // 10MB
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname);
        },
      }),
    }),
  )
  createAdmin(
    @Body() adminDto: AdminDto,
    @UploadedFile() file: Express.Multer.File) 
    {
    adminDto.acCalendar = file.filename;
    return this.adminService.createAdmin(adminDto);
    }
}