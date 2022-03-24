import React, { useEffect, useRef, useState } from 'react';
import MainLayout from "../components/Layouts/MainLayout";
import "../App.css";

const Experiment = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const checkStrength = (pwd) => {
        const medium = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
        const strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (pwd && pwd.match(strong)) {
            setStrength("Strong");
        } else if (pwd && pwd.match(medium)) {
            setStrength("Medium");
        } else {
            setStrength("Weak");
        }
    };

    const handleChange = (e) => {
        const input = e.target.value;
        checkStrength(input);
        setPassword(input);
    };

    return (
        <MainLayout>
            <div style={{ marginTop: '1rem' }}>
                <input
                    type="text"
                    value={password}
                    onChange={handleChange}
                />
                <h2>
                    Strength: {strength}
                </h2>
            </div>
        </MainLayout>
    );
};

export default Experiment;