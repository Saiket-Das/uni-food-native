import React from "react";
import { Formik } from "formik";

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  console.log("initialValues", initialValues);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
