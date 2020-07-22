import { newSpecPage } from '@stencil/core/testing';
import { TodoContainer } from './todo-container';

describe('todo-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoContainer],
      html: `<todo-container></todo-container>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-container>
    `);
  });
});
