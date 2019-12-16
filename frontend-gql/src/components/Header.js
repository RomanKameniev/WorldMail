import React, { Component } from 'react';
import Box from '../styles/Box';
import Text from '../styles/Text';
import Button from '../styles/Button';
import { logoa, userTemplate } from '../styles/images';
import GlobalContext from '../GlobalContext';
import styled from 'styled-components';

export default class Header extends Component {
    static contextType = GlobalContext
    constructor(props) {
        super(props)
    }

    render() {
        console.log("this.props >", this.props)
        const { user, translate } = this.context
        return (
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-around" width="100%" backgroundColor="#7E4FDF">
                <Box m="30px" ml="70px">
                    <a href="/">
                        <img height="26px" src={logoa} />
                    </a>
                </Box>
                <Box display="flex">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Button type="primary" mr="100px" fontSize="20px">
                            {translate('create_package')}
                        </Button>
                        <a href="/packages">
                            <StyledLogin fontSize="20px">{translate("my_packages")}</StyledLogin>
                        </a>
                    </Box>
                    <Box display="flex" m="30px" ml="70px" justifyContent="center" alignItems="center">
                        <StyledLogin fontSize="20px" onClick={this.props.openModal}>{user ? user.name : translate("login")}</StyledLogin>
                        <a href="/profile">
                            <img height="53px" src={userTemplate} />
                        </a>
                    </Box>
                </Box>

            </Box>
        )
    }
}

const StyledLogin = styled(Text)`
    margin-right: 15px;
    font-family: SegoiRegular;
    color: white;
`