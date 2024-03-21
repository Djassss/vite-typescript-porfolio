import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Success from './Success';



interface FormValues {
  name: string;
  email: string;
  number: string;
  message: string;
  access_key?: string;
}


const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    formData.access_key = "12edea49-1463-4ac4-9d65-b8b5b5e40604";
    const json = JSON.stringify(formData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json()) as { success: boolean }; 

    if (res.success) {
      console.log("Success", res);
      setIsSubmitted(true); 
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000)
    }
  };

  return (
  <>
<div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact Us</h1>
          <p>Fill up the form below to send us a message</p>
          <label htmlFor="name">Full Name</label>
          <input
            className={`name ${errors.name ? 'name-span' : false}`}
            type="text"
            id="name"
            {...register('name', { required: 'Full Name is required' })}
            placeholder={errors.name ? errors.name.message : 'John Doe'}
          />
          {/* {errors.name && <p className="error">{errors.name.message}</p>} */}

          <label htmlFor="email">Email Address</label>
          <input
            className={`email ${errors.email ? 'email-span' : false}`}
            type="email"
            id="email"
            {...register('email', { required: 'Email Address is required', pattern:
            { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })}
            placeholder={errors.email ? errors.email.message : 'you@company.com'}
          />

          <label htmlFor="number">Phone Number</label>
          <input
            className={`number ${errors.number ? 'number-span' : false}`}
            type="number"
            id="number"
            {...register('number', { required: 'Phone Number is required' })}
            placeholder={errors.number ? errors.number.message : '+1 (555) 1234-567'}
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            className={`message ${errors.message ? 'message-span' : false}`}
            {...register('message', { required: 'Your Message is required' })}
            placeholder={errors.message ? errors.message.message : 'Your Message'}
          ></textarea>

          <button type="submit">Submit Form</button>
        </form>
      </div>
      {isSubmitted && <Success />}
  </>
  );
};

export default Form;







