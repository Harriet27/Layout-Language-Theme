import React, { useContext } from "react";
import { ThemeContext } from "./themeProvider";
// import Switch from "react-switch";
// import { IoMdSunny, IoMdMoon } from "react-icons/all";

const getStyles = (mode) => ({
    switch: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 35,
        paddingLeft: mode === "dark" ? 30 : 10,
    },
});

const ThemeSwitch = () => {
    const { setTheme, mode } = useContext(ThemeContext);
    // const styles = getStyles(mode);

    const handleChangeTheme = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {/* <Switch
                checked={mode === "dark" ? true : false}
                height={50}
                width={120}
                offColor="#1d1f2f"
                onColor="#FDB813"
                checkedIcon={
                    <IoMdSunny style={styles.switch} color="white" className="light" />
                }
                uncheckedIcon={
                    <IoMdMoon style={styles.switch} color="white" className="dark" />
                }
                onChange={setTheme}
            /> */}
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
                    <input type="radio" value="light" name="choose_theme" style={{ cursor: "pointer" }} defaultChecked />
                    <span 
                        style={{
                            color: 
                            mode === "light" 
                            ? "#fdb813" 
                            : mode === "dark"
                            ? "#ffffff"
                            : mode === "blue"
                            ? " #06d6a0"
                            : ""
                        }}
                    >
                        Light
                    </span>
                </label>
                <br />
                <label style={{ cursor: "pointer" }}>
                    <input type="radio" value="dark" name="choose_theme" style={{ cursor: "pointer" }} /> 
                    <span
                        style={{
                            color: 
                            mode === "light" 
                            ? "#fdb813" 
                            : mode === "dark"
                            ? "#ffffff"
                            : mode === "blue"
                            ? " #06d6a0"
                            : ""
                        }}
                    >
                        Dark
                    </span>
                </label>
                <br />
                <label style={{ cursor: "pointer" }}>
                    <input type="radio" value="blue" name="choose_theme" style={{ cursor: "pointer" }} /> 
                    <span
                        style={{
                            color: 
                            mode === "light" 
                            ? "#fdb813" 
                            : mode === "dark"
                            ? "#ffffff"
                            : mode === "blue"
                            ? " #06d6a0"
                            : ""
                        }}
                    >
                        Blue
                    </span>
                </label>
            </div>
        </div>
    );
};

export default ThemeSwitch;
