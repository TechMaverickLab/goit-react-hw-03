import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Валідаційна схема за допомогою Yup
const nameRegex = /^[a-zA-Z0-9а-яА-ЯґҐєЄіІїЇёЁ _'-]+$/u;
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be no longer than 15 characters')
    .matches(nameRegex, 'Invalid characters in name'),
    number: Yup.string()
    .required('Required')
    .test(
      'len', 
      'Number must be between 10 and 15 digits in total, including country code', 
      val => {
        const digitsOnly = val.replace(/\D/g, '');
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      }
    )
});

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const contactWithId = { id: nanoid(), ...values };
      onSubmit(contactWithId);
      formik.resetForm();
    }
    
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>

      {/* Поле для введення імені */}
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className={styles.input}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </label>

      {/* Поле для введення номера телефону */}
      <label className={styles.label}>
        Number
        <PhoneInput
          international
          defaultCountry="US"
          value={formik.values.number}
          onChange={value => formik.setFieldValue('number', value)}
          className={styles.input}
        />
        {formik.touched.number && formik.errors.number ? <div>{formik.errors.number}</div> : null}
      </label>
      <button type="submit" className={styles.button}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
