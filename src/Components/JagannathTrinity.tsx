import React from "react";

import Jagannath from "./Jaganath";
import Balabhadra from "./Balabhdra";
import Subhadra from "./Subhdra";

export type JagannathTrinityProps = {
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
};

export const JagannathTrinity: React.FC<JagannathTrinityProps> = ({
  x = 0,
  y = 0,
  scale = 0.5,
  opacity = 1,
}) => {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      opacity={opacity}
    >
      {/* Balabhadra - Left */}
      <Balabhadra
        x={0}
        y={0}
        scale={1}
      />

      {/* Subhadra - Centre */}
      <Subhadra
        x={850}
        y={0}
        scale={1}
      />

      {/* Jagannath - Right */}
      <Jagannath
        x={1700}
        y={0}
        scale={1}
      />
    </g>
  );
};

export { Jagannath, Balabhadra, Subhadra };

export default JagannathTrinity;