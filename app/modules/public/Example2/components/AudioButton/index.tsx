import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

import { Volume2 } from "lucide-react";

import AudioPlayerComponent from "~/components/audio-player-component";

type AudioButtonType = {
  urlAudio: string;
};

export function AudioButton({ urlAudio }: AudioButtonType) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-6 right-6 h-10 w-10 rounded-full bg-neutral-700 p-0 hover:bg-neutral-600 dark:border-neutral-500 dark:bg-neutral-700 lg:h-14 lg:w-14"
        >
          <Volume2 className="h-6 w-6 stroke-primary_gold-500 lg:h-8 lg:w-8" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-left font-semibold text-primary_gold-600 dark:text-primary_gold-600">
              Ouvir Roteiro
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <AudioPlayerComponent urlAudio={urlAudio} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
