import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    instagram: string;
  };
};

export const YouTubeForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      username: "batman",
      email: "",
      channel: "",
      social: {
        twitter: "",
        instagram: "",
      },
    },
  });
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

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
        <input type="text" id="twitter" {...register("social.twitter")} />

        <label htmlFor="instagram">Instagram</label>
        <input type="text" id="instagram" {...register("social.instagram")} />

        <button>Submit</button>
      </form>
    </div>
  );
};
