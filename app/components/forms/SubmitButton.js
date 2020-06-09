import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './../AppButton';

function SubmitButton({ title, color = 'secondary' }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton color={color} onPress={handleSubmit}>
            {title}
        </AppButton>
    );
}

export default SubmitButton;
