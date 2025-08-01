// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'ordersapi-mcp/filtering';
import { Metadata, asTextContentResult } from 'ordersapi-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Ordersapi from 'ordersapi';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/orders/{orderId}',
  operationId: 'getOrder',
};

export const tool: Tool = {
  name: 'retrieve_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve details of a specific order by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order',\n  $defs: {\n    order: {\n      type: 'object',\n      description: 'Object representing an order in the system.',\n      properties: {\n        createdAt: {\n          type: 'string',\n          description: 'The date and time when the order was created',\n          format: 'date-time'\n        },\n        orderId: {\n          type: 'string',\n          description: 'The unique identifier for the order'\n        },\n        products: {\n          type: 'array',\n          description: 'The list of products in the order',\n          items: {\n            type: 'object',\n            description: 'Object representing a product in the system.',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'The name of the product'\n              },\n              price: {\n                type: 'number',\n                description: 'The price of the product'\n              },\n              remarks: {\n                type: 'string',\n                description: 'Additional remarks or description about the product'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the product'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'The date and time when the product information was last updated',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the order',\n          enum: [            'OrderPending',\n            'OrderProcessing',\n            'OrderShipped',\n            'OrderDelivered',\n            'OrderCancelled'\n          ]\n        },\n        totalAmount: {\n          type: 'number',\n          description: 'The total amount of the order'\n        },\n        user: {\n          type: 'string',\n          description: 'The user who placed the order'\n        },\n        version: {\n          type: 'integer',\n          description: 'The version of the order'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'The date and time when the order was last updated',\n          format: 'date-time'\n        },\n        updates: {\n          type: 'array',\n          description: 'The list of updates made to the order',\n          items: {\n            type: 'object',\n            description: 'Object representing an update to an order.',\n            properties: {\n              handledBy: {\n                type: 'string',\n                description: 'The person or system who handled the update'\n              },\n              notes: {\n                type: 'string',\n                description: 'Additional notes or comments about the update'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'The date and time when the order was updated',\n                format: 'date-time'\n              }\n            }\n          }\n        }\n      },\n      required: [        'createdAt',\n        'orderId',\n        'products',\n        'status',\n        'totalAmount',\n        'user',\n        'version'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['orderId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Ordersapi, args: Record<string, unknown> | undefined) => {
  const { orderId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.orders.retrieve(orderId)));
};

export default { metadata, tool, handler };
