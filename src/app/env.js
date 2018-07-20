const env = {
  test: {
    firebaseConfig: {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_PROJECT_NAME.firebaseapp.com',
      databaseURL: 'https://YOUR_PROJECT_NAME.firebaseio.com/'
    }
  },
  production: {
    firebaseConfig: {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_PROJECT_NAME.firebaseapp.com',
      databaseURL: 'https://YOUR_PROJECT_NAME.firebaseio.com/'
    }
  }
};

export default env[process.env.NODE_ENV] || env.test;
