import HeroBase from "./HeroBase";
import type { HeroBaseProps } from "./hero.types";

export default function AcademicHero(props: HeroBaseProps) {
  return <HeroBase {...props} />;
}
