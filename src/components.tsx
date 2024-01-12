import { html } from 'hono/html';

export const Layout = (props: { children: any }) => html`
	<!DOCTYPE html>
	<html data-theme="light">
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<script src="./static/htmx.min.js"></script>
			<script src="./static/jquery-3.7.1.min.js"></script>
			<link rel="stylesheet" href="./static/output.css" />
			<title>Hono example</title>
		</head>
		<body>
			${props.children}
		</body>
	</html>
`;
