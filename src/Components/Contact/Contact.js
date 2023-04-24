import { useState } from "react";
import "./Contact.css";
import Input from "./Input";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    bmi: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "name",
      errorMessage:
        "name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "number",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
    },
    {
      id: 4,
      name: "plan",
      type: "text",
      placeholder: "Your plan",
      errorMessage:
        "Plan should be 8-20 characters ",
      label: "Plan",
      required: true,
    },
    {
      id: 5,
      name: "bmi",
      type: "number",
      placeholder: "Body Mass Index",
      errorMessage: "BMI should be in number",
      label: "BMI",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact" id="contact">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;