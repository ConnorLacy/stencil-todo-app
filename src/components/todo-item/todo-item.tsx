import { Component, Listen, h, Prop, Event, EventEmitter } from "@stencil/core";

export interface TodoCompletedEvent {
  text: string;
  checked: boolean;
}

export interface TodoReversed {
  text: string;
  checked: boolean;
}

@Component({
  tag: "todo-item",
  styleUrl: "todo-item.css",
  scoped: true,
})
export class TodoItem {
  @Prop() text: string = "Default text value";
  @Prop() checked: boolean = false;
  @Event() todoCompleted: EventEmitter<TodoCompletedEvent>;
  @Event() todoReversed: EventEmitter<TodoReversed>;

  @Listen("click")
  handleClick() {
    if (this.checked) {
      this.todoReversed.emit({ text: this.text, checked: this.checked });
    } else {
      this.todoCompleted.emit({ text: this.text, checked: this.checked });
    }
    this.checked = !this.checked;
  }

  render() {
    return <div class={this.getCSSClass()}>{this.text}</div>;
  }
  getCSSClass = () => (this.checked ? "todo-item checked" : "todo-item");
}
