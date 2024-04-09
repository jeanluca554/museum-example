import { useLoaderData } from "@remix-run/react";
import { Plus, Search } from "lucide-react";
import { Input } from "~/components/ui/input";
import type { LoaderProps } from "../../_types";
import { Button } from "~/components/ui/button";

export function ViewBody() {
  const { collection } = useLoaderData<LoaderProps>();

  return (
    <section className="">
      <div className="relative">
        <Search className="absolute left-4 top-3 h-5 w-5 stroke-neutral-400 text-muted-foreground dark:stroke-neutral-400" />
        <Input
          type="search"
          placeholder="Buscar..."
          className="h-11 w-full appearance-none border border-neutral-300 bg-white pl-12 text-neutral-400 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-neutral-900 dark:text-neutral-500 md:w-1/2 2xl:w-1/3"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mx-auto sm:max-w-[536px] sm:grid-cols-2 md:max-w-full md:grid-cols-1 lg:max-w-[536px] lg:grid-cols-2 xl:max-w-[816px] xl:grid-cols-3 2xl:max-w-[1096px] 2xl:grid-cols-4">
        {collection.data.map((item) => (
          <div
            key={item.code}
            className={`mx-auto flex h-[21.625rem] w-64 rounded-lg bg-cover bg-center`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="mt-auto h-20 w-full  rounded-b-lg bg-white bg-opacity-90 px-4 pb-[14px] pt-4 dark:bg-neutral-950 dark:bg-opacity-90">
              <h2 className="text-sm font-semibold text-primary_gold-900 dark:text-primary_gold-500">
                {item.name}
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xxs text-neutral-400">Código</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-200">
                    {item.code}
                  </p>
                </div>
                <Button className="h-6 w-24 bg-primary_gold-500 text-[10px] font-semibold text-white dark:bg-neutral-500 dark:text-white">
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="mx-auto flex h-[21.625rem] w-64 items-center justify-center rounded-lg border-2 border-dashed border-primary_gold-300 dark:border-primary_gold-900">
          <Plus
            className="h-28 w-28 stroke-primary_gold-500 dark:stroke-primary_gold-900"
            strokeWidth={1}
          />
        </div>
      </div>
    </section>
  );
}
