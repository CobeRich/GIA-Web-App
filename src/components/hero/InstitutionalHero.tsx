import HeroBase from "./HeroBase";
import type { HeroBaseProps } from "./hero.types";

export default function InstitutionalHero(props: HeroBaseProps) {
  return <HeroBase {...props} />;
}
