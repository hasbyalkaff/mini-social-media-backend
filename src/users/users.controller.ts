import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UserEntity } from './user.entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Get(':id')
    get(@Param() params){
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: UserEntity){
        // return this.service.createUser(user);
        return true;
    }

    @Put()
    update(@Body() user: UserEntity) {
        return this.service.updateUser(user);
    }

    @Delete()
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
