import axios from 'axios';

const unsplash = axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID Cbnnt3P_k_kpmL3PGhVPNr9IebiZlbq7z67UlWXFtxk',
	},
});

const getImages = async (term) => {
	return await unsplash.get('search/photos', {
		params: { query: term },
	});
};

export { getImages };
