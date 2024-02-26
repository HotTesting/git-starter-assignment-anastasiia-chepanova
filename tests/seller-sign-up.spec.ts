import { test, expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';

type Seller = {
	name: string;
	email: string;
	phone: string;
	brand: string;
	business: string;
};

const SIGN_UP_SELLER_PAGE = 'https://shopdemo-alex-hot.koyeb.app/sell';

test('should sign up seller', async ({ page }) => {
	const seller: Seller = {
		name: 'Anastasiia',
		email: `test${uuidv4()}@test.com`,
		phone: '0111111111',
		brand: 'Crypto',
		business: 'Crypto coins!',
	};

  await page.goto(SIGN_UP_SELLER_PAGE);

  const mainBlock = await page.getByRole('main');
	
  await mainBlock.locator("[name='name']").fill(seller.email);
  await mainBlock.locator("[name='email']").fill(seller.email);
  await mainBlock.locator("[name='phoneNumber']").fill(seller.email);
  await mainBlock.locator("[name='brandName']").fill(seller.email);
  await mainBlock.locator("[name='business']").fill(seller.email);

  await mainBlock.getByRole('button', { name: 'Submit' }).click();
  
  await page.getByText('We recived');
});
