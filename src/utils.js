export const shuffle = arr => {
	let cur = arr.length
	let temp
	let rand
	while (0 !== cur) {
		rand = Math.floor(Math.random() * cur)
		cur--
		temp = arr[cur]
		arr[cur] = arr[rand]
		arr[rand] = temp
	}
	return arr
}