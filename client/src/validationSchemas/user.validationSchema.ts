import * as Yup from 'yup';

const onlyDigitsRegex = /^\d+$/;
const onlyCharactersRegex = /^[a-zA-Z]+$/;

export const UserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Fist name must be 2-40 characters!')
    .max(40, 'Fist name must be 2-40 characters!')
    .matches(onlyCharactersRegex, 'First name must contain only alphabetical characters')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Last name must be 2-40 characters!')
    .max(40, 'Last name must be 2-40 characters!')
    .matches(onlyCharactersRegex, 'Last name must contain only alphabetical characters')
    .required('Required'),
  email: Yup.string().email('Invalid email!').required('Required'),
  telephone: Yup.string().min(10, 'Telephone must be 10 characters long!').max(10, 'Telephone must be 10 characters long!').matches(onlyDigitsRegex, 'Telephone must contain only digits!'),
});
