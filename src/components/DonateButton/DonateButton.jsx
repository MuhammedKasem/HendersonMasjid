import React, { useEffect } from 'react';

import "../DonateButton/DonateButton.css";

const DonateButton = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://henderson-masjid.givecloud.co/v1/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <button className="donate-secondary-button" data-fundraising-form="8NDR96EK">Donate</button>
    );
};

export default DonateButton;
