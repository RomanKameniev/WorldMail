import React, { Component } from 'react';
import Box from '../styles/Box';
import PackageTumb from '../components/packageTumb';
import { man } from '../styles/images';


export default class PackageList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let packages = [1, 2, 3, 4, 5]
        //const { packages } = this.props
        return (
            <Box display="flex" flexDirection="row" justifyContent="center" >
                <Box display="flex" mt="20px">
                    {false && <img src={man} height="440px" />}
                </Box>
                <Box display="flex" flexDirection="column" >

                    {packages.map(p => {
                        return <PackageTumb {...p} />
                    })}
                </Box>

            </Box>
        )
    }

}