import React, { Component } from 'react'
import axios from 'axios'
import { Item } from 'semantic-ui-react'

const TestimonialList = ({ testimonials }) => (
	<div className="testimonials">
		{ testimonials.map( test => 
		    <Item>
		      <Item.Content>
		        <Item.Header>{test.author}</Item.Header>
		        <Item.Extra>{test.date}</Item.Extra>
		        <Item.Meta>{test.subject}</Item.Meta>
		        <Item.Description>{test.body}</Item.Description>
		      </Item.Content>
		    </Item>
			)
		}
	</div>
	)


export default TestimonialList;



