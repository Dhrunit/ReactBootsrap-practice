import React from 'react'

function Color() {
	return (
		<div>
			<h1 className='text-primary'>Primary</h1>
			<h1 className='text-secondary'>Secondary</h1>
			<h1 className='text-success'>Success</h1>
			<h1 className='text-warning'>Warning</h1>
			<h1 className='text-danger'>Danger</h1>
			<h1 className='text-info'>Info</h1>
			<h1 className='text-success bg-primary'>Primary</h1>
			<h1 className='text-white bg-warning'>Primary</h1>
		</div>
	)
}

export default Color
