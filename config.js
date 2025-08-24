module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'fallback-secret-key-change-in-production',
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development'
};
