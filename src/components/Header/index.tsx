import * as React from 'react';
import { cryptoHttp } from '../../http';
import { Coin } from '../Coin';
import './index.css';
interface IHeaderProps {
	onSelected: (coin: string) => void;
}

interface Price {
	[key: string]: { oldPrice: number, currentPrice: number };
}

const ALL_PRICES: Price = {
	BTC: {oldPrice: 0, currentPrice: 0},
	LTC: {oldPrice: 0, currentPrice: 0},
};

export const Header: React.FC<IHeaderProps> = ({ onSelected }) => {
	const [prices, setPrices] = React.useState<Price>(ALL_PRICES);
	React.useEffect(() => {
		const intervals = Object.keys(ALL_PRICES).map((coin) => {
			return setInterval(() => {
				cryptoHttp.get(`price?fsym=${coin}&tsyms=BRL`).then((res) => {
					setPrices((prevState) => {
						if (prevState[coin].currentPrice === res.data.BRL) {
							return prevState
						}
						return {
							...prevState,
							[coin]: {
								oldPrice: prevState[coin].currentPrice,
								currentPrice: res.data.BRL
							}
						}
					})
				})
			}, 5000)
		})
		return () => {
			intervals.forEach(interval => clearInterval(interval))
		}
	},[])
	return (
		<div className="Header">
			{
				Object.keys(prices).map((coin) => (
					<div onClick={() => onSelected(coin)}>
						<Coin
							key={coin}
							coin={coin}
							oldPrice={prices[coin].oldPrice}
							currentPrice={prices[coin].currentPrice}
						/>
					</div>
				))
			}
		</div>
	)
}
