import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import path from 'path';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: 'bundle.[hash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins({ paths }),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	};
}
