import { Field, Int, ObjectType } from "@nestjs/graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
export class CommonEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid", { comment: "id" })
  id: string;

  @Field(() => Int)
  @Column({ type: "int", comment: "정렬", nullable: true })
  sort;

  @Field(() => String)
  @Column({ type: "varchar", length: 1, comment: "삭제여부", default: 'N' })
  delYn;

  @Field(() => String)
  @CreateDateColumn({ type: "datetime", comment: "데이터 생성 일시" })
  createStmp;

  @Field(() => String)
  @Column({ type: "varchar", length: 100, comment: "데이터 생성자 아이디" })
  createMbrId;

  @Field(() => String)
  @UpdateDateColumn({ type: "datetime", comment: "데이터 수정 일시" })
  updateStmp;

  @Field(() => String)
  @Column({ type: "varchar", length: 100, comment: "데이터 수정자 아이디" })
  updateMbrId;
}
