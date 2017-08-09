import React, { Component } from 'react'
import axios from 'axios'
import { Item, Segment, Divider } from 'semantic-ui-react'


const Testimonial = ({ id, author, date, subject, body }) => (

			<div>
				<Item className="entireTestimonial" style={styles.entireTestimonial}>
		      <Item.Content>
		        <Item.Header as="h3" className="testAuthor" style={styles.testAuthor}>{test.author}</Item.Header>
		        <Item.Extra as="h6" className="testDate" style={styles.testDate}>{test.date}</Item.Extra>
		        <Item.Meta as="h5"className="testSubject" style={styles.testSubject}>{test.subject}</Item.Meta>
		        <Item.Description as="h5" className="testBody" style={styles.testBody}>{test.body}</Item.Description>
		      </Item.Content>
		    </Item>
		    <Divider />
		  </div>
	)

export default Testimonial; 