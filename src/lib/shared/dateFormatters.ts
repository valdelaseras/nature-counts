export const formatDateTimeTimezone = (date: string | undefined) => {
	if (!date) {
		return '-';
	}

	const dateObject = new Date(date);

	return new Intl.DateTimeFormat('en-NZ', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	}).format(dateObject);
};


export const formatDate = (date: string | undefined) => {
	if (!date) {
		return '-';
	}

	const dateObject = new Date(date);

	return new Intl.DateTimeFormat('en-NZ', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	}).format(dateObject);
};