import axios from 'axios';

const axiosGetInstance = axios.create({
	headers: {
		Authorization: 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875'
		// "Content-Type": " application/json"
	},
	params: {
		bilo: 'sta'
	},
	baseURL: 'https://sandboxapi.g2a.com/v1/products',
	method: 'get'
});

export default axiosGetInstance;
