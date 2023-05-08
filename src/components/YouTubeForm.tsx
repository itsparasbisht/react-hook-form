import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

export const YouTubeForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
    </div>
  );
};
