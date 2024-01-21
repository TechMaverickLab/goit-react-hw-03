import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

// Валідаційна схема за допомогою Yup
/* eslint-disable no-invalid-regexp */
const nameRegex = new RegExp("^[\\p{L}\\p{N}-_' ]+$", "u");
/* eslint-enable no-invalid-regexp */
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(3, 'Name must be at least 3 characters')
    .matches(nameRegex, 'Invalid characters in name'),
  number: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, 'Invalid phone number')
    .min(7, 'Number should be at least 7 digits')
});

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      onSubmit({ id: nanoid(), ...values });
      formik.resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
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
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
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
