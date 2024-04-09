import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import AudioPlayer from "~/client/assets/audio-player.svg";

interface AudioSelectProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function AudioSelect(props: AudioSelectProps) {
  return (
    <div className="rounded-md border border-neutral-300 p-4">
      <Tabs defaultValue="add-url" className="">
        <TabsList className="flex bg-white">
          <TabsTrigger value="add-url">Adicionar Url</TabsTrigger>
          <TabsTrigger value="upload-file">Upload de arquivo</TabsTrigger>
          <TabsTrigger value="record">Gravar</TabsTrigger>
        </TabsList>

        <TabsContent value="add-url">
          <div>
            <Input
              {...props}
              id="audio-url"
              type="text"
              placeholder="Informe a url do arquivo"
              className="mt-2 h-11 w-full appearance-none border border-neutral-300 bg-neutral-50 text-neutral-900 shadow-none placeholder:text-neutral-400 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-neutral-900 dark:text-neutral-500"
            />
          </div>
        </TabsContent>

        <TabsContent value="upload-file">
          <div>
            <Input
              {...props}
              id="audio-file"
              type="file"
              className="mt-2 h-11 w-full appearance-none border border-neutral-300 bg-neutral-50 text-neutral-400 shadow-none file:bg-white file:text-primary_gold-700 placeholder:text-neutral-400 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-neutral-900 dark:text-neutral-500"
            />
          </div>
        </TabsContent>

        <TabsContent value="record">
          {/* <Audio /> */}
          <img src={AudioPlayer} alt="audio-player" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
