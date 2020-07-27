import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Method,
} from "@stencil/core";

export interface TodoCreatedEvent {
  text: string;
  checked: boolean;
}

@Component({
  tag: "todo-creator",
  styleUrl: "todo-creator.css",
})
export class TodoCreator {
  @Prop() text: string = "";
  @Element() el!: HTMLElement;
  @Event() todoCreated: EventEmitter<TodoCreatedEvent>;

  handleClick(event: UIEvent) {
    event.preventDefault();
    this.todoCreated.emit({ text: this.text, checked: false });
    this.clearInput()
  }

  @Method()
  async clearInput(){
    this.text = ""
  }

  handleChange(event: UIEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.text = value;
  }

  render() {
    return (
      <Host>
        <label>
          <h3>Create Todo</h3>
        </label>
        <input
          type="text"
          id="todo-creator"
          name="todo-creator"
          value={this.text}
          onChange={(event: UIEvent) => this.handleChange(event)}
        />
        <button onClick={(event: UIEvent) => this.handleClick(event)}>
          Create Todo
        </button>
      </Host>
    );
  }
}
