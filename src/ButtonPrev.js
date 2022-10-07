import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'

function ButtonPrev({ prevSlide }) {
	return (
		<button className='prev' onClick={prevSlide}>
			<FiChevronLeft />
		</button>
	)
}

export default ButtonPrev
