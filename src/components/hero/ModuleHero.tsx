import HeroBase from "./HeroBase";
import type { HeroBaseProps } from "./hero.types";

export default function ModuleHero(props: HeroBaseProps) {
  return <HeroBase {...props} minHeightClass="min-h-[360px] sm:min-h-[400px]" />;
}
