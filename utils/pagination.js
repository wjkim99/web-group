export function getItemsFromAll(list, page, limit) {

	if(list === undefined || list === null) {
		return [];
	}

	const result = [];

	const min = limit * page - limit;
	const max = limit * page - 1;

	for(let i=0; i<list.length; i++) {
		if(i >= min && max >= i) {
			result.push(list[i]);
		}
	}

	return result;

}