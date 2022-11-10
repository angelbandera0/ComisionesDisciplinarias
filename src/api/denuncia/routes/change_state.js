
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/denuncias/change_state/:id',
        handler: 'denuncia.change_state',
      },
    ],
  };