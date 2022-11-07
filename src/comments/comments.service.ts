import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { CommentEntity } from './comment.entity/comment.entity';

@Injectable()
export class CommentsService {
    constructor(@InjectRepository(CommentEntity) private commentRepository: Repository<CommentEntity>) {}

    async getComments(_content_id: number): Promise<CommentEntity[]> {
        return await this.commentRepository.find({
            select: ["created_at", "user_id", "comment"],
            where: [{ "content_id": _content_id}]
        });
    }

    async updateComment(comment: CommentEntity) {
        this.commentRepository.save(comment);
    }
}
