import React, { Component } from 'react';
import Box from '../styles/Box';
import Text from '../styles/Text';
import GlobalContext from '../GlobalContext'
import { edit, remove, update } from '../styles/images';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const mapStyle = [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "hue": "#6600ff" }, { "saturation": -11 }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": -78 }, { "hue": "#6600ff" }, { "lightness": -47 }, { "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "hue": "#5e00ff" }, { "saturation": -79 }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "lightness": 30 }, { "weight": 1.3 }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "hue": "#5e00ff" }, { "saturation": -16 }] }, { "featureType": "transit.line", "elementType": "all", "stylers": [{ "saturation": -72 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "saturation": -65 }, { "hue": "#1900ff" }, { "lightness": 8 }] }]

export default class PackageFull extends Component {
    static contextType = GlobalContext
    constructor(props) {
        super(props);
    }

    render() {
        const { translate } = this.context

        //const { trackNumber } = this.props
        const data = { trackNumber: "ASDADSADA", status: "in transit", deliveryday: "25" }
        //        console.log('props=>', this.props)
        const obj = {
            center: {
                lat: 50.012494,
                lng: 36.22689
            },
            zoom: 11
        }
        const apiKey =  process.env.REACT_APP_GOOGLE_API;

        return (
            <Box display="flex" flexDirection="column" width="100%" justifyContent="space-around" alignItems="center" >
                <Package translate={translate} {...data} />
                <Box display="flex" flexDirection="column" width="50%" justifyContent="space-around" alignItems="center" mt="100px">
                    <BoldText fontSize="30px">{translate("delivery_information")}</BoldText>
                    <Track tracks={[{ date: "Date adsad", info: { status: "in transit", location: "Hamburh", service: "Post111" } },
                    { date: "Date adsad", info: { status: "in transit", location: "Hamburh", service: "Post111" } },
                    { date: "Date adsad", info: { status: "in transit", location: "Hamburh", service: "Post111" }, current: true }]} />
                </Box>
                <Box display="flex" height="100vh" width="60%" mt="50px">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: apiKey }}
                        defaultCenter={obj.center}
                        yesIWantToUseGoogleMapApiInternals={true}
                        defaultZoom={obj.zoom}
                    >
                        <AnyReactComponent
                            lat={50.0}
                            lng={36.0}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </Box>
            </Box>
        )
    }
}


const Package = ({ status, translate, trackNumber, deliveryday }) => {
    return (
        <Box display="flex" width="50%" justifyContent="space-around" height="257px" m="10px" >
            <StyledBox display="flex" width="363px" borderRadius="15px" >
                <Box display="flex" justifyContent="space-around" flexDirection="column" m="30px" >
                    <TitleText fontSize="30px" pr="10px" >{trackNumber + "   "}<img width="20px" src={edit} /></TitleText>
                    <StyledText>{translate("status")}<BoldText>{status.toUpperCase() + "    "}</BoldText><img width="20px" src={update} /></StyledText>
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
            <Box display="flex" alignItems="flex-start" ml="10px" mt="10px">
                <img src={remove} width="20px" />
            </Box>

        </Box>
    )
}

const Track = props => {
    const { tracks } = props
    return (
        <StyledBox display="flex" flexDirection="column" width="100%">
            {tracks.map(({ date, info, current }) => {
                return <Box display="flex" justifyContent="space-between" widht="100%">
                    <Box m="30px" display="flex" width="30%" justifyContent="space-between">
                        <Text fontSize="18px">{date}</Text>
                        <StatusBox type={current} />
                        <Box display="flex" flexDirection="column">
                            <Text fontSize="18px">{info.status}</Text>
                            <Text fontSize="15px">{info.location}</Text>
                        </Box>
                    </Box>

                    <Text fontSize="20px" m="30px">{info.service}</Text>
                </Box>
            })}
        </StyledBox>
    )
}
const StatusBox = ({ type }) => {
    return <StyledBox display="flex" width="35px" justifyContent="center" alignItems="center" >
        <Box display="flex" borderRadius="40px" width="20px" height="20px" backgroundColor={type ? "#FFC233" : "#7E4FDE"} textAlign="center"></Box>
    </StyledBox>

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
    border-radius: 15px;
`