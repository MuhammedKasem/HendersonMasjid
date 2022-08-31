import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
const DonateButton = () => {
  const [price, setPrice] = useState(1);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  }

  const onApprove = (data, actions) => {
    console.log(data);
    return actions.order.capture();
  }

  return (
    <>

      <PayPalScriptProvider options={{ "client-id": "AfBJ2Ey_RvEdKSmwVn5T1MvqpVBDbUtSVSFkO1MHvLg17XoyAia9zd9Hme5zR0er0oWb9-XCgkEDdpdF" }}>
        <div className="paypalBtns">
          <div className="flexRow">
          <span>$</span><input className="inputPayment" type="text" onChange={e => setPrice(e.target.value)} value={price} />
          </div>
          <PayPalButtons
            style={{
              color: "silver",
              shape: "pill",
            }}
            // forceReRender={[price]}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          >

          </PayPalButtons>
        </div>

      </PayPalScriptProvider>
    </>
  );
};

export default DonateButton;

            // alert("Thank you for donating " + name + "! JazakaAllahu Khair");
