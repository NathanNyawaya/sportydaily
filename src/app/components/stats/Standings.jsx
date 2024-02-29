import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import StandingsNavigation from '../navbars/StandingsNavigation';
import { eplLogo } from '@/app/assets';

const Standings = () => {
  const [data, setData] = useState([]);

  const fetcher = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/stats/epl`);
      if (res && res.data) {
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
            <img src={row.original.team.logo} alt="Team Logo" className='w-[17px] md:w-[30px] h-[17px] md:h-[30px]' />
            <span className='text-[0.7rem] font-bold tracking-wide text-gray-200'>{row.original.team.name}</span>
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
    <>
      <div className="flex items-center justify-around bg-gradient-to-r from-gray-50 to-gray-500 w-full py-4 my-10">
        <img src={`https://www.logo.wine/a/logo/Premier_League/Premier_League-Logo.wine.svg`} className='h-[8vh] md:h-[15vh]' alt="epl-logo" />
        <p className='font-bold text-sm md:text-2xl text-[#3D195B] tracking-wide shadow-lg shadow-gray-900/[0.1]'># WORLD'S FAVORITE</p>
      </div>
      <div className='flex w-full mx-1 mb-2'>
        <StandingsNavigation />
      </div>
      {
        <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }} className='mb-20 mx-1'>
          <thead className='bg-gray-900'>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} key={column.id} className='text-gray-200 border-b border-gray-700 truncate text-start text-sm'>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className='text-gray-200 text-sm'>
            {rows.slice(0, 10).map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id} className='border border-gray-400/[0.2]'>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      {...cell.getCellProps()}
                      key={cellIndex}
                      className={`py-2 text-[0.8rem] ${cellIndex === 0 && index < 2 ? 'border-l-4 border-blue-500 bg-blue-500/[0.1]' : // Blue background for top 2 ranks
                        cellIndex === 0 && index === 2 ? 'border-l-4 border-orange-500 bg-orange-500/[0.1]' : // Orange background for the 3th rank
                          cellIndex === 0 && index >= rows.slice(0, 10).length - 2 ? 'border-l-4 border-red-500 bg-red-500/[0.1]' : '' // Red background for last 2 ranks
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
      }
    </>
  );
};

export default Standings;
