import React, { Component } from 'react'
import {  } from 'react-router-dom'
import '../../styles/communityservice.css'
import axios from 'axios'
import { Card, Button, Grid, Image, Modal, Icon } from 'semantic-ui-react'

class CommunityService extends Component {
	state = { photos: [] }

	componentDidMount() {
		axios.get('api/instagram/service')
		.then( res => this.setState({ photos: res.data.data }) )
	}

	displayImages = () => {
		return this.state.photos.map( pic => 
			<Grid.Column computer={4} mobile={16} tablet={8} >
				<div style={styles.instaPics}>
					<Modal
						style={styles.modalInsta}
				    trigger={<Image shape='circular' className="singleInsta" src={pic.images.standard_resolution.url} />}
				  >
		      		<Image shape='circular' src={pic.images.standard_resolution.url} />
		      </Modal>
		    </div>
			</Grid.Column>
		)
	}

	render() {
		return (
<div>
		<div style={{paddingTop: '55px'}}/>

		<div className="communityServiceHeaderPhoto">
			<div className="communityServiceText">	
				<div className="communityServiceHeaderTitle" style={styles.communityServiceHeaderTitle}>FTR Community Service</div>
				<div className="communityServiceHeaderShort" style={styles.communityServiceHeaderShort}>To step outside ourselves, our issues, and give back without expectations</div>
			</div>
		</div>

		<div className="whatWeDo" style={styles.whatWeDo}>
			<div className="whatWeDoLeft">
				<div className="whatWeDoText">How We Serve:</div>
			</div>
			<div className="whatWeDoRight">
				<div className="serviceMeansText">At FTR,<br />Service means reaching out to strangers, picking up after yourself, giving someone a ride, or simply cleaning the gym.</div>
				<div className="serviceMeansTreat">Treating others the way you want to be treated, at all times.</div>
				<div className="serviceMeansTreat">Volunteer efforts are eligible towards community service credit.</div>
			</div>
		</div>

		<div style={styles.serviceInstaTitle} href="https://www.instagram.com/fit_2recover_service/">-- @fit_2Recover_service -- </div>
		<Grid className="instaGrid" style={{height: '340px', width: '100%'}}>
			{ this.displayImages() }
		</Grid>	

		<div className="alwaysHappening">
			<a className="aService" href="mailto:ftr@fit2recover.org">
				Service opportunities are always happening, please email us for more information
				<Icon name="mail outline" style={{marginLeft: '15px'}} color='white' />
			</a>
		</div>

		<div style={styles.whereWe} className="hidden-xs">
			<div style={styles.whereWeWords}>
				In Recovery, dedicating time &amp; effort to a greater cause, without any personal gain, it allows us to change our mentality of the self-seeking thoughts | actions we once had.
			</div>
		</div>

		<div style={styles.womensGroup}>
			<div className="womensGroupTitle" style={styles.womensGroupTitle}>
				Women's Group
			</div>
			<div className="womensGroupWords" style={styles.womensGroupWords}>
				Providing a safe place for women to discuss issues, receive feedback, and share experiences of strength and hope with other women. 
				It is crucial to form bonds and friendships with other women in recovery.<br /><br /> Thursdays: 7-8pm @ FTR
			</div>
		</div>

</div>
		)
	}
}

const styles = {
	communityServiceHeaderTitle: {
		fontFamily: 'Raleway'
	},
	modalInsta: {
		height: '500px',
		width: '500px',
		marginTop: '-250px',
    marginLeft: '-250px',
	},
	communityServiceHeaderShort: {
		fontFamily: 'Raleway',
		fontweight: 500,
		fontStyle: 'italic',
	},
	whatWeDo: {
		height: '300px',
		display: 'flex',
	},
	serviceInstaTitle: {
		height: '60px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '24px',
	},
	whereWe: {
		height: '200px',
		display: 'flex',
		padding: '0 50px',
		alignItems: 'center',
    textAlign: 'center',
    lineHeight: '1',
	},
	womensGroup: {
		textAlign: 'center',
		height: '200px',
		display: 'flex', 
	},
	whereWeWords: {
		fontSize: '36px',
		color: '#8A0035'
	},
	womensGroupTitle: {
		backgroundColor: '#4FA2BA',
		color: 'white',
		width: '35%',
		alignSelf: 'center',
		height: '100%',
		fontSize: '28px',
		padding: '80px 0',
		lineHeight: '1',
	},
	womensGroupWords: {
		backgroundColor: '#034E63',
		color: 'white',
		width: '100%',
		alignSelf: 'center',
		height: '100%',
		fontSize: '20px',
		padding: '60px 20px 0px 20px'
	}
}

export default CommunityService;