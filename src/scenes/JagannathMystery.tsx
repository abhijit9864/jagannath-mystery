import React from "react";
import { AbsoluteFill, Series } from "remotion";

import { DeityPreview } from "./DeityPreview";

// Replace these with your actual scene components
export const JagannathMystery: React.FC = () => {
  return (
    <AbsoluteFill>
      <Series>
        <Series.Sequence durationInFrames={300}>
          <DeityPreview />
        </Series.Sequence>

        {/* Add your next scenes here */}
      </Series>
    </AbsoluteFill>
  );
};