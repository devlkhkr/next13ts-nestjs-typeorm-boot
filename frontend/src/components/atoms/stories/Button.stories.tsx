import React from "react";
import { Meta, Story } from "@storybook/react";
import Btn, { ButtonProps } from "../Button";
import { action } from "@storybook/addon-actions"; // 액션 함수 불러오기

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

export const Customized = Template.bind({});
Customized.args = {
  label: "Customized Button",
};
