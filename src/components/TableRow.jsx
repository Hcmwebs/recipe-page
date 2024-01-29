import React from 'react';

const TableRow = ({ tdNormal, tdBold }) => {
	return (
		<tr className='px-8'>
			<td className='capitalize'>{tdNormal}</td>
			<td className='font-bold text-base-300'>{tdBold}</td>
		</tr>
	);
};

export default TableRow;
