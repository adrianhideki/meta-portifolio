import { Field } from "@/components/ui/field";
import { Toaster } from "@/components/ui/toaster";

import {
  Text,
  Stack,
  Input,
  Button,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem,
  createListCollection,
  Textarea,
} from "@chakra-ui/react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmit } from "@/hooks/useSubmit";
import { useTheme } from "next-themes";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "e-mail must be valid" }),
  message: z
    .string()
    .min(25, { message: "The message should contain at most 25 characters" })
    .nonempty({ message: "Message is required" }),
  type: z
    .string({
      message: "Type is required",
    })
    .array(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactMe = () => {
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit: handleSubmitForm, isLoading } = useSubmit();

  const onSubmit = handleSubmit((data) => {
    handleSubmitForm(data).then((result) => {
      if (result) {
        reset();
      }
    });
  });

  return (
    <>
      <Stack
        height="100vh"
        w="100%"
        id="contact-me"
        backgroundColor={theme == "dark" ? "gray.950" : "gray.50"}
        gap={20}
        justifyContent="center"
        paddingX={10}
      >
        <Text textStyle="3xl">Contact me</Text>
        <form onSubmit={onSubmit}>
          <Stack gap={2}>
            <Field
              label="Name"
              invalid={!!errors.name}
              errorText={errors.name?.message}
            >
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
              />
            </Field>
            <Field
              invalid={!!errors.email}
              errorText={errors.email?.message}
              label="Email"
              helperText="We'll never share your email."
            >
              <Input
                {...register("email", { required: "e-mail is required" })}
                placeholder="Enter your email"
                type="email"
              />
            </Field>
            <Field
              label="Type"
              invalid={!!errors.type}
              errorText={errors.type?.message}
              required
            >
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <SelectRoot
                    name={field.name}
                    value={field.value}
                    required
                    onValueChange={({ value }) => field.onChange(value)}
                    onInteractOutside={() => field.onBlur()}
                    collection={types}
                  >
                    <SelectTrigger>
                      <SelectValueText placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.items.map((item) => (
                        <SelectItem item={item} key={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectRoot>
                )}
              />
            </Field>
            <Field
              invalid={!!errors.message}
              errorText={errors.message?.message}
              label="Message"
            >
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Enter your message"
              />
            </Field>
            <Button
              backgroundColor={"purple.950"}
              color="whiteAlpha.950"
              type="submit"
              loading={isLoading}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
      <Toaster />
    </>
  );
};

const types = createListCollection({
  items: [
    { label: "Freelance", value: "freelance" },
    { label: "Job Vacancy", value: "job-vacancy" },
    { label: "Consulting", value: "consulting" },
    { label: "Others", value: "others" },
  ],
});

export default ContactMe;
