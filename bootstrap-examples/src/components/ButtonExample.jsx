import React from 'react'
import Button from 'react-bootstrap/Button'
function ButtonExample() {
	return (
		<div>
			<h2 className='display-4'>Regular buttons</h2>
			<Button variant='primary'>Primary</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='success'>Success</Button>
			<Button variant='warning'>Warning</Button>
			<Button variant='danger'>Danger</Button>
			<Button variant='info'>Info</Button>
			<Button variant='light'>Light</Button>
			<Button variant='dark'>Dark</Button>
			<Button variant='link'>Link</Button>
			<h2 className='display-4'>Outline buttons</h2>
			<Button variant='outline-primary'>Primary</Button>{' '}
			<Button variant='outline-secondary'>Secondary</Button>{' '}
			<Button variant='outline-success'>Success</Button>{' '}
			<Button variant='outline-warning'>Warning</Button>{' '}
			<Button variant='outline-danger'>Danger</Button>{' '}
			<Button variant='outline-info'>Info</Button>{' '}
			<Button variant='outline-light'>Light</Button>{' '}
			<Button variant='outline-dark'>Dark</Button>
			<h2 className='display-'>Block Buttons</h2>
			<Button variant='primary' size='lg' block>
				Block level button
			</Button>
			<Button className='bg-success' size='lg' block>
				Block level button
			</Button>
		</div>
	)
}

export default ButtonExample
