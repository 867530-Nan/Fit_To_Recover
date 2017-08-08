import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/philosophy.css'
import { Grid } from 'semantic-ui-react'

class Philosophy extends Component {
	render() {
		return (
<div>
			<div className="top-padding"></div>

			<div className="sugar-house-group-photo col-md-12">
				<h1 style={styles.headline} className="philosophyHeadline">Our Philosophy</h1>
			</div>

			<div className="established" style={styles.established}>
				<div class="col-md-12 col-sm-12 col-xs-12">
					<h2 style={styles.estWords}>At Fit to Recover, we support one another in physical activity, community gatherings, nutritional support, and creative endeavors.</h2>
				</div>
			</div>

			<Grid columns={2} divided>
					<Grid.Row className="uniquePath">
						<Grid.Column class="path" style={styles.uniquePath}>
							<h4 style={styles.uniquePathWords}>Each Individual is Unique</h4>
						</Grid.Column>
						<Grid.Column class="path" style={styles.uniquePath}>
							<h4 style={styles.uniquePathWords}>Following a Personal Path</h4>
						</Grid.Column>
					</Grid.Row>
			</Grid>

			<div className="diverse-group">
				<h4 style={styles.story}>- We All Have a Story to Tell -</h4>
			</div>

			<div style={styles.together}>
				<h4 style={styles.togetherWords}>Consistency + Passion = Purpose</h4>
			</div>

			<div style={styles.pillarOverview}>
				<p>Our physical fitness is measured by progress toward individually set goals. Whether in the gym or on the field, We are mutually-supportive and win every game, regardless of the final score. We meet around the community and stare down our challenges, together.</p>

				<p>Sport and exercise are balanced by creative and artistic endeavors. Many of us live on beats and raps, and there are lots of visual and word artists amongst us to round out our community. Some of our work will be shared on this website in the upcoming months.</p>
			</div>

			<div style={styles.moreInfo}>
				<h4 style={styles.moreInfoWords}>For Membership Information click on <span style={styles.philosophyMindBody}>MindBody</span> below</h4>
			</div>

</div>				
		)
	}
}

let styles = {
	headline: {
		fontSize: '8em',
		fontWeight: 200,
	},
	established: {
		width: '1079px',
		height: '180px',
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'red',
		alignItems: 'center',
		margin: 'auto',
		padding: '60px 60px 60px 60px',
		textAlign: 'center',
		color: 'white'
	},
	estWords: {
		fontSize: '26px',
		fontWeight: 300,
	},
	uniquePath: {
		height: '180px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'black',
	},
	uniquePathWords: {
		fontSize: '46px',
		fontWeight: 300,
	},
	story: {
		fontSize: '75px',
		fontFamily: 'Lato',
		fontWeight: '300',
		textAlign: 'center',
		color: 'red',
		textShadow: '2px 2px #999695',
	},
	together: {
		height: '100px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	togetherWords: {
		fontFamily: 'Lato',
		fontSize: '40px',
		fontWeight: 300,
		textAlign: 'center',
	},
	pillarOverview: {
		padding: '0 50px',
		textAlign: 'center',
		fontSize: '18px',
	},
	moreInfo:{
		height: '150px',
		display: 'Flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	moreInfoWords: {
		fontSize: '30px',
		fontWeight: 300,
	},
	philosophyMindBody: {
		fontWeight: 700,
	},
}

export default Philosophy;
















