export interface IRole {
  description: string;
  name: string;
  label: string;
  icon: string;
}

export interface SignUpFormProps {
  control: any;
  errors: any;
  handleSubmit: (data: any) => void;
  onSubmit: (data: any) => void;
  register: any;
}
