import React, { Component } from 'react'
import axios from 'axios'
import { } from 'react-router-dom'
import '../../styles/testimonials.css'
import { Button, Loader, Item } from 'semantic-ui-react'
import TestimonialForm from './TestimonialForm'
import TestimonialList from './TestimonialList'


class Testimonials extends Component {
	state = { testimonials: [], editToggle: false }

	componentDidMount() {
		axios.get('/api/testimonials')
			.then( testimonials => this.setState({ testimonials: testimonials.data }))
			console.log(4)
	}

	displayTestimonials = () => {
		this.state.testimonials.map( test => {
				<Item>
		      <Item.Content>
		        <Item.Header>{test.author}</Item.Header>
		        <Item.Extra>{test.date}</Item.Extra>
		        <Item.Meta>{test.subject}</Item.Meta>
		        <Item.Description>{test.body}</Item.Description>
		      </Item.Content>
		    </Item>
		})
	}

	setLoaded = () => {
    this.setState({ loaded: true });
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