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
  httpPath: '/orders',
  operationId: 'getOrders',
};

export const tool: Tool = {
  name: 'list_orders',
  description: 'Retrieve a list of orders in the system with pagination support',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Maximum number of items to return',
      },
      offset: {
        type: 'integer',
        description: 'Number of items to skip',
      },
    },
  },
};

export const handler = async (client: Ordersapi, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.orders.list(body));
};

export default { metadata, tool, handler };
