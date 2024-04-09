import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Audio from "./AudioRecorder";

export default function AudioSelect() {
  return (
    <Tabs defaultValue="record" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3 bg-white">
        <TabsTrigger value="record">Gravar</TabsTrigger>
        <TabsTrigger value="upload-file">Upload de arquivo</TabsTrigger>
        <TabsTrigger value="add-url">Adicionar Url</TabsTrigger>
      </TabsList>
      <TabsContent value="record">
        <Audio />
      </TabsContent>
      <TabsContent value="upload-file">
        <Card>
          <CardHeader>
            <CardTitle>Upload-file</CardTitle>
            <CardDescription>
              Change your upload-file here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current upload-file</Label>
              <Input id="current" type="upload-file" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New upload-file</Label>
              <Input id="new" type="upload-file" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save upload-file</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
