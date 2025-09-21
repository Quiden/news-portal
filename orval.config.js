module.exports = {
  petstore: {
    input: `${process.env.OPENAPI_URL}`,
    output: {
      mode: 'tags-split',
      target: './src/shared/api/api.ts',
      client: 'react-query',
    },
  },
};
