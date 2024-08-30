type Mode = Record<string, boolean | string>;

export const cn = (classNames: string, mode: Mode, additional?: string[]) => {
	const getClasses = Object.entries(mode)
		.filter(([_, value]) => Boolean(value))
		.map(([key]) => key);

	return [classNames, ...getClasses, ...(additional || [])].join(' ');
};
