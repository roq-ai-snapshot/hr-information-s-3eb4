import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  applied_position: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
