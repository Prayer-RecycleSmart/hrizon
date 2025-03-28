import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Plus, Mail, Phone, CheckCircle, User, UserPlus } from 'lucide-react';

export default function Employees() {
  const employees = [
    {
      id: 1,
      name: 'Sarah Miller',
      role: 'HR Manager',
      email: 'sarah.miller@company.com',
      phone: '+1 (555) 123-4567',
      department: 'Human Resources',
      status: 'active',
      avatar: '/avatars/sarah.png',
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Software Engineer',
      email: 'james.wilson@company.com',
      phone: '+1 (555) 234-5678',
      department: 'Engineering',
      status: 'active',
      avatar: '/avatars/james.png',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Marketing Specialist',
      email: 'emily.johnson@company.com',
      phone: '+1 (555) 345-6789',
      department: 'Marketing',
      status: 'active',
      avatar: '/avatars/emily.png',
    },
    {
      id: 4,
      name: 'Michael Chang',
      role: 'Product Manager',
      email: 'michael.chang@company.com',
      phone: '+1 (555) 456-7890',
      department: 'Product',
      status: 'active',
      avatar: '/avatars/michael.png',
    },
    {
      id: 5,
      name: 'Olivia Patel',
      role: 'Customer Support',
      email: 'olivia.patel@company.com',
      phone: '+1 (555) 567-8901',
      department: 'Customer Success',
      status: 'onboarding',
      avatar: '/avatars/olivia.png',
    },
    {
      id: 6,
      name: 'Daniel Kim',
      role: 'Sales Representative',
      email: 'daniel.kim@company.com',
      phone: '+1 (555) 678-9012',
      department: 'Sales',
      status: 'onboarding',
      avatar: '/avatars/daniel.png',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Employees</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Add Employee
        </Button>
      </div>

      <div className="flex justify-between items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full bg-background pl-8 pr-4 py-2 text-sm border rounded-md"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <Card key={employee.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{employee.name}</h3>
                    <p className="text-sm text-muted-foreground">{employee.role}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{employee.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{employee.phone}</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted px-6 py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full mr-2 ${employee.status === 'active' ? 'bg-green-500' : 'bg-amber-500'}`} />
                  <span className="text-sm text-muted-foreground capitalize">{employee.status}</span>
                </div>
                <span className="text-sm font-medium">{employee.department}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Department Breakdown</CardTitle>
            <CardDescription>Employee distribution by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Human Resources', count: 1 },
                { name: 'Engineering', count: 1 },
                { name: 'Marketing', count: 1 },
                { name: 'Product', count: 1 },
                { name: 'Customer Success', count: 1 },
                { name: 'Sales', count: 1 },
              ].map((dept, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{dept.name}</span>
                  <span className="font-medium">{dept.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Employee Status</CardTitle>
            <CardDescription>Overview of employee onboarding status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Active Employees</span>
                </div>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <UserPlus className="h-5 w-5 text-amber-500 mr-2" />
                  <span>Employees in Onboarding</span>
                </div>
                <span className="font-medium">2</span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                View Organizational Chart
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
