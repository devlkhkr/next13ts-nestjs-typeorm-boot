import { Meta, Story } from "@storybook/react";
import TextInput, { TextFieldProps } from "../TextField";

export default {
  title: "Atoms/TextField", // 스토리 북에서 표시될 제목
  component: TextInput, // 스토리를 생성할 컴포넌트 선택
  // args: {
  //   prop1: "outlined",
  //   prop2: "filled",
  //   prop3: "standard",
  // },
  // argTypes: {
  //   prop1: { control: "select", options: ["Option 1", "Option 2"]},
  // }
} as Meta;

// Template을 위한 버튼 컴포넌트 스토리 생성
const Template: Story<TextFieldProps> = (args) => <TextInput {...args} />;

// 각각의 스토리에 대한 인스턴스 생성
export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  variant: "outlined",
};

export const Customized = Template.bind({});
Customized.args = {
  label: "Customized Text Field",
  variant: "filled",
};
