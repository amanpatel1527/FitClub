import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./form.css"

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  export default function Form() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
        <div className="form">
      <form id='FORM' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input {...register("name")} type="text" id="name" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
  
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
  
        <div>
          <label htmlFor="message">Message</label>
          <textarea {...register("message")} id="message" />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
  
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }