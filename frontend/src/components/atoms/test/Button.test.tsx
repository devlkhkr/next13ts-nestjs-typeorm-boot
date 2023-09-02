import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import { Default, Customized } from "../stories/Button.stories";
import "@testing-library/jest-dom";

describe("Button stories", () => {
  it("renders the Default button", () => {
    render(<Default label={"Default Button"} onClick={() => void 0} />);
    expect(screen.getByText("Default Button")).toBeInTheDocument();
  });

  it("renders the Customized button", () => {
    render(<Customized label={"Customized Button"} onClick={() => void 0} />);
    expect(screen.getByText("Customized Button")).toBeInTheDocument();
  });
});
