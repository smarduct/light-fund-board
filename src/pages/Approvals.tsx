import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Approvals: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Approvals</h1>
        <p className="text-muted-foreground mt-2">
          Review and approve fund requests
        </p>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
          <CardDescription>Coming soon - approval queue will be displayed here</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Approvals;
