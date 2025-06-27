// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'ordersapi-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Retrieve details of a specific order by ID',
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Ordersapi, args: Record<string, unknown> | undefined) => {
  const { orderId, ...body } = args as any;
  return asTextContentResult(await client.orders.retrieve(orderId));
};

export default { metadata, tool, handler };
