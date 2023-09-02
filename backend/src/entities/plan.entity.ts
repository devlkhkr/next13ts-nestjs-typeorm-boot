import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pln')
export class PlnEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: '플랜 id' })
  id: string;

  @Column({ type: 'varchar', length: 100, comment: '플랜명' })
  plnNm;

  @Column({ type: 'varchar', length: 10, comment: '플랜타입' })
  plnTypeCd;

  @Column({ type: 'timestamp', comment: '플랜시작일시' })
  plnStStmp;

  @Column({ type: 'varchar', length: 100, comment: '장소명' })
  plnLctnNm;

  @Column({ type: 'decimal', precision: 17, scale: 14, comment: '장소경도' })
  plnLctnX;

  @Column({ type: 'decimal', precision: 17, scale: 14, comment: '장소위도' })
  plnLctnY;

  @Column({ type: 'varchar', length: 1000, comment: '플랜소개' })
  plnDsc;

  @Column({ type: 'varchar', length: 1000, comment: '플랜 룰' })
  plnRule;

  @Column({ type: 'int', comment: '총 상금' })
  plnRwrd;

  @Column({ type: 'int', comment: '최대 관람객 수' })
  plnMaxCrwd;

  @Column({ type: 'int', comment: '관람예매금액' })
  plnEntrFee;

  @Column({ type: 'int', comment: '참가신청금액' })
  plnJoinFee;

  @Column({
    type: 'varchar',
    length: 1,
    comment: '청소년 관람 및 참가 불가 여부',
  })
  rRatedYn;

  @Column({
    type: 'varchar',
    length: 100,
    comment: '파일그룹 아이디',
  })
  fileGrpId;

  @CreateDateColumn({ type: 'datetime', comment: '데이터 생성 일시' })
  createStmp;

  @Column({ type: 'varchar', length: 100, comment: '데이터 생성자 아이디' })
  createMbrId;

  @UpdateDateColumn({ type: 'datetime', comment: '데이터 수정 일시' })
  updateStmp;

  @Column({ type: 'varchar', length: 100, comment: '데이터 수정자 아이디' })
  updateMbrId;
}
