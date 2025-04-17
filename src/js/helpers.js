export const validatorNameRule = [
  { rule: 'required', errorMessage: 'The name is required.' },
  {
    rule: 'customRegexp',
    value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]?[- ']*)*$/,
    errorMessage:
      "The name may contain only letters, apostrophes, dashes, and spaces. For example: Adrian, Jacob Mercer, or Charles de Batz de Castelmore d'Artagnan.",
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'The name is too short! Please enter at least 2 characters.',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage:
      'The name is too long! Please enter no more than 30 characters.',
  },
];

export const validatorPhoneRule = [
  { rule: 'required', errorMessage: 'The phone number is required.' },
  {
    rule: 'customRegexp',
    value: /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,
    errorMessage:
      'The phone number must contain digits and may include spaces, dashes, parentheses, and can start with a plus (+).',
  },
  {
    rule: 'minLength',
    value: 5,
    errorMessage:
      'The phone number is too short! Please enter at least 5 characters.',
  },
  {
    rule: 'maxLength',
    value: 18,
    errorMessage:
      'The phone number is too long! Please enter no more than 18 characters.',
  },
];

export const validatorMessageRule = [
  {
    rule: 'maxLength',
    value: 600,
    errorMessage:
      'The message is too long! Please enter no more than 600 characters.',
  },
];
