import { getRandomInt } from "@/utils/getRandomInt";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";

type SubmitValues = {
  name: string;
  email: string;
  message: string;
  type: string[];
};

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ name }: SubmitValues) => {
    setIsLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    let isRequestOk = true;

    if (getRandomInt(10) >= 5) {
      isRequestOk = false;
      toaster.error({
        title: "Oops!",
        description: "Something wen wrong, please try again later!",
      });
    } else {
      toaster.success({
        title: "All good!",
        description: `Thanks for your submission ${name}, we will get back to you shortly!`,
      });
    }

    setIsLoading(false);

    return isRequestOk;
  };

  return { handleSubmit, isLoading };
};
