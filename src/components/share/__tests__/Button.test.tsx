import {expect} from "vitest";
import {render, screen} from "@testing-library/react";
import {Button} from "../Button.tsx";

describe('ComponenteButton', () => {

  it('render ComponenteButton with default values', () => {
    render(<Button type={"button"} className={"w-fit h-fit absolute"}>button</Button>);
    expect(screen.getByRole("buttonTest").textContent).toMatch("gjhgjg")

  });
})