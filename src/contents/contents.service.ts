import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { ContentEntity } from './content.entity/content.entity';

@Injectable()
export class ContentsService {
    constructor(@InjectRepository(ContentEntity) private contentRepository: Repository<ContentEntity>){}

    async getContents(): Promise<ContentEntity[]> {
        return await this.contentRepository.find();
    }

    async updateContent(content: ContentEntity) {
        this.contentRepository.save(content);
    }

    async getOneContent(_id: number): Promise<ContentEntity[]> {
        return await this.contentRepository.find({
            select: ["created_at", "image", "caption"],
            where: [{ "id": _id}]
        });
    }
}
