import '@testing-library/jest-dom'
import {expect} from "vitest";
import {render} from "@testing-library/react";
import {Task} from "../Tasks/components/Task.tsx";
import {Profile} from "../Profile.tsx";
import {Provider} from "react-redux";
import {store} from "../../../../store.tsx";


describe('ComponenteTask', () => {

  it('render ComponenteTask with default values', () => {
    const task = {
      id: "1",
      name: "try 1",
      userId: "2",
      details: [],
      comments: null
    }

    expect(render(<Provider store={store}>
        <Task task={task}></Task>

    </Provider>
    ))
  });
})