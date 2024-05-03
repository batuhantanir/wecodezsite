"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/lang/LanguageContext";
const schema = z.object({
  example: z.string(),
  exampleRequired: z.string().nonempty(),
});

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Form() {
  const { intl } = useLanguage();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col gap-4 bg-[#121212] p-6 rounded-lg shadow-sm shadow-[#27272A] w-full max-w-lg border border-[#27272A] my-5">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {intl.contactTitle}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {intl.contactDescription}
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col gap-2">
          {intl.contactName}
          <input
            className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-lg"
            placeholder={intl.contactNamePH}
            {...register("name")}
          />
        </label>
        <label className="flex flex-col gap-2">
          {intl.contactEmail}
          <input
            className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-lg"
            placeholder={intl.contactEmailPH}
            {...register("email")}
          />
        </label>

        <label className="flex flex-col gap-2">
          {intl.contactSubject}
          <input
            placeholder={intl.contactSubjectPH}
            className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-lg"
            {...register("subject")}
          />
          {errors.subject && <span>This field is required</span>}
        </label>
        <label className="flex flex-col gap-2">
          {intl.contactMessage}
          <textarea
            className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-lg resize-none"
            placeholder={intl.contactMessagePH}
            maxLength={500}
            rows={10}
            {...register("message", { required: "This field is required" })}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </label>
        <div className="flex pt-2 items-center justify-center">
          <Button className="w-fit px-10" type="submit">
            {intl.contactButton}
          </Button>
        </div>
      </form>
    </div>
  );
}
