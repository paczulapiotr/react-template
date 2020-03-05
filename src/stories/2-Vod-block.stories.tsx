import React from "react";
import { action } from "@storybook/addon-actions";
import VodBlock from "src/components/vodBlock";

export default {
  title: "VodBlock",
  component: VodBlock
};

export const Normal = () => (
  <VodBlock title={"ASD"} description={"DeSC"} href="ASDASDASD" />
);
