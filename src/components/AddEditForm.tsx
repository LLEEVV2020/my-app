import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddEditFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
}

const AddEditForm: React.FC<AddEditFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || {
    companySigDate: '',
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: '',
    employeeSignatureName: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Company Signature Date"
        name="companySigDate"
        value={formData.companySigDate}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Company Signature Name"
        name="companySignatureName"
        value={formData.companySignatureName}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Document Name"
        name="documentName"
        value={formData.documentName}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Document Status"
        name="documentStatus"
        value={formData.documentStatus}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Document Type"
        name="documentType"
        value={formData.documentType}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Employee Number"
        name="employeeNumber"
        value={formData.employeeNumber}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Employee Signature Date"
        name="employeeSigDate"
        value={formData.employeeSigDate}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Employee Signature Name"
        name="employeeSignatureName"
        value={formData.employeeSignatureName}
        onChange={handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddEditForm;