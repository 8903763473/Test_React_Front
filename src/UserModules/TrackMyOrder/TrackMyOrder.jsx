import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import api from '../../ApiService/apiService';

export const TrackMyOrder = ({ setLoading }) => {


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const OrderId = searchParams.get('orderId');

    const getOrderTracked = () => {
        let post = {
            "userId": localStorage.getItem('userId'),
            "orderId": OrderId
        }

        console.log(post);

        api.trackOrder(post)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        getOrderTracked();
    }, [])

    return (
        <div>TrackMyOrder</div>
    )
}
