import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'

class TestimonialForm extends Component {

	createTestimonial(e) {
		e.preventDefault();
		const test = {
			author:  this.author.value,
			date: this.date.value,
			subject: this.subject.value,
			body: this.body.value
		}
		this.props.addTestimonial(test);
	}



	render(){

		return(
			<div className="top-padding">
			<Form ref={(input) => this.testimonialForm = input} onSubmit={(e) => this.createTestimonial(e)}>
		    <Form.Group widths='equal' >
		      <Form.Field>
		      	<label>Name</label>
		      	<input
		      		ref={(input) => this.author = input}
		      		id='author'
							onChange={this.handleChange} 
							placeholder="What's your name?" 
		      		/>
		      </Form.Field>
		      <Form.Field>
		      	<label>Date</label>
		      	<input
		      		ref={(input) => this.date = input}
		      		id='date'
		      		onChange={this.handleChange} 
		      		placeholder='When Was This?' 
		      		/>
		      </Form.Field>
		    </Form.Group>
		    <Form.Field>
			    <label>Subject</label>
			    <input
			    	ref={(input) => this.subject = input}
			    	required 
			    	id="subject"
			    	onChange={this.handleChange} 
			    	placeholder='Subject' />
		    </Form.Field>
		    <Form.Field>
		    	<label>Share Message Below</label>
		    	<input 
		    	ref={(input) => this.body = input}
	    		id='body'
	    		required 
	    		onChange={this.handleChange} 
	    		placeholder='Share your experience with FTR'
	    		/>
	    	</Form.Field>
		    	<Form.Button 
			    	id='submit'
			    	type='submit'
			    	control={Button} 
			    	content='Confirm' 
			    	> Submit
			    </Form.Button>
		   </Form>
		   </div>
		)
	}
  
}

TestimonialForm.proptypes = {
	addTestimonial: React.PropTypes.func.isRequired
}


export default TestimonialForm;




