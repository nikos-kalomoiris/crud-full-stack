import React, { FC } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useFormik } from 'formik';
import { User } from '../../../interfaces/user.interface';
import './UserForm.css';
import { emptyUser } from '../../../utils/constants';
import { UserSchema } from '../../../validationSchemas/user.validationSchema';
import { createUser, updateUser } from '../../../api/backend.api';
import { useDispatch } from 'react-redux';
import { addUser, alterUser } from '../../../redux/slices/UsersSlice';

interface Props {
  type: 'create' | 'edit' | 'delete';
  userData?: User;
  handleModalOpen: () => void;
}

const UserForm: FC<Props> = ({ type, userData = emptyUser, handleModalOpen }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: User) => {
    switch (type) {
      case 'create':
        const newUser = await createUser(values);
        dispatch(addUser(newUser));
        break;
      case 'edit':
        if (userData && userData.id) {
          const updatedUser = await updateUser(userData.id, values);
          dispatch(alterUser(updatedUser));
        }
        break;
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      telephone: userData.telephone,
    },
    validationSchema: UserSchema,
    onSubmit: async (values) => {
      try {
        await handleSubmit(values);
        handleModalOpen();
      } catch (error) {
        console.log(error);
      }
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
        <Button variant="contained" color="inherit" onClick={handleModalOpen} className="button">
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
