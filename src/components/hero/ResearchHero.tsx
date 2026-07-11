import HeroBase from "./HeroBase";
import type { HeroBaseProps } from "./hero.types";

export default function ResearchHero(props: HeroBaseProps) {
  return <HeroBase {...props} />;
}
