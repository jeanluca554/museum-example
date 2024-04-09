import { LogOut, UserRound } from "lucide-react";
import { ModeToggle } from "~/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function UserArea() {
  return (
    <div className="mt-auto pb-4">
      <Card className="max-w-60 border border-primary_gold-200 bg-primary_gold-50 dark:bg-neutral-900">
        <CardContent className="p-4 ">
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9 sm:flex">
              <AvatarImage
                src="https://s3-alpha-sig.figma.com/img/9d6d/cfc1/fb8cd40116ca161e463af1ee400a729e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqSSx5yCw2AdHw-e1BSyh2BveXkxN3sPtOW0rVrfc0BzV9ciD7s4nSGoGlXML7~Q7EWiNCO9a2viEYVt-jIzEO37mtLdtzF6z1ntU2-bAnrPgRxsgF3SLIVhFc3xrrUHFBH2XQ53PBiIafOvDHb9YSGvycrwxdfHOCSF5MRcZ7VgT-o60R4cOV98VmN0a0r7GKLj7gvXsGviT~a2qQuLl2Dt4U-STxS8mwXMAR6eD-Hh13YIAVyX0JVgbnvrOw4eG9ZkrHpL2xORYbmAWWQpVujnqoyZucJZ9csnfd5F6i1fBaPZMtOVbgfkJ1BRJUo660v5HhUAgOzecO6ZSHI9lw__"
                alt="Avatar"
              />
              <AvatarFallback>FD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none text-neutral-900 dark:text-neutral-200">
                Francisco Dias
              </p>
              <p className="text-xs text-neutral-400 dark:text-zinc-500">
                franciscodias@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              className="h-6 w-full border border-primary_gold-300 bg-white text-[10px] font-semibold text-primary_gold-900 dark:border-0 dark:bg-neutral-700 dark:text-neutral-100"
            >
              <UserRound className="mr-2 h-3 w-3 stroke-primary_gold-500" />
              Minha Conta
            </Button>
            <Button
              variant="ghost"
              className="h-6 w-10 border border-primary_gold-300 bg-white px-1 text-[10px] font-semibold text-primary_gold-900 dark:border-0 dark:bg-neutral-700"
            >
              <LogOut className="h-3 w-3 stroke-rose-600" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
