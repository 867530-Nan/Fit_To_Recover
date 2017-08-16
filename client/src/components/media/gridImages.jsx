import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class gridImages extends Component {

	state = {}
	
			displayImages = () => {
				this.props.displayImages.map( pic => {
					<Grid columns={15}>
			      <Grid.Column mobile={15} tablet={5} computer={3}>
			        <Image src={pic.link} />
			      </Grid.Column>
			  	</Grid>
				})
			}

			render() {
				return(
					<div>
					{this.displayImages}
					</div>
				)
			}
}

export default gridImages;
