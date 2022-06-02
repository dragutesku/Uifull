import { newSpecPage } from '@stencil/core/testing';
import { UifullHeader } from '../uifull-header';

describe('uifull-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UifullHeader],
      html: `<uifull-header></uifull-header>`,
    });
    expect(page.root).toEqualHtml(`
      <uifull-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uifull-header>
    `);
  });
});
