import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

test("Defaults to Like state", ()=>{
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("Like state increments when Like button is clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Like state decreases when Dislike button is clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"))
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});