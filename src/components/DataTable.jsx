export default function DataTable({ data, columns }) {
    return (
        <table className="w-full border-collapse border border-slate-700 text-sm">

            <thead className="bg-slate-800">
                <tr className="text-left text-slate-200">
                    {columns.map((column) => (
                        <th
                        key={column.key}
                        className="border border-slate-700 px-4 py-2"
                        >
                        {column.label}
                        </th>
                    ))}
                </tr>     
            </thead>

            <tbody>
                {data.map((item) => (
                    <tr
                    key={item.id}
                    className="border border-slate-700 hover:bg-slate-800"
                    >
                        {columns.map((column) => (
                            <td
                            key={column.key}
                            className="border border-slate-700 px-4 py-2"
                            >
                            {item[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}