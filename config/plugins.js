module.exports = {
    // ...
    'import-shineon': {
      enabled: true,
      resolve: './src/plugins/import-shineon'
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
    // ...
  }