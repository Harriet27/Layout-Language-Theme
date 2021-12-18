import React, { useContext } from "react";
import { ThemeContext } from "../helper/theme/themeProvider";
// import Switch from "react-switch";
// import { IoMdSunny, IoMdMoon } from "react-icons/all";

// const getStyles = (mode) => ({
//     switch: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100%",
//         fontSize: 35,
//         paddingLeft: mode === "dark" ? 30 : 10,
//     },
// });

const ThemeSwitch = () => {
    const { setTheme, mode } = useContext(ThemeContext);
    // const styles = getStyles(mode);

    const handleChangeTheme = (e) => {
        setTheme(e.target.value);
    };

    console.log("theme mode", mode);

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {/* <Switch
                checked={mode === "dark" ? true : false}
                onChange={setTheme}
            />
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: mode === "light" ? "#fdb813" : "#ffffff" }}>
                {mode.toUpperCase()} Mode
            </span> */}
            <div onChange={handleChangeTheme}>
                <label style={{ cursor: "pointer" }}>
                    <input 
                        type="radio" 
                        value="light" 
                        name="choose_theme" 
                        style={{ cursor: "pointer" }} 
                        defaultChecked={mode === "light" ? true : false} 
                    />
                    <span 
                        style={{
                            color: 
                            mode === "light" 
                            ? "#fdb813" 
                            : mode === "dark"
                            ? "#ffffff"
                            : mode === "blue"
                            ? "#06d6a0"
                            : mode === "red"
                            ? "#0033cc"
                            : ""
                        }}
                    >
                        Light
                    </span>
                </label>
                <br />
                <label style={{ cursor: "pointer" }}>
                    <input 
                        type="radio" 
                        value="dark" 
                        name="choose_theme" 
                        style={{ cursor: "pointer" }} 
                        defaultChecked={mode === "dark" ? true : false} 
                    /> 
                    <span
                        style={{
                            color: 
                            mode === "light" 
                            ? "#fdb813" 
                            : mode === "dark"
                            ? "#ffffff"
                            : mode === "blue"
                            ? "#06d6a0"
                            : mode === "red"
                            ? "#0033cc"
                            : ""
                        }}
                    >
                        Dark
                    </span>
                </label>
                <br />
                <label style={{ cursor: "pointer" }}>
                    <input 
                        type="radio" 
                        value="blue" 
                        name="choose_theme" 
                        style={{ cursor: "pointer" }} 
                        defaultChecked={mode === "blue" ? true : false} 
                    /> 
                    <span
                        style={{
                            color: 
                            mode === "light" 
                            ? "#fdb813" 
                            : mode === "dark"
                            ? "#ffffff"
                            : mode === "blue"
                            ? "#06d6a0"
                            : mode === "red"
                            ? "#0033cc"
                            : ""
                        }}
                    >
                        Blue
                    </span>
                </label>
                <br />
                <label style={{ cursor: "pointer" }}>
                    <input 
                        type="radio" 
                        value="red" 
                        name="choose_theme" 
                        style={{ cursor: "pointer" }} 
                        defaultChecked={mode === "red" ? true : false} 
                    /> 
                    <span
                        style={{
                            color: 
                            mode === "light" 
                            ? "#fdb813" 
                            : mode === "dark"
                            ? "#ffffff"
                            : mode === "blue"
                            ? "#06d6a0"
                            : mode === "red"
                            ? "#0033cc"
                            : ""
                        }}
                    >
                        Red
                    </span>
                </label>
            </div>
        </div>
    );
};

export default ThemeSwitch;
