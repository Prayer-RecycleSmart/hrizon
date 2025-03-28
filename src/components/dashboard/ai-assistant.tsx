"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Sample policy data for keyword matching
const policyData = {
  "right to disconnect": "The Right to Disconnect policy ensures employees can disconnect from work outside of normal working hours. Key points include: 1) No expectation to respond to emails after hours, 2) Meeting-free zones before 9am and after 5pm, 3) Use of 'delay send' for after-hours emails.",
  "annual leave": "Annual leave documentation requires: 1) Submit requests at least 2 weeks in advance, 2) Provide handover documentation for absences over 1 week, 3) Minimum 10 business days notice for leave over 2 weeks.",
  "onboarding": "Employee onboarding steps include: 1) Documentation collection (tax forms, ID, bank details), 2) System access setup, 3) Assign buddy/mentor, 4) Schedule 30/60/90 day check-ins, 5) Policy acknowledgment completion.",
  "performance review": "Legal requirements for performance reviews: 1) Regular documentation of feedback, 2) Objective measurements tied to job description, 3) Equal opportunity for all employees, 4) Clear documentation of improvement plans if needed.",
  "psychosocial hazards": "Psychosocial hazards management includes: 1) Regular workplace assessments, 2) Manager training on mental health awareness, 3) Clear reporting mechanisms for issues, 4) Access to employee assistance programs.",
};

export function AiAssistant() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const answer = findAnswer(query);
      setResponse(answer);
      setIsLoading(false);
    }, 1000);
  };

  // Very simple keyword matching for the MVP
  const findAnswer = (query: string): string => {
    const lowercaseQuery = query.toLowerCase();
    
    for (const [keyword, answer] of Object.entries(policyData)) {
      if (lowercaseQuery.includes(keyword)) {
        return answer;
      }
    }
    
    return "I'm sorry, I don't have specific information about that. For the MVP, I can answer questions about: right to disconnect, annual leave, onboarding, performance reviews, and psychosocial hazards.";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
        <CardDescription>Get quick answers about HR policies and compliance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {response && (
            <div className="bg-secondary p-4 rounded-md">
              <p className="text-sm">{response}</p>
            </div>
          )}
          
          {!response && (
            <div className="bg-secondary p-4 rounded-md">
              <p className="text-sm">Try asking about:</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>How to implement the Right to Disconnect policy</li>
                <li>Requirements for annual leave documentation</li>
                <li>Steps for proper employee onboarding</li>
                <li>Legal requirements for performance reviews</li>
              </ul>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Ask about a policy or compliance issue..." 
              className="w-full px-4 py-2 rounded-md border bg-background pr-12" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button 
              className="absolute right-1 top-1"
              disabled={isLoading || !query.trim()}
              type="submit"
            >
              {isLoading ? (
                <div className="h-4 w-4 border-t-2 border-r-2 border-primary-foreground rounded-full animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}