import React, { useState } from 'react'

function Colors() {
    const [colors, setColors] = useState(["pink", "green", "blue"]);
    const handleClick = () => {
        setColors((prev) => ([...prev, Math.random()]));
    };
    return (
        <div>
            <h2>Colors</h2>
            {colors.map((colors, i) => (
                <div key={i}>{colors}</div>
            ))}
            <button onClick={handleClick}>Ekle</button>
        </div>
    );
}

export default Colors