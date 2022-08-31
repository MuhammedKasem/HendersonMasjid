import React, { useEffect, useMemo, useRef } from 'react';
import { Script } from 'gatsby'
let counter = 0;

const generateId = () => {
  return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};

const DonateButton = () => {
  const buttonRef = useRef(null);
  const buttonId = useMemo(() => `ID-${generateId()}`, []);
  let button;
  useEffect(() => {
    if (typeof window !== undefined) {
      console.log(window.PayPal)
      button = window.PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'AUfYW36a-W81IrHKFFlsnDLFTT9dbYBnjoT3TC4DCvfKrw7mRdlb_ACx4jj_HauuU3ulbZ8UHoqtrs-e',
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        }
      });
      button.render(`#${buttonRef.current.id}`); // you can change the code and run it when DOM is ready
    }
  }, []);
  return (
    <>
      <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charSet="UTF-8" onError={() => {
        console.log("error")
      }} onLoad={() => {
        console.log(window.PayPal)
      }} />
      <div ref={buttonRef} id={buttonId} />
    </>
  );
};

export default DonateButton;
