"use client";
import { Plan } from "@/types/plan";
import {
  Button,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Link from "next/link";

const TableSktnStyle = {
  ".MuiSkeleton-root": {
    display: "inline-block",
  },
};

export function PlanTableSktn() {
  return (
    <TableContainer component={Paper} sx={TableSktnStyle}>
      <Table>
        <TableBody>
          {Array.from({ length: 3 }).map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell width={160}>
                  <Skeleton variant="rounded" width={80} height={100} />
                </TableCell>
                <TableCell>
                  <div>
                    <Skeleton variant="text" width={320} />
                  </div>
                  <div>
                    <Skeleton variant="text" width={156} />
                    <Skeleton
                      variant="text"
                      width={156}
                      sx={{ marginLeft: "8px" }}
                    />
                  </div>
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="rounded" width={80} height={40} />
                  <Skeleton
                    variant="rounded"
                    width={80}
                    height={40}
                    sx={{ marginLeft: "8px" }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function PlanTable({ plans }: { plans: Plan[] }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {plans.length ? (
            plans.map((plan, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width={160}>
                  <img
                    src="https://i.pinimg.com/1200x/c4/d2/52/c4d2523ec23387189c0ffc8ff963721a.jpg"
                    width={80}
                    height={100}
                  />
                </TableCell>
                <TableCell>
                  <div>{plan.plnNm}</div>
                  <div>
                    {plan.plnLctnNm} | {plan.plnDt}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <Button>오픈하기</Button>
                  <Link href={`/plan/regist/${plan.id}`}>
                    <Button>수정</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" height={140}>
                기획한 플랜이 없습니다.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
