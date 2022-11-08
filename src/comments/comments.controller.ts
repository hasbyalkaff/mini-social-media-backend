import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { CommentEntity } from './comment.entity/comment.entity';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private service: CommentsService) {}

    @Get(':content_id')
    getAll(@Param() params){
        return this.service.getComments(params.content_id);
    }

    @Post()
    update(@Body() comment: CommentEntity){
        return this.service.updateComment(comment);
    }
}
