import * as React from 'react';
import './index.css';

interface ICoinProps {
	coin: string;
	oldPrice: number;
	currentPrice: number;
};

export const Coin: React.FC<ICoinProps> = ({ coin, oldPrice, currentPrice }) => {
   const classes = ['Coin'];
   if (oldPrice < currentPrice) classes.push('up')
   if (oldPrice > currentPrice) classes.push('down')
	return (
	   <div className={classes.join(' ')}>
			<span>{coin}</span>
			<span>R$ {currentPrice.toLocaleString()}</span>
		</div>
	);
};
