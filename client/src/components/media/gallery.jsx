import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';
import axios from 'axios'


class Gallery extends Component {
	state = { photos: [ ] }

	componentDidMount(){
		axios.get('/api/instagram/index')
		.then( res => this.setState({ photos: res.data }))
		.catch(err => console.log(err))
	}



	render() {
		return (
			<div>
				<div class="buttons">
					
						<div >
							<h3 class="member-donate">For membership information,<br />click below</h3>
								<Button class="membership-button" href="https://clients.mindbodyonline.com/classic/home?studioid=280495" target="_blank">Membership</Button>
						</div>

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