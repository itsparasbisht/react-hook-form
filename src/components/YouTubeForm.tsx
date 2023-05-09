import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    instagram: string;
  };
  phoneNumbers: string[];
  age: number;
  dob: Date;
};

export const YouTubeForm = () => {
  const { register, handleSubmit, formState, getValues, setValue, watch } =
    useForm<FormValues>({
      defaultValues: {
        username: "batman",
        email: "",
        channel: "",
        social: {
          twitter: "",
          instagram: "",
        },
        phoneNumbers: ["", ""],
        age: 0,
        dob: new Date(),
      },
    });
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  console.log(getValues());
  console.log(watch("username"));

  const changeValues = () => {
    setValue("age", 21, { shouldValidate: true });
  };

  useEffect(() => {
    changeValues();
  }, []);

  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "username is required" })}
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            validate: (value) => {
              return (
                value !== "admin@gmail.com" || "enter a different email address"
              );
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", { required: "channel name is required" })}
        />
        <p>{errors.channel?.message}</p>

        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          id="twitter"
          {...register("social.twitter", { disabled: true })}
        />

        <label htmlFor="instagram">Instagram</label>
        <input type="text" id="instagram" {...register("social.instagram")} />

        <label htmlFor="primary-phone">Primary phone number</label>
        <input type="text" id="primary-phone" {...register("phoneNumbers.0")} />

        <label htmlFor="secondary-phone">Secondary phone number</label>
        <input
          type="text"
          id="secondary-phone"
          {...register("phoneNumbers.1")}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
          })}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          {...register("dob", {
            valueAsDate: true,
          })}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
