export const FORM_FIELD = [
  {
    messages: {
      required: 'Email is required',
    },
    name: 'email',
    label: 'Email',
    placeholder: 'example@example.com',
    type: 'email',
    validation: {
      required: 'Required email',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Invalid email!',
      },
    },
  },
  {
    messages: {
      required: 'Password is required',
    },
    name: 'password',
    label: 'Password',
    placeholder: '',
    type: 'password',
    validation: {
      required: 'Required password',
      minLength: {
        value: 6,
        message: 'Min lenght 6',
      },
      // pattern: {
      //   value: /^(?=.*[A-Z])$/,
      //   message: 'Require an uppercase letter',
      // },
    },
  },
];
