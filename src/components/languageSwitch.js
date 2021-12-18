import React from 'react';

const LanguageSwitch = (props) => {
    return (
        <div>
            <select 
                value={props.value} 
                onChange={props.onChange}
                style={styles.select}
            >
                <option value="en">
                    English
                </option>
                <option value="id">
                    Indonesia
                </option>
                <option value="ch">
                    Chinese
                </option>
            </select>
        </div>
    );
};

const styles = {
    select: {
        padding: "5px 10px",
        borderRadius: 5,
    },
};

export default LanguageSwitch;
