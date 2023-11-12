import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Sidebar } from "./Sidebar"; // Adjust the import path as necessary
import { userEvent } from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("<Sidebar />", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Sidebar className="sidebar-test-class" />);
    expect(getByText("Home")).toBeInTheDocument();
  });
});

it("renders correct number of list items", () => {
  const { getAllByRole } = render(<Sidebar className="test-class" />);
  expect(getAllByRole("button").length).toBe(3); // 4 in the first list
});

it("selects list item on click", async () => {
  const { getAllByRole } = render(<Sidebar className="test-class" />);
  const firstItem = getAllByRole("button")[0];

  userEvent.click(firstItem);
  await waitFor(() => {
    expect(firstItem).toHaveClass("selected");
  });
  expect(firstItem).toHaveClass("selected");
});
