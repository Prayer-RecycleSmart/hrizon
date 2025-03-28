import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Plus, Download, Clock, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function Policies() {
  const policies = [
    {
      id: 1,
      title: 'Annual Leave Policy',
      description: 'Guidelines for requesting and managing employee annual leave',
      status: 'active',
      updatedAt: 'March 15, 2025',
      type: 'Core Policy',
    },
    {
      id: 2,
      title: 'Work From Home Policy',
      description: 'Rules and procedures for remote work arrangements',
      status: 'active',
      updatedAt: 'March 10, 2025',
      type: 'Operational Policy',
    },
    {
      id: 3,
      title: 'Right to Disconnect Policy',
      description: 'Ensuring employees can disconnect from work outside of hours',
      status: 'draft',
      updatedAt: 'March 22, 2025',
      type: 'Compliance',
    },
    {
      id: 4,
      title: 'Psychosocial Hazards Policy',
      description: 'Identifying and managing workplace psychological risks',
      status: 'review',
      updatedAt: 'March 21, 2025',
      type: 'Health & Safety',
    },
    {
      id: 5,
      title: 'Performance Review Process',
      description: 'Standardized approach to employee performance assessments',
      status: 'active',
      updatedAt: 'January 5, 2025',
      type: 'HR Process',
    },
    {
      id: 6,
      title: 'Employee Code of Conduct',
      description: 'Expected behaviors and ethics in the workplace',
      status: 'active',
      updatedAt: 'December 12, 2024',
      type: 'Core Policy',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Policies</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Policy
        </Button>
      </div>

      <div className="flex justify-between items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search policies..."
            className="w-full bg-background pl-8 pr-4 py-2 text-sm border rounded-md"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="space-y-4">
        {policies.map((policy) => (
          <Card key={policy.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{policy.title}</h3>
                    <div className={`rounded-full px-2 py-0.5 text-xs ${getStatusBadgeColor(policy.status)}`}>
                      {policy.status === 'active' ? 'Active' : 
                       policy.status === 'draft' ? 'Draft' : 'Review Required'}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{policy.description}</p>
                  <div className="flex items-center space-x-4 pt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <FileText className="mr-1 h-3 w-3" />
                      {policy.type}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      Updated: {policy.updatedAt}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-4 w-4" /> Download
                  </Button>
                  <Button size="sm">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Policy Compliance Summary</CardTitle>
          <CardDescription>Overview of your organization's policy compliance status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Active Policies</span>
              </div>
              <span className="font-medium">4</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                <span>Policies Requiring Review</span>
              </div>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span>Draft Policies</span>
              </div>
              <span className="font-medium">1</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getStatusBadgeColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'draft':
      return 'bg-blue-100 text-blue-800';
    case 'review':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}
