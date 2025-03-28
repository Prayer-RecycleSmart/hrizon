"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon, LayoutDashboard, BookOpen, Users, Bell, Settings, LineChart } from 'lucide-react';

import { cn } from '@/lib/utils';

type SidebarNavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const navItems: SidebarNavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Policies',
    href: '/dashboard/policies',
    icon: BookOpen,
  },
  {
    title: 'Employees',
    href: '/dashboard/employees',
    icon: Users,
  },
  {
    title: 'Compliance',
    href: '/dashboard/compliance',
    icon: LineChart,
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 border-r bg-card p-4 hidden md:block">
      <div className="mb-8 flex items-center">
        <h1 className="text-2xl font-bold text-primary">HRizon</h1>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
              pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
