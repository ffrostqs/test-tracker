import React, { useEffect } from 'react'
import TrackerTimer from './TrackerTimer'
import { deleteTracker, modifyTracker } from '../store/action';
import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button/Button';
import moment from 'moment';

const TrackerItem = ({ id, title, isPaused, total, started }) => {
    const dispatch = useDispatch();

    const now = moment(new Date()).format();
    console.log(`now`, now);
    console.log(`started`, started);
    let diffTime = moment.duration(moment.utc(moment(now, "HH:mm:ss").diff(moment(started, "HH:mm:ss"))).format("HH:mm:ss")).asMilliseconds()
    // console.log(`diffTime`, diffTime);

    const handelPlay = ({ id, title, isPaused, total, started }) => {
        dispatch(modifyTracker(
            {
                id,
                title,
                isPaused: !isPaused,
                total,
                started: isPaused ? moment().format() : started
            }
        ));
    }
    window.onbeforeunload = function () {
        dispatch(modifyTracker(
            {
                id,
                title,
                isPaused: !isPaused,
                total,
                started: moment().format()
            }
        ));
        diffTime = 0
    };
    window.onload = function () {
        dispatch(modifyTracker(
            {
                id,
                title,
                isPaused: !isPaused,
                total,
                started
            }
        ));
    };
    if (started !== now && isPaused === false && diffTime !== total) {
        console.log('diffTime', diffTime);
        if (now > started) {
            total = diffTime + total
        }
    }
    useEffect(() => {
        let interval = null;
        if (!isPaused && diffTime !== total) {
            interval = setInterval(() => {
                dispatch(modifyTracker(
                    {
                        id,
                        title,
                        isPaused,
                        total,
                        started
                    }
                ))
            }, 1000);

        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPaused]);
    return (
        <div>
            <span>{title}</span>
            <TrackerTimer
                id={id}
                title={title}
                started={started}
                total={total}
                isPaused={isPaused}
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
