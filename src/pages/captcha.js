import React from 'react';
import MainLayout from "../components/Layouts/MainLayout";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = () => {
  const handleChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <MainLayout>
      <div>
        nyoba captcha
        <ReCAPTCHA
          sitekey="6LduhmQfAAAAACrTKvxK77Ac__HIlh0Q2qfgZEjh"
          onChange={handleChange}
        />
      </div>
    </MainLayout>
  );
};

export default Captcha;
