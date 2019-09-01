import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('E-mail requerido.'),
  password: Yup.string().required('Senha requerida.'),
});
