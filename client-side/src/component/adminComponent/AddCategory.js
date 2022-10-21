import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { create, parentCategory } from "../../redux/reducers/categorySlice";

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import TextError from '../.././component/client/form/TextError'
import ServerMessage from '../.././component/client/ServerMessage'


const AddCategory = () => {
  const { error, resMsg, allCategories } = useSelector((state) => ({ ...state.category }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(parentCategory())
  }, [dispatch])

  const initialValues = {
    name: '',
    desc: '',
    parentId: '',
    img: null,
  }

  const SUPPORTED_FORMATS = ["image/jpg", "image/JPG", "image/png", "image/jpeg"]

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    desc: Yup.string().required('Required'),
    img: Yup.mixed()
      .nullable()
      .test('size', 'file is to large', (value) => { return value && value.size <= 5 * 1024 * 1024 })
      .test('type', 'Invalid file format selection', (value) => value && SUPPORTED_FORMATS.includes(value.type))
  })

  const onSubmit = (values, submitProps) => {
    let data = new FormData()
    data.append('img', values.img)
    dispatch(create({ values }));
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
              <div className="w-full max-w-lg space-y-8">
                <Form className="mt-8 space-y-6">
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Add new category
                  </h2>
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <Field
                        type="text" id="name" name="name"
                        className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder='Category Name'
                      />
                      <ErrorMessage component={TextError} name='name' />
                    </div>

                    <div>
                      <Field
                        as='textarea' rows="3" id="desc" name="desc"
                        className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder='Description'
                      />
                      <ErrorMessage component={TextError} name='desc' />
                    </div>

                    {allCategories.length > 0 &&
                      <div>
                        <Field
                          as='select' id='parentId' name='parentId'
                          className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option key='parent' value=''>Nothing</option>
                          {allCategories.map(cate => {
                            return (
                              <option key={cate._id} value={cate.id}>
                                {cate.name}
                              </option>
                            )
                          })}
                        </Field>

                        <ErrorMessage component={TextError} name='email' />
                      </div>
                    }

                    <div className='mt-14'>
                      <input
                        type='file'
                        name='img'
                        className='mt-6'
                        onChange={(event) => formik.setFieldValue(
                          'img', event.target.files[0]
                        )}
                      />

                      <ErrorMessage component={TextError} name='img' />
                    </div>
                  </div>

                  <button
                    type='submit'
                    className="bg-blue-600 px-12 py-2 w-full rounded-md text-white"
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
export default AddCategory