import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import UserDashboard from '@/components/UserDashboard';
import AdminPanel from '@/components/AdminPanel';

const Dashboard = () => {
  const { hasRole } = useAuth();
  const isAdmin = hasRole('admin');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to your dashboard
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {isAdmin && (
            <TabsTrigger value="admin">Admin Panel</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <UserDashboard />
        </TabsContent>

        {isAdmin && (
          <TabsContent value="admin" className="space-y-4">
            <AdminPanel />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default Dashboard;
