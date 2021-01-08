/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { Header } from "../components/Header";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {};
