import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ContentEntity } from './content.entity/content.entity';
import { ContentsService } from './contents.service';

@Controller('contents')
export class ContentsController {
    constructor(private service: ContentsService) {}

    // get all - insert new - find (id)
    @Get()
    getAll(@Param() params){
        return this.service.getContents();
    }

    @Put()
    update(@Body() content: ContentEntity){
        return this.service.updateContent(content);
    }

    @Get(':id')
    get(@Param() params){
        return this.service.getOneContent(params.id);
    }
}
