import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={(
                <Link to="/library/language">
                    <Button type="primary">Back Home</Button>
                </Link>
            )}
        />
    );
};

export default NotFound404;