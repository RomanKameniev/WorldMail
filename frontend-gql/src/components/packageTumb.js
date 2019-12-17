import React, { PureComponent } from 'react';
import Box from '../styles/Box';
import Text from '../styles/Text';
import styled from 'styled-components';
import GlobalContext from '../GlobalContext'
import {edit, remove} from '../styles/images';

export default class PackageTumb extends PureComponent {
    static contextType = GlobalContext
    constructor(props) {
        super(props);
    }

    render() {
        const { translate } = this.context
        //const { trackNumber } = this.props
        let trackNumber = "SAO321313dLV"
        let status = " in transit"
        let deliveryday = "25"
        //        console.log('props=>', this.props)
        return (
            <Box display="flex" width="100%" justifyContent="space-around"  height="257px" m="10px" >
                <StyledBox display="flex" width="363px" borderRadius="15px" >
                    <Box display="flex" justifyContent="space-around" flexDirection="column" m="30px" >
                        <TitleText fontSize="30px">{trackNumber}<img width="20px" src={edit} /></TitleText>
                        <StyledText>{translate("status")}<BoldText>{status.toUpperCase()}</BoldText></StyledText>
                        <StyledText>{translate("date_exp")}<BoldText>{status.toUpperCase()}</BoldText></StyledText>
                        <StyledText>{translate("day_in_transit")}<BoldText>{deliveryday.toUpperCase()}</BoldText></StyledText>
                        <StyledText>{translate("last_update")}<BoldText>{deliveryday.toUpperCase()}</BoldText></StyledText>
                    </Box>
                </StyledBox>
                <StyledBox display="flex" ml="25px" width="636px" borderRadius="15px">
                    <Box display="flex" justifyContent="space-around" flexDirection="column" m="30px" >
                        <StyledText>{translate("sender_address")}<BoldText>{status.toUpperCase()}</BoldText></StyledText>
                        <StyledText>{translate("delivery_service")}<BoldText>{status.toUpperCase()}</BoldText></StyledText>
                        <StyledText>{translate("receiver_address")}<BoldText>{deliveryday.toUpperCase()}</BoldText></StyledText>
                        <StyledText>{translate("weight")}<BoldText>{deliveryday.toUpperCase()}</BoldText></StyledText>
                    </Box>
                </StyledBox>
                <Box display="flex" alignItems="flex-start" mt="10px">
                  <img src={remove} width="20px"/>
                </Box>
            </Box>
        )
    }
}


const TitleText = styled(Text)`
    font-family: SegoiBold;
    color:#7E4FDF;
`
const StyledText = styled(Text)`
    font-family: SegoiRegular;
    font-size:20px;
`
const BoldText = styled(Text)`
    font-family: SegoiBold;
`
const StyledBox = styled(Box)`
    box-shadow: 0px 10px 8px #ddd;
`