import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Requests: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Requests</h1>
        <p className="text-muted-foreground mt-2">
          View and manage all your fund requests
        </p>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Fund Requests</CardTitle>
          <CardDescription>Coming soon - request list will be displayed here</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Requests;
