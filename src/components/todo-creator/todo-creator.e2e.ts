import { newE2EPage } from '@stencil/core/testing';

describe('todo-creator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-creator></todo-creator>');

    const element = await page.find('todo-creator');
    expect(element).toHaveClass('hydrated');
  });
});
