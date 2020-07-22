import { newE2EPage } from '@stencil/core/testing';

describe('todo-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-container></todo-container>');

    const element = await page.find('todo-container');
    expect(element).toHaveClass('hydrated');
  });
});
