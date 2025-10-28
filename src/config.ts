// Centralized configuration for the JBPL Greenlight application
// This file contains all configurable values that may change across environments

export const config = {
  api: {
    // Backend API base URL - update this when the ngrok URL changes
    baseUrl: 'https://nondeducible-physiognomic-roselia.ngrok-free.dev',
    // Timeout for API requests (in milliseconds)
    timeout: 30000,
  },
  
  auth: {
    // Google OAuth configuration
    redirectUri: window.location.origin + '/auth/callback',
  },
  
  app: {
    name: 'JBPL Greenlight',
    version: '1.0.0',
  },
} as const;

// Helper to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${config.api.baseUrl}${endpoint}`;
};
