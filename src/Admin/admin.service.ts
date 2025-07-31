import { Injectable, NotFoundException } from "@nestjs/common";
import { AdminDto, UpdateStatusDto } from "./admin.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MoreThan, Repository } from "typeorm";
import { AdminEntity, AdminStatus } from "./admin.entity";

@Injectable()
export class AdminService{

    constructor(@InjectRepository(AdminEntity) private adminRepository:Repository<AdminEntity> ){}

    // ---------------------------------- Create Admin ------------------------------------------
    createAdmin(adminDto:AdminDto){
        return this.adminRepository.save(adminDto)
    }

    // --------------------------------- Get All Admin -------------------------------------------
    getAllAdmin(){
        return this.adminRepository.find()
    }

    // ---------------------------------- Update Admin Status -------------------------------------
    async updateStatus(id:number,updateStatusDto:UpdateStatusDto){
        const admin = await this.adminRepository.findOne({where:{id}})

        if(!admin){
            throw new NotFoundException(`Admin with Id ${id} not found`);
        }

        admin.status = updateStatusDto.status;
        return await this.adminRepository.save(admin)
    }

    // ----------------------------------- Get inactive Admins --------------------------------------

    async getInactiveAdmins() {
        return await this.adminRepository.find({
            where: { status: AdminStatus.INACTIVE },
    })

    }


    // ----------------------------------- Get Admin based on Age ----------------------------------

    async getUsersOlderThan(age: number) {
        return await this.adminRepository.find({
        where: {age: MoreThan(age),},
        });
    }






    getAdmin():string{
        return "Admin Service Running";
    }

    getAdminbyId(AdminId:number):string{
        return "Admin Id:" + AdminId;
    }

    // createAdmin():string{
    //     return "New Admin Created";
    // }


    // createAdmin(createAdmin:AdminDto){
    //     return createAdmin;
    // }

}