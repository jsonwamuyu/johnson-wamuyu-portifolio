import { motion } from "framer-motion";
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
    <motion.div
      id="contact"
      className="wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex-col container items-center">
        <motion.h4
          className="font-bold text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Contact
          <span className="bg-gradient-to-r to-indigo-700 from-indigo-400 bg-clip-text text-transparent">
            {" "}
            Me
          </span>
        </motion.h4>

        <motion.p
          className="pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          I would love to hear from you! Please fill out the form below to get
          in touch.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 pt-16 w-full md:max-w-3xl items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
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

          <div className="max-md:w-full">
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white px-8 py-3 rounded-full  transition cursor-pointer duration-200 ease-in-out outline-none font-medium border-none hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
