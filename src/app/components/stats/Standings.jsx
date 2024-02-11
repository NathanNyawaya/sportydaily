import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

const Standings = () => {
  const [data, setData] = useState([]);

  const fetcher = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/stats/epl`);
      if (res && res.data) {
        // Assuming res.data is an array of objects representing teams
        setData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: '#', accessor: 'stats.rank' },
      {
        Header: 'Club',
        accessor: 'team',
        Cell: ({ row }) => (
          <div className='flex gap-x-2'>
            <img src={row.original.team.logo} alt="Team Logo" className='w-[30px] h-[30px]' />
            <span>{row.original.team.name}</span>
          </div>
        ),
      },
      { Header: 'MP', accessor: 'stats.gamesPlayed' },
      { Header: 'W', accessor: 'stats.wins' },
      { Header: 'L', accessor: 'stats.losses' },
      { Header: 'D', accessor: 'stats.ties' },
      { Header: 'GF', accessor: 'stats.goalsFor' },
      { Header: 'GA', accessor: 'stats.goalsAgainst' },
      { Header: 'GD', accessor: 'stats.goalDifference' },
      { Header: 'Pts', accessor: 'stats.points' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead className='bg-gray-900'>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id} className='text-gray-200 border-b border-gray-700 truncate text-start'> 
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className='text-gray-200'>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id} className='border border-gray-400/[0.2]'>
              {row.cells.map((cell, cellIndex) => (
                <td
                  {...cell.getCellProps()}
                  key={cellIndex}
                  className={`py-2 ${
                    cellIndex === 0 && index < 4 ? 'border-l-4 border-blue-500 bg-blue-500/[0.1]' : // Blue background for top 4 ranks
                    cellIndex === 0 && index === 4 ? 'border-l-4 border-orange-500 bg-orange-500/[0.1]' : // Orange background for the 5th rank
                    cellIndex === 0 && index >= rows.length - 3 ? 'border-l-4 border-red-500 bg-red-500/[0.1]' : '' // Red background for last 3 ranks
                  }`}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Standings;
