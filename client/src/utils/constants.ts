import { User } from '../interfaces/user.interface';

export const appData = Object.freeze({
  APP_NAV_LINKS: [
    {
      id: '#home',
      label: 'Home',
      path: '/',
    },
  ],
});

export const emptyUser: User = Object.freeze({
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
});
