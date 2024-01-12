import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import { Layout } from './components';
import { etag } from 'hono/etag';

const STATIC_JS_PATH = '/static/js';

const app = new Hono();
app.use('*', etag());

app.use('/static/*', serveStatic({ root: './' }));
app.use('/favicon.ico', serveStatic({ path: './static/favicon.ico' }));

app.get('/', (c) => {
	const js = `${STATIC_JS_PATH}/changeBgColor.js`;
	return c.html(
		<Layout>
			<div id='abc'>Hello</div>
			<script src={js}></script>
		</Layout>
	);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
