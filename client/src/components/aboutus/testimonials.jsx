import React, { Component } from 'react'
import axios from 'axios'
import { } from 'react-router-dom'
import '../../styles/testimonials.css'
import { Button, Loader, Item, Segment } from 'semantic-ui-react'
import TestimonialForm from './TestimonialForm'
import TestimonialList from './TestimonialList'


class Testimonials extends Component {
	state = { testimonials: [], editToggle: false }

	componentDidMount() {
		axios.get('/api/testimonials')
			.then( testimonials => this.setState({ testimonials: testimonials.data }))
			console.log(4)
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
						<div className="testTopPhoto"> 
							<div className="pageHeader" style={styles.pageHeader}>Testimonials</div>
						</div>
						<div className="writeTestimonialButton" style={styles.writeTestimonialButton} onClick={this.toggleVisibility}>Write a Testimonial</div>
						<Segment padded raised>
							<TestimonialList testimonials={this.state.testimonials} />
						</Segment>
					</div>
			) 
			else 
				return (
					<div>
						<div className="top-padding" />
						<div className="testTopPhoto"> 
							<div className="pageHeader" style={styles.pageHeader}>Testimonials</div>
						</div>
						<div className="writeTestimonialButton" style={styles.writeTestimonialButton} onClick={this.toggleVisibility}>Write a Testimonial</div>
						<Segment padded raised>
							<TestimonialForm addTestimonial={this.addTestimonial}/>
						</Segment>
					</div>
		)
	}
}

const styles = {
	pageHeader: {
		fontSize: '8em',
		fontWeight: 300,
	},
}

export default Testimonials;