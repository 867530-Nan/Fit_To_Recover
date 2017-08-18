import {browserHistory} from 'react-router';

const photos = (state = [], action ) => {
	switch(action.type) {
		case 'PHOTOS':
			return action.photos
		default: 
			return state;
	}
}

export default photos;