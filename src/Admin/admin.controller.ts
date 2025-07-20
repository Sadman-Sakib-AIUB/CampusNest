import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('admin')
export class AdminController{
    constructor(private readonly adminService: AdminService){}

    @Get()
    getAdmin():string{
        return this.adminService.getAdmin();
    }

    @Get("/:id")
    getAdminById(@Param('id', ParseIntPipe) adminId: number):string{
        return this.adminService.getAdminbyId(adminId);
    }

}

