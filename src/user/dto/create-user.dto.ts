import{ MinLength } from 'class-validator';
export class CreateUserDto {

    @MinLength(2,{
        message:'长度不能小于2'
    })
    name: string;
    
    password: string;

    sex:number;
    
    createTime: Date;
    
    updateTime: Date;
    
    isDelete: number;      
}
