import React from 'react';
import { AreaChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <AreaChart accountIds={[4043704]}
        query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDA0MzcwNHxJTkZSQXxOQXw3OTQzODEzOTYxMjYyNDM3OTA0' TIMESERIES auto"
        fullWidth
        />;
    }
}