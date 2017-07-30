export function sendDateToStore(date=new Date()) {
	return {
		type:'SELECTED_DATE',
		date
	}
}