export interface StudyModule {
  slug: string;
  code: string;
  title: string;
  semester: string;
  credits: number;
  duration: string;
  wpMapping: string[];
  summary: string;
  discipline: string;
  software: string[];
  learningMode: string;
}

export const studyModules: StudyModule[] = [
  { slug: "gia-601", code: "GIA 601", title: "Hydrogeological Foundations", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP1"], summary: "Foundational hydrogeology, aquifer concepts, and groundwater systems.", discipline: "Environmental Science", software: ["QGIS"], learningMode: "Blended" },
  { slug: "gia-602", code: "GIA 602", title: "Environmental Mathematics", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP2"], summary: "Mathematical methods for environmental modelling and analysis.", discipline: "Mathematical Science", software: ["MATLAB", "Python"], learningMode: "Blended" },
  { slug: "gia-603", code: "GIA 603", title: "Scientific Computing", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP2"], summary: "Numerical methods, code practices, and scientific workflows.", discipline: "Computational Science", software: ["Python", "Git"], learningMode: "Project-Based" },
  { slug: "gia-604", code: "GIA 604", title: "Monitoring and Instrumentation", semester: "Semester I", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP4"], summary: "Sensor systems, data quality, and field observation design.", discipline: "Environmental Science", software: ["IoT Tools", "QGIS"], learningMode: "Field-Integrated" },
  { slug: "gia-605", code: "GIA 605", title: "Vadose-Zone Physics", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP2"], summary: "Unsaturated-zone processes, infiltration, and flow mechanisms.", discipline: "Environmental Science", software: ["Python", "MODFLOW"], learningMode: "Blended" },
  { slug: "gia-606", code: "GIA 606", title: "Contaminant Transport", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP3"], summary: "Contaminant pathways, transformations, and risk indicators.", discipline: "Environmental Science", software: ["Python", "PHREEQC"], learningMode: "Project-Based" },
  { slug: "gia-607", code: "GIA 607", title: "Aquifer Systems Modelling", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP4"], summary: "Saturated-zone modelling, calibration, and scenario design.", discipline: "Mathematical Science", software: ["MODFLOW", "Python"], learningMode: "Blended" },
  { slug: "gia-608", code: "GIA 608", title: "Non-Darcian Flow and Multi-Continuum Theory", semester: "Semester II", credits: 4, duration: "8 Weeks", wpMapping: ["WP2", "WP4"], summary: "Volume averaging and multi-continuum flow formulation.", discipline: "Mathematical Science", software: ["MATLAB", "Python"], learningMode: "Research-Led" },
  { slug: "gia-609", code: "GIA 609", title: "Human-Water Systems", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP5"], summary: "Socio-hydrological feedbacks, demand, and governance dimensions.", discipline: "Environmental Science", software: ["Python", "System Dynamics"], learningMode: "Policy-Studio" },
  { slug: "gia-610", code: "GIA 610", title: "Groundwater AI and Forecasting", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP6"], summary: "Machine learning pipelines for groundwater forecasting.", discipline: "Computational Science", software: ["Python", "TensorFlow"], learningMode: "Coding-Intensive" },
  { slug: "gia-611", code: "GIA 611", title: "Decision-Support Systems", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP6"], summary: "Decision support architecture, indicators, and policy outputs.", discipline: "Computational Science", software: ["Python", "Dashboard Tools"], learningMode: "Project-Based" },
  { slug: "gia-612", code: "GIA 612", title: "Digital Twin Engineering", semester: "Semester III", credits: 4, duration: "8 Weeks", wpMapping: ["WP4", "WP6"], summary: "Digital twin design patterns and scenario evaluation.", discipline: "Computational Science", software: ["Python", "Simulation Tools"], learningMode: "Studio" },
  { slug: "gia-613", code: "GIA 613", title: "Research Methods and Reproducibility", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP6"], summary: "Research design, reproducibility, and open-science practices.", discipline: "Mathematical Science", software: ["R", "Git"], learningMode: "Research-Led" },
  { slug: "gia-614", code: "GIA 614", title: "Policy Translation and Communication", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP5", "WP6"], summary: "Translating scientific evidence into policy and stakeholder action.", discipline: "Environmental Science", software: ["Dashboard Tools"], learningMode: "Policy-Studio" },
  { slug: "gia-615", code: "GIA 615", title: "Studio Integration Project", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP2", "WP3", "WP4", "WP5", "WP6"], summary: "Integrated project development through the Groundwater Intelligence Studio.", discipline: "Computational Science", software: ["Python", "Git", "QGIS"], learningMode: "Studio" },
  { slug: "gia-616", code: "GIA 616", title: "Dissertation Preparation", semester: "Semester IV", credits: 4, duration: "8 Weeks", wpMapping: ["WP1", "WP2", "WP3", "WP4", "WP5", "WP6"], summary: "Proposal refinement, ethics, and dissertation execution planning.", discipline: "Mathematical Science", software: ["R", "Python"], learningMode: "Research-Led" },
];
