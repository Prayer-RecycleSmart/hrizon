"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

import { createClient, getSiteUrl } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import '@/styles/auth.css';

export default function Login() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<'sign_in' | 'sign_up'>('sign_in');
  const [siteUrl, setSiteUrl] = useState<string>('');
  const [supabaseClient, setSupabaseClient] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Set the origin once the component mounts (client-side only)
    const url = getSiteUrl();
    setSiteUrl(url);
    console.log('Site URL set to:', url);
    
    // Create the Supabase client
    const client = createClient();
    setSupabaseClient(client);
    console.log('Supabase client created');
    
    // Check for URL parameters (for sign-up mode)
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'sign_up') {
      setAuthMode('sign_up');
    }
    
    // Listen for auth state changes
    const { data: { subscription } } = client.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session ? 'User authenticated' : 'No session');
      
      if (event === 'SIGNED_IN' && session) {
        console.log('User signed in, redirecting to dashboard');
        router.push('/dashboard');
      }
    });
    
    return () => {
      subscription?.unsubscribe();
    };
  }, [router]);

  if (!supabaseClient) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <p>Loading...</p>
      </div>
    );
  }

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
          {error && (
            <div className="mb-4 p-3 text-sm bg-red-100 border border-red-200 text-red-800 rounded">
              {error}
            </div>
          )}
          
          {supabaseClient && (
            <Auth
              supabaseClient={supabaseClient}
              view={authMode}
              appearance={{ 
                theme: ThemeSupa,
                style: {
                  button: {
                    borderRadius: '0.375rem',
                    backgroundColor: 'var(--btn-bg)',
                    color: 'var(--btn-text)',
                  }
                },
                variables: {
                  default: {
                    colors: {
                      brand: 'rgb(var(--primary))',
                      brandAccent: 'rgb(var(--primary))',
                    }
                  }
                }
              }}
              theme="light"
              showLinks={false}
              providers={[]}
              redirectTo={siteUrl ? `${siteUrl}/auth/callback` : undefined}
              onlyThirdPartyProviders={false}
              magicLink={false}
              localization={{
                sign_in: {
                  button_label: "Sign in",
                  loading_button_label: "Signing in...",
                  email_label: "Email address",
                  password_label: "Password"
                },
                sign_up: {
                  button_label: "Create account",
                  loading_button_label: "Creating account...",
                  email_label: "Email address",
                  password_label: "Create a password"
                }
              }}
              onError={(error) => {
                console.error('Auth error:', error);
                setError(error.message);
              }}
            />
          )}
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