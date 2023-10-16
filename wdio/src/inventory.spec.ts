import InventoryPage from './pages/inventory.page.js';
import LoginPage from './pages/login.page.js';

const USERNAME =
  process.env.VISUAL_CHECK === 'true' ? 'visual_user' : 'standard_user';
const PASSWORD = 'secret_sauce';

describe('Check Inventory', () => {
  it('check that the inventory page looks the same', async () => {
    await LoginPage.open();

    await browser.check('Before Login');

    await LoginPage.login(USERNAME, PASSWORD);

    await InventoryPage.open();

    await browser.check('Inventory Page');
  });
});
