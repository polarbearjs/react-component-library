import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../webpack.config.library';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: '/dist',
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  filename: 'app.js',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  headers: { 'X-Custom-Header': 'yes' },
  stats: { colors: true },
});

server.listen(
  process.env.PORT || 8080,
  'localhost',
);
