export const updateElementInArray = (array, id, values) => {
	return array.map( (element) => {
	  if(element.id == id){
		return { ...element, ...values }
	  } else {
		return element
	  }
	})
}