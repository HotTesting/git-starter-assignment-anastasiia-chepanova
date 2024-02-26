import { test, expect } from '@playwright/test';

type User = {
	email: string;
	password: string;
};

const LOGIN_PAGE = 'https://shopdemo-alex-hot.koyeb.app/login';
const SHOP_PAGE = 'https://shopdemo-alex-hot.koyeb.app/shop';
const WISHLIST_PAGE = 'https://shopdemo-alex-hot.koyeb.app/dashboard/wishlist';

test('should add some item to wishlist', async ({ page }) => {
  await page.goto(LOGIN_PAGE);
	const user: User = {
		email: 'test36f986d9-a7e1-4435-bb4e-cea1ee09c8f3@test.com',
		password: 'qwerty123!',
	};

	await page.getByRole('main').locator("[name='email']").fill(user.email);
  await page.getByRole('main').locator("[name='password']").fill(user.password);
  await page.getByRole('main').getByRole('button', { name: 'Login' }).click();
	await page.waitForTimeout(1000);
	
	await page.goto(SHOP_PAGE);
	
	await page.locator(`.heart-icon`).first().click();
	await page.waitForTimeout(1000);
	
	await page.goto(WISHLIST_PAGE);
	await page.getByRole('main').locator(".remove-wishlist-box").click();
});
