import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
import { useController } from 'react-hook-form';

interface InputProps {
  errors?: any;
  name: string;
  placeholder?: string;
  type: InputType;
  label: string;
  validation: any;
  control: any;
}

export const InputComponent = ({
  name,
  placeholder = '',
  type = 'text',
  label,
  validation = {},
  errors,
  control,
}: InputProps) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: validation,
    // defaultValue: '',
  });
  console.log('llega error', errors);
  const invalid = errors && errors[name];
  console.log('invalid', invalid, ' validations', validation)
  return (
    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
      <Label for={name}>{label}</Label>
      <Input
        {...inputProps}
        inputRef={ref}
        invalid={!!invalid}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />

      {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
    </FormGroup>
  );
};

export default InputComponent;
