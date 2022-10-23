import React, { FC } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useFormik } from 'formik';
import { User } from '../../../interfaces/user.interface';
import './UserForm.css';
import { emptyUser } from '../../../utils/constants';

interface Props {
  type: 'create' | 'edit' | 'delete';
  userData?: User;
  handleModalOpen: () => void;
}

const UserForm: FC<Props> = ({ type, userData = emptyUser, handleModalOpen }) => {
  const formik = useFormik({
    initialValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      telephone: userData.telephone,
    },
    onSubmit: (values) => {
      console.log(type);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { my: 2 },
        }}
      >
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="telephone"
          name="telephone"
          label="Phone"
          value={formik.values.telephone}
          onChange={formik.handleChange}
          error={formik.touched.telephone && Boolean(formik.errors.telephone)}
          helperText={formik.touched.telephone && formik.errors.telephone}
        />
      </Box>
      <div className="buttons-container">
        <Button variant="contained" color="error" onClick={handleModalOpen} className="button">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" className="button">
          {type === 'create' ? 'Create' : 'Save'}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
