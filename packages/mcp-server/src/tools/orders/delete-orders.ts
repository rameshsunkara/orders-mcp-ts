// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'ordersapi-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Ordersapi from 'ordersapi';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/orders/{orderId}',
  operationId: 'deleteOrder',
};

export const tool: Tool = {
  name: 'delete_orders',
  description: 'Delete a specific order by ID',
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
  const response = await client.orders.delete(orderId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
