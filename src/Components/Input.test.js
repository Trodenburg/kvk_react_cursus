// ./src/components/Input.test.js

import React from "react"; 
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  it("renders a textbox", () => {
    render(<Input 
      onChange={() => {}}
      value=""
      id="test" 
      label="Test-label" 
      placeholder="test-placeholder" />
    );
    
    expect(
      screen.getByRole("textbox", { name: "test" }
    ).toBeInTheDocument()); 
  });
  
  it("renders a label", () => {
    render(<Input 
      onChange={() => {}}
      value=""
      id="test" 
      label="Test-label" 
      placeholder="test-placeholder" />
    );
    
    expect(
      screen.getByLabelText("Test-label")
    ).toBeInTheDocument();
  }); 
  
  it("renders a placeholder", () => {
    render(<Input 
      onChange={() => {}}
      value=""
      id="test" 
      label="Test-label" 
      placeholder="test-placeholder" />
    );
    
    expect(
      screen.getByPlaceholderText("test-placeholder")
    ).toBeInTheDocument(); 
  });
});
