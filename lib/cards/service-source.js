/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = {
  slug: 'service-source',
  name: 'Source bundle for a service',
  type: 'type@1.0.0',
  data: {
    schema: {
      type: 'object',
      required: ['data'],
      properties: {
        data: {
          type: 'object'
        }
      }
    }
  }
}
