import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../../users/services/users.service';
import { PayloadToken } from '../models/token.models';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload: PayloadToken = { role: user.role, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
