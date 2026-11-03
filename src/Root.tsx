
import { Composition, Folder } from "remotion";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2FlagMystery } from "./scenes/Scene2FlagMystery";
import { Scene2FlagClimber } from "./scenes/Scene2FlagClimber";
import { Scene2FlagEnding } from "./scenes/Scene2FlagEnding";
import { Scene3Nilachakra } from "./scenes/Scene3Nilachakra";
import { Scene4BirdsAirplane } from "./scenes/Scene4BirdsAirplane";
import { Scene5SinghadwaraSound } from "./scenes/Scene5SinghadwaraSound";
import { Scene6NoShadow } from "./scenes/Scene6NoShadow";
import { Scene7SevenPots } from "./scenes/Scene7SevenPots";
import {Scene8BrahmaPadartha} from "./scenes/Scene8BrahmaPadartha"
import { Scene9Nabakalebara } from "./scenes/Scene9Nabakalebara";
import Scene10SecretRitual from "./scenes/Scene10SecretRitual";
import Scene11TwentyOneDays from "./scenes/Scene11TwentyOneDays";
import { DeityPreview } from "./scenes/DeityPreview";
import { JagannathMystery } from "./scenes/JagannathMystery";
import Scene12RathYatra from "./scenes/Scene12RathYatra";
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
<Composition
  id="Scene3Nilachakra"
  component={Scene3Nilachakra}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene4BirdsAirplane"
  component={Scene4BirdsAirplane}
  durationInFrames={240}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene5SinghadwaraSound"
  component={Scene5SinghadwaraSound}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene6NoShadow"
  component={Scene6NoShadow}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene7SevenPots"
  component={Scene7SevenPots}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene8BrahmaPadartha"
  component={Scene8BrahmaPadartha}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene9Nabakalebara"
  component={Scene9Nabakalebara}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene10SecretRitual"
  component={Scene10SecretRitual}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene11TwentyOneDays"
  component={Scene11TwentyOneDays}
  durationInFrames={500}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="DeityPreview"
  component={DeityPreview}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="JagannathMystery"
  component={JagannathMystery}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
<Composition
  id="Scene12RathYatra"
  component={Scene12RathYatra}
  durationInFrames={450}
  fps={30}
  width={1080}
  height={1920}
/>
      </Folder>

    </>
  );
};
