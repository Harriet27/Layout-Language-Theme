import React from 'react';

const LanguageSwitch = (props) => {
    return (
        <div>
            <select value={props.value} onChange={props.onChange}>
                <option value="en">
                    English
                </option>
                <option value="id">
                    Indonesian
                </option>
                <option value="ch">
                    Chinese
                </option>
            </select>
        </div>
    );
};

export default LanguageSwitch;
