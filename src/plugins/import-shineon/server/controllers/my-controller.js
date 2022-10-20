'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('import-shineon')
      .service('myService')
      .getWelcomeMessage();
  },
});
