import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import React from 'react'

export default function JumbotronExample() {
	return (
		<div>
			<Jumbotron bsPrefix='jumbotron'>
				<h1>Test</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Ullam, at.
				</p>
				<Button variant='secondary'>Learn more</Button>
			</Jumbotron>

			<Jumbotron fluid>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
				</Container>
			</Jumbotron>
		</div>
	)
}
