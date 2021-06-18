/**
 * @file This file is used to declare post user object on swagger document.
 */
 module.exports = {
      in: 'body',
      name: 'body',
      description: 'API v1 parameters body',
      required: true,
      schema: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            example: ''
          },
          description: {
            type: 'string',
            example: ''
          },
          display: {
            type: 'string',
            example: ''
          }
        }
      }
    }
  