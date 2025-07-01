import React from 'react';

export type Column<T> = {
    key: keyof T;
    label: string;
    render?: (value: T[keyof T], item?: T) => React.ReactNode;
};

type DataTableProps<T> = {
    title?: string;
    columns: Column<T>[];
    data: T[];
};

function DataTable<T>({ title, columns, data }: DataTableProps<T>) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 overflow-x-auto h-full flex flex-col">
            { title && <h2 className="text-xl font-bold mb-4">{ title }</h2> }

            <div className="flex-1 overflow-auto">
                <table className="min-w-full border-collapse table-auto text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            { columns.map((col) => (
                                <th key={ col.key as string } className="px-4 py-2 border-b font-medium">
                                    { col.label }
                                </th>
                            ) )}
                        </tr>
                    </thead>
                    <tbody>
                        { data.length === 0 && (
                            <tr>
                                <td colSpan={ columns.length } className="text-center py-4 text-gray-500">
                                    No data available
                                </td>
                            </tr>
                        )}
                        { data.map(( item, index ) => (
                            <tr key={ index } className="even:bg-gray-50 hover:bg-gray-100">
                                { columns.map(( col ) => (
                                    <td key={ col.key as string } className="px-4 py-2 border-b">
                                        { col.render
                                            ? col.render( item[col.key] )
                                            : typeof item[col.key] === 'object'
                                                ? JSON.stringify(item[col.key])
                                                : ( item[ col.key ] as React.ReactNode )}
                                    </td>
                                )) }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataTable;