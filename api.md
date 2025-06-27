# Orders

Types:

- <code><a href="./src/resources/orders.ts">Order</a></code>
- <code><a href="./src/resources/orders.ts">OrderInput</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>

Methods:

- <code title="post /orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> Order</code>
- <code title="get /orders/{orderId}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(orderID) -> Order</code>
- <code title="put /orders/{orderId}">client.orders.<a href="./src/resources/orders.ts">update</a>(orderID, { ...params }) -> Order</code>
- <code title="get /orders">client.orders.<a href="./src/resources/orders.ts">list</a>({ ...params }) -> OrderListResponse</code>
- <code title="delete /orders/{orderId}">client.orders.<a href="./src/resources/orders.ts">delete</a>(orderID) -> void</code>
