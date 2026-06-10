import { Injectable } from '@nestjs/common';
import type { User, Url } from 'generated/prisma/browser';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return this.prisma.user.findMany();
  }

  register() {}
}
