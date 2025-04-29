"use client";

import React from "react";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { ImageIcon, Upload } from "lucide-react";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  title: z.string().min(3, { message: "Title is required" }),
});
const CreateCoursePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course");
      router.push(`/teacher/courses/${response.data.id}`);
    } catch (error) {
      toast.error("Sumething went wrong", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };
  return (
    <div className="max-w-5xl mx-auto pt-4 md:items-center md:justify-center h-full">
      {/* <Card className="border shadow-none">
        <CardContent>
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="bg-slate-100 rounded-md flex items-center justify-center w-full md:w-[320px] h-[180px]">
              <div className="flex flex-col items-center text-slate-400">
                <ImageIcon className="mb-2" />
                <span>Upload image</span>
              </div>
            </div>
            <div className="space-y-4 items-center">
              <div>
                <p className="text-base">Size: 700x430 pixels</p>
                <p className="text-base">
                  File Support: .jpg, .jpeg, png, or .gif
                </p>
              </div>
              <Button className="flex items-center gap-2">
                <Upload size={18} />
                Upload Image
              </Button>
            </div>
          </div>
        </CardContent>
      </Card> */}
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          what would you like to name your course? Dont&apos;t worry, yoy can
          change this later.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g 'Advanced web development' "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will you thech in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href={"/"}>
                <Button size={"sm"} type="button" variant={"secondary"}>
                  Cancel
                </Button>
              </Link>
              <Button
                size={"sm"}
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateCoursePage;
