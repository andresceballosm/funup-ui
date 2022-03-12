import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { ROLES } from 'views/sign-up/constants/sign-up.constants';
import { CardWrapper, Title } from './select-role.styled';
import { IRole } from 'views/sign-up/interfaces/sign-up.interfaces';

const Card = ({ name, label, icon, description }: IRole) => (
  <CardWrapper>
    <Row>
      <img src={`${icon}.svg`} alt={name} />
    </Row>
    <Row>
      <p>{label}</p>
    </Row>
    <Row>
      <p>{description}</p>
    </Row>
  </CardWrapper>
);

export const SelectRole = (): any => {
  <div>
    <Title>Sign Up</Title>
    {ROLES.map((role: any, key: number) => {
      return <Card key={key} {...role} />;
    })}
    <a href="/forgot-password">Forgot password?</a>
  </div>;
};
