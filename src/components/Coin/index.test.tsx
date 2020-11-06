import React from 'react';
import {render, screen} from '@testing-library/react';
import {Coin} from './index';

it('Check coin label', () => {
	render(<Coin coin='BTC' currentPrice={0} oldPrice={10}/>)
	expect(screen.getByText('BTC'))
})
