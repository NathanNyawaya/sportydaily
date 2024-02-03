import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table';

const Standings = () => {
    const [data, setData] = useState([])


    const fetcher = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/stats/epl`)
            if(res){
                console.log(res)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetcher()
        // const data_ = fetcher()
    }, [])
    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name' },
            { Header: 'Logo', accessor: 'logo', Cell: ({ value }) => <img src={value} alt="Team Logo" style={{ width: '50px', height: '50px' }} /> },
            { Header: 'Abbreviation', accessor: 'abbreviation' },
            { Header: 'Wins', accessor: 'stats.wins' },
            { Header: 'Losses', accessor: 'stats.losses' },
            { Header: 'Ties', accessor: 'stats.ties' },
            { Header: 'Games Played', accessor: 'stats.gamesPlayed' },
            { Header: 'Goals For', accessor: 'stats.goalsFor' },
            { Header: 'Goals Against', accessor: 'stats.goalsAgainst' },
            { Header: 'Points', accessor: 'stats.points' },
            { Header: 'Rank', accessor: 'stats.rank' },
            { Header: 'Goal Difference', accessor: 'stats.goalDifference' },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()} style={{ border: '1px solid black', padding: '8px' }}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={row.id}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()} style={{ border: '1px solid black', padding: '8px' }}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Standings


