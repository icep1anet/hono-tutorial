const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const { logger } = require('hono/logger');
const { html } = require('hono/html');

const app = new Hono();
app.use(logger())

app.get('/', (c) => {
  const name = c.req.query('name') ?? 'ゲスト';
  return c.html(html`
    <!doctype html>
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <p>これは Hono のサンプルアプリケーションです。</p>
        <p>こんにちは、${name} さん！</p>
      </body>
    </html>
  `);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});