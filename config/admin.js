module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '791453c074367231690409692eee8306'),
  },
});
