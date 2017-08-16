import React, { Component } from 'react'
import { } from 'react-router-dom'
import { Button, Grid, Image } from 'semantic-ui-react'
import axios from 'axios'
import 'instagram-api'
import gridImages from './gridImages'


class Gallery extends Component {
	state = { photos: [] }


	componentDidMount(){
		axios.get('api/instagram/index')
		.then( res => this.setState({ photos: res.data.data }))
	}

	displayImages = () => {

		return this.state.photos.map( pic =>
	        <Image src={pic.images.standard_resolution.url} />
		)
}


	render() {
		return (
			<div>
				<div class="buttons">
					
						<div >
							<h3 class="member-donate">For membership information,<br />click below</h3>
								<Button class="membership-button" href="https://clients.mindbodyonline.com/classic/home?studioid=280495" target="_blank">Membership</Button>
						</div>

						<Grid>
							<Grid.Column mobile={15} tablet={5} computer={3}>
								{this.displayImages()}
							</Grid.Column>
						</Grid>

						<div class="top-buttons buttons-border2">
							<h3 class="member-donate"> Show FTR your support,<br />Click Below</h3>
							<Button href="https://www.paypal.com/donate/?token=iQaCZ1u_TuFESKY_Up7BmG9vD1990sd-Bfn3Py1DGqR7rulNpDoxvSoLi46zMEzUFfpbKm" class="donate-button" target="_blank">Donate</Button>
					</div>	
				
			</div>
			</div>

		)
	}
}

export default Gallery;