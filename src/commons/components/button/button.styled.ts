import styled from 'styled-components';
import { palette } from 'theme/theme';

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${() => palette.colors.primary};
  border-radius: 10px;
  padding: 10px;
  width: 99%;
  border-width: 0px;
`;

export const TitleWrapper = styled.p`
  color: ${(props) => props.color};
  font-size: 18px;
  font-family: 'Helvetica Neue', sans-serif;
`;
