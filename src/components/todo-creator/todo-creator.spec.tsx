import { newSpecPage } from '@stencil/core/testing';
import { TodoCreator } from './todo-creator';

describe('todo-creator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoCreator],
      html: `<todo-creator></todo-creator>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-creator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-creator>
    `);
  });
});
