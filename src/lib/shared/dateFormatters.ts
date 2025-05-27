const format = (
	date: string | undefined,
	includeTime: boolean = false
) => {
	if (!date) {
		return '-';
	}

	const dateObject = new Date(date);

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	};

	if (includeTime) {
		options.hour = '2-digit';
		options.minute = '2-digit';
		options.hour12 = false;
	}

	return new Intl.DateTimeFormat('en-NZ', options).format(dateObject);
};

export const formatDateTimeTimezone = (date: string | undefined) => {
	return format(date, true);
};

export const formatDate = (date: string | undefined) => {
	return format(date, false);
};