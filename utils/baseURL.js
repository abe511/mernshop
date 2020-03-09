const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://mernshop.now.sh'
    : 'http://localhost:3000';

export default baseURL;
