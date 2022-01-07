import React from "react";
import Form from '../common/Form'
import {Button} from '@mui/material'
import '../../styles/views/Login.scss'
import {MailOutline} from "@material-ui/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const config = {
        className: 'login',
        formSection: [
            {
                label: 'Email Address',
                name: 'email',
                placeholder: 'Enter Your Email',
                variant: 'outlined',
                adornmentIcon: MailOutline
            },{
                label: 'Password',
                name: 'password',
                placeholder: 'Enter Your Password',
                variant: 'outlined',
                adornmentIcon: MailOutline
            }
        ]
    },
        loginForm = <Form config={config} />

    function onSubmit(e) {
        e.preventDefault()
        console.log(e.target.name)
    }

    return (
        <div>
            <main className='login-main'>
                <section className='glass'>
                    <form onSubmit={onSubmit}>
                        {loginForm}
                        <Button type='submit'>Log In</Button>
                    </form>
                </section>
                <div className='circle1'/>
                <div className='circle2'/>
            </main>
        </div>
    )
}