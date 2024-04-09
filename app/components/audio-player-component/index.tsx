import { Pause, Play } from "lucide-react";
import AudioPlayer from "react-h5-audio-player";
import "./styles.css";

const PlayIcon = () => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 transition-all hover:bg-slate-200/95">
    <Play className="fill-neutral-500 stroke-neutral-500" />
  </div>
);
const PauseIcon = () => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 transition-all hover:bg-slate-200/95">
    <Pause className="fill-neutral-500 stroke-neutral-500" />
  </div>
);

type AudioPlayerComponentType = {
  urlAudio: string;
};

export default function AudioPlayerComponent({
  urlAudio,
}: AudioPlayerComponentType) {
  return (
    <AudioPlayer
      src={urlAudio}
      // src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"}
      // onPlay={(e) => console.log("onPlay")}
      showJumpControls={false}
      customAdditionalControls={[]}
      layout="horizontal-reverse"
      customVolumeControls={[]}
      showDownloadProgress={false}
      customIcons={{ play: <PlayIcon />, pause: <PauseIcon /> }}
      className="bg-transparent p-0 shadow-none dark:text-white"
    />
  );
}
