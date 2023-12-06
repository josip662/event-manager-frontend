import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'event-manager-frontend',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
