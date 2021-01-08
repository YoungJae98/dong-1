/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: "Button",
  size: "medium",
};

export const Signature = Template.bind({});
Signature.args = {
  label: "Button",
  width: "120px",
  height: "60px",
  fontColor: "white",
  backgroundColor: "#14406c",
  hoverBackgrounColor: "white",
  hoverFontColor: "#14406c",
};
