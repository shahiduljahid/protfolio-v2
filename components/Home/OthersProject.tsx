"use client";
import clsx from "clsx";
import Image from "next/image";

import { Section } from "@/components";
import OtherProjects from '../OtherProjects/OtherProjects';


export function OthersProject() {
  return (
    <Section refKey="othersProject" no="05" title="Other Projects">
       <OtherProjects/>
    </Section>
  );
}
