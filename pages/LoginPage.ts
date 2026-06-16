import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

 constructor(page: Page) { 

super(page); 

} 

async login(username: string, password: string) { 

await  this.page.locator('//input[@id="user-name"]').fill(username); 

await this.page.locator('//input[@id="password"]').fill(password); 

await this.page.locator('#login-button').click(); 

} 
}