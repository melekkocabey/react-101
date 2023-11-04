import React, { useState } from 'react'

function Form() {
    /* tek bir state kullanmak */
    const [form, setForm] = useState({ name: "", surname: "", gender: "0" });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    /*  const [name, setName] = useState('');
     const [surname, setSurname] = useState('');
     const [gender, setGender] = useState("0"); */

    return (
        <div>
            <div>
                <div>İsim</div>
                <input placeholder='İsim' name="name" value={form.name} onChange={handleChange} />
                <input placeholder='Soyisim' name="surname" value={form.surname} onChange={handleChange} />


            </div>
            <br />
            <div>
                <div>Cinsiyet</div>
                <select value={form.gender} onChange={handleChange} name="gender">
                    <option value={"0"}>Kadın</option>
                    <option value={"1"}>Erkek</option>
                </select>
            </div>
            <hr />
            <div>
                İsim:
                <strong> {form.name} {form.surname}</strong></div>
            <div>
                Cinsiyet:
                <strong> {form.gender === '0' ? 'Kadın' : 'Erkek'}</strong></div>
        </div>
    )
}

export default Form