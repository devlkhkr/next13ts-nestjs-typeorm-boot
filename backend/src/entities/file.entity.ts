import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("s3_file")
export class FileEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid", { comment: "플랜 id" })
  id: string;

  @Column({ type: "varchar", length: 1000, comment: "url" })
  url;

  @Column({ type: "varchar", length: 100, comment: "파일그룹아이디" })
  fileGrpId;

  @Column({ type: "varchar", length: 100, comment: "파일 종류" })
  fileType;

  @Column({ type: "int", comment: "파일그룹아이디" })
  sort;

  @CreateDateColumn({ type: "datetime", comment: "데이터 생성 일시" })
  createStmp;

  @Column({ type: "varchar", length: 100, comment: "데이터 생성자 아이디" })
  createMbrId;

  @UpdateDateColumn({ type: "datetime", comment: "데이터 수정 일시" })
  updateStmp;

  @Column({ type: "varchar", length: 100, comment: "데이터 수정자 아이디" })
  updateMbrId;
}
