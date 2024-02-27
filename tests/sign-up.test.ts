import { test, expect } from '@playwright/test';
import { randomUUID } from 'crypto';

type User = {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
};

const SIGN_UP_PAGE = 'https://shopdemo-alex-hot.koyeb.app/register';
const DASHBOARD_PAGE = 'https://shopdemo-alex-hot.koyeb.app/dashboard';

test('should sign up user', async ({ page }) => {
	const user: User = {
		email: `test${randomUUID()}@test.com`,
		firstName: 'Anastasiia',
		lastName: 'Chepanova',
		password: 'qwerty123!',
	};

  await page.goto(SIGN_UP_PAGE);

	const mainBlock = await page.getByRole('main');
	
  await mainBlock.locator("[name='email']").fill(user.email);
  await mainBlock.locator("[name='firstName']").fill(user.firstName);
  await mainBlock.locator("[name='lastName']").fill(user.lastName);
  await mainBlock.locator("[name='password']").fill(user.password);
  await mainBlock.getByRole('button', { name: 'Sign Up' }).click();

  await expect(page).toHaveURL(DASHBOARD_PAGE);
});
