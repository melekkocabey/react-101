import React, { useState } from 'react'

function User() {
    const [user, setUser] = useState({ name: "melek", surname: "kocabey" });
    return <div>
        <h2>User</h2>
        {user.name} {user.surname}
        <br />
        <br />
        <div>
            <button onClick={() => setUser((prev) => ({ ...prev, name: 'metin' }))}>ismi değiştir</button>

            <button onClick={() => setUser((prev) => ({ ...prev, surname: 'uzun' }))}>soyadı değiştir</button>
        </div>
    </div >
}

export default User