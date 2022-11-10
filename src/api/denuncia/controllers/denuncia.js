'use strict';

const change_state = require('../routes/change_state');

/**
 *  denuncia controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::denuncia.denuncia', ({ strapi }) => ({
    async change_state(ctx, next) {
        const user = ctx.state.user
        const { id } = ctx.params;
        let denuncia = {};
        let newDenuncia = {};
        if (user.cargo != "Decano") {
            return ctx.badRequest('Este usuario no tiene permitido realizar esta operacion', {});
        }
        else {
            console.log(strapi.service('api::denuncia.denuncia'));
            denuncia = await strapi.entityService.findOne('api::denuncia.denuncia', id, {
                populate: { someRelation: true },
            });
            denuncia.estado = ctx.request.body.data.newState;
            newDenuncia = await strapi.entityService.update('api::denuncia.denuncia', id, {
                data: denuncia,
              });
            console.log(newDenuncia);
        }

        const sanitizedEntity = await this.sanitizeOutput(newDenuncia, ctx);

        return this.transformResponse(sanitizedEntity);

    },   
}));
