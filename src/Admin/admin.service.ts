import { Injectable } from "@nestjs/common";
import { AdminDto } from "./admin.dto";

@Injectable()
export class AdminService{
    getAdmin():string{
        return "Admin Service Running";
    }

    getAdminbyId(AdminId:number):string{
        return "Admin Id:" + AdminId;
    }

    // createAdmin():string{
    //     return "New Admin Created";
    // }


    createAdmin(createAdmin:AdminDto){
        return createAdmin;
    }
}