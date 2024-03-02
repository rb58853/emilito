import { useDispatch } from 'react-redux';
import { setEmpty, setProducts } from '../../store/bag/bagSlice.js';
import { BagIsEmpty, BagProducts } from '../../components/bag/localStorageFunctions.js';
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

export function ProductsState() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProducts(BagProducts()))
    })
}
export function SetProducts(dispatch) {
    dispatch(setProducts(BagProducts()));
}