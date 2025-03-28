"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

import { createClient, getSiteUrl } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Login() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<'sign_in' | 'sign_up'>('sign_in');
  const [siteUrl, setSiteUrl] = useState<string>('');
  
  useEffect(() => {
    // Set the site URL once the component mounts (client-side only)
    setSiteUrl(getSiteUrl());
  }, []);

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
          <Auth
            supabaseClient={createClient()}
            view={authMode}
            appearance={{ theme: ThemeSupa }}
            theme="light"
            showLinks={false}
            providers={[]}
            redirectTo={siteUrl ? `${siteUrl}/auth/callback` : undefined}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <button 
            onClick={() => setAuthMode(authMode === 'sign_in' ? 'sign_up' : 'sign_in')}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            {authMode === 'sign_in' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </CardFooter>
      </Card>
    </main>
  );
}
