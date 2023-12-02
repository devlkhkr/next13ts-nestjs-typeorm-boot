import { BttlOpts } from "@/types/battleOptions";
import {
  InputAdornment,
  InputBaseComponentProps,
  Paper,
  Select,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { ElementType, useState } from "react";
import {
  NumberCommaInput,
  NumericInputProps,
} from "../atoms/NumericCommaInput";

const BattleOptions = (bttlOpts: BttlOpts) => {
  const { data: session } = useSession();
  const [battleOptsInfo, setBattleOptsInfo] = useState(
    new BttlOpts({
      ...bttlOpts,
      createMbrId: session?.user.id,
      updateMbrId: session?.user.id,
    })
  );
  return (
    <Paper variant="outlined" sx={{ padding: "16px" }}>
      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">장르 선택</InputLabel>
          <Select
            label="장르 선택"
            value={battleOptsInfo.bttlGnrCd || ""}
            onChange={(e) => {
              setBattleOptsInfo(
                new BttlOpts({
                  ...battleOptsInfo,
                  bttlGnrCd: e.target.value,
                })
              );
            }}
          >
            <MenuItem value={"BRK"}>BREAKIN</MenuItem>
            <MenuItem value={"PP"}>POPPIN</MenuItem>
            <MenuItem value={"LCK"}>LOCKIN</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          label="팀 최대 정원"
          inputProps={NumericInputProps}
          defaultValue={battleOptsInfo.bttlMbrCnt || null}
          InputProps={{
            endAdornment: <InputAdornment position="end">원</InputAdornment>,
            inputComponent:
              NumberCommaInput as ElementType<InputBaseComponentProps>,
          }}
          onChange={(e) => {
            console.log(e);
          }}
        />
        <TextField
          required
          label="참가 예매 금액"
          inputProps={NumericInputProps}
          defaultValue={battleOptsInfo.bttlRsvFee || null}
          InputProps={{
            endAdornment: <InputAdornment position="end">원</InputAdornment>,
            inputComponent:
              NumberCommaInput as ElementType<InputBaseComponentProps>,
          }}
          onChange={(e) => {
            console.log(e);
          }}
        />
        <FormLabel id="demo-row-radio-buttons-group-label">
          믹시드 여부
        </FormLabel>
        <RadioGroup
          row
          name="mxdYn"
          defaultValue={battleOptsInfo.mxdYn || "N"}
          onChange={(e) => {
            console.log(e);
          }}
        >
          <FormControlLabel value={"Y"} control={<Radio />} label={"예"} />
          <FormControlLabel value={"N"} control={<Radio />} label={"아니오"} />
        </RadioGroup>
        <RadioGroup
          row
          name="bttlOtdYn"
          defaultValue={battleOptsInfo.otdYn || "N"}
          onChange={(e) => {
            console.log(e);
          }}
        >
          <FormControlLabel value={"Y"} control={<Radio />} label={"가능"} />
          <FormControlLabel value={"N"} control={<Radio />} label={"불가능"} />
        </RadioGroup>
      </Stack>
    </Paper>
  );
};

export default BattleOptions;
