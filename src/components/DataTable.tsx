import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';

interface DataTableProps {
  data: any[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onEdit, onDelete }) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'companySigDate', headerName: 'Company Signature Date', width: 200 },
    { field: 'companySignatureName', headerName: 'Company Signature Name', width: 200 },
    { field: 'documentName', headerName: 'Document Name', width: 130 },
    { field: 'documentStatus', headerName: 'Document Status', width: 130 },
    { field: 'documentType', headerName: 'Document Type', width: 130 },
    { field: 'employeeNumber', headerName: 'Employee Number', width: 130 },
    { field: 'employeeSigDate', headerName: 'Employee Signature Date', width: 200 },
    { field: 'employeeSignatureName', headerName: 'Employee Signature Name', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Button onClick={() => onEdit(params.row.id)}>Edit</Button>
          <Button onClick={() => onDelete(params.row.id)}>Delete</Button>
        </>
      )
    }
  ];

  return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          paginationModel={{ pageSize: 5, page: 0 }}
          pageSizeOptions={[5]}
        />
      </div>
  );
};

export default DataTable;