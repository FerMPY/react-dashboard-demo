"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import PencilIcon from "@icons/pencil.svg?react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DatePicker } from "./ui/date-picker";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Minimum 8 characters" }),
  dateOfBirth: z.date({
    required_error: "Please select a date and time",
  }),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.number().positive(),
  country: z.string(),
});

type FormTypes = z.infer<typeof FormSchema>;

type FieldTypeMap = {
  [K in keyof FormTypes]: FormTypes[K] extends Date
    ? "date"
    : FormTypes[K] extends string
      ? "string"
      : FormTypes[K] extends number
        ? "number"
        : "unknown";
};

const inputFields: {
  name: keyof FormTypes;
  label: string;
  placeholder: string;
  type: FieldTypeMap[keyof FormTypes];
}[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "",
    type: "string",
  },
  {
    name: "username",
    label: "User Name",
    placeholder: "",
    type: "string",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "",
    type: "string",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "",
    type: "string",
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    placeholder: "",
    type: "date",
  },
  {
    name: "presentAddress",
    label: "Present Address",
    placeholder: "",
    type: "string",
  },
  {
    name: "permanentAddress",
    label: "Permanent Address",
    placeholder: "",
    type: "string",
  },
  {
    name: "city",
    label: "City",
    placeholder: "",
    type: "string",
  },
  {
    name: "postalCode",
    label: "Postal Code",
    placeholder: "",
    type: "number",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "",
    type: "string",
  },
];

export function EditProfile() {
  const form = useForm<FormTypes>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: FormTypes) {
    toast.success("Your changes where saved");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 md:grid-cols-[auto,1fr,1fr]"
      >
        <button type="button" className="row-span-6 size-fit">
          <div className="size-22 relative">
            <Avatar className="size-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <PencilIcon className="absolute bottom-0 right-0 size-6 rounded-full bg-black p-1" />
          </div>
        </button>
        {inputFields.map((input) => (
          <FormField
            control={form.control}
            key={input.name}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {input.type === "date" ? (
                    <>
                      <FormLabel>{input.label}</FormLabel>
                      <DatePicker {...field} value={field.value as Date} />
                    </>
                  ) : (
                    <>
                      <FormLabel>{input.label}</FormLabel>
                      <Input
                        placeholder={input.placeholder}
                        {...field}
                        value={
                          typeof field.value === "string" ||
                          typeof field.value === "number"
                            ? field.value
                            : ""
                        }
                      />
                    </>
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button className="col-span-2 ml-auto w-44" type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
