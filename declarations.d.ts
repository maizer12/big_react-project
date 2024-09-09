declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.png' {
	const value: string;
	export default value;
}

declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.jpeg' {
	const value: string;
	export default value;
}

declare module '*.gif' {
	const value: string;
	export default value;
}

declare module '*.svg' {
	const value: string;
	export default value;
}

declare const __IS_DEV__: boolean;
