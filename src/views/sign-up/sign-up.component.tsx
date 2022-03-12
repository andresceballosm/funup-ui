import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SelectRole } from './components/select-role/select-role.component';
import { SignUpForm } from './components/sign-up-form/sign-up-form.component';
import { RowWrapper, SignUpWrapper } from './sign-up.styled';

type FormValues = {
  email: string;
  password: string;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const [selectedRole, setSelectedRole] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    console.log('data', data);
    //await login(data.email, data.password);
    //reset();
  };

  return (
    <SignUpWrapper className="container">
      <RowWrapper>
        {!selectedRole ? (
          <SelectRole />
        ) : (
          <SignUpForm
            control={control}
            errors={errors}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            register={register}
          />
        )}
      </RowWrapper>
    </SignUpWrapper>
  );
}

export default SignUp;
