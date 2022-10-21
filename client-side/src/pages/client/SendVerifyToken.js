import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendVerifyToken } from "../.././redux/reducers/authSlice";
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

function SendVerifyToken() {
  const { error, resMsg } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  const initialValues = { email: '', }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
  })

  const onSubmit = (values, submitProps) => {
    dispatch(sendVerifyToken({ values }));
    submitProps.setSubmitting(false)
  }
  return (
    <>
      <ServerMessage resMsg={resMsg} error={error} />
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
                  </div>

                  <div className="flex items-center">
                    <Link href="login" className="font-medium text-indigo-600 hover:text-indigo-500">
                      already have account
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

export default SendVerifyToken
