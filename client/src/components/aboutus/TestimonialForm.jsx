import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'

class TestimonialForm extends Component {
	state = { author: '', date: '', subject: '', body: '' }

	handleChange = (e) => {
		const id = e.target.id;
		const value = e.target.value
		this.setState({ [id]: value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.post('api/testimonial', this.state)
	}




	render(){

		const { author, date, body, subject } = this.state;

		return(
			<div className="top-padding">
			<Form onSubmit={this.handleSubmit}>
		    <Form.Group widths='equal' onSubmit={this.handleSubmit} >
		      <Form.Field>
		      	<label>Name</label>
		      	<input
		      		id='author'
			    		value={author} 
							onChange={this.handleChange} 
							placeholder="What's your name?" 
		      		/>
		      </Form.Field>
		      <Form.Field>
		      	<label>Date</label>
		      	<input
		      		id='date'
		      		value={date} 
		      		onChange={this.handleChange} 
		      		placeholder='When Was This?' 
		      		/>
		      </Form.Field>
		    </Form.Group>
		    <Form.Field>
			    <label>Subject</label>
			    <input 
			    	required 
			    	id="subject"
			    	value={subject} 
			    	onChange={this.handleChange} 
			    	placeholder='Subject' />
		    </Form.Field>
		    <Form.TextArea
		    		id='body'
		    		required 
		    		value={body} 
		    		onChange={this.handleChange} 
		    		placeholder='Share your experience with FTR'
		    		/>
		    <Segment>
		    	<Button 
			    	id='submit'
			    	type='submit'
			    	control={Button} 
			    	content='Confirm' 
			    	> Submit
			    </Button>
			   </Segment>
		   </Form>
		   </div>
		)
	}
  
}


export default TestimonialForm;




