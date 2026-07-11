import HeroBase from "./HeroBase";
import type { HeroBaseProps } from "./hero.types";

export default function PlatformHero(props: HeroBaseProps) {
  return <HeroBase {...props} />;
}
