"use client";
import { ModalState } from "@/recoil/atoms";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

type OpenModalType = {
  title: string;
  content: JSX.Element | string;
  callback?: () => any;
};

export const useModal = () => {
  const [modalState, setModalState] = useRecoilState(ModalState);

  useEffect(() => {
    modalState.isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [modalState]);

  const closeModal = useCallback(
    () =>
      setModalState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [modalState]
  );

  const openModal = useCallback(
    ({ callback, content, title }: OpenModalType) =>
      setModalState({
        callBack: callback,
        content: content,
        isOpen: true,
        title: title,
      }),
    [modalState]
  );

  return { modalState, closeModal, openModal };
};
