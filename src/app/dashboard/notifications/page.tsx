"use client";

import { Bell, Check, Info } from 'lucide-react';
import { useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample notifications data
const sampleNotifications = [
  {
    id: 1,
    title: "Sexual Harassment Policy update required",
    message: "The Sexual Harassment Policy needs to be updated to comply with new regulations.",
    date: "2025-03-27T10:00:00Z",
    read: false,
    type: "policy"
  },
  {
    id: 2,
    title: "Onboarding documents update",
    message: "Employee onboarding documents have been updated. Please review the changes.",
    date: "2025-03-25T14:30:00Z",
    read: true,
    type: "document"
  },
  {
    id: 3,
    title: "Annual compliance review due",
    message: "The annual compliance review is due in 2 weeks. Please schedule the review meeting.",
    date: "2025-03-22T09:15:00Z",
    read: false,
    type: "compliance"
  },
  {
    id: 4,
    title: "5 new employees completed policy acknowledgment",
    message: "5 new employees have completed their policy acknowledgment forms.",
    date: "2025-03-20T16:45:00Z",
    read: true,
    type: "acknowledgment"
  }
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(sampleNotifications);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline" onClick={markAllAsRead}>
          <Check className="mr-2 h-4 w-4" />
          Mark all as read
        </Button>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  {notification.title}
                  {!notification.read && (
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {formatDate(notification.date)}
                </div>
              </div>
              <CardDescription>
                {notification.message}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                    {notification.type}
                  </span>
                </div>
                {!notification.read && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => markAsRead(notification.id)}
                  >
                    Mark as read
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {notifications.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <Info className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-lg font-medium">No notifications</p>
              <p className="text-sm text-muted-foreground">
                You're all caught up! No new notifications at this time.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}