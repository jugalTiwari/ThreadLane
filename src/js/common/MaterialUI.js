const MATERIAL_UI_TEXT_FIELD_COMMON_STYLES = (theme, width = '100%', marginSpacing = false) => {
    return ({
        margin: marginSpacing ? marginSpacing : theme.spacing(1),
        width: width,
        padding: '4px',
        '& label': {
            fontWeight: '700',
            fontSize: '20px',
            letterSpacing: '2px',
            color: 'var(--textColor)'
        },
        '& svg': {
            color: 'var(--navyBlue)'
        },
        ' & label.Mui-focused': {
            color: 'var(--navyBlue)',
        },
        '& .MuiOutlinedInput-root': {

            marginTop: '12px',
            '& fieldset': {
                borderColor: 'var(--navyBlue)',
            },
            '&:hover fieldset': {
                borderColor: 'var(--navyBlue)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--navyBlue)',
            },
            '&.Mui-focused svg': {
                color: 'var(--navyBlue)'
            }

        }
    })
}

export default MATERIAL_UI_TEXT_FIELD_COMMON_STYLES;