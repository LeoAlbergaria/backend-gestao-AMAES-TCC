import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 201, description: 'User successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  @Post('login')
  async login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }

  // Registration endpoint (optional)
  // @Post('register')
  // async register(@Body() createUserDto: CreateUserDto) {
  //   return this.authService.register(createUserDto);
  // }
}