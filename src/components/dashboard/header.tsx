"use client";

import { useEffect, useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';

export function Header() {
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const getUserData = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    
    getUserData();
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-30 border-b bg-background p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">HRizon</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="User menu"
            >
              <User className="h-5 w-5" />
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md border bg-card shadow-lg">
                <div className="p-2">
                  <div className="border-b pb-2 mb-2">
                    <p className="text-sm font-medium">{user?.email}</p>
                  </div>
                  <Link href="/dashboard/profile" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Profile
                  </Link>
                  <Link href="/dashboard/settings" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Settings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-muted rounded-md"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
