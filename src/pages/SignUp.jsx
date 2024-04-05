import { Button, Box, Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import React from "react";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center", padding: {xs: "10px", sm: "30px"} }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values)
          formikHelpers.resetForm();
        }}
        validationSchema={object({
          username : string().required("please enter your username").min(5, "username is too short").matches(/^\S*$/, "Username cannot contain spaces"),
          email : string().required("please enter your email").email("Invaid email"),
          password : string().required("please enter your password").min(6, "password is too short").matches(/^\S*$/, "Password cannot contain spaces"),
        })}
      >
       {({errors, isValid, touched, dirty}) => ( 
          <Form>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: {xs: "80vw", sm: "50vw"}, marginTop: {xs: "20px", sm: "0px"} }}
            >
              <Field
                name="username"
                type="string"
                as={TextField}
                variant="outlined"
                label="Username"
                fullWidth
                error={Boolean(errors.username) && Boolean(touched.username)}
                helperText={Boolean(touched.username) && errors.username}
              />
              <Box height={14} />
              <Field
                name="email"
                type="email"
                as={TextField}
                variant="outlined"
                label="Email"
                fullWidth
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              <Box height={14} />

              <Field
                name="password"
                type="password"
                as={TextField}
                variant="outlined"
                label="Password"
                fullWidth
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
              <Box height={16} />

              <Button type="submit" variant="contained" size="large"
              disabled={!isValid}
              >
                Sign Up
              </Button>
            </Box>
          </Form>
         )} 
      </Formik>
    </Grid>
  );
}


