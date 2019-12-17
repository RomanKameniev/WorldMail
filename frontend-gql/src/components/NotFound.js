import React from 'react';
import Box from '../styles/Box';
import Text from '../styles/Text';
import styled from 'styled-components';

const NotFound = () =>
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="700px">
        <StyledText fontSize="40px"><h3>404 page not found</h3></StyledText>
        <StyledText fontSize="20px"><p>We are sorry but the page you are looking for does not exist.</p></StyledText>
    </Box>

const StyledText = styled(Text)`
    font-family: SegoiBold;
    color:#7E4FDF
`

export default NotFound;