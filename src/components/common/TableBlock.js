import React from 'react';
import moment from 'moment';
import '../../style/css/TableBlock.css';

const convertMinutesToHours = (time) => {
    if (time) {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        const result = !hours
            ? `${minutes}m`
            : !minutes
            ? `${hours}h`
            : `${hours}h ${minutes}m`;
        return result;
    }
    return '';
};

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const TableRow = (props) => {
    const { id, name, data, status } = props.user;
    const total = data.reduce((time, item) => time + Number(item.minutes), 0);
    return (
        <tr>
            <td>{name}</td>
            {props.dateCols.map((date) => {
                let minutes = '';
                data.forEach((dataItem) => {
                    if (dataItem.date === date) {
                        minutes = dataItem.minutes;
                    }
                });
                return (
                    <td key={`${date}-${id}`}>
                        {convertMinutesToHours(minutes)}
                    </td>
                );
            })}
            <td>
                <div className={`status ${status}`}>{capitalize(status)}</div>
            </td>
            <td>{convertMinutesToHours(total)}</td>
        </tr>
    );
};

const Table = (props) => {
    const dateSet = new Set();
    props.users.forEach((user) =>
        user.data.forEach((item) => dateSet.add(item.date))
    );
    const dateCols = Array.from(dateSet).sort((a, b) =>
        moment(a).isAfter(b) ? 1 : -1
    );
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td className="table__header">Name</td>
                    {dateCols.map((date) => (
                        <td key={date} className="table__header">
                            {moment(date).format('YYYY/MM/DD')}
                        </td>
                    ))}
                    <td className="table__header">Status</td>
                    <td className="table__header">Total</td>
                </tr>
                {props.users.map((user) => (
                    <TableRow key={user.id} user={user} dateCols={dateCols} />
                ))}
            </tbody>
        </table>
    );
};

function TableBlock(props) {
    return (
        <div className="table-block">
            <div className="table-block__header">
                <div className="table-block__header-part left-part">
                    <div className="table-block__type-title">Data Table</div>
                    <div className="table-block__main-title">Table</div>
                </div>
                <div className="table-block__header-part right-part">
                    <div className="table-block__sort-option">
                        Sort by: From low to high
                    </div>
                </div>
            </div>
            <Table users={props.users} />
        </div>
    );
}

export default TableBlock;
