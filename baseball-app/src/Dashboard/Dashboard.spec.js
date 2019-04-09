import React from "react";

import { render, fireEvent } from "react-testing-library";
import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
  it("renders Dashboard", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/dashboard/i);
  });
  //   it("resets balls and strikes to 0 when player hits 3 strikes or 4 balls", () => {
  //     const { getByText } = render(<Dashboard />);
  //     getByText(/strike/)
  //   });

  it("resets balls and strikes to 0 when hit is recorded", () => {
    const { getByText } = render(<Dashboard />);
    const hitButton = getByText(/hit/i);
    fireEvent.click(hitButton);
    getByText(/Balls: 0/i);
    getByText(/Strikes: 0/i);
  });
});
