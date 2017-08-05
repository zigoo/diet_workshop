export function sendDateToStore(day=1) {
	return {
		type:'SELECTED_DATE',
		day
	}
}