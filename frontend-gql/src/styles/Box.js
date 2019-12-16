import styled from 'styled-components';
import { space, layout, color, flexbox, border, position, boxShadow, typography, shadow, backgroundImage, height, backgroundSize } from 'styled-system';
import { whiteSpace, transform, cursor } from './customStyledSystem';

const Box = styled.div`
  ${space}
  ${height}
  ${layout}
  ${color}
  ${flexbox}
  ${backgroundImage}
  ${backgroundSize}
  ${border}
  ${position}
  ${boxShadow}
  ${typography}
  ${shadow}
  ${whiteSpace}
  ${transform}
  ${cursor}
`;

export default Box;
