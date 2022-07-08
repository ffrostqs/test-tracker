import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTracker } from '../store/action';
import TrackerItem from './TrackerItem';

const TrackerList = () => {

    const list = useSelector((state) => state.trackerReducer.list)
    const reverseList = [...list].reverse();
    console.log('list', list);
    return (
        <>
            {reverseList.map(({ id, title, isPaused, total, started }) => {
                return (
                    <TrackerItem
                        key={id}
                        id={id}
                        title={title}
                        isPaused={isPaused}
                        total={total}
                        started={started}
                    />
                )
            })
            }


        </ >
    )
}

export default TrackerList
