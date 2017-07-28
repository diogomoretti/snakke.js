import { Selector } from 'testcafe';

fixture `Snakke E2E Test`
  .page `../docs/demo/index.html`;

test('Check if div snakke-bar is inserted', async t => {
  const snakkeDiv = Selector('.snakke-bar').exists;

  await t
    .expect(snakkeDiv).ok();
});
