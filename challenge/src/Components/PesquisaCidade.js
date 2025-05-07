import React from "react";
import "../App.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validation = Yup.object({
  city: Yup.string()
    .required('Campo obrigatório')
    .min(3, 'Mínimo 3 caracteres')
    .max(50, 'Máximo 50 caracteres')
    .matches(/^[a-zA-Z\s]+$/, 'Apenas letras e espaços são permitidos'),
});

function PesquisaCidade({ ProcuraCidade }) {
  return (
    <Formik
      initialValues={{ city: '', unit: 'metric' }}
      validationSchema={validation}
      onSubmit={(values) => {
        ProcuraCidade(values.city, values.unit);
      }}
    >
      {() => (
        <Form className="form-search form-card">
          <div className="form-group">
            <label htmlFor="city">Cidade</label>
            <Field name="city" placeholder="Insira o nome da cidade" />
            <ErrorMessage name="city" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="unit">Unidade</label>
            <Field as="select" name="unit" className="select-field">
              <option value="metric">Celsius (°C)</option>
              <option value="imperial">Fahrenheit (°F)</option>
            </Field>
          </div>

          <button type="submit">Pesquisar</button>
        </Form>
      )}
    </Formik>
  );
}

export default PesquisaCidade;
