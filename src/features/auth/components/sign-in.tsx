'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { useAuth } from '../hooks';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn({ email, password });
  };

  return (
    <Card className='mx-auto max-w-md'>
      <CardHeader>
        <h2 className='text-xl font-semibold'>Sign In</h2>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody>
          <div className='space-y-4'>
            <Input
              label='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <Input
              label='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
          </div>
        </CardBody>
        <CardFooter>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
