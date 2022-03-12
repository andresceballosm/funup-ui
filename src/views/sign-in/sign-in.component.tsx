import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ButtonWrapper,
  FormWrapper,
  RowWrapper,
  SignInWrapper,
  SubtitleWrapper,
  Title,
} from './sign-in.styled';
import InputComponent from 'commons/components/input/input.component';
import { FORM_FIELD } from './constants/signin.constants';
import { Row } from 'reactstrap';
import ButtonComponent from 'commons/components/button/button.component';

type FormValues = {
  email: string;
  password: string;
};

function SignIn() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: any) => {
    console.log('data', data);
    //await login(data.email, data.password);
    //reset();
  };

  return (
    <SignInWrapper className="container">
      <RowWrapper>
        <FormWrapper className="col col-md-6 col-xs-10 col-sm-10" onSubmit={handleSubmit(onSubmit)}>
          <Title>Sign In</Title>
          {FORM_FIELD.map((field: any, key: number) => {
            return (
              <InputComponent
                key={key}
                {...field}
                control={control}
                register={register}
                errors={errors}
              />
            );
          })}
          <a href="/forgot-password">Forgot password?</a>
          <Row>
            <ButtonWrapper className="col-12 justify-content-center">
              <ButtonComponent title="Login" onClick={() => console.log('clicked')} />
            </ButtonWrapper>
          </Row>
          <br />
          <React.Fragment>
            <SubtitleWrapper>
              {'Not a member yet? '}
              <a href="/sign-up">Sign Up here</a>
            </SubtitleWrapper>
          </React.Fragment>
        </FormWrapper>
      </RowWrapper>
    </SignInWrapper>
  );
}

export default SignIn;
