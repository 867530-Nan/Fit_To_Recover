import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/calendar.css'

class Calendar extends Component {

	state = { Calendar: [] }

	render() {
			return(
		<div className="backBrick" style={styles.googleContainer}>
				
				<iframe src="https://calendar.google.com/calendar/embed?title=FTR%20Events%20Calendar&amp;showNav=0&amp;showPrint=0&amp;showTz=0&amp;mode=AGENDA&amp;height=700&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=glcvge821o0rhi938tr32c9e5g%40group.calendar.google.com&amp;color=%236B3304&amp;ctz=America%2FDenver" 
								style={{border: '0'}}
								width="800" 
								height="700" 
								frameborder="0" 
								scrolling="no">
				</iframe>

		</div>
	)
	}
}

const styles = {
	googleContainer: {
		height: '100%', 
		paddingTop: '70px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export default Calendar;