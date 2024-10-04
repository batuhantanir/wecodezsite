"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import FormSkeleton from "./FormSkeleton";
import axios from "axios";
import { useTranslations } from "next-intl";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Form() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("contact");

  const schema = z.object({
    name: z
      .string()
      .max(30, "Name must be at most 30 characters")
      .min(1, "Name is required"),
    email: z
      .string()
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      )
      .min(1, "Email is required"),
    subject: z.string(),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be at most 500 characters")
      .min(1, "Message is required"),
  });

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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios
      .post("/api/mail", data)
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {});
  };

  return (
    <div className="flex flex-col gap-4 bg-[#121212] p-6 rounded-lg shadow-sm shadow-[#27272A] w-full max-w-lg border border-[#27272A] my-5">
      {!isLoading ? (
        <>
          <h2 className="font-bold text-xl text-violet-300 dark:text-neutral-400">
            {t("title")}
          </h2>
          <p className="text-zinc-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {t("description")}
          </p>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex flex-col text-violet-200 dark:text-white gap-2">
              {t("name")}
              <input
                className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 py-2 px-4 rounded-md"
                placeholder={t("namePH")}
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>

            <label className="flex flex-col gap-2 text-violet-200 dark:text-white">
              {t("email")}
              <input
                className=" text-black dark:text-white bg-white dark:bg-zinc-800 p-2 px-4 rounded-md"
                placeholder={t("emailPH")}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>

            <label className="flex flex-col gap-2 text-violet-200 dark:text-white">
              {t("subject")}
              <input
                placeholder={t("subjectPH")}
                className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-md"
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject.message}</span>
              )}
            </label>
            <label className="flex flex-col gap-2 text-violet-200 dark:text-white">
              {t("message")}
              <textarea
                className=" text-black dark:text-white bg-gray-50 dark:bg-zinc-800 p-2 px-4 rounded-md resize-none"
                placeholder={t("messagePH")}
                maxLength={500}
                rows={10}
                {...register("message")}
              />
              {errors.message && (
                <span className="text-red-500 ">{errors.message.message}</span>
              )}
            </label>
            <div className="flex pt-2 items-center justify-center">
              <Button className="w-fit px-10" type="submit">
                {t("button")}
              </Button>
            </div>
          </form>
        </>
      ) : (
        <FormSkeleton />
      )}
    </div>
  );
}
