import React from 'react';
import { Row } from 'reactstrap';
import ButtonComponent from 'commons/components/button/button.component';
import { FormWrapper, SubtitleWrapper, Title, ButtonWrapper } from './sign-up-form.styled';
import InputComponent from 'commons/components/input/input.component';
import { FORM_FIELD } from 'views/sign-up/constants/sign-up.constants';
import { SignUpFormProps } from 'views/sign-up/interfaces/sign-up.interfaces';

export const SignUpForm = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  register,
}: SignUpFormProps): any => (
  <FormWrapper className="col col-md-6 col-xs-10 col-sm-10" onSubmit={handleSubmit(onSubmit)}>
    <Title>Sign Up</Title>
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
);
