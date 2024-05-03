"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Button from "@/components/ui/Button";

const schema = z.object({
  example: z.string(),
  exampleRequired: z.string().nonempty(),
});

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      example: "test",
      exampleRequired: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col gap-4  bg-neutral-950 p-5 rounded-lg w-full max-w-lg mx-auto border border-neutral-700 my-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-2">
        Example
        <input
          className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-lg"
          defaultValue="test"
          {...register("example")}
        />
      </label>

      <label className="flex flex-col gap-2">
        ExampleRequired
        <input
          className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-lg"
          {...register("exampleRequired")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>
      <label className="flex flex-col gap-2">
        Mesaj
        <textarea
          className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-lg resize-none"
          maxLength={500}
          rows={10}
          {...register("exampleRequired")}
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </label>

      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </form>
  );
}
