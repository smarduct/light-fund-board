export interface User {
  id: number;
  email: string;
  name: string;
  picture: string | null;
  role: string;
  emailVerified: boolean;
  approvalStatus: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (code: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export interface AuthMethod {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  icon: string;
  description: string;
  requiresApproval: boolean;
  allowedDomains: string[];
}
