import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum AdminStatus{
  ACTIVE = "active",
  INACTIVE = "inactive"
}

@Entity('admin')
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:100})
  fullname: string;

  @Column({unique:true})
  username:string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({type:"int",unsigned:true})
  age: number;

  @Column({ type: 'enum', enum: AdminStatus, default:AdminStatus.ACTIVE })
  status: AdminStatus;

  @Column({ nullable: true })
  acCalendar: string;

}
