export interface StudyModule {
  slug: string;
  code: string;
  title: string;
  semester: string;
  credits: number;
  duration: string;
  wpMapping: string[];
  summary: string;
}

export const studyModules: StudyModule[] = [
  { slug: "gia-601", code: "GIA 601", title: "Hydrogeological Foundations", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP1"], summary: "Foundational hydrogeology, aquifer concepts, and groundwater systems." },
  { slug: "gia-602", code: "GIA 602", title: "Environmental Mathematics", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP2"], summary: "Mathematical methods for environmental modelling and analysis." },
  { slug: "gia-603", code: "GIA 603", title: "Scientific Computing", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP2"], summary: "Numerical methods, code practices, and scientific workflows." },
  { slug: "gia-604", code: "GIA 604", title: "Monitoring and Instrumentation", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP4"], summary: "Sensor systems, data quality, and field observation design." },
  { slug: "gia-605", code: "GIA 605", title: "Vadose-Zone Physics", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP2"], summary: "Unsaturated-zone processes, infiltration, and flow mechanisms." },
  { slug: "gia-606", code: "GIA 606", title: "Contaminant Transport", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP3"], summary: "Contaminant pathways, transformations, and risk indicators." },
  { slug: "gia-607", code: "GIA 607", title: "Aquifer Systems Modelling", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP4"], summary: "Saturated-zone modelling, calibration, and scenario design." },
  { slug: "gia-608", code: "GIA 608", title: "Non-Darcian Flow and Multi-Continuum Theory", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP2", "WP4"], summary: "Volume averaging and multi-continuum flow formulation." },
  { slug: "gia-609", code: "GIA 609", title: "Human-Water Systems", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP5"], summary: "Socio-hydrological feedbacks, demand, and governance dimensions." },
  { slug: "gia-610", code: "GIA 610", title: "Groundwater AI and Forecasting", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP6"], summary: "Machine learning pipelines for groundwater forecasting." },
  { slug: "gia-611", code: "GIA 611", title: "Decision-Support Systems", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP6"], summary: "Decision support architecture, indicators, and policy outputs." },
  { slug: "gia-612", code: "GIA 612", title: "Digital Twin Engineering", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP4", "WP6"], summary: "Digital twin design patterns and scenario evaluation." },
  { slug: "gia-613", code: "GIA 613", title: "Research Methods and Reproducibility", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP6"], summary: "Research design, reproducibility, and open-science practices." },
  { slug: "gia-614", code: "GIA 614", title: "Policy Translation and Communication", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP5", "WP6"], summary: "Translating scientific evidence into policy and stakeholder action." },
  { slug: "gia-615", code: "GIA 615", title: "Studio Integration Project", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP2", "WP3", "WP4", "WP5", "WP6"], summary: "Integrated project development through the Groundwater Intelligence Studio." },
  { slug: "gia-616", code: "GIA 616", title: "Dissertation Preparation", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP2", "WP3", "WP4", "WP5", "WP6"], summary: "Proposal refinement, ethics, and dissertation execution planning." },
];
