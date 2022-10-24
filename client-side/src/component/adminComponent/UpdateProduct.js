import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/reducers/productSlice";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import TextError from '../.././component/client/form/TextError'
import ServerMessage from '../.././component/client/ServerMessage'

const UpdateProduct = (props) => {
    const { productError, productResMsg } = useSelector((state) => ({ ...state.product }));
    const dispatch = useDispatch();
    const { data } = props
    const initialValues = {
        name: '',
        desc: '',
        price: '',
        id: data._id

    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        desc: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
    })
    const onSubmit = (values, submitProps) => {
        dispatch(update({ values }));
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
                        <Form className="mt-8 space-y-6">
                            <div className='mt-20'>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <Field
                                        type="text" id="name" name="name"
                                        placeholder={data.name}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <ErrorMessage component={TextError} name='name' />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                                    <Field
                                        as='textarea' rows="3" id="desc" name="desc"
                                        placeholder={data.desc}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <ErrorMessage component={TextError} name='name' />
                                </div>

                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <Field
                                        type="number" id="price" name="price"
                                        placeholder={data.price}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <ErrorMessage component={TextError} name='price' />
                                </div>

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full mt-6 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}
export default UpdateProduct