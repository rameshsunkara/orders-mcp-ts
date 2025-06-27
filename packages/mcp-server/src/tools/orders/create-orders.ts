// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'ordersapi-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Ordersapi from 'ordersapi';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/orders',
  operationId: 'createOrder',
};

export const tool: Tool = {
  name: 'create_orders',
  description: 'Create a new order in the system',
  inputSchema: {
    type: 'object',
    properties: {
      products: {
        type: 'array',
        description: 'The list of products in the order',
        items: {
          type: 'object',
          description:
            'Object representing the input data for creating or updating a product belonging to an order.',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the product',
            },
            price: {
              type: 'number',
              description: 'The price of the product',
            },
            quantity: {
              type: 'number',
              description: 'No.of items',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = async (client: Ordersapi, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.orders.create(body));
};

export default { metadata, tool, handler };
