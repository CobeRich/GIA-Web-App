export interface PrototypeDetail {
  slug: string;
  name: string;
  challenge: string;
  solution: string;
  technologyReadinessLevel: string;
  screenshots: { src: string; alt: string }[];
  architecture: string;
  wp: string;
  team: string;
  useCases: string[];
  currentStatus: string;
  collaborationNeeds: string;
}

export const prototypes: PrototypeDetail[] = [
  {
    slug: "aquifer-risk-map-studio",
    name: "Aquifer Risk Map Studio",
    challenge: "Regional vulnerability decisions are often made with fragmented evidence and inconsistent risk criteria.",
    solution: "A geospatial decision prototype that fuses aquifer dynamics, contaminant signals, and demand pressures into comparative risk surfaces.",
    technologyReadinessLevel: "TRL 5",
    screenshots: [
      { src: "/images/gia-hero-banner-e.png", alt: "Prototype map interface screenshot" },
      { src: "/images/gia-hero-banner-b.png", alt: "Risk-layer comparison screenshot" },
    ],
    architecture: "Data portal ingestion, WP4 aquifer engine, WP6 risk scoring, and dashboard visualization layer.",
    wp: "WP4, WP6",
    team: "Hydrogeology Systems Lab and Decision Intelligence Lab",
    useCases: [
      "Regional vulnerability planning",
      "Utility prioritization of monitoring investments",
      "Scenario comparison for policy planning",
    ],
    currentStatus: "Demonstration pilot with controlled datasets.",
    collaborationNeeds: "Regional agencies for validation data and applied planning pilots.",
  },
  {
    slug: "recharge-forecast-assistant",
    name: "Recharge Forecast Assistant",
    challenge: "Recharge variability is difficult to forecast under event-driven and climate-sensitive conditions.",
    solution: "An AI-assisted forecasting tool combining forcing scenarios and vadose-zone response to produce explainable recharge outlooks.",
    technologyReadinessLevel: "TRL 4",
    screenshots: [
      { src: "/images/gia-hero-banner-c.png", alt: "Recharge forecast dashboard screenshot" },
      { src: "/images/gia-hero-banner-e.png", alt: "Model explainability panel screenshot" },
    ],
    architecture: "WP1 forcing manager, WP2 flow engine, AI prediction layer, and API-based results service.",
    wp: "WP1, WP2, WP6",
    team: "Vadose-Zone Physics Lab and AI Prediction Team",
    useCases: [
      "Seasonal recharge planning",
      "Early warning for stress periods",
      "Scenario testing under climate variation",
    ],
    currentStatus: "Prototype calibration and benchmark testing.",
    collaborationNeeds: "Field partners with event-scale forcing and recharge observations.",
  },
  {
    slug: "potable-water-triage-engine",
    name: "Potable Water Triage Engine",
    challenge: "Decision-makers need a transparent way to prioritize treatment and supply interventions under uncertainty.",
    solution: "A triage engine that combines quantity-quality indicators with treatment constraints to produce ranked intervention recommendations.",
    technologyReadinessLevel: "TRL 5",
    screenshots: [
      { src: "/images/gia-hero-banner-d.png", alt: "Triage ranking dashboard screenshot" },
      { src: "/images/gia-hero-banner-e.png", alt: "Scenario recommendation panel screenshot" },
    ],
    architecture: "WP3 contamination outputs, WP4 aquifer state, WP5 demand scenarios, and WP6 decision logic.",
    wp: "WP3, WP4, WP5, WP6",
    team: "Water Quality and Transport Lab with Policy Translation Unit",
    useCases: [
      "Treatment prioritization",
      "Emergency response planning",
      "Budget allocation for safe-water interventions",
    ],
    currentStatus: "Demonstration deployment in partner review cycles.",
    collaborationNeeds: "Utilities and policy teams for operational criteria alignment.",
  },
];
