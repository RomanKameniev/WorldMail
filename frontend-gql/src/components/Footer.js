import React, { Component } from 'react';
import Box from '../styles/Box';
import Text from '../styles/Text';
import { logob, usa, ua, googlePlay } from '../styles/images';
import GlobalContext from '../GlobalContext';
import styled from 'styled-components';

export default class Header extends Component {
    static contextType = GlobalContext

    render() {
        const { changeL, l, translate } = this.context
        return (
            <Box display="flex" justifyContent="space-around" width="100%" mt="100px">
                <Box display="flex" flexDirection="column">
                    <img height="47px" src={logob} />
                    <StyledText>@ WorldMail Group</StyledText>
                </Box>
                <Box display="flex" justifyContent="space-around" alignItems="center" width="10%">
                    <StyledText>{translate("language")}</StyledText>
                    <Box display="flex" m="5px" onClick={() => changeL("en")}>
                        <img src={usa} height="20px" />
                        {l === "en" ? <Text style={{ color: "#7E4FDF" }}>UA</Text>
                            :
                            <Text >EN</Text>
                        }
                    </Box>
                    <Box display="flex" m="5px" onClick={() => changeL("ua")}>
                        <img src={ua} height="20px" />
                        {l === "ua" ? <Text style={{ color: "#7E4FDF" }}>UA</Text>
                            :
                            <Text >UA</Text>
                        }
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <StyledText fontSize="18px" m="5px">{translate("download")}</StyledText>
                    <img height="50px" src={googlePlay} />
                </Box>
            </Box>
        )
    }
}

const StyledText = styled(Text)`
    font-family: SegoiRegular;

`