import React, { useEffect } from 'react'
import TrackerTimer from './TrackerTimer'
import { deleteTracker, modifyTracker } from '../store/action';
import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button/Button';
import moment from 'moment';

const TrackerItem = ({ id, title, isPaused, total, started }) => {
    const dispatch = useDispatch();

    const handelPlay = ({ id, title, isPaused, total, started }) => {
        dispatch(modifyTracker({ id, title, isPaused: !isPaused, total, started: isPaused ? moment().format('HH:mm:ss') : started }));
    }

    useEffect(() => {
        let interval = null;
        if (!isPaused) {
            interval = setInterval(() => {
                dispatch(modifyTracker({ id, title, isPaused, total: total += 10, started }))
            }, 10);

        } else if (isPaused) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPaused]);
    return (
        <div>
            <span>{title}</span>
            <TrackerTimer
                started={started}
                total={total}
            />
            <div>
                {isPaused && <Button
                    className="material-icons"
                    onClick={() => handelPlay({ id, title, isPaused, total, started })}
                >
                    play_circle_outline
                </Button>}
                {!isPaused && <Button
                    className="material-icons"
                    onClick={() => handelPlay({ id, title, isPaused, total, started })}
                >
                    pause_circle_outline
                </Button>}
                <Button
                    className="material-icons"
                    onClick={() => dispatch(deleteTracker(id))}>
                    remove_circle_outline
                </Button>
            </div>
        </div>
    )
}

export default TrackerItem
