import styled from 'styled-components';
import { space, color, typography, layout, textAlign } from 'styled-system';
import { whiteSpace, cursor, textDecoration, textOverflow, textTransform } from './customStyledSystem';

const Text = styled.span`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${whiteSpace}
  ${cursor}
  ${textDecoration}
  ${textOverflow}
  ${textTransform}
  ${textAlign}
`;

export default Text;
