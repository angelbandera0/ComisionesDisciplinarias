'use strict';

/**
 * proceso service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::proceso.proceso');
