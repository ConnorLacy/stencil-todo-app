import { Component, Listen, h, Prop, Event, Host, EventEmitter } from "@stencil/core";

export interface TodoCheckedEvent {
  text: string,
  checked: boolean
}

@Component({
  tag: "todo-item",
  styleUrl: "todo-item.css",
  scoped: true
})

export class TodoItem {
  @Prop() text: string = "Default text value";
  @Prop() checked: boolean = false;
  @Event() todoChecked: EventEmitter<TodoCheckedEvent>
  @Listen("click")
  handleClick(){
    this.checked = !this.checked;
    this.todoChecked.emit({text: this.text, checked: this.checked})
  }

  render() {
    return (
        <div class={this.getCSSClass()}>
          {this.text}
        </div>
    );
  }
  getCSSClass = () => this.checked ? "todo-item checked" : "todo-item"

}
