/**
 * Attachment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const { nanoid } = require('nanoid');

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    dirname: {
      type: 'string',
      required: true,
    },
    filename: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'json',
    },
    name: {
      type: 'string',
      required: true,
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    cardId: {
      model: 'Card',
      required: true,
      columnName: 'card_id',
    },
    creatorUserId: {
      model: 'User',
      required: true,
      columnName: 'creator_user_id',
    },
  },
  beforeCreate(modelObj, cb) {
    modelObj.id = nanoid();
    // make your changes
    return cb();
  },

  customToJSON() {
    return {
      ..._.omit(this, ['dirname', 'filename', 'image.thumbnailsExtension']),
      url: `${sails.config.custom.attachmentsUrl}/${this.id}/download/${this.filename}`,
      coverUrl: this.image
        ? `${sails.config.custom.attachmentsUrl}/${this.id}/download/thumbnails/cover-256.${this.image.thumbnailsExtension}`
        : null,
    };
  },
};
