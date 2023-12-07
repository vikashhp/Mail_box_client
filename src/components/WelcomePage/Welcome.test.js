

import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
describe("Signup", () => {
  test("testing signup", () => {
    render(<Welcome />);
    const testsignupEmail = screen.getByText("Welcome To mail box");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Welcome />);
    const testsignupEmail = screen.getByText("Send Mail");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Welcome />);
    const testsignupEmail = screen.getByText("Subject");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Welcome />);
    const testsignupEmail = screen.getByText("Message");
    expect(testsignupEmail).toBeInTheDocument();
  });

  
});
