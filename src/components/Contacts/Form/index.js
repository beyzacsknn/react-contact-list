import React, { useEffect, useState } from 'react';

const initialValue={ fullname: "", phone_number: "" }

function Form({ addContact, contacts }) {
    
    const [form, setForm] = useState([initialValue]);
    
    useEffect ( () => {
        setForm(initialValue);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }

        addContact ([...contacts, form]);
    };


    return (

        <form onSubmit={onSubmit} >
            <div>
                <input value={form.fullname || ''}   name='fullname' placeholder='Fullname' onChange={onChangeInput} />
            </div>

            <div>
                <input value={form.phone_number || ''}    name='phone_number' placeholder='Phone Number' onChange={onChangeInput} />
            </div>

            <div className='btn' >
                <button  >ADD</button>
            </div>
        </form>
    )
}

export default Form