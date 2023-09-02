import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from 'src/entities/file.entity';
import { response } from 'src/types/response';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  getFileListByGrpId(fileGripId: string): response<Promise<FileEntity[]>> {
    const files = this.fileRepository.find({
      where: { fileGrpId: fileGripId },
    });
    const res = {
      message: 'fileGrpId로 검색된 파일 리스트',
      data: files,
      status: 200,
    };
    return res;
  }
}
