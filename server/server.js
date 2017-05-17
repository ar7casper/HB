const express = require('express');
const app = express();
const path = require('path');

const port = 1212;
const env = process.env.NODE_ENV;

console.log('process.env.NODE_ENV', env);
console.log('listening on port ' + port);
console.log('__dirname', __dirname);

app.use((req, res, next) => {
	console.log(`Something is happening on ${port}`);
	next();
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use('/static', express.static(path.join(__dirname, '/static')));

if (env === 'development') {
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('../webpack.config');
	const compiler = webpack(webpackConfig);
	
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath // Same as `output.publicPath` in most cases.
	}));
	app.use(webpackHotMiddleware(compiler));
}

app.use('/*', (req, res) => {
	res.render('index');
});

app.listen(port, (err) => {
	if (err) {
		console.log('err', err);
	}
});