import React, { Component } from 'react'
import axios from 'axios'
import { } from 'react-router-dom'
import '../../styles/testimonials.css'
import { Button } from 'semantic-ui-react'
import TestimonialForm from './TestimonialForm'
import TestimonialList from './TestimonialList'


class Testimonials extends Component {
	state = { testimonials: [], editToggle: false }

	componentWillMount() {
		axios.get('/api/testimonial')
			.then( res => res.json() )
			.then( testimonials => this.setState({ testimonials }))
	}

	toggleVisibility = () => this.setState({editToggle: !this.state.editToggle})

	addTestimonial = () => {

	}

	render() {
			if (this.state.editToggle === false)
				return (
					<div>
						<div className="top-padding" />
						<TestimonialList testimonials={this.state.testimonials} />
						<Button onClick={this.toggleVisibility}>Write a Testimonial</Button>
					</div>
			) 
			else 
				return (
					<div>
						<TestimonialForm addTestimonial={this.addTestimonial}/>
						<Button onClick={this.toggleVisibility}>Write a Testimonial</Button>
					</div>
		)
	}
}

export default Testimonials;