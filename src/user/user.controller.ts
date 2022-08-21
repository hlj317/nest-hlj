import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe,Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PageDto } from './dto/page.dto';
import { FilterDto } from './dto/filter.dto';
import { PageResultDto } from './dto/page-result.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/add')
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll(
    @Query() pageDto: PageDto,
    @Query() filterDto: FilterDto
  ): Promise<PageResultDto> {
    pageDto.page = pageDto.page ? Number(pageDto.page) : 1;
    pageDto.limit = pageDto.limit ? Number(pageDto.limit) : 10;
    return this.userService.findAll(
    {
        ...pageDto,
        limit: pageDto.limit > 10 ? 10 : pageDto.limit
    },filterDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
