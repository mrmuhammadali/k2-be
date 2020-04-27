// @flow

export default {
  '/api/data/:id': {
    GET: ({params: {id}}) => import(`./data/${id}`).then(file => file.default),
  },
};
