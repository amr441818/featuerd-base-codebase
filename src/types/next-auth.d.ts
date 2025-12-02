import { AuthResponse } from './global';

declare module 'next-auth' {
  interface Session extends Partial<AuthResponse> {
    accessToken: string;
  }
}
