import emailjs from "@emailjs/browser";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";

import { Button, Form, Input, Section, TextArea, type SubmitFn } from "@/components";
import EarthCanvas from "@/components/canvas/Earth";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().email().trim(),
  message: z.string().min(10, "Your message is too short").trim(),
});

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [isProcessing, setProcessing] = React.useState(false);

  const handleSubmit: SubmitFn<ContactValues> = async (values, reset) => {
    setProcessing(true);
    try {
      const { name, email, message } = values;
      const data = { name, email, message };
      await emailjs.send(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
        data,
        `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
      );

      reset();
      toast.success("Your message want sent. You will hear back from me within a business day.");
    } catch (err: any) {
      toast.error(err?.message || err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Section refKey="contact" no="06" title="Contact">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12  flex  max-w-3xl flex-col sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-6">
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="mb-5 text-5xl">Get In Touch</h2>
            <p style={{ maxWidth: "700px", color: "#8892b0" }} className="mb-10 text-center">
              I’m currently looking for new opportunities, my inbox is always open. Whether you have
              any queries or just want to say hi, I’ll try my best to get back to you!
            </p>
            <div className="flex w-full max-w-lg flex-col items-center justify-center gap-10"></div>
            <Form<ContactValues, typeof schema>
              onSubmit={handleSubmit}
              className="w-full max-w-xl flex-1"
              schema={schema}
            >
              {({ register, formState }) => (
                <>
                  <Input
                    label="Name"
                    registration={register("name")}
                    error={formState.errors["name"]}
                  />
                  <Input
                    type="email"
                    label="Email"
                    registration={register("email")}
                    error={formState.errors["email"]}
                  />
                  <TextArea
                    label="Message"
                    registration={register("message")}
                    error={formState.errors["message"]}
                  />
                  <Button
                    isLoading={isProcessing}
                    startIcon={<PaperAirplaneIcon width={18} height={18} />}
                    className="w-full"
                    color="primary"
                    type="submit"
                  >
                    Send
                  </Button>
                </>
              )}
            </Form>
          </div>
        </div>
        <div className="col-span-12 h-[500px] sm:col-span-12 md:col-span-12 md:h-[600px]  lg:col-span-12 xl:col-span-6 ">
          <EarthCanvas />
        </div>
      </div>
    </Section>
  );
}
