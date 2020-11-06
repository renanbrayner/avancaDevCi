import axios from 'axios';

const apiKey = 'aade15949343f2dc53cf2e372cab3a91c048205f19bad60953899c4822895fee'

export const cryptoHttp = axios.create({
	baseURL: 'https://min-api.cryptocompare.com/data',
	headers: {
		authorization: `Apikey ${apiKey}`
	}
});
