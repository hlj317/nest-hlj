import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    sex: number;

    @Column()
    createTime: Date;

    @Column()
    updateTime: Date;

    @Column()
    isDelete: number;
}
