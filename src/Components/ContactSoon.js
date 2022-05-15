import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'


function ContactsSoon() {

    const [successMessage, setSuccessMessage] = useState('')

    // send to mail part
    const service_ID = "service_4rotp7f"
    const template_ID = "template_z61o5qu"
    const publicKey = "Qy7Djmxath4HvKv1y"

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data, r) => {
        sendEmail(
          service_ID,
          template_ID,
          {
            name: data.name,
            email: data.email,
            subject: data.subject,
            phone: data.phone,
            description: data.description,
          },
          publicKey
        )
        r.target.reset()
      }
    
    //   We need send to mail for this part
      const sendEmail = (service_ID, template_ID, variables, publicKey) => {
        emailjs
          .send(service_ID, template_ID, variables, publicKey)
          .then(() => {
            setSuccessMessage(
              "The form sent successfuly! I'll contact you as soon as possible!"
            )
          })
          .catch((err) => console.log(`Somthing went wrong ${err}`))
      }


  return (
    <div id='contacts' className='contacts'>
        
        <div className="text-center">
            <h1>Contact Me</h1>
            <p>
                Please fill out the form and describe you project needs and
                needs I'll contact you as soon as possible.
            </p>
            <span className='success-message'>{successMessage}</span>
        </div>

        <div className="container">

            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">

                <div className="col-md-6 col-xs-12">

                    {/* NAME INPUT */}
                    <div className="text-center">
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Name'
                            name='name'
                            {...register('name', { required: true })}
                        />
                        {errors.name && (
                        <span className='input-error'>This field is required</span>
                        )}
                        <div className="line"></div>
                    </div>

                    {/* PHONE INPUT */}
                    <div className="text-center">
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Phone Number'
                            name='phone'
                            {...register('phone', { required: true })}
                            />
                            {errors.name && (
                            <span className='input-error'>This field is required</span>
                            )}
                        <div className="line"></div>
                    </div>

                    {/* EMAİL INPUT */}
                    <div className="text-center">
                        <input 
                            type="email"
                            className='form-control'
                            placeholder='Email'
                            name='email'
                            {...register('email', {
                                required: true,
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                },
                            })}
                        />
                        {errors.email && (
                        <span className='input-error'>
                            This field is empty or invalid email format.
                        </span>
                        )}
                        <div className="line"></div>
                    </div>

                    {/* SUBJECT INPUT */}
                    <div className="text-center">
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Subject'
                            name='subject'
                            {...register('subject', { required: true })}
                        />
                        {errors.subject && (
                        <span className='input-error'>This field is required</span>
                        )}
                        <div className="line"></div>
                    </div>

                </div>

                <div className="col-md-6 col-xs-12">

                     {/* DESCRIPTION*/}
                     <div className="text-center">
                        <textarea 
                            type='text'
                            className='form-control'
                            placeholder='Please describe shortly your project'
                            name='description'
                            {...register('description', { required: true })}
                        >
                        </textarea>
                        {errors.description && (
                            <span className='input-error'>This field is required</span>
                        )}
                        <div className="line"></div>
                     </div>

                    <button 
                        className="btn-main-offer contact-btn"
                        type='submit'
                    >
                        Contact Me
                    </button>

                </div>

                
                
            </div>

            </form>

        </div>

    </div>
  )
}

export default ContactsSoon