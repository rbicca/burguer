import React, { useState, useEffect} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Bag from '../Bag';

const withErrorHandler = (WrappedComponent, axios) => {

    return (props) => {

        const [error, setError] = useState(null);

        useEffect(() => {
            axios.interceptors.request.use(req => {
                setError(null);
                return req;
            });
            axios.interceptors.response.use(resp => resp, err => {
                setError(err);
            });
          }, []);

        const errorConfirmedHandler = () =>{
            setError(null);
        }

        return (
            <Bag>
                <Modal show={error} modalClosed={errorConfirmedHandler}>
                    {error ?  error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Bag>
        );
    }
}

export default withErrorHandler;