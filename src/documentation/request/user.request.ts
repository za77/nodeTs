/**
 * @file This file is used to declare post user object on swagger document.
 */
 module.exports = [
    {
      in: 'body',
      name: 'body',
      description: 'API v1 parameters body',
      required: true,
      schema: {
        type: 'object',
        required: ['mobile'],
        properties: {
          firstName: {
            type: 'string',
            example: ''
          },
          lastName: {
            type: 'string',
            example: ''
          },
          mobile: {
            type: 'string',
            example: '+91'
          }
        }
      }
    }
  ]