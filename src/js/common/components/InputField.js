import React, {memo} from "react";
import {InputAdornment, TextField} from "@material-ui/core";

const Input = (props) => {
    const {config = [], classes} = props;
    return config.map((field, idx) => {
        const {label = '', placeholder='', variant = 'outlined', adornmentIcon: AdornmentIcon = null, multiline = false, name = ''} = field;

        return <TextField
            key={idx}
            error={false}
            name={name}
            disabled={false}
            className={classes.textFieldCommon}
            variant={variant}
            label={label}
            multiline={multiline}
            InputProps={{
                placeholder: placeholder,
                startAdornment: (
                    <InputAdornment position="start">
                        {AdornmentIcon ? <AdornmentIcon /> : null}
                    </InputAdornment>
                ),
                notched: false
            }}
        />
    })

}
const hoc = (WrappedComponent) => {
    return (props) => {
        const { config: {formSection = []} = {} } = props;
        return <WrappedComponent {...props} config={formSection} />
    };
}

export default memo(hoc(Input));