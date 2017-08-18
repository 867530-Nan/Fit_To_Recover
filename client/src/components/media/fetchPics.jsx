import React from 'react';
import { connect } from 'react-redux';
import Gallery from './gallery';
import { Route } from 'react-router-dom'
import { Loader, Segment, Dimmer } from 'semantic-ui-react';
import axios from 'axios'
import { getPhotos } from '../../actions/photos'

class FetchPics extends React.Component {
	state = { loaded: false }

	componentDidMount(){
		this.props.dispatch(getPhotos(this.setLoaded))
	}

	setLoaded = () => {
		this.setState({ loaded: true })
	}

	render() {
		let { loaded } = this.state;
		if(loaded) {
			return (
				<div> 
					<Route exact path="/gallery" component={Gallery} />
				</div>
				)
		} else {
			return (
				<Segment>
					<Dimmer active>
						<Loader style={{height: '300px'}} />
						<div>loading</div>
					</Dimmer>
				</Segment>
			)
		}
	}
}

export default connect()(FetchPics);