import { render, screen } from "@testing-library/react";
import Signup from "./Signup";
describe("Signup", () => {
  test("testing signup", () => {
    render(<Signup />);
    const testsignupEmail = screen.getByText("Submit");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Signup />);
    const testsignupEmail = screen.getByText("Have an account ?");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Signup />);
    const testsignupEmail = screen.getByText("Confirm Password");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Signup />);
    const testsignupEmail = screen.getByText("Password");
    expect(testsignupEmail).toBeInTheDocument();
  });

  
});
