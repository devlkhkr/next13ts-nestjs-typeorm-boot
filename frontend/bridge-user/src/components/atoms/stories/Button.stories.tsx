import React from "react";
import { Meta, Story } from "@storybook/react";
import Btn, { ButtonProps } from "../Button";
import { action } from "@storybook/addon-actions"; // 액션 함수 불러오기
import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";

export default {
  title: "Atoms/Button", // 스토리 북에서 표시될 제목
  component: Btn, // 스토리를 생성할 컴포넌트 선택
  argTypes: { onClick: { action: "buttonClick" } },
} as Meta;

// Template을 위한 버튼 컴포넌트 스토리 생성
const Template: Story<ButtonProps> = (args) => <Btn {...args} />;

// 각각의 스토리에 대한 인스턴스 생성
export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  onClick: () => {
    action("click!");
  },
};

//인터렉션 테스트
export const Interaction = Template.bind({});
Interaction.args = {
  label: "Interaction Button",
  onClick: () => {},
};

Interaction.play = async ({ canvasElement }) => {
  // 직접 screen API를 쓸 수도 있지만 스토리북에서는 within(canvasElement) 로 캔버스를 가져올 것을 권장한다.
  const canvas = within(canvasElement);

  await waitFor(() => {
    expect(canvas.queryByText("Interaction Button")).toBeInTheDocument();
  });

  const buttonClickTest = canvas.getByRole("button", {
    name: "Interaction Button",
  });

  userEvent.click(buttonClickTest);
};

export const Customized = Template.bind({});
Customized.args = {
  label: "Customized Button",
};
