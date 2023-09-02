import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlnEntity } from 'src/entities/plan.entity';
import { planList } from 'src/types/plan';

import { Repository } from 'typeorm';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(PlnEntity)
    private readonly plnRepository: Repository<PlnEntity>,
  ) {}

  getAllPlan(): Promise<PlnEntity[]> {
    return this.plnRepository.find();
  }

  getPlan(): planList[] {
    const plan: planList[] = [
      {
        planName: '2015 R16 World Bboy Championships',
        url: 'https://hiphopkr.com/wp-content/uploads/2015/09/R16-POSTER_ELIMINATION_BBOY-SOLO.jpg',
        location: '광나루 올림픽 체육관',
        planStartDt: new Date().getTime(),
      },
      {
        planName: 'World Bboy Battle #1',
        url: 'https://i.pinimg.com/originals/e0/a4/1f/e0a41fd3881177e142b36032a2225b3d.jpg',
        location: '고속터미널 예술의 전당',
        planStartDt: new Date().getTime(),
      },
      {
        planName: '2019 라인업 배틀',
        url: 'https://cdn.fieldnews.co.kr/news/thumbnail/201905/38512_37372_3844_v150.jpg',
        location: '구로 청소년수련관',
        planStartDt: new Date().getTime(),
      },
      {
        planName: 'Floor Wars 2011',
        url: 'https://i.pinimg.com/1200x/c4/d2/52/c4d2523ec23387189c0ffc8ff963721a.jpg',
        location: '서울예술종합학교',
        planStartDt: new Date().getTime(),
      },
      {
        planName: '횡성 전국 힙합댄스 경연대회',
        url: 'https://cdn.imweb.me/upload/S201804195ad770d5e1ba7/72146988a0363.jpg',
        location: '횡성 종합 체육관',
        planStartDt: new Date().getTime(),
      },
      {
        planName: 'BBIC 2023',
        url: 'https://cdn.and8.dance/gfx/poster/1/1225/4401.jpg?2',
        location: '부천역 마루광장',
        planStartDt: new Date().getTime(),
      },
      {
        planName: 'Korea Battle Pro',
        url: 'https://www.cinecafe.kr/files/attach/images/28799/733/179/f02e589fdcc6434c07d3148d264e903f.jpg',
        location: '영등포 타임스퀘어',
        planStartDt: new Date().getTime(),
      },
      {
        planName: 'Sky Festival',
        url: 'https://cdn.gukjenews.com/news/photo/202209/2543160_2545660_5633.jpg',
        location: '광진 청소년수련관',
        planStartDt: new Date().getTime(),
      },
      {
        planName: '2022 전국 스트리트 댄스대회 정점 vol.10',
        url: 'https://cdn.sisafact.kr/news/photo/202210/29018_32323_3543.jpg',
        location: '일산시 문화회관',
        planStartDt: new Date().getTime(),
      },
    ];
    return plan;
  }
}
