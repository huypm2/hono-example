import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import { Layout } from './components';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }));
app.use('/favicon.ico', serveStatic({ path: './static/favicon.ico' }));

app.get('/', (c) => {
	return c.html(
		<Layout>
			<h1>Hello Hono!</h1>
		</Layout>
	);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
