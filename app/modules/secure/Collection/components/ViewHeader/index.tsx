import { Plus } from "lucide-react";
import { Header } from "~/client/components";
import { Button } from "~/components/ui/button";

export function ViewHeader() {
  return (
    <Header
      title="Acervo"
      content={
        <Button className="h-11 w-40 bg-neutral-700 text-primary_gold-50 dark:bg-neutral-700 dark:text-primary_gold-50 md:w-44">
          <Plus className="mr-4 h-5 w-5 stroke-primary_gold-500" />
          Adicionar Item
        </Button>
      }
    />
  );
}
