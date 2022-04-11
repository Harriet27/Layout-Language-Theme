import React from 'react';
import MainLayout from "../components/Layouts/MainLayout";
import useNetwork from '../helper/network';

const Network = () => {
  const networkState = useNetwork();
  const { online, since } = useNetwork();

  return (
    <MainLayout>
      <div>
        network connection: {online ? "true" : "false"}
        <br />
        connect since: {since}
      </div>
    </MainLayout>
  );
};

export default Network;
