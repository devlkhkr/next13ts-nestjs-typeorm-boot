"use client";
import {
  AppBar,
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputBaseComponentProps,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField,
} from "@mui/material";

import Btn from "@/components/atoms/Button";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import { insertPlan } from "@/api/plan";
import { Plan, PlanINF, PlnTypeCd } from "@/types/plan";
import { ChangeEvent, ElementType, useEffect, useState } from "react";
import { DAUMPOSTCODE_THEME } from "@/constants/layout";
import SectionTitle from "@/components/molecules/SectionTitle";
import { useSession } from "next-auth/react";
import { Auth } from "../atoms/Auth";
import Empty from "../templates/Empty";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { getTodayYMD } from "@/util/util";
import { DesktopTimePicker, TimePicker } from "@mui/x-date-pickers";
import { useModal } from "@/hooks/useModal";
import {
  NumberCommaInput,
  NumericInputProps,
} from "../atoms/NumericCommaInput";
import { getDictItemsByDictCd } from "@/api/sys";
import { DictItemINF } from "@/types/sys";
import BattleOptions from "../organisms/BattleOptions";

export default function RegistPlan({ plan }: { plan: PlanINF }) {
  const { data: session } = useSession();
  const { openModal, closeModal } = useModal();
  const [planInfo, setPlanInfo] = useState(
    new Plan({
      ...plan,
      createMbrId: session?.user.id,
      updateMbrId: session?.user.id,
    })
  );
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    getDictItemsByDictCd("pln_type").then((res) => {
      setPlanType(res.data);
    });
  }, []);

  const doUpdatePlan = () => {
    insertPlan(planInfo).then((res) => {
      enqueueSnackbar(res.message, {
        variant: "success",
        autoHideDuration: 1500,
      });
    });
    router.push("/plan/planned");
  };

  const handleAddressComplete = (data: Address) => {
    setPlanInfo(
      (prevPlanInfo) =>
        new Plan({
          ...prevPlanInfo,
          plnRoadAddr: data.roadAddress,
        })
    );
    closeModal();
  };

  const [plnType, setPlanType] = useState<DictItemINF[]>([]);

  const planGanre = [
    {
      name: "BREAKIN",
    },
    {
      name: "POPPIN",
    },
    {
      name: "LOCKIN",
    },
  ];

  return (
    <Auth
      component={
        <Empty
          title={"로그인 하여 플랜을 기획해보세요!"}
          message={`배틀, 레슨, 세션 등 다양한 플랜을 기획하고 간편하게 관리할 수 있습니다.`}
          btnTitle="로그인하기"
          btnLinkHref="/api/auth/signin"
        />
      }
    >
      <form onSubmit={doUpdatePlan}>
        <Stack spacing={4} sx={{ width: "100%" }}>
          <SectionTitle label={"플랜 기본정보"} />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              플랜 타입
            </FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              defaultValue={plan.plnTypeCd || "BTTL"}
              onChange={(e) => {
                setPlanInfo(
                  (prevPlanInfo) =>
                    new Plan({
                      ...prevPlanInfo,
                      plnTypeCd: e.target.value as PlnTypeCd,
                    })
                );
              }}
            >
              {plnType ? (
                plnType.map((type, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={type.dictItemCd}
                      control={<Radio />}
                      label={type.dictItemTxt}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </RadioGroup>
          </FormControl>

          <TextField
            required
            label="플랜명"
            variant="outlined"
            defaultValue={planInfo.plnNm}
            error={planInfo.plnNm === "" ? true : false}
            onChange={(e) => {
              setPlanInfo(
                (prevPlanInfo) =>
                  new Plan({
                    ...prevPlanInfo,
                    plnNm: e.target.value,
                  })
              );
            }}
          />

          <Autocomplete
            multiple
            id="tags-standard"
            options={planGanre}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="장르" required />
            )}
          />

          <TextField
            required
            label="플랜설명"
            variant="outlined"
            defaultValue={planInfo.plnDsc}
            multiline
            onChange={(e) => {
              setPlanInfo(
                (prevPlanInfo) =>
                  new Plan({
                    ...prevPlanInfo,
                    plnDsc: e.target.value,
                  })
              );
            }}
          />
          <TextField
            required
            label="입장 가능한 관객 수"
            inputProps={NumericInputProps}
            defaultValue={planInfo.plnMaxCrwd || ""}
            InputProps={{
              endAdornment: <InputAdornment position="end">명</InputAdornment>,
              inputComponent:
                NumberCommaInput as ElementType<InputBaseComponentProps>,
            }}
            onChange={(e) => {
              setPlanInfo(
                (prevPlanInfo) =>
                  new Plan({
                    ...prevPlanInfo,
                    plnMaxCrwd: parseInt(e.target.value.replaceAll(",", "")),
                  })
              );
            }}
          />
          <TextField
            required
            label="입장료"
            inputProps={NumericInputProps}
            defaultValue={planInfo.plnEntrFee || ""}
            InputProps={{
              endAdornment: <InputAdornment position="end">원</InputAdornment>,
              inputComponent:
                NumberCommaInput as ElementType<InputBaseComponentProps>,
            }}
            onChange={(e) => {
              setPlanInfo(
                (prevPlanInfo) =>
                  new Plan({
                    ...prevPlanInfo,
                    plnEntrFee: parseInt(e.target.value.replaceAll(",", "")),
                  })
              );
            }}
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked={planInfo.rRatedYn === "N" || false}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  planInfo.rRatedYn = event.target.checked ? "N" : "Y";
                }}
              />
            }
            label="청소년 입장/참가 불가"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="플랜 날짜"
              format="YYYY년 MM월 DD일"
              defaultValue={dayjs(planInfo.plnDt) || dayjs(getTodayYMD())}
              value={dayjs(planInfo.plnDt) || dayjs(getTodayYMD())}
              onChange={(value) => {
                if (value) {
                  setPlanInfo(
                    (prevPlanInfo) =>
                      new Plan({
                        ...prevPlanInfo,
                        plnDt: `${value.year()}/${
                          value.month() + 1
                        }/${value.date()}`,
                      })
                  );
                }
              }}
            />
          </LocalizationProvider>

          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopTimePicker
                sx={{
                  width: "100%",
                }}
                label="플랜 시작 시간"
                ampm={false}
                defaultValue={dayjs(`${planInfo.plnDt} ${planInfo.plnStTm}`)}
                onChange={(value) => {
                  if (value) {
                    setPlanInfo(
                      (prevPlanInfo) =>
                        new Plan({
                          ...prevPlanInfo,
                          plnStTm: `${value.hour()}:${value.minute()}:00`,
                        })
                    );
                  }
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopTimePicker
                sx={{
                  width: "100%",
                }}
                label="플랜 종료 시간"
                ampm={false}
                defaultValue={dayjs(`${planInfo.plnDt} ${planInfo.plnEndTm}`)}
                onChange={(value) => {
                  if (value) {
                    setPlanInfo(
                      (prevPlanInfo) =>
                        new Plan({
                          ...prevPlanInfo,
                          plnEndTm: `${value.hour()}:${value.minute()}:00`,
                        })
                    );
                  }
                }}
              />
            </LocalizationProvider>
          </div>

          {planInfo.plnTypeCd === "BTTL" ? (
            <>
              <SectionTitle label={"배틀 정보"} />
              <TextField
                required
                label="총 상금"
                inputProps={NumericInputProps}
                defaultValue={planInfo.plnRwrd || ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">원</InputAdornment>
                  ),
                  inputComponent:
                    NumberCommaInput as ElementType<InputBaseComponentProps>,
                }}
                onChange={(e) => {
                  setPlanInfo(
                    (prevPlanInfo) =>
                      new Plan({
                        ...prevPlanInfo,
                        plnRwrd: parseInt(e.target.value.replaceAll(",", "")),
                      })
                  );
                }}
              />
              <TextField
                required
                label="배틀 룰"
                variant="outlined"
                defaultValue={planInfo.plnRule}
                multiline
                rows={4}
                onChange={(e) => {
                  setPlanInfo(
                    (prevPlanInfo) =>
                      new Plan({
                        ...prevPlanInfo,
                        plnRule: e.target.value,
                      })
                  );
                }}
              />
              <BattleOptions />
            </>
          ) : (
            <></>
          )}
          {/* S : 주소 */}
          <SectionTitle label={"주소 정보"} />
          <TextField
            required
            label="장소명"
            variant="outlined"
            defaultValue={planInfo.plnLctnNm}
            onChange={(e) => {
              setPlanInfo(
                (prevPlanInfo) =>
                  new Plan({
                    ...prevPlanInfo,
                    plnLctnNm: e.target.value,
                  })
              );
            }}
          />
          <TextField
            required
            label="주소"
            variant="outlined"
            value={planInfo.plnRoadAddr}
            onChange={(e) => {
              setPlanInfo(
                (prevPlanInfo) =>
                  new Plan({
                    ...prevPlanInfo,
                    plnRoadAddr: e.target.value,
                  })
              );
            }}
            inputProps={{ readOnly: true }}
            onClick={() => {
              openModal({
                title: "주소 검색",
                content: (
                  <>
                    <DaumPostcodeEmbed
                      onComplete={handleAddressComplete}
                      theme={DAUMPOSTCODE_THEME}
                    />
                  </>
                ),
              });
            }}
          />
          <TextField
            required
            label="주소 상세"
            variant="outlined"
            defaultValue={planInfo.plnAddrDtl}
            onChange={(e) => {
              setPlanInfo(
                (prevPlanInfo) =>
                  new Plan({
                    ...prevPlanInfo,
                    plnAddrDtl: e.target.value,
                  })
              );
            }}
          />
          {/* E : 주소 */}
          <Btn label={"완료"} onClick={doUpdatePlan} />
          {/* <Button type="submit">완료</Button> */}
        </Stack>
      </form>
    </Auth>
  );
}
