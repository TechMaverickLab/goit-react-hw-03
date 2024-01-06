import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
    const formik = useFormik({
      initialValues: {
        name: '',
        number: ''
      },
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
        </label>
        <button type="submit" className={styles.button}>Add contact</button>
      </form>
    );
  };
  

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  

export default ContactForm;
