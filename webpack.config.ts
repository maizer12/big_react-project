import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpack.config';
import path from 'path';
import { BuildPaths } from './config/build/types/config';

const buildPaths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
	mode,
	paths: buildPaths,
	isDev,
});

export default config;
