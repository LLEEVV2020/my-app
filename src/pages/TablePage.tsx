import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, createData, updateData, deleteData } from '../api/api';
import DataTable from '../components/DataTable';
import AddEditForm from '../components/AddEditForm';
import { Button, Container, Box, Typography } from '@mui/material';

const TablePage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [selectedData, setSelectedData] = useState<any | null>(null);
  const [openForm, setOpenForm] = useState<boolean>(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    const fetchData = async () => {
      try {
        const response = await getData(token);
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, [token, navigate]);

  const handleAdd = () => {
    setSelectedData(null);
    setOpenForm(true);
  };

  const handleEdit = (id: string) => {
    const record = data.find(d => d.id === id);
    setSelectedData(record);
    setOpenForm(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteData(token!, id);
      setData(data.filter(d => d.id !== id));
    } catch (err) {
      setError('Failed to delete data');
    }
  };

  const handleSubmit = async (formData: any) => {
    try {
      if (selectedData) {
        await updateData(token!, selectedData.id, formData);
        setData(data.map(d => (d.id === selectedData.id ? formData : d)));
      } else {
        const response = await createData(token!, formData);
        setData([...data, response.data.data]);
      }
      setOpenForm(false);
    } catch (err) {
      setError('Failed to save data');
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Typography variant="h4">Data Table</Typography>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add New
        </Button>
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      <DataTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      {openForm && <AddEditForm initialData={selectedData} onSubmit={handleSubmit} />}
    </Container>
  );
};

export default TablePage;