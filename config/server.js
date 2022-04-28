module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth:{
      secret: env('ADMIN_JWT_SECRET', '4bf4132fa596725cd2445388ff7a9d20'),
    },
  },
});
