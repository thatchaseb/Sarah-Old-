import axios from 'axios';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		playlistId: 'PLIoBOkqHphxahq2n1FmfGqjRxCR55FnHV',
		key: 'AIzaSyCSPzW35rTNCAj6VAkLuwxw5HO-WGATgl0'
	}
});