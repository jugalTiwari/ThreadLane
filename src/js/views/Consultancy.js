import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import '../../styles/views/Login.scss'
import '../../styles/views/view.scss'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Consultancy = () => {
    const [formData, setFormData] = useState({email: '', phone: ''}),
        commonProperties = {variant: 'outlined', required: true},
        [emailError, setEmailError] = useState({isError: false, ErrorMessage: ''});
    const onSubmit = (e) => {
            e.preventDefault();
            const validatedForm = {};
            for (let i in formData) {
                if (i === "email") {
                    if (!EMAIL_REGEX.test(formData[i])) return setEmailError({isError: true, ErrorMessage:'Email Incorrect'});
                    else {
                        setEmailError({isError: false, ErrorMessage: ''});
                    }
                } else {
                    Object.assign(validatedForm, formData);
                }
            }
            alert(JSON.stringify(validatedForm))
    },
        onChange = (e) => {
            const {target: {name, value}} = e;
            if(emailError.isError) setEmailError(false)
            setFormData({...formData, [name]: value})
        }

    return (
        <main className='consultancy-main login-main'>
            <section className='glass consultancyContainer'>
                <h3>Have any queries, Please send us below</h3>
                <form onSubmit={onSubmit} className='consultancyForm'>
                    <TextField
                        name={'email'}
                        label='Email'
                        onChange={onChange}
                        fullWidth
                        InputProps={{autoComplete: 'off'}}
                        error={emailError.isError}
                        helperText={emailError.isError ? emailError.ErrorMessage : ''}
                        {...commonProperties}
                    />
                    <TextField
                        name={'phone'}
                        label='Phone Number'
                        onChange={onChange}
                        fullWidth
                        InputProps={{autoComplete: 'off'}}
                        {...commonProperties}
                    />
                    <TextField
                        id="filled-multiline-static"
                        label="Query"
                        multiline
                        rows={4}
                        fullWidth
                        {...commonProperties}
                    />
                    <Button className='submitBtn' type='submit'>Send</Button>
                </form>
            </section>
            <div className='circle1'/>
            <div className='circle2'/>
        </main>
    )
}

export default Consultancy