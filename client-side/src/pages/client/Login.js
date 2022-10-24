
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../.././redux/reducers/authSlice";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import TextError from '../.././component/client/form/TextError'
import SignUpLogo from '../.././component/client/form/SignUpLogo'
import ServerMessage from '../.././component/client/ServerMessage'


function Login() {
  const { authError, authResMsg } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
  })

  const onSubmit = (values, submitProps) => {
    dispatch(login({ values, navigate }));
    submitProps.setSubmitting(false)
  }
  return (
    <>
      <ServerMessage resMsg={authResMsg} error={authError} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {formik => {
          return (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-8">
                <Form className="mt-8 space-y-6">
                  <SignUpLogo />
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <Field
                        type="email" id="email" name="email"
                        className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder='Email'
                      />
                      <ErrorMessage component={TextError} name='email' />
                    </div>
                    <div>
                      <Field
                        type="password" id="password" name="password"
                        className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder='Password'
                      />
                      <ErrorMessage component={TextError} name='password' />
                    </div>

                  </div>
                  <div className="flex items-center justify-between">
                    <Link to="/forgetPassword" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </Link>

                    <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Sign Up
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link to="/sendVerifyToken" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Verify my account
                    </Link>
                  </div>

                  <button
                    type='submit'
                    disabled={!formik.isValid || formik.isSubmitting}
                    className="bg-blue-600 px-12 py-2 w-full rounded-md"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          )
        }}
      </Formik>
    </>
  )
}

export default Login
