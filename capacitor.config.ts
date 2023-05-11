import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myRealEstateApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
