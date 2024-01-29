import React from 'react';
import { tableData } from '../data';
import TableRow from './TableRow';

const Table = () => {
	return (
		<table className='table text-base-300'>
			<tbody>
				{tableData.map((tRow) => {
					return <TableRow key={tRow.id} {...tRow} />;
				})}
			</tbody>
		</table>
	);
};

export default Table;
