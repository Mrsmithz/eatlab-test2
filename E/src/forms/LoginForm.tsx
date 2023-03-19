import React, { useState } from 'react';
export default function LoginForm() {
    const [form, setForm] = useState({
        username: '',
        password: '',
      });
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
    setForm(nextFormState);
    }

    // Mocking fail API call
    const onSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!isSuccess) {
            alert(JSON.stringify(form, null, 2));
            setIsSuccess(true)
        }
        else{
            alert(`Authenticate Failed`)
            setIsSuccess(false)
        }
    };

    return (
        <form onSubmit={onSubmitForm}>
            <div >
                <label>Username</label>
                <input
                type="text"
                aria-label="Username field"
                name="username"
                value={form.username}
                onChange={onUpdateField}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                type="password"
                aria-label="Password field"
                name="password"
                value={form.password}
                onChange={onUpdateField}
                />
            </div>
            <div>
                <button type="submit">
                Login
                </button>
            </div>
        </form>
    )
}