import React from 'react';
import {makeStyles} from '@material-ui/core';
import '../../styles/views/Login.scss'
import MATERIAL_UI_TEXT_FIELD_COMMON_STYLES from '../common/MaterialUI';
import InputField from "./components/InputField";


const useStyles = makeStyles((theme) => ({
    textFieldCommon: MATERIAL_UI_TEXT_FIELD_COMMON_STYLES(theme),
}))

const getFields = (type) => {
    switch(type) {
        case 'input':
        return InputField
        break;
    }
}

const Form = (props) => {
    const loginStyleClasses = useStyles(), {config = {}} = props,
        {className} = config;

    let fields = <InputField {...props} classes={loginStyleClasses} />
    return(
        <div className={className || ''}>
            {fields}
        </div>
    )
}

export default Form;