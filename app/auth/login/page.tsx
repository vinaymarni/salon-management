'use client';

import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { currentUserAtom, isAuthenticatedAtom } from '@/lib/atoms';
import { mockUsers } from '@/lib/dummy-data';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [, setCurrentUser] = useAtom(currentUserAtom);
  const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login
    setTimeout(() => {
      const user = mockUsers[0]; // Use first user as demo
      if (email && password) {
        setCurrentUser(user); 
        setIsAuthenticated(true);
        router.push('/dashboard');
      } else {
        setError('Please enter email and password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[70vh]">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Sign in to your account to manage your bookings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="customer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading} size="lg">
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 space-y-2 text-center text-sm">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/auth/register" className="text-accent hover:underline font-semibold">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-6 border-t pt-6 space-y-2 text-center text-xs text-muted-foreground">
              <p>Demo credentials:</p>
              <p>Email: customer@example.com</p>
              <p>Password: any password</p>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
