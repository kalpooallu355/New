import{test} from'../fixtures';
import{expect} from '@playwright/test';
test('login with valid credentials', async({loginPage})=>{
    await loginPage.navigate('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');

});