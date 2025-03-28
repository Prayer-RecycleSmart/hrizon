import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, BookOpen, CheckCircle2, AlertTriangle, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { AiAssistant } from '@/components/dashboard/ai-assistant';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Policy Updates</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Pending review</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Areas</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Requiring attention</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employees</CardTitle>
            <Users className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">2 pending onboarding</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions taken in your organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Annual leave policy updated', date: 'Today at 2:30 PM', user: 'Admin' },
                { title: 'New employee onboarding initiated', date: 'Yesterday at 11:20 AM', user: 'Sarah Miller' },
                { title: 'Performance review reminders sent', date: 'Mar 23, 2025', user: 'System' },
                { title: 'Tax documentation updated', date: 'Mar 21, 2025', user: 'Admin' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">By {item.user}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{item.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Recent alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Right to Disconnect policy requires implementation', priority: 'high', date: 'Due in 7 days' },
                { title: 'Annual performance reviews coming up', priority: 'medium', date: 'Due in 14 days' },
                { title: 'Payroll processing reminder', priority: 'low', date: 'Due in 3 days' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`mt-0.5 h-2 w-2 rounded-full ${
                    item.priority === 'high' ? 'bg-red-500' : 
                    item.priority === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { title: 'Upload Policy Document', href: '/dashboard/policies/upload' },
                { title: 'Add New Employee', href: '/dashboard/employees/new' },
                { title: 'Generate Compliance Report', href: '/dashboard/compliance/report' },
                { title: 'View Organizational Chart', href: '/dashboard/employees/org-chart' },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <Button variant="ghost" className="w-full justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="col-span-2">
          <AiAssistant />
        </div>
      </div>
    </div>
  );
}
