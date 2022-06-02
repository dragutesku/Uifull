import { newE2EPage } from '@stencil/core/testing';

describe('uifull-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uifull-header></uifull-header>');

    const element = await page.find('uifull-header');
    expect(element).toHaveClass('hydrated');
  });
});
