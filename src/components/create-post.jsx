import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getImageUrl } from "../lib/helpers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "../lib/constants";
import useHttp from "../hooks/useHttp";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormSchema = z.object({
  country_code: z.string({
    required_error: "Please select a country code.",
  }),
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(100, {
      message: "Title must be 100 characters or less.",
    }),
  description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
    .max(500, {
      message: "Description must be 500 characters or less.",
    }),
});

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function CreatePost() {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data,
    sendRequest: submitPost,
  } = useHttp(`${import.meta.env.VITE_API_URL}/cultures/add/`, requestConfig);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    const bodyData = {
      flag_url: getImageUrl(data.country_code),
      country: COUNTRIES.find((country) => country.code === data.country_code)
        .name,
      ...data,
    };

    submitPost(bodyData);
  };

  useEffect(() => {
    if (data) {
      // Navigate to the posts page
      navigate("/posts");
    }
  }, [data, navigate]);

  return (
    <Form {...form}>
      <div className="mx-4 flex min-h-[80vh] items-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-3xl space-y-6 rounded-xl border p-4 shadow-md"
        >
          <h2 className="text-center font-bold text-2xl">
            Share a Culture Story
          </h2>
          {/* Country Code */}
          <FormField
            control={form.control}
            name="country_code"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/3">
                <FormLabel>Your Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.code} - {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full md:w-2/3">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="The beauty of Non La"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about the culture of this country"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="flex justify-end gap-2">
            <Link to="/posts">
              <Button variant="outline" className="rounded-full text-sm">
                Cancel
              </Button>
            </Link>

            <Button
              className="rounded-full text-sm"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Add Post
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}
