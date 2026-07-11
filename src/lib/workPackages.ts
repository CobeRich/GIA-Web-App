export interface WorkPackage {
  slug: string;
  code: string;
  title: string;
  stage: string;
  objective: string;
  questions: string[];
  methods: string[];
  relatedModules: string[];
}

export const workPackages: WorkPackage[] = [
  {
    slug: "wp1",
    code: "WP1",
    title: "Climate and Forcing",
    stage: "Forcing Systems",
    objective: "Model climate and surface forcing for groundwater pathways.",
    questions: ["How does forcing vary in space and time?", "How do extremes affect recharge?"],
    methods: ["Stochastic forcing generation", "Rainfall field analysis", "Validation and benchmarking"],
    relatedModules: ["gia-601", "gia-604"],
  },
  {
    slug: "wp2",
    code: "WP2",
    title: "Vadose Zone Multi-Continuum Flow",
    stage: "Core Physics",
    objective: "Represent unsaturated-zone multi-continuum flow and recharge.",
    questions: ["How do matrix, macropore, and fracture continua interact?", "How can non-Darcian effects be represented?"],
    methods: ["Richards-based and non-Darcian formulations", "Volume averaging", "Exchange terms"],
    relatedModules: ["gia-605", "gia-608"],
  },
  {
    slug: "wp3",
    code: "WP3",
    title: "Contaminant Dynamics",
    stage: "Quality Systems",
    objective: "Model multi-pathway contaminant movement and transformation.",
    questions: ["What controls plume pathways?", "How do reactions alter potable-water risk?"],
    methods: ["Transport-reaction equations", "Uncertainty assessment", "Source-term modelling"],
    relatedModules: ["gia-606"],
  },
  {
    slug: "wp4",
    code: "WP4",
    title: "Aquifer and Regional Scaling",
    stage: "Aquifer Systems",
    objective: "Integrate recharge, aquifer flow, and vulnerability at regional scale.",
    questions: ["How does heterogeneity affect storage and flow?", "How can regional forecasts be calibrated?"],
    methods: ["Numerical groundwater modelling", "Regional parameterisation", "Validation against observations"],
    relatedModules: ["gia-607", "gia-612"],
  },
  {
    slug: "wp5",
    code: "WP5",
    title: "Human Systems and Governance",
    stage: "Socio-Hydrology",
    objective: "Capture abstraction, policy, and infrastructure feedbacks.",
    questions: ["How do human systems influence groundwater outcomes?", "Which policy levers reduce risk?"],
    methods: ["Scenario design", "Demand modelling", "Governance diagnostics"],
    relatedModules: ["gia-609", "gia-614"],
  },
  {
    slug: "wp6",
    code: "WP6",
    title: "Potable-Water Decisions",
    stage: "Decision Support",
    objective: "Build decision-support logic for potable-water assessment.",
    questions: ["How can quantity and quality be integrated?", "How should risk and treatment needs be prioritised?"],
    methods: ["Risk indexing", "Decision dashboards", "Scenario comparison"],
    relatedModules: ["gia-610", "gia-611", "gia-616"],
  },
];
