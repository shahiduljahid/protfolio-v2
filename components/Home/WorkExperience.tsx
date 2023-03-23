"use client";
import { Section } from "@/components";

import Work from "../Experience/Work";

export function WorkExperience() {
  return (
    <Section refKey="work" no="03" title="Where I’ve Worked">
      <div className="w-full">
        <Work />
      </div>
    </Section>
  );
}
