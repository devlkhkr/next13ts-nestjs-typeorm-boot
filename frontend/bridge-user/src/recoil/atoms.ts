import { useEffect, useState } from "react";
import { atom, RecoilState, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const useRecoilSSR = <T>(atom: RecoilState<any>, defaultValue: T) => {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(atom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
};

export const AtomLeftMenuOpen = atom({
  key: "leftMenuOpen",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const AtomDarkMode = atom({
  key: "darkMode",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

type ModalType = {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  callBack?: () => any;
};

export const ModalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
  },
});
