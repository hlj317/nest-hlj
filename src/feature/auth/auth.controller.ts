import { Controller,Get,Render } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('/register')
    @Render("login")
    async registerView() {
        return { pageTitle: 'Hello world!12322211' };
    }
    
    @Get("/admin")
    getAdmin(): string {
      return this.authService.getAdmin();
    }
}
