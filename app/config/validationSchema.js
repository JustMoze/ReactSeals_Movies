import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});

const registrationValidation = Yup.object().shape({
    username: Yup.string().required().min(5).label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});

export default validationSchema;

export { registrationValidation };
