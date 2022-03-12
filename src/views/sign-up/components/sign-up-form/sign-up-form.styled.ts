import { Col, Form } from 'reactstrap';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
  background-color: white;
  margin-top: 7%;
  padding: 30px;
  border-radius: 10px;
  height: 70%;
  box-shadow: rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px;
`;

export const SubtitleWrapper = styled.p`
  text-align: center;
  margin-top: 25px;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #50a9b1;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const ButtonWrapper = styled(Col)`
  margin-top: 30px;
`;
