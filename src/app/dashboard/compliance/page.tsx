import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, PieChart, LineChart } from 'recharts';
import { Download, Calendar, AlertTriangle, CheckCircle, FileText, Clock } from 'lucide-react';

export default function Compliance() {
  // Mock data for charts
  const complianceData = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 70 },
    { name: 'Mar', value: 87 },
  ];

  const departmentComplianceData = [
    { name: 'HR', value: 95 },
    { name: 'Engineering', value: 82 },
    { name: 'Marketing', value: 90 },
    { name: 'Sales', value: 78 },
    { name: 'Product', value: 85 },
    { name: 'Customer Success', value: 88 },
  ];

  const policyAdherenceData = [
    { name: 'Work From Home', value: 95 },
    { name: 'Annual Leave', value: 100 },
    { name: 'Code of Conduct', value: 92 },
    { name: 'Performance Review', value: 85 },
    { name: 'Right to Disconnect', value: 60 },
    { name: 'Psychosocial Hazards', value: 65 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Compliance Dashboard</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" /> Mar 2025
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Compliance</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <div className="mt-4 h-3 w-full rounded-full bg-secondary">
              <div className="h-3 rounded-full bg-primary" style={{ width: '87%' }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">+2% from previous month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Areas</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                <span className="text-sm">Right to Disconnect (60%)</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-amber-500 mr-2" />
                <span className="text-sm">Psychosocial Hazards (65%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Due</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                <span className="text-sm">Overdue (1)</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-amber-500 mr-2" />
                <span className="text-sm">Due this week (2)</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                <span className="text-sm">Upcoming (2)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Department Compliance</CardTitle>
            <CardDescription>Compliance scores by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              {/* Placeholder for bar chart */}
              <div className="h-full w-full bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Bar Chart: Department Compliance</p>
                {/* In a real app, we would render a recharts BarChart here */}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Policy Adherence</CardTitle>
            <CardDescription>Compliance by policy type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              {/* Placeholder for horizontal bar chart */}
              <div className="h-full w-full bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Bar Chart: Policy Adherence</p>
                {/* In a real app, we would render a recharts BarChart here */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Trend</CardTitle>
          <CardDescription>Historical compliance performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            {/* Placeholder for line chart */}
            <div className="h-full w-full bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Line Chart: Compliance Trend</p>
              {/* In a real app, we would render a recharts LineChart here */}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Compliance Tasks</CardTitle>
          <CardDescription>Tasks related to maintaining compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: 'Right to Disconnect policy implementation', dueDate: 'Apr 5, 2025', status: 'pending', priority: 'high' },
              { title: 'Annual leave policy attestation collection', dueDate: 'Apr 10, 2025', status: 'in-progress', priority: 'medium' },
              { title: 'Psychosocial Hazards policy training', dueDate: 'Apr 15, 2025', status: 'pending', priority: 'high' },
              { title: 'Q2 compliance report preparation', dueDate: 'Apr 20, 2025', status: 'pending', priority: 'medium' },
              { title: 'Employee handbook update', dueDate: 'Mar 25, 2025', status: 'overdue', priority: 'high' },
            ].map((task, index) => (
              <div key={index} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-start space-x-3">
                  <div className={`mt-0.5 h-2 w-2 rounded-full ${getStatusColorClass(task.status, task.priority)}`} />
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                  </div>
                </div>
                <div className={`rounded-full px-2 py-1 text-xs ${getStatusBadgeClass(task.status)}`}>
                  {formatStatus(task.status)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getStatusColorClass(status: string, priority: string) {
  if (status === 'overdue') return 'bg-red-500';
  if (priority === 'high') return 'bg-amber-500';
  if (status === 'completed') return 'bg-green-500';
  return 'bg-blue-500';
}

function getStatusBadgeClass(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800';
    case 'pending':
      return 'bg-amber-100 text-amber-800';
    case 'overdue':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function formatStatus(status: string) {
  switch (status) {
    case 'in-progress':
      return 'In Progress';
    default:
      return status.charAt(0).toUpperCase() + status.slice(1);
  }
}
