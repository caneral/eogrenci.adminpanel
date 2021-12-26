import React from 'react'
import DataTable from 'react-data-table-component'

const DataTableBase = (props) => {
    return (
        <div>
            <DataTable
                responsive
                pagination
                dense
                {...props}
            />
        </div>
    )
}

export default DataTableBase
