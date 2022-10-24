import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { allCategory } from "../../redux/reducers/categorySlice";
import { create } from "../../redux/reducers/productSlice";

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import TextError from '../.././component/client/form/TextError'
import ServerMessage from '../client/ServerMessage';

const AddProduct = () => {
  const { allCategories } = useSelector((state) => ({ ...state.category }));
  const { productResMsg, productError } = useSelector((state) => ({ ...state.product }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCategory())
  }, [dispatch])


  const initialValues = {
    name: '',
    desc: '',
    price: 0,
    category: '',
    img: null,
  }

  const SUPPORTED_FORMATS = ["image/jpg", "image/JPG", "image/png", "image/jpeg"]

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    desc: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
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
      <ServerMessage resMsg={productResMsg} error={productError} />
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
                    Add new product
                  </h2>
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <Field
                        type="text" id="name" name="name"
                        className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder='Product Name'
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

                    <div>
                      <Field
                        type="number" id="price" name="price"
                        className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder='Product price'
                      />
                      <ErrorMessage component={TextError} name='price' />
                    </div>

                    {allCategories.length > 0 &&
                      <div>
                        <Field
                          as='select' id='category' name='category'
                          className="mt-6 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                        >
                          {allCategories.map(cate => {
                            return (
                              <option key={cate._id} value={cate._id}>
                                {cate.name}
                              </option>
                            )
                          })}
                        </Field>
                        <ErrorMessage component={TextError} name='productCategory' />
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
export default AddProduct