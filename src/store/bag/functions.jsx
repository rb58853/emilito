import { useDispatch } from 'react-redux';
import { setEmpty } from '../../store/bag/bagSlice.js';
import { BagIsEmpty } from '../../components/bag/BagFunctions.js';
import { useEffect } from 'react';

export function EmptyState() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setEmpty(BagIsEmpty()))
    })
}

export function SetEmpty(dispatch) {
    dispatch(setEmpty(BagIsEmpty()));
}