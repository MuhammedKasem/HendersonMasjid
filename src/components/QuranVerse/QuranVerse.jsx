import React, { useState, useEffect } from "react";

import "./QuranVerse.css"

const QuranVerse = () => {
    const [verse, setVerse] = useState(null);

    useEffect(() => {
        const fetchVerse = async () => {
            const response = await fetch(
                "https://api.alquran.cloud/v1/ayah/random"
            );
            const data = await response.json();
            setVerse(data.data[0]);
        };
        fetchVerse();
    }, []);

    return (
        <div>
            {verse && (
                <div>
                    <h3 className="quranVerse">{verse}</h3>
                    <p>{verse.translation}</p>
                </div>
            )}
        </div>
    );
};

export default QuranVerse;
