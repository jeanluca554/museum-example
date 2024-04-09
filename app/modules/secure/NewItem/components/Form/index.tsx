import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { ToastAction } from "~/components/ui/toast";
import { toast } from "~/components/ui/use-toast";

import { schemas } from "../../_schemas";
import { RichText } from "arkyn_rich_text";
import "suneditor/dist/css/suneditor.min.css";
import { ImageUploader } from "arkyn_components";
import AudioSelect from "~/components/audio-select/AudioSelect";
import { Separator } from "~/components/ui/separator";

const FormSchema = schemas.item;

export function ItemForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "Os valores inseridos são:",
      action: <ToastAction altText="Finalizar">Finalizar</ToastAction>,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="max-w-2xl space-y-6 p-6">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-neutral-900">
                  <span className="text-rose-600">* </span>Nome:
                </FormLabel>
                <FormControl>
                  <Input className="bg-neutral-50" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-neutral-900">
                  <span className="text-rose-600">* </span>Código:
                </FormLabel>
                <FormControl>
                  <Input className="bg-neutral-50" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-neutral-900">
                  <span className="text-rose-600">* </span>Descrição:
                </FormLabel>
                <FormControl>
                  <RichText {...field} name="description" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-neutral-900">
                  <span className="text-rose-600">* </span>Imagem:
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    variant="default"
                    iconColor="#BAAE8D"
                    borderColor="#D4D4D4"
                    defaultValue={""}
                    imageSize={{ h: 225, w: 300 }}
                    uploadUrl="/api/uploadfile?width=400&heigth=300"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="audio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-neutral-900">
                  Áudio:
                </FormLabel>
                <FormControl>
                  <AudioSelect {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator className="" />
        <div className="flex pb-6 pr-6">
          <Button type="submit" className="ml-auto">
            <Check className="mr-4 h-5 w-5 stroke-white" /> Adicionar
          </Button>
        </div>
      </form>
    </Form>
  );
}
