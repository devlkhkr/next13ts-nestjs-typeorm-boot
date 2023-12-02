import { DictINF, DictItemINF } from "@/types/sys";
import { api } from "./config";

export function getDictItemsByDictCd(dictCd: string): Promise<{
  title: string;
  message: string;
  data: DictItemINF[];
}> {
  const dictItemList = api(
    "/sys/getDictItemsByDictCd",
    "GET",
    { dictCd: dictCd },
    "no-store"
  );
  return dictItemList;
}
