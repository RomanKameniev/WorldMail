import React, { Component } from 'react';
import Box from '../styles/Box';
import Text from '../styles/Text';
import Button from '../styles/Button';
import GlobalContext from '../GlobalContext';
import styled from 'styled-components';
import { bg, packageImg, Icon1, Icon2, Icon3, Icon4, delivery } from '../styles/images';


export default class Main extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { translate } = this.context
        console.log('rendered main ')
        return (
                <Box display="flex" flexDirection="column" width="100%" height="100%" justifyContent="center" alignItems="center" backgroundImage={`url(${bg})`}>
                    <Box display="flex" flexDirection="row" justifyContent="space-around" mt="200px">
                        <Box display="flex" flexDirection="column" width="550px" m="50px">
                            <TitleText fontSize="40px">
                                {translate("title_main")}
                            </TitleText>
                            <StyledText fontSize="20px" mt="25px">
                                {translate("title_sub")}
                            </StyledText>
                            <StyledInput placeholder={translate("enter_package_number")} />
                            <Button fontSize="20px" type="submit" mt="25px">{translate("find_submit")}</Button>
                        </Box>
                        <Box display="flex" >
                            <img src={packageImg} width="550px" />
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt="200px" flexWrap="wrap" >
                        <StyledText fontSize="30px">{translate("how_it_works")}</StyledText>
                        <Box display="flex" width="50%">
                            <Box display="flex" justifyContent="space-around" alignItems="center" m="30px" width="50%">
                                <img src={Icon1} width="50%" />
                                <DefaultText>{translate("Icon1Text")}</DefaultText>
                            </Box>
                            <Box display="flex" justifyContent="space-around" alignItems="center" m="30px" width="50%">
                                <img src={Icon2} width="50%" />
                                <DefaultText>{translate("Icon2Text")}</DefaultText>
                            </Box>
                        </Box>
                        <Box display="flex" width="50%">
                            <Box display="flex" justifyContent="space-around" alignItems="center" m="30px" width="50%">
                                <img src={Icon3} width="50%" />
                                <DefaultText>{translate("Icon3Text")}</DefaultText>
                            </Box>
                            <Box display="flex" justifyContent="space-around" alignItems="center" m="30px" width="50%">
                                <img src={Icon4} width="50%" />
                                <DefaultText>{translate("Icon4Text")}</DefaultText>
                            </Box>
                        </Box>

                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt="150px" flexWrap="wrap" >
                        <StyledText fontSize="30px">{translate("tracked_delivery_services")}</StyledText>
                        <Box display="flex" flexWrap="wrap">
                            {delivery.map(name => {
                                return <Box width="20%" justifyContent="center" alignItems="center" m="30px">
                                    <img src={name} width="150px" />
                                </Box>
                            })}
                        </Box>

                    </Box>
                </Box>
        )
    }
}


const TitleText = styled(Text)`
    font-family: SegoiBold;
    color:white;
`
const StyledText = styled(Text)`
    font-family: SegoiRegular;
    color:#eee;
`
const DefaultText = styled(Text)`
    font-family: SegoiRegular;
    color:#FFFFFF;
    margin-left:15px;
`
const StyledInput = styled('input')`
    border-radius: 15px;
    font-size:20px;
    text-align: start;
    margin-top: 25px;
    height: 50px;
`