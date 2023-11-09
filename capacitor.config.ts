import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'hello.ionic',
  appName: 'hello-ionic',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
