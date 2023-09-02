"use client";
import PlanCard from "../organisms/PlanCard";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { plan } from "@/types/plan";

export default function PlanSlider({ planList }: { planList: plan[] }) {
  return (
    <Flicking
      align="prev"
      circular={true}
      moveType={"freeScroll"}
      onMoveEnd={(e) => {
        console.log(e);
      }}
    >
      {planList.map((plan, index) => {
        return (
          <div style={{ margin: "0 4px" }} key={index}>
            <PlanCard plan={plan} />
          </div>
        );
      })}
    </Flicking>
  );
}
