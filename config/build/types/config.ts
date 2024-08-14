type BuildMode = 'production' | 'development';
export type BuildPaths = {
	entry: string;
	build: string;
	html: string;
	src?: string;
};

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	bail?: boolean;
	isDev: boolean;
	isBuild?: boolean;
	port?: number;
}
