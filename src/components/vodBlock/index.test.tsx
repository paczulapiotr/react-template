import React from "react";
import { render } from "@testing-library/react";
import VodBlock from "./index";
describe("vod components", () => {
  test("renders vod block react link", () => {
    const { getByText } = render(
      <VodBlock title="title" description="desc" href="href" />
    );
    const elem1 = getByText(/title/i);
    const elem2 = getByText(/desc/i);
    expect(elem1).toBeInTheDocument();
    expect(elem2).toBeInTheDocument();
  });
});
