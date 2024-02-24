'use client'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email address'
    ).required('Email is required'),
    phone: Yup.string().required('Phone Number is required')
});

const onSubmit = (values:any, { resetForm }:any) => {
    console.log(values);
    alert('success')
    resetForm();
};

const GeneralForm = () => {
    return (
        <div className='lg:w-[1440px] h-[906px] flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isValid, dirty }) => (
                        <Form className='bg-white h-[690px] lg:w-[600px] rounded-2xl w-[315px] lg:mr-0'>
                            <div className='text-[#11284B] text-[21px] text-Plus Jakarta Sans h-[31.5px] mt-16 lg:ml-14 ml-7'>
                                <h4>General Enquiries</h4>
                            </div>

                            <div className='lg:w-[492px] h-[455.35px] lg:ml-14 ml-6'>
                                <div className='lg:flex gap-16 mt-10'>
                                    <div>
                                        <label htmlFor='firstName'>First Name</label>
                                        <Field
                                            type='text'
                                            id='firstName'
                                            name='firstName'
                                            className='block lg:w-full w-[250px] rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                        <ErrorMessage
                                            name='firstName'
                                            component='div'
                                            className='text-red-500'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='lastName'>Last Name</label>
                                        <Field
                                            type='text'
                                            id='lastName'
                                            name='lastName'
                                            className='block lg:w-full w-[250px] rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                        <ErrorMessage
                                            name='lastName'
                                            component='div'
                                            className='text-red-500'
                                        />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor='email'>Email</label>
                                    <Field
                                        type='text'
                                        id='email'
                                        name='email'
                                        className='block lg:w-full w-[250px] rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                    <ErrorMessage
                                        name='email'
                                        component='div'
                                        className='text-red-500'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor='phone'>Phone</label>
                                    <Field
                                        type='text'
                                        id='phone'
                                        name='phone'
                                        className='block lg:w-full w-[250px] rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                    <ErrorMessage
                                        name='phone'
                                        component='div'
                                        className='text-red-500'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor='self'>How would you describe yourself?</label>
                                    <div className='mt-2'>
                                        <select
                                            id='self'
                                            name='self'
                                            autoComplete='null'
                                            className='block lg:w-full w-[250px] rounded-md bg-white border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                                        >
                                            <option>Please Select</option>
                                            <option>gghg</option>
                                            <option>hggj</option>
                                            <option>hggj</option>
                                            <option>hggj</option>
                                            <option>hggj</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor='message'>Message</label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        className='block lg:w-full w-[250px] rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>

                            <div className='mt-10 lg:mt-0'>
                            <button
                                type='submit'
                                className={`bg-[#00BAD2] text-black rounded-full font-bold w-[105px] h-[42px] ${
                                    (isValid && dirty) ? 'ml-64' : 'ml-14'
                                }`}
                            >
                                Submit
                            </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default GeneralForm;
