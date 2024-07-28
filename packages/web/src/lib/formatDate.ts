export function formatDate(date: Date | string | undefined) {
	return new Date(Date.parse(date?.toString() || '')).toDateString();
}
