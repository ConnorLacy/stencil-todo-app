import {
  Component,
  ComponentInterface,
  State,
  Element,
  h,
  Listen,
} from "@stencil/core";

import { TodoCheckedEvent } from "../todo-item/todo-item";

type Todo = {
  checked: boolean;
  text: string;
};

@Component({
  tag: "todo-container",
  styleUrl: "todo-container.css",
  scoped: true,
})
export class TodoContainer implements ComponentInterface {
  @State() todos: Todo[];
  @Element() element;
  @Listen("todoChecked")
  handleTodoChecked(e: CustomEvent<TodoCheckedEvent>){
    console.log(`Text from changed todo: ${e.detail.text}`)
  }
  
  componentWillLoad() {
    this.todos = this.getTodos();
  }

  render() {
    return (
      <div class="todos-container">
        <h2>
          <slot name="title" />
        </h2>
        <div>
          <h3>Completed Todos</h3>
          <slot name="completed-items">
            <slot />
          </slot>
        </div>
        <div>
          <h3>Incomplete Todos</h3>
          <slot name="todo-items">
            <slot />
          </slot>
        </div>
      </div>
    );
  }

  getTodos = () =>
    [].slice
      .call(this.element.querySelectorAll(".todos-container > div > div"))
      .map((container) => {
        return [].slice.call(container.children);
      });
}
