export default function translateDate(date){
	const temp = date
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const dates = temp.split("/");
	const month = parseInt(dates[0]) - 1
	console.log(dates)

	return months[month] + " "+dates[1] +",20"+dates[2]
}