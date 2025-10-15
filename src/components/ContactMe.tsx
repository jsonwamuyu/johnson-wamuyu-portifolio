import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactMe = () => {
  const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col container items-center">
        <h4 className="font-bold text-7xl">
          Contact
          <span className="bg-gradient-to-r to-indigo-700 from-indigo-400 bg-clip-text text-transparent">
            {" "}
            Me
          </span>
        </h4>
        <p className="  pt-4">
          I would love to hear from you! Please fill out the form below to get
          in touch.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 pt-16 w-full md:max-w-3xl items-start"
        >
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="p-3 border border-gray-300 rounded"
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col w-full text-left">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="p-3 border border-gray-300 rounded"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col">
            <textarea
              placeholder="Message"
              {...register("message")}
              className="p-3 border border-gray-300 rounded h-32"
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>

          {/* <div className="max-sm:w-full bg-red-600 flex"> */}
          <div className="max-md:w-full">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-8 py-3 rounded-full  transition cursor-pointer duration-200 ease-in-out outline-none border-none hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
