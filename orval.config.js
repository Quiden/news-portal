module.exports = {
  petstore: {
    input: `${process.env.OPENAPI_URL}`,
    output: {
      mode: 'tags-split',
      target: './src/shared/api/generated/api.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/shared/api/axios/instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
};
