import { newSpecPage } from '@stencil/core/testing';
import { MyComponentTwo } from '../my-component-two';

describe('my-component-two', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyComponentTwo],
      html: `<my-component-two></my-component-two>`,
    });
    expect(page.root).toEqualHtml(`
      <my-component-two>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-component-two>
    `);
  });
});
