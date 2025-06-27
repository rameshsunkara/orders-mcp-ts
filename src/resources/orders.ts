// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Create a new order in the system
   *
   * @example
   * ```ts
   * const order = await client.orders.create({
   *   products: [
   *     { name: 'Product A', price: 10.99, quantity: 2 },
   *     { name: 'Product B', price: 11.99, quantity: 1 },
   *   ],
   * });
   * ```
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<Order> {
    return this._client.post('/orders', { body, ...options });
  }

  /**
   * Retrieve details of a specific order by ID
   *
   * @example
   * ```ts
   * const order = await client.orders.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(orderID: string, options?: RequestOptions): APIPromise<Order> {
    return this._client.get(path`/orders/${orderID}`, options);
  }

  /**
   * Update details of a specific order by ID
   *
   * @example
   * ```ts
   * const order = await client.orders.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     products: [
   *       {
   *         name: 'Product B',
   *         price: 15.99,
   *         status: 'available',
   *         remarks: 'Great product',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  update(orderID: string, body: OrderUpdateParams, options?: RequestOptions): APIPromise<Order> {
    return this._client.put(path`/orders/${orderID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/merge-patch+json' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of orders in the system with pagination support
   *
   * @example
   * ```ts
   * const orders = await client.orders.list();
   * ```
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get('/orders', { query, ...options });
  }

  /**
   * Delete a specific order by ID
   *
   * @example
   * ```ts
   * await client.orders.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(orderID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/orders/${orderID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Object representing an order in the system.
 */
export interface Order {
  /**
   * The date and time when the order was created
   */
  createdAt: string;

  /**
   * The unique identifier for the order
   */
  orderId: string;

  /**
   * The list of products in the order
   */
  products: Array<Order.Product>;

  /**
   * The status of the order
   */
  status: 'OrderPending' | 'OrderProcessing' | 'OrderShipped' | 'OrderDelivered' | 'OrderCancelled';

  /**
   * The total amount of the order
   */
  totalAmount: number;

  /**
   * The user who placed the order
   */
  user: string;

  /**
   * The version of the order
   */
  version: number;

  /**
   * The date and time when the order was last updated
   */
  updatedAt?: string;

  /**
   * The list of updates made to the order
   */
  updates?: Array<Order.Update>;
}

export namespace Order {
  /**
   * Object representing a product in the system.
   */
  export interface Product {
    /**
     * The name of the product
     */
    name?: string;

    /**
     * The price of the product
     */
    price?: number;

    /**
     * Additional remarks or description about the product
     */
    remarks?: string;

    /**
     * The status of the product
     */
    status?: string;

    /**
     * The date and time when the product information was last updated
     */
    updatedAt?: string;
  }

  /**
   * Object representing an update to an order.
   */
  export interface Update {
    /**
     * The person or system who handled the update
     */
    handledBy?: string;

    /**
     * Additional notes or comments about the update
     */
    notes?: string;

    /**
     * The date and time when the order was updated
     */
    updatedAt?: string;
  }
}

/**
 * Object representing the input data for creating or updating an order.
 */
export interface OrderInput {
  /**
   * The list of products in the order
   */
  products: Array<OrderInput.Product>;
}

export namespace OrderInput {
  /**
   * Object representing the input data for creating or updating a product belonging
   * to an order.
   */
  export interface Product {
    /**
     * The name of the product
     */
    name?: string;

    /**
     * The price of the product
     */
    price?: number;

    /**
     * No.of items
     */
    quantity?: number;
  }
}

export type OrderListResponse = Array<Order>;

export interface OrderCreateParams {
  /**
   * The list of products in the order
   */
  products: Array<OrderCreateParams.Product>;
}

export namespace OrderCreateParams {
  /**
   * Object representing the input data for creating or updating a product belonging
   * to an order.
   */
  export interface Product {
    /**
     * The name of the product
     */
    name?: string;

    /**
     * The price of the product
     */
    price?: number;

    /**
     * No.of items
     */
    quantity?: number;
  }
}

export interface OrderUpdateParams {
  /**
   * The list of products in the order
   */
  products: Array<OrderUpdateParams.Product>;
}

export namespace OrderUpdateParams {
  /**
   * Object representing the input data for creating or updating a product belonging
   * to an order.
   */
  export interface Product {
    /**
     * The name of the product
     */
    name?: string;

    /**
     * The price of the product
     */
    price?: number;

    /**
     * No.of items
     */
    quantity?: number;
  }
}

export interface OrderListParams {
  /**
   * Maximum number of items to return
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;
}

export declare namespace Orders {
  export {
    type Order as Order,
    type OrderInput as OrderInput,
    type OrderListResponse as OrderListResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
  };
}
