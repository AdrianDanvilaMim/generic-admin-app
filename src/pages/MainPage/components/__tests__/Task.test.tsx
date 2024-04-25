import '@testing-library/jest-dom'
import {expect} from "vitest";
import {render} from "@testing-library/react";
import {Task} from "../Tasks/components/Task.tsx";


describe('ComponenteTask', () => {

  it('render ComponenteTask with default values', () => {
    const task = {
      id: "1",
      name: "try 1",
      userId: "2",
      details: [],
      comments: null
    }

    expect(render(<Task task={task}></Task>))
  });
})