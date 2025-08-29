/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

// Test Suite ; For one component, multiple test cases can be written inside one test suite

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />); //telling the browser to render the Hero component
    const heroImage = screen.getByAltText("Hero Image"); //finding the image by its alt text
    expect(heroImage).toBeInTheDocument(); // telling test compare existing output img present within this component or not?
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png"); //checking the image on the basis of correct source
  });

  //another test case
  test("renders signup button", () => {
    render(<Hero />); //telling the browser to render the Hero component
    const signupButton = screen.getByRole("button", { name: "Signup now" }); //finding the button by its role and name
    expect(signupButton).toBeInTheDocument(); // telling test compare existing output img present within this component or not?
    expect(signupButton).toHaveClass("btn-primary"); //checking the image on the basis of correct source
  });
});
