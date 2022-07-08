import React from 'react';

const TrackerTimer = ({ total }) => {


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
