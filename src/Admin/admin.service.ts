import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService{
    getAdmin():string{
        return "Admin Service Running";
    }

    getAdminbyId(AdminId:number):string{
        return "Admin Id:" + AdminId;
    }

    createAdmin():string{
        return "New Admin Created";
    }
}