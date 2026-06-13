import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { RequestWithUser } from '../interfaces/request-with-user.interface';
export const ActiveUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: RequestWithUser = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
