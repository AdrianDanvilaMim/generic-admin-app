import {expect} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {Button} from "../Button.tsx";

describe('ComponenteButton', () => {

  it('render ComponenteButton with default values', () => {
    render(<Button type={"button"} className={"w-fit h-fit absolute"}>button</Button>);
    expect(screen.getByRole("buttonTest").textContent).toMatch("button")

  });


  it('Click', () => {
    let num = 0;
    const onClickHandler = ()=>{
      num=1
    }
    render(<Button type={"button"} onClick={onClickHandler} className={"w-fit h-fit absolute"}>button</Button>);
    const button =screen.getByRole("buttonTest")
    fireEvent.click(button)
    expect(num).toEqual(1)
  });
})