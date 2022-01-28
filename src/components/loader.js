import React from 'react';
import LoadingScreen from 'react-loading-screen'

const Loader = () => {
    return (
        <LoadingScreen
            loading={true}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            text='Loading...'
        />
    );
};

export default Loader;