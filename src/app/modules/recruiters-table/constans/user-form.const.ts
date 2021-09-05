import { UserForm } from '@shared/interfaces/user-form.interface';

export const USER_FORM: UserForm = {
  first_name: {
    title: "First Name",
    validation: [
      { type: 'required', message: 'First Name is required' },
      { type: 'minlength', message: 'First Name must be at least 5 characters long' },
      { type: 'maxlength', message: 'First Name cannot be more than 25 characters long' },
    ]
  },
  last_name: {
    title: "Last Name",
    validation: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'minlength', message: 'Last Name must be at least 5 characters long' },
      { type: 'maxlength', message: 'Last Name cannot be more than 25 characters long' },
    ]
  },
  email: {
    title: "Email",
    validation: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ]
  },
  language: {
    title: "Language",
    validation: [
      { type: 'required', message: 'Language is required' },
    ]
  },
  phone: {
    title: "Telephone",
    validation: [
      { type: 'required', message: 'Telephone is required' },
    ]
  },
  position: {
    title: "Position",
    validation: [
      { type: 'required', message: 'Position is required' },
    ]
  }
}