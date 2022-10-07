import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

function ButtonNext({ nextSlide }) {
	return (
		<button className='next' onClick={nextSlide}>
			<FiChevronRight />
		</button>
	)
}
export default ButtonNext
