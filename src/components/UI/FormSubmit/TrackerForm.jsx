import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { addTracker } from '../../../store/action';
import moment from 'moment';
const TrackerForm = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();

    const addNewTracker = (e) => {
        e.preventDefault();
        dispatch(addTracker({ id: new Date().getTime().toString(), title: inputData !== '' ? inputData : "No name tracker", isPaused: false, total: 0, started: moment().format() }))
        setInputData('');
    }
    return (
        <form>
            <Input
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                type={'text'}
                placeholder={'Enter tracker name'}
            />
            <Button
                className="material-icons"
                onClick={addNewTracker}
            >
                play_circle
            </Button>
        </form>
    )
}

export default TrackerForm
