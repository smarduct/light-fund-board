import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase will handle the OAuth callback automatically
    // Just redirect to dashboard
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <div>
          <h2 className="text-xl font-semibold">Authenticating...</h2>
          <p className="text-muted-foreground mt-2">
            Please wait while we verify your credentials
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
