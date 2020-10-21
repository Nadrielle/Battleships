import React from 'react'

const Cell = (props) =>{
	let {x, y, cellStatus, onCellClick} = props;
	
	let status = null;

	switch(cellStatus){
		case 'Hit':
			status = <p>Hit</p>;
			break;

		case 'Sunk':
			status = <p>Sunk</p>;
			break;

		case 'Empty':
			status = <p>Empty</p>;
			break;
	}

	const onClick = (x, y) => {
		onCellClick(x, y);
	}

	return(
		<div key={x+'-'+y} className="cell" onClick={() => onClick(x, y)}>
			{
				x+'-'+y
			}
		</div>
	);
}

export default Cell;