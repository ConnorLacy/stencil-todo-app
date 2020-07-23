import {
  Component,
  ComponentInterface,
  Element,
  Host,
  h,
  Listen,
} from "@stencil/core";

import { TodoCompletedEvent, TodoReversed } from "../todo-item/todo-item";
import { TodoCreatedEvent } from "../todo-creator/todo-creator";

@Component({
  tag: "todo-container",
  styleUrl: "todo-container.css",
})
export class TodoContainer implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Listen("todoCompleted")
  handleTodoCompleted(e: CustomEvent<TodoCompletedEvent>) {
    console.log(`Todo completed....nice: ${e.detail.text}`);
    let element = e.target as HTMLElement;
    let parent = element.parentElement;
    parent.removeChild(element);
    let completedList = document.querySelector('[slot="completed-items"]');
    completedList.append(element);
  }

  @Listen("todoCreated")
  handleTodoCreated(e: CustomEvent<TodoCreatedEvent>) {
    console.log(`I smell a new todo.....: ${e.detail.text}`);
    let todoList = this.getTodoList();
    let todoItem = document.createElement("todo-item");
    todoItem.text = e.detail.text;
    todoItem.checked = e.detail.checked;
    todoList.appendChild(todoItem);
  }

  @Listen("todoReversed")
  handleTodoReversed(e: CustomEvent<TodoReversed>) {
    console.log(`You lazy mf...todo reversed: ${e.detail.text}`);
    let element = e.target as HTMLElement;
    let parent = element.parentElement;
    parent.removeChild(element);
    let todoList = this.getTodoList();
    todoList.append(element);
  }

  render() {
    return (
      <Host>
        <h2>
          <slot name="title" />
        </h2>
        <div role="listgroup">
          <h3>Incomplete Todos</h3>
          <slot name="todo-items"></slot>
        </div>
        <div role="listgroup">
          <h3>Completed Todos</h3>
          <slot name="completed-items"></slot>
        </div>
        <div class="create-todo">
          <slot name="create"></slot>
        </div>
      </Host>
    );
  }

  getTodoList = () => {
    return document.querySelector('[slot="todo-items"]');
  };
}
