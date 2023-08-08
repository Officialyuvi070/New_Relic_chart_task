import React from 'react';
import { LineChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <LineChart accountIds={[4043704]}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzcwNHxJTkZSQXxOQXw3OTQzODEzOTYxMjYyNDM3OTA0' TIMESERIES auto"
        fullWidth
        />;
    }
}