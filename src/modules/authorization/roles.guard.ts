import * as R from 'ramda';

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Reflector } from '@nestjs/core';

const matchRoles = (
  requiredRoles: string[] = [],
  userRoles: string[] = [],
): boolean => {
  return R.equals(
    R.intersection(requiredRoles, userRoles).length,
    requiredRoles.length,
  );
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles: string[] = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    return matchRoles(roles, R.path(['user', 'roles'], request));
  }
}
