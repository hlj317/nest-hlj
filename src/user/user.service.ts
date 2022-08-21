import { Injectable,HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,SelectQueryBuilder } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PageDto } from './dto/page.dto';
import { PageResultDto } from "./dto/page-result.dto";
import { FilterDto } from './dto/filter.dto';
// import { RedisCacheService } from '../cache/redisCache.service';

@Injectable()
export class UserService {
  constructor(
    // private readonly redisCacheService: RedisCacheService,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.createTime = createUserDto.updateTime = new Date();
    createUserDto.isDelete = 0;
    createUserDto.sex = 0;
    //把数据先写入到redis中
    // await this.redisCacheService.set("myname",createUserDto.name);
    const _data = await this.userRepository.create(createUserDto);
    return await this.userRepository.save(_data);
  }

  private static getFilterQuery(
    filterDto: FilterDto,
    userQueryBuilder: SelectQueryBuilder<User>
  ): SelectQueryBuilder<User> {
    let userFilterQuery = userQueryBuilder;

    if (filterDto.id !== undefined && filterDto.id !== null) {
        userFilterQuery = userQueryBuilder
        .where('user.id = :id', {
          id: filterDto.id,
        });
    }

    if (filterDto.sex !== undefined && filterDto.sex !== null) {
        userFilterQuery = userFilterQuery
        .andWhere('user.sex = :sex', {
           sex: filterDto.sex,
        });
    }

    if (filterDto.isDelete !== undefined && filterDto.isDelete !== null) {
        userFilterQuery = userFilterQuery
        .andWhere('user.isDelete = :isDelete', {
           isDelete: filterDto.isDelete,
        });
    }

    return userFilterQuery;
  }

  async findAll(pageDto: PageDto, filterDto: FilterDto): Promise<PageResultDto> {
    const skippedItems = (pageDto.page - 1) * pageDto.limit;

    const userQueryBuilder = this.userRepository.createQueryBuilder('user');

    const userFilterQuery = UserService.getFilterQuery(filterDto, userQueryBuilder);

    const user = await userFilterQuery
      .orderBy('id', 'ASC')
      .offset(skippedItems)
      .limit(pageDto.limit)
      .getMany();

    const totalCount = await userFilterQuery
    .orderBy('id', 'ASC')
    .offset(skippedItems)
    .limit(pageDto.limit)
    .getCount();

    return {
      totalCount,
      page: pageDto.page,
      limit: pageDto.limit,
      data: user
    }
  }

  async findOne(id: number) {
    const _data = await this.userRepository.findOneBy({id});
    if (_data) {
        return _data;
    }
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.updateTime = new Date();
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  getName(){
    return "hlj";
  }
}
