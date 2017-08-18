import axios from 'axios'

export const getPhotos = (cb) => {
	return(dispatch) => {
		axios.get('api/instagram/index')
		.then( res => dispatch({ type: 'PHOTOS', photos: res.data.data }) )
		.then( cb() )
	}
}