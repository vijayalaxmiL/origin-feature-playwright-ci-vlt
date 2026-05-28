import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  username = '#username';
  password = '#password';
  loginBtn = '#login';

  async login(user: string, pass: string) {
    await this.type(this.username, user);
    await this.type(this.password, pass);
    await this.click(this.loginBtn);
  }
}
