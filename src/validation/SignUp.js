import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .max(150, 'Nome completo não pode passar de 150 caracteres.')
    .required('Nome completo requerido.'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .max(100, 'E-mail não pode ter mais de 100 caracteres.')
    .required('E-mail requerido.'),
  password: Yup.string()
    .min(6, 'Necessário o mínimo de 6 caracteres')
    .required('Senha requerida.'),
});
