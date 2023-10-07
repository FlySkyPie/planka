const Errors = {
  USER_NOT_FOUND: {
    userNotFound: 'User not found',
  },
};

module.exports = {
  inputs: {
    id: {
      type: 'string',
      regex: /^[A-Za-z0-9_-]+$/,
      required: true,
    },
  },

  exits: {
    userNotFound: {
      responseType: 'notFound',
    },
  },

  async fn(inputs) {
    let user = await sails.helpers.users.getOne(inputs.id);

    if (!user) {
      throw Errors.USER_NOT_FOUND;
    }

    user = await sails.helpers.users.deleteOne.with({
      record: user,
      request: this.req,
    });

    if (!user) {
      throw Errors.USER_NOT_FOUND;
    }

    return {
      item: user,
    };
  },
};
