import React, { useRef, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const DonateButton = () => {

  const ref = useRef()
  const [height, setHeight] = useState(0)

  // Used to get the height of the ref element and update the state of height
  setTimeout(() => {
    setHeight(ref.current.clientHeight)
  }, 200)

  const [price, setPrice] = useState(100);
  const createOrder = (data, actions) => {
    console.log(data);
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
    alert("Thank you for donating " + data.name + "! JazakaAllahu Khair");
    return actions.order.capture();
  }

  return (
    <>
      <div className="paypalBtns" >
        <div className="presetAmounts">
          <button onClick={() => setPrice(50)} className="presetAmt">$50</button>
          <button onClick={() => setPrice(100)} className="presetAmt">$100</button>
          <button onClick={() => setPrice(150)} className="presetAmt">$150</button>
          <button className="presetAmt">Custom</button>
        </div>
        <div className="flexRow">
          <span>$</span><input className="inputPayment" type="number" onChange={(e) => { setPrice(e.target.value); console.log(price); }} value={price} />
        </div>
        <div ref={ref} className="buttonWrapper" style={{ minHeight: height }}>
          <PayPalScriptProvider options={{ "client-id": "AfBJ2Ey_RvEdKSmwVn5T1MvqpVBDbUtSVSFkO1MHvLg17XoyAia9zd9Hme5zR0er0oWb9-XCgkEDdpdF" }}>
            <PayPalButtons
              style={{
                color: "silver",
                shape: "pill",
              }}
              forceReRender={[price]}
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            >
            </PayPalButtons>
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
};

export default DonateButton;

