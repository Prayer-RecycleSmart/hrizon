"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, LogIn } from 'lucide-react';
import Link from 'next/link';

import { createClient, getSiteUrl } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<'sign_in' | 'sign_up'>('sign_in');
  const [siteUrl, setSiteUrl] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Set the site URL once the component mounts (client-side only)
    setSiteUrl(getSiteUrl());
    
    // Check for URL parameters (for sign-up mode)
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'sign_up') {
      setAuthMode('sign_up');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      const supabase = createClient();
      let result;
      
      if (authMode === 'sign_in') {
        result = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      } else {
        result = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${siteUrl}/auth/callback`,
          },
        });
      }
      
      if (result.error) {
        console.error('Auth error:', result.error);
        setError(result.error.message || 'Authentication failed. Please try again.');
      } else if (authMode === 'sign_in') {
        // Successfully signed in - redirect to dashboard
        router.push('/dashboard');
      } else if (result.data?.user?.identities?.length === 0) {
        // User exists but is not logged in
        setError('Account already exists. Please sign in instead.');
        setAuthMode('sign_in');
      } else {
        // Show confirmation message for sign up
        setError('Please check your email for a confirmation link.');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {authMode === 'sign_in' ? 'Sign In to HRizon' : 'Create an Account'}
          </CardTitle>
          <CardDescription className="text-center">
            {authMode === 'sign_in' 
              ? 'Enter your credentials to access your dashboard' 
              : 'Create an account to get started with HRizon'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder={authMode === 'sign_up' ? 'Create a password' : 'Enter your password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                  minLength={6}
                />
              </div>
            </div>
            
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {authMode === 'sign_in' ? 'Signing in...' : 'Creating account...'}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  {authMode === 'sign_in' ? 'Sign in' : 'Create account'}
                </span>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <button 
            onClick={() => {
              setAuthMode(authMode === 'sign_in' ? 'sign_up' : 'sign_in');
              setError(null);
            }}
            className="text-sm text-muted-foreground hover:text-primary"
            type="button"
          >
            {authMode === 'sign_in' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </CardFooter>
      </Card>
    </main>
  );
}