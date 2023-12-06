import { render, screen } from "@testing-library/react";
import Login from "./Login";
describe("Signup", () => {
  test("testing signup", () => {
    render(<Login />);
    const testsignupEmail = screen.getByText("Login");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Login />);
    const testsignupEmail = screen.getByText("Don't Have an account ?");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Login />);
    const testsignupEmail = screen.getByText("Password");
    expect(testsignupEmail).toBeInTheDocument();
  });
  test("testing signup", () => {
    render(<Login />);
    const testsignupEmail = screen.getByText("Email");
    expect(testsignupEmail).toBeInTheDocument();
  });

  
});
