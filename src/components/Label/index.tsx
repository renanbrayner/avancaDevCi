import * as React from "react";
import './index.css';
interface ILabelProps {

};
export const Label: React.FC<ILabelProps> = ({ children }) => {
	return (
		<div className="Label">
			{ children }
		</div>
	);
};
