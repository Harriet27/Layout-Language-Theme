import React from 'react';
import { Button } from 'antd';

const button = ({
    name,
    type,
    shape,
    size = 'default',
}) => {
    return (
        <Button 
            type={type}
            size={size}
            shape={shape}
        >
            {name}
        </Button>
    );
};

export default button;