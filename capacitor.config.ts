import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'hello.app',
  appName: 'hello-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
