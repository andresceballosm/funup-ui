import { css } from 'styled-components';

const createSingleCss = (attributes: string) =>
  css`
    ${attributes}
  `;

/** MEDIA QUERIES FACTORY **/
const createMobileMedia = (attr: string = '') => `@media (max-width: 767px){${attr}};`;
const createTabletMedia = (attr: string = '') => `@media (max-width: 1024px){${attr}};`;
const createDesktopMedia = (attr: string = '') => `@media (max-width: 1230px){${attr}};`;

/** MIXINS **/
const createCardMixin = () =>
  css`
    padding: ${props => props.theme.spaces.space_30};
    background: ${props => props.theme.colors.lightBackground};
    box-shadow: 0 ${props => props.theme.spaces.space_micro}
      ${props => props.theme.spaces.space_mini} 0 rgba(0, 43, 69, 0.15);
    ${props => createTabletMedia(`padding: ${props.theme.spaces.space_15}`)};
  `;

const createFlexLayout = (items: string = 'center', justify: string = 'space-between') =>
  ` display: flex;
    align-items: ${items};
    justify-content: ${justify};
  `;

const flexAuto = () => css`
  flex: 0 1 auto;
`;

const flexFluid = () => css`
  width: 100%;
  flex: 1;
`;

const contentLayout = (maxWidth: number = 1200) => css`
  max-width: ${maxWidth}px;
  margin: 0 auto;
`;

export {
  createMobileMedia,
  createTabletMedia,
  createDesktopMedia,
  createCardMixin,
  createSingleCss,
  createFlexLayout,
  contentLayout,
  flexAuto,
  flexFluid,
};
