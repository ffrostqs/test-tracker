import React from 'react';

const TrackerTimer = ({ total }) => {


    // var now = moment(new Date()).format('HH:mm:ss'); //todays date
    // var end = started.started;
    // let diffTime = moment.utc(moment(now, "HH:mm:ss").diff(moment(end, "HH:mm:ss"))).format("HH:mm:ss")
    // console.log('now', now);
    // console.log('end', end);
    // console.log(`diffTime`, diffTime);
    return (
        <div>
            <div>
                <span>{("0" + Math.floor((total / 3600000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((total / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((total / 1000) % 60)).slice(-2)}</span>
            </div>
        </div>

    )
}

export default TrackerTimer
