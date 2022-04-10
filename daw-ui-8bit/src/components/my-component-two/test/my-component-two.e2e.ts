import { newE2EPage } from '@stencil/core/testing';

describe('my-component-two', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-component-two></my-component-two>');

    const element = await page.find('my-component-two');
    expect(element).toHaveClass('hydrated');
  });
});
