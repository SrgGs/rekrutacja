export interface UserForm {
  first_name: UserFormDetails,
  last_name: UserFormDetails
  email: UserFormDetails
  language: UserFormDetails
  phone: UserFormDetails
  position: UserFormDetails
}

export interface UserFormDetails {
  title: string,
  validation: Record<string, string>[]
}