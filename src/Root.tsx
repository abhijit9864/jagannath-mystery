
import { Composition, Folder } from "remotion";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2FlagMystery } from "./scenes/Scene2FlagMystery";
import { Scene2FlagClimber } from "./scenes/Scene2FlagClimber";
import { Scene2FlagEnding } from "./scenes/Scene2FlagEnding";
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Jagannath-Mystery">
        <Composition
  id="JagannathIntro"
  component={Scene1Intro}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene2FlagMystery"
  component={Scene2FlagMystery}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene2FlagClimber"
  component={Scene2FlagClimber}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene2FlagEnding"
  component={Scene2FlagEnding}
  durationInFrames={180}
  fps={30}
  width={1080}
  height={1920}
/>
      </Folder>

    </>
  );
};
