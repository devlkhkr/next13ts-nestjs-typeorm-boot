import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";
import { CommonEntity } from "../../config/entities/common.entity";

@ObjectType()
@Entity("pln")
export class PlnEntity extends CommonEntity {
  @Field(() => String)
  @Column({ type: "varchar", length: 100, comment: "플랜명" })
  plnNm;

  @Field(() => String)
  @Column({ type: "varchar", length: 10, comment: "플랜타입" })
  plnTypeCd;

  @Field(() => Int)
  @Column({ type: "int", comment: "플랜시작일시" })
  plnStStmp;

  @Field(() => String)
  @Column({ type: "varchar", length: 100, comment: "장소명" })
  plnLctnNm;

  @Field(() => String)
  @Column({ type: "varchar", length: 100, comment: "도로명 주소" })
  plnRoadAddr;

  @Field(() => String)
  @Column({ type: "varchar", length: 1000, comment: "상세 주소" })
  plnAddrDtl;

  @Field(() => String)
  @Column({ type: "varchar", length: 1000, comment: "플랜소개" })
  plnDsc;

  @Field(() => String)
  @Column({ type: "varchar", length: 1000, comment: "플랜 룰" })
  plnRule;

  @Field(() => Int)
  @Column({ type: "int", comment: "총 상금" })
  plnRwrd;

  @Field(() => Int)
  @Column({ type: "int", comment: "최대 관람객 수" })
  plnMaxCrwd;

  @Field(() => Int)
  @Column({ type: "int", comment: "관람예매금액" })
  plnEntrFee;

  @Field(() => Int)
  @Column({ type: "int", comment: "참가신청금액" })
  plnJoinFee;

  @Field(() => String)
  @Column({
    type: "varchar",
    length: 1,
    comment: "청소년 관람 및 참가 불가 여부",
  })
  rRatedYn;

  @Field(() => String)
  @Column({
    type: "varchar",
    length: 100,
    comment: "파일그룹 아이디",
  })
  fileGrpId;
}
