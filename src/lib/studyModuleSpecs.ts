import { studyModules } from "@/lib/studyModules";

export interface LearningOutcome {
  code: string;
  statement: string;
}

export interface CourseUnit {
  title: string;
  focus: string;
}

export interface WeekSchedule {
  week: string;
  topic: string;
  activities: string[];
}

export interface AssessmentItem {
  title: string;
  weight: number;
  description: string;
}

export interface ModuleProject {
  title: string;
  brief: string;
  outputs: string[];
}

export interface Reference {
  citation: string;
  reason: string;
}

export interface StudyModuleSpecification {
  description: string;
  rationale: string;
  objectives: string[];
  learningOutcomes: LearningOutcome[];
  courseUnits: CourseUnit[];
  weeklySchedule: WeekSchedule[];
  practicalActivities: string[];
  codingLabs: string[];
  fieldActivities: string[];
  assessment: AssessmentItem[];
  project: ModuleProject;
  deliverables: string[];
  textbooks: Reference[];
  software: string[];
  wpMapping: string[];
}

const bySlug = Object.fromEntries(studyModules.map((moduleItem) => [moduleItem.slug, moduleItem])) as Record<
  string,
  (typeof studyModules)[number]
>;

function withBase(slug: string, spec: Omit<StudyModuleSpecification, "software" | "wpMapping">): StudyModuleSpecification {
  const base = bySlug[slug];
  return {
    ...spec,
    software: base?.software ?? [],
    wpMapping: base?.wpMapping ?? [],
  };
}

export const studyModuleSpecs: Record<string, StudyModuleSpecification> = {
  "gia-601": withBase("gia-601", {
    description:
      "Introduces hydrogeological system structure, aquifer properties, recharge pathways, and groundwater observation fundamentals.",
    rationale:
      "Provides the conceptual and field-science foundation required before advanced flow and transport modelling modules.",
    objectives: [
      "Develop conceptual hydrogeological models for layered and fractured aquifers.",
      "Interpret aquifer test evidence for transmissivity and storage behavior.",
      "Connect hydrogeological settings to potable-water risk pathways.",
      "Prepare defensible baseline evidence for WP1 forcing and WP4 aquifer integration.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Explain key groundwater occurrence and movement mechanisms." },
      { code: "LO2", statement: "Interpret pumping-test responses using standard diagnostic plots." },
      { code: "LO3", statement: "Construct a conceptual model linking geology to water-supply resilience." },
      { code: "LO4", statement: "Communicate hydrogeological uncertainty in planning language." },
    ],
    courseUnits: [
      { title: "Aquifer Types and Properties", focus: "Porosity, permeability, anisotropy, and heterogeneity." },
      { title: "Recharge and Discharge Systems", focus: "Climate controls, topography, and boundary conditions." },
      { title: "Groundwater Observation Methods", focus: "Monitoring wells, hydrographs, and interpretation workflows." },
      { title: "Conceptual Model Development", focus: "Evidence synthesis and uncertainty-aware model framing." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Hydrogeology Fundamentals", activities: ["Lectures", "Aquifer-property exercises"] },
      { week: "Week 3-4", topic: "Recharge Systems", activities: ["Case discussions", "Recharge estimation practical"] },
      { week: "Week 5-6", topic: "Observation and Testing", activities: ["Pumping-test analysis", "Monitoring design workshop"] },
      { week: "Week 7-8", topic: "Conceptual Model Synthesis", activities: ["Group studio", "Technical brief preparation"] },
    ],
    practicalActivities: [
      "Aquifer-property interpretation worksheet",
      "Hydrograph and seasonal signal interpretation",
      "Conceptual cross-section drafting",
      "Recharge-zone delineation practical",
    ],
    codingLabs: [
      "QGIS spatial hydrogeology layers",
      "Python plotting of hydrograph response",
      "Parameter sensitivity mini-notebook",
    ],
    fieldActivities: [
      "Borehole log interpretation field clinic",
      "Groundwater level measurement protocol exercise",
    ],
    assessment: [
      { title: "Conceptual Model Report", weight: 35, description: "Hydrogeological conceptual model with assumptions and uncertainty." },
      { title: "Applied Practical Portfolio", weight: 25, description: "Aquifer and recharge analysis outputs from practical sessions." },
      { title: "Final Technical Exam", weight: 40, description: "Integrated interpretation of hydrogeological evidence and scenarios." },
    ],
    project: {
      title: "Local Aquifer Baseline Study",
      brief: "Produce a baseline hydrogeological dossier for a selected water-supply area.",
      outputs: ["Conceptual model", "Risk note", "Monitoring recommendations"],
    },
    deliverables: ["Conceptual model diagram", "Parameter table", "Recharge narrative", "Risk brief"],
    textbooks: [
      { citation: "Fetter, C. W. Applied Hydrogeology (5th ed.)", reason: "Core hydrogeology principles and methods." },
      { citation: "Freeze, R. A., and Cherry, J. A. Groundwater", reason: "Reference text for groundwater systems and transport concepts." },
      { citation: "Domenico, P. A., and Schwartz, F. W. Physical and Chemical Hydrogeology", reason: "Hydrogeology process depth and applied context." },
    ],
  }),
  "gia-602": withBase("gia-602", {
    description:
      "Covers linear algebra, differential equations, numerical methods, and optimization for environmental system analysis.",
    rationale:
      "Builds the mathematical language and computational rigor needed across WP1 and WP2 modelling workflows.",
    objectives: [
      "Apply matrix and vector formulations to environmental models.",
      "Solve ODE/PDE systems relevant to groundwater flow and transport.",
      "Evaluate numerical stability and convergence in discretized models.",
      "Use optimization and calibration concepts in model fitting tasks.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Formulate environmental problems as solvable mathematical systems." },
      { code: "LO2", statement: "Implement and compare numerical solution strategies." },
      { code: "LO3", statement: "Diagnose model instability and discretization error." },
      { code: "LO4", statement: "Communicate assumptions and limitations of mathematical models." },
    ],
    courseUnits: [
      { title: "Linear Systems and Eigen Concepts", focus: "Matrix conditioning and environmental interpretation." },
      { title: "Differential Equations", focus: "Transient dynamics for physical and ecological systems." },
      { title: "Numerical Methods", focus: "Finite-difference and iterative solvers." },
      { title: "Optimization and Inference", focus: "Calibration objectives and constrained minimization." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Linear Algebra for Models", activities: ["Problem sets", "MATLAB/Python lab"] },
      { week: "Week 3-4", topic: "ODE/PDE Foundations", activities: ["Derivation sessions", "Solver lab"] },
      { week: "Week 5-6", topic: "Discretization and Stability", activities: ["Convergence tests", "Error analysis"] },
      { week: "Week 7-8", topic: "Calibration and Optimization", activities: ["Case optimization", "Technical memo"] },
    ],
    practicalActivities: [
      "Matrix conditioning diagnostics",
      "Time-step sensitivity comparison",
      "Boundary-condition perturbation experiment",
      "Objective-function design exercise",
    ],
    codingLabs: [
      "MATLAB linear solver comparison",
      "Python ODE and PDE discretization notebook",
      "Calibration workflow prototype",
    ],
    fieldActivities: [
      "None (computationally focused module)",
      "Dataset orientation for applied calibration use-cases",
    ],
    assessment: [
      { title: "Problem Portfolio", weight: 30, description: "Mathematical derivations and structured computational checks." },
      { title: "Numerical Lab Notebook", weight: 30, description: "Reproducible implementations with diagnostics." },
      { title: "Final Applied Exam", weight: 40, description: "Model formulation and interpretation under scenario constraints." },
    ],
    project: {
      title: "Groundwater PDE Mini-Solver",
      brief: "Develop and document a compact solver for a reduced groundwater flow/transport system.",
      outputs: ["Solver code", "Validation plot suite", "Method note"],
    },
    deliverables: ["Derivation sheets", "Code repository", "Calibration figures", "Interpretation note"],
    textbooks: [
      { citation: "Strang, G. Introduction to Linear Algebra", reason: "Core matrix tools for environmental modelling." },
      { citation: "Chapra, S., and Canale, R. Numerical Methods for Engineers", reason: "Applied numerical analysis workflow." },
      { citation: "LeVeque, R. Finite Difference Methods for ODEs and PDEs", reason: "Stability and discretization rigor." },
    ],
  }),
  "gia-603": withBase("gia-603", {
    description:
      "Develops reproducible scientific computing workflows, code quality practice, and computational experiment design.",
    rationale:
      "Ensures all students can implement traceable, maintainable, and auditable groundwater intelligence pipelines.",
    objectives: [
      "Build modular and tested scientific code.",
      "Use version control and issue-driven workflows.",
      "Design reproducible computational experiments.",
      "Package results for team and policy audiences.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Create reliable scientific scripts and modules with tests." },
      { code: "LO2", statement: "Apply Git workflows for collaboration and provenance." },
      { code: "LO3", statement: "Document code and experiment logic clearly." },
      { code: "LO4", statement: "Generate reproducible outputs from raw data to report." },
    ],
    courseUnits: [
      { title: "Scientific Python Stack", focus: "Arrays, dataframes, plotting, and IO patterns." },
      { title: "Software Engineering Basics", focus: "Testing, linting, and modular design." },
      { title: "Reproducibility Workflows", focus: "Environment capture and pipeline repeatability." },
      { title: "Communication of Computational Results", focus: "Notebook/report integration and review-ready outputs." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Python and Data Pipelines", activities: ["Hands-on labs", "Mini challenge"] },
      { week: "Week 3-4", topic: "Testing and Refactoring", activities: ["Unit testing", "Code review drills"] },
      { week: "Week 5-6", topic: "Reproducibility", activities: ["Environment capture", "Pipeline rerun task"] },
      { week: "Week 7-8", topic: "Publication-Ready Outputs", activities: ["Notebook hardening", "Technical presentation"] },
    ],
    practicalActivities: [
      "Dataset ingestion and validation workflow",
      "Refactor a monolithic script to modules",
      "Peer code review workshop",
      "Experiment reproducibility challenge",
    ],
    codingLabs: [
      "Python packaging mini-lab",
      "Git branch and pull-request workflow",
      "Automated testing and CI basics",
    ],
    fieldActivities: [
      "Field-data to code pipeline walkthrough",
      "Metadata capture standards exercise",
    ],
    assessment: [
      { title: "Code Quality Portfolio", weight: 35, description: "Tested, documented, and modular scientific code." },
      { title: "Reproducibility Audit", weight: 25, description: "Independent rerun evidence and audit note." },
      { title: "Capstone Computing Demo", weight: 40, description: "End-to-end pipeline demonstration and defense." },
    ],
    project: {
      title: "Reproducible Recharge Analysis Pipeline",
      brief: "Build a complete analysis pipeline from forcing input to recharge output figures.",
      outputs: ["Repository", "README and methods", "Result package"],
    },
    deliverables: ["Test report", "Code documentation", "Reproducibility checklist", "Presentation deck"],
    textbooks: [
      { citation: "Wilson, G. et al. Best Practices for Scientific Computing", reason: "Reproducibility and quality principles." },
      { citation: "McKinney, W. Python for Data Analysis", reason: "Practical data and workflow skills." },
      { citation: "Perez-Riverol, Y. et al. Ten Simple Rules for Reproducible Research", reason: "Research-grade reproducibility guidance." },
    ],
  }),
  "gia-604": withBase("gia-604", {
    description:
      "Focuses on sensor systems, groundwater monitoring design, data quality assurance, and instrumentation strategy.",
    rationale:
      "Supports WP1 and WP4 with defensible, quality-controlled field and monitoring evidence.",
    objectives: [
      "Design monitoring systems for quantity and quality indicators.",
      "Apply instrumentation QA/QC protocols.",
      "Interpret sensor drift and uncertainty impacts.",
      "Integrate field data into modelling and decision workflows.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Specify sensor configurations for target groundwater questions." },
      { code: "LO2", statement: "Implement QA/QC plans for acquisition campaigns." },
      { code: "LO3", statement: "Diagnose and correct common instrumentation errors." },
      { code: "LO4", statement: "Prepare field evidence packages for modelling teams." },
    ],
    courseUnits: [
      { title: "Monitoring Network Design", focus: "Spatial sampling logic and sentinel locations." },
      { title: "Instrumentation and Calibration", focus: "Sensor types, calibration cycles, and maintenance." },
      { title: "QA/QC and Metadata", focus: "Validation checks and traceable data management." },
      { title: "Field-to-Model Data Transfer", focus: "Standardization and ingestion patterns." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Network and Site Design", activities: ["Design clinic", "Coverage analysis"] },
      { week: "Week 3-4", topic: "Sensors and Calibration", activities: ["Lab calibration", "Error scenarios"] },
      { week: "Week 5-6", topic: "QA/QC Implementation", activities: ["Cleaning workflow", "Metadata capture"] },
      { week: "Week 7-8", topic: "Operational Deployment", activities: ["Field simulation", "Operational report"] },
    ],
    practicalActivities: [
      "Monitoring layout design exercise",
      "Calibration and drift detection practical",
      "Data quality rule engine setup",
      "Metadata and provenance template completion",
    ],
    codingLabs: [
      "Sensor timeseries QA checks in Python",
      "QGIS monitoring coverage mapping",
      "Automated anomaly flags and alerts",
    ],
    fieldActivities: [
      "Instrument installation checklist drill",
      "Sampling protocol and chain-of-custody simulation",
    ],
    assessment: [
      { title: "Monitoring Design Dossier", weight: 35, description: "Network rationale, locations, and operational plan." },
      { title: "QA/QC Lab Portfolio", weight: 25, description: "Calibration and quality-control evidence." },
      { title: "Applied Field Examination", weight: 40, description: "Instrumentation decision-making and interpretation test." },
    ],
    project: {
      title: "Pilot Monitoring Blueprint",
      brief: "Create a full monitoring blueprint for a groundwater management district.",
      outputs: ["Network map", "QA/QC protocol", "Implementation budget note"],
    },
    deliverables: ["Site matrix", "Sensor register", "QA log", "Operational handover note"],
    textbooks: [
      { citation: "Nielsen, D. M. Practical Handbook of Environmental Site Characterization", reason: "Field and monitoring execution practice." },
      { citation: "USGS Groundwater Technical Procedures", reason: "Monitoring and sampling standards reference." },
      { citation: "EPA Guidance on Environmental Data Verification and Validation", reason: "QA/QC framework support." },
    ],
  }),
  "gia-605": withBase("gia-605", {
    description:
      "Develops process understanding of unsaturated-zone flow, infiltration partitioning, and recharge generation.",
    rationale:
      "Provides core physical reasoning and model setup competency for WP2 vadose-zone simulation.",
    objectives: [
      "Explain vadose-zone storage and flux dynamics.",
      "Interpret unsaturated hydraulic property functions.",
      "Link event forcing to recharge timing and magnitude.",
      "Build benchmark-ready vadose-zone model setups.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Describe moisture dynamics across depth and forcing regimes." },
      { code: "LO2", statement: "Estimate infiltration and percolation from observed conditions." },
      { code: "LO3", statement: "Configure simplified vadose-zone numerical experiments." },
      { code: "LO4", statement: "Evaluate recharge uncertainty across scenarios." },
    ],
    courseUnits: [
      { title: "Unsaturated Flow Fundamentals", focus: "Moisture retention and conductivity behavior." },
      { title: "Infiltration and Preferential Routing", focus: "Surface forcing and bypass effects." },
      { title: "Recharge Estimation Methods", focus: "Water balance and process-based methods." },
      { title: "Modeling and Validation", focus: "Benchmark comparisons and uncertainty framing." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Vadose Fundamentals", activities: ["Problem sessions", "Retention curve analysis"] },
      { week: "Week 3-4", topic: "Flow and Infiltration", activities: ["Rainfall-event practical", "Model setup lab"] },
      { week: "Week 5-6", topic: "Recharge Estimation", activities: ["Comparative methods", "Scenario tests"] },
      { week: "Week 7-8", topic: "Validation and Synthesis", activities: ["Benchmark run", "Technical defense"] },
    ],
    practicalActivities: [
      "Soil hydraulic parameter fitting",
      "Infiltration experiment interpretation",
      "Recharge method comparison",
      "Model benchmarking workshop",
    ],
    codingLabs: [
      "Python infiltration simulation lab",
      "MODFLOW recharge package exercise",
      "Sensitivity analysis notebook",
    ],
    fieldActivities: [
      "Soil profile and infiltration observation",
      "Field moisture measurement and QA logs",
    ],
    assessment: [
      { title: "Vadose Model Report", weight: 35, description: "Model setup, assumptions, and recharge interpretation." },
      { title: "Lab Notebook", weight: 25, description: "Reproducible practical and coding outputs." },
      { title: "Final Applied Test", weight: 40, description: "Scenario-driven vadose-zone reasoning and analysis." },
    ],
    project: {
      title: "Recharge Pathway Assessment",
      brief: "Assess recharge pathways for contrasting soil and rainfall conditions.",
      outputs: ["Parameter set", "Simulation suite", "Recharge conclusions"],
    },
    deliverables: ["Model configuration", "Calibration tables", "Recharge curves", "Summary memo"],
    textbooks: [
      { citation: "Hillel, D. Introduction to Environmental Soil Physics", reason: "Vadose-zone process fundamentals." },
      { citation: "Bear, J. Dynamics of Fluids in Porous Media", reason: "Porous-media flow theory basis." },
      { citation: "Nimmo, J. and Scanlon, B. Vadose Zone Hydrology references", reason: "Applied recharge process insights." },
    ],
  }),
  "gia-606": withBase("gia-606", {
    description:
      "Examines contaminant source behavior, transport pathways, reaction mechanisms, and risk interpretation.",
    rationale:
      "Provides the scientific basis for WP3 quality-risk modelling and source scenario assessment.",
    objectives: [
      "Classify contaminant sources and pathway behavior.",
      "Model advection, dispersion, diffusion, and reaction dynamics.",
      "Assess attenuation, degradation, and sorption controls.",
      "Translate concentration outputs into quality-risk indicators.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Distinguish conservative and reactive transport signatures." },
      { code: "LO2", statement: "Apply transport equations to contamination scenarios." },
      { code: "LO3", statement: "Evaluate attenuation assumptions and data requirements." },
      { code: "LO4", statement: "Prepare quality-risk outputs for integrated decision workflows." },
    ],
    courseUnits: [
      { title: "Contaminant Sources and Loading", focus: "Point, diffuse, and episodic sources." },
      { title: "Transport Physics", focus: "ADE process mechanics and pathway controls." },
      { title: "Reactive and Sorptive Processes", focus: "Kinetics, equilibrium, and transformation." },
      { title: "Risk Interpretation", focus: "Thresholds, exposure framing, and uncertainty." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Source Systems", activities: ["Source inventory", "Scenario framing"] },
      { week: "Week 3-4", topic: "Transport Modeling", activities: ["ADE lab", "Breakthrough analysis"] },
      { week: "Week 5-6", topic: "Reactive Dynamics", activities: ["PHREEQC practice", "Attenuation tests"] },
      { week: "Week 7-8", topic: "Risk Products", activities: ["Map generation", "Stakeholder interpretation brief"] },
    ],
    practicalActivities: [
      "Source term scenario design",
      "Breakthrough curve interpretation",
      "Reactive transport case comparison",
      "Risk threshold exceedance analysis",
    ],
    codingLabs: [
      "Python ADE solver notebook",
      "PHREEQC reaction scenario exercise",
      "Quality risk map scripting",
    ],
    fieldActivities: [
      "Contaminant pathway reconnaissance",
      "Sampling strategy and QA documentation",
    ],
    assessment: [
      { title: "Transport Analysis Report", weight: 35, description: "Source-to-receptor transport interpretation and model evidence." },
      { title: "Reactive Lab Portfolio", weight: 25, description: "Reactive transport exercises with reproducible code." },
      { title: "Final Scenario Examination", weight: 40, description: "Integrated quality-risk analysis across uncertainty cases." },
    ],
    project: {
      title: "Contaminant Risk Scenario Portfolio",
      brief: "Develop source-to-risk scenario analyses for a selected groundwater system.",
      outputs: ["Scenario set", "Risk visualizations", "Mitigation options note"],
    },
    deliverables: ["Source matrix", "Transport notebook", "Reaction summary", "Risk communication brief"],
    textbooks: [
      { citation: "Zheng, C., and Bennett, G. D. Applied Contaminant Transport Modeling", reason: "Transport model foundations and practice." },
      { citation: "Domenico, P. A., and Schwartz, F. W. Physical and Chemical Hydrogeology", reason: "Hydrochemical and transport concepts." },
      { citation: "Appelo, C. A. J., and Postma, D. Geochemistry, Groundwater and Pollution", reason: "Reactive process and geochemical depth." },
    ],
  }),
  "gia-607": withBase("gia-607", {
    description:
      "Builds skills in saturated-zone modelling, calibration, scenario analysis, and aquifer-system interpretation.",
    rationale:
      "Directly supports WP4 by preparing students to construct and validate regional aquifer models.",
    objectives: [
      "Configure and calibrate aquifer-system models.",
      "Represent pumping, recharge, and boundary conditions consistently.",
      "Analyze storage dynamics and vulnerability indicators.",
      "Prepare aquifer outputs for decision-support integration.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Develop defensible aquifer conceptual and numerical models." },
      { code: "LO2", statement: "Execute calibration with transparent assumptions and diagnostics." },
      { code: "LO3", statement: "Evaluate management scenarios and stress responses." },
      { code: "LO4", statement: "Interpret model limits and uncertainty for planning decisions." },
    ],
    courseUnits: [
      { title: "Aquifer Conceptualization", focus: "Hydrostratigraphy, boundaries, and process framing." },
      { title: "Numerical Model Construction", focus: "Grid, parameters, and forcing integration." },
      { title: "Calibration and Validation", focus: "Objective functions and residual diagnostics." },
      { title: "Scenario and Vulnerability Analysis", focus: "Abstraction, recharge change, and risk outputs." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Conceptual to Numerical Transition", activities: ["Model setup clinic", "Data preparation"] },
      { week: "Week 3-4", topic: "Calibration Workflow", activities: ["MODFLOW runs", "Residual review"] },
      { week: "Week 5-6", topic: "Scenario Testing", activities: ["Pumping scenarios", "Recharge perturbation"] },
      { week: "Week 7-8", topic: "Risk and Communication", activities: ["Vulnerability indicators", "Policy-style briefing"] },
    ],
    practicalActivities: [
      "Boundary-condition sensitivity testing",
      "Pumping stress scenario runs",
      "Storage change accounting",
      "Vulnerability index derivation",
    ],
    codingLabs: [
      "MODFLOW model assembly lab",
      "Python post-processing for maps",
      "Calibration diagnostics scripting",
    ],
    fieldActivities: [
      "Monitoring data validation against model state",
      "Aquifer-system interpretation walk-through",
    ],
    assessment: [
      { title: "Aquifer Model Portfolio", weight: 35, description: "Model construction, calibration, and scenario evidence." },
      { title: "Technical Map Pack", weight: 25, description: "State and vulnerability maps with methods notes." },
      { title: "Final Applied Viva", weight: 40, description: "Defend modelling choices and management recommendations." },
    ],
    project: {
      title: "Regional Aquifer Scenario Model",
      brief: "Build and evaluate a regional aquifer model under abstraction and climate stressors.",
      outputs: ["Scenario ensemble", "Risk map set", "Decision note"],
    },
    deliverables: ["Calibrated model", "Scenario report", "Map atlas", "Decision summary"],
    textbooks: [
      { citation: "Anderson, M. P., Woessner, W. W., and Hunt, R. Applied Groundwater Modeling", reason: "End-to-end groundwater model practice." },
      { citation: "Hill, M. C., and Tiedeman, C. Effective Groundwater Model Calibration", reason: "Calibration rigor and diagnostics." },
      { citation: "Harbaugh, A. W. MODFLOW documentation", reason: "Model implementation specifics." },
    ],
  }),
  "gia-608": withBase("gia-608", {
    description:
      "Advanced module on non-Darcian formulations, volume averaging, and multi-continuum flow coupling.",
    rationale:
      "Supplies the theoretical and computational depth needed for rigorous WP2 and WP4 physics integration.",
    objectives: [
      "Derive multi-continuum equations from physical assumptions.",
      "Implement exchange terms across continuum classes.",
      "Analyze non-Darcian thresholds and parameter behavior.",
      "Benchmark multi-continuum implementations against simplified cases.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Explain when and why non-Darcian models are required." },
      { code: "LO2", statement: "Formulate and implement continuum exchange structures." },
      { code: "LO3", statement: "Evaluate parameter identifiability and scaling concerns." },
      { code: "LO4", statement: "Validate model behavior against benchmark references." },
    ],
    courseUnits: [
      { title: "Non-Darcian Flow Regimes", focus: "Threshold effects, inertial terms, and preferential flow." },
      { title: "Volume Averaging Theory", focus: "Upscaling from pore to representative elementary volume." },
      { title: "Multi-Continuum Exchange", focus: "Coupling structures and mass-transfer constraints." },
      { title: "Numerical Implementation", focus: "Stability and benchmark verification." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Theory Foundations", activities: ["Derivation seminars", "Case critique"] },
      { week: "Week 3-4", topic: "Equation Construction", activities: ["MATLAB symbolic work", "Parameter study"] },
      { week: "Week 5-6", topic: "Exchange and Coupling", activities: ["Python implementation", "Stability checks"] },
      { week: "Week 7-8", topic: "Benchmarking", activities: ["Reference comparisons", "Model defense"] },
    ],
    practicalActivities: [
      "Non-Darcian threshold identification",
      "Exchange-parameter sensitivity analysis",
      "Upscaling assumption audit",
      "Benchmark residual diagnostics",
    ],
    codingLabs: [
      "MATLAB continuum-coupling prototype",
      "Python multi-continuum solver extension",
      "Benchmark regression tests",
    ],
    fieldActivities: [
      "Fracture and preferential pathway observation clinic",
      "Field evidence to parameter mapping workshop",
    ],
    assessment: [
      { title: "Theory and Derivation Portfolio", weight: 30, description: "Derivation quality and assumption clarity." },
      { title: "Implementation Notebook", weight: 30, description: "Working multi-continuum code and diagnostics." },
      { title: "Benchmark Examination", weight: 40, description: "Performance and interpretation under test scenarios." },
    ],
    project: {
      title: "Multi-Continuum Solver Extension",
      brief: "Extend a baseline solver with non-Darcian and exchange formulations.",
      outputs: ["Code extension", "Benchmark report", "Parameter guidance"],
    },
    deliverables: ["Derivation brief", "Solver module", "Benchmark plots", "Uncertainty note"],
    textbooks: [
      { citation: "Bear, J. Dynamics of Fluids in Porous Media", reason: "Porous-media flow theory backbone." },
      { citation: "Whitaker, S. The Method of Volume Averaging", reason: "Formal upscaling framework." },
      { citation: "Berkowitz, B. Characterizing Flow and Transport in Fractured Geological Media", reason: "Fracture and preferential flow context." },
    ],
  }),
  "gia-609": withBase("gia-609", {
    description:
      "Introduces socio-hydrology, human-water feedbacks, demand systems, and governance scenario analysis.",
    rationale:
      "Enables WP5 integration by treating human systems as dynamic drivers of groundwater behavior.",
    objectives: [
      "Model interactions between social behavior and groundwater systems.",
      "Analyze abstraction and demand trajectories.",
      "Represent infrastructure leakage and return flows.",
      "Evaluate governance interventions under uncertainty.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Explain socio-hydrological feedback mechanisms." },
      { code: "LO2", statement: "Construct demand and abstraction scenarios." },
      { code: "LO3", statement: "Interpret policy levers in model constraints." },
      { code: "LO4", statement: "Produce stakeholder-ready scenario narratives." },
    ],
    courseUnits: [
      { title: "Socio-Hydrology Foundations", focus: "Feedback loops and system dynamics." },
      { title: "Demand and Abstraction Systems", focus: "Sectoral use profiles and temporal behavior." },
      { title: "Infrastructure and Return Flows", focus: "Leakage, sewer loads, and irrigation return pathways." },
      { title: "Governance and Policy Scenarios", focus: "Regulatory and institutional intervention design." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Human-Water Dynamics", activities: ["Systems mapping", "Feedback diagramming"] },
      { week: "Week 3-4", topic: "Demand Scenario Building", activities: ["Data synthesis", "Scenario matrix"] },
      { week: "Week 5-6", topic: "Infrastructure and Industry", activities: ["Leakage case study", "Mining/industry impact review"] },
      { week: "Week 7-8", topic: "Policy Translation", activities: ["Governance simulation", "Recommendation brief"] },
    ],
    practicalActivities: [
      "Demand-baseline profiling",
      "Leakage impact estimation",
      "Return-flow scenario comparison",
      "Policy intervention prioritization",
    ],
    codingLabs: [
      "System dynamics prototype in Python",
      "Scenario dashboard preparation",
      "Sensitivity ranking of policy levers",
    ],
    fieldActivities: [
      "Utility operations and leakage audit visit",
      "Stakeholder interview and policy mapping exercise",
    ],
    assessment: [
      { title: "Socio-Hydrology Scenario Report", weight: 35, description: "Scenario design and system feedback interpretation." },
      { title: "Policy Studio Portfolio", weight: 25, description: "Policy framing and intervention comparison outputs." },
      { title: "Final Applied Assessment", weight: 40, description: "Integrated human-water systems analysis." },
    ],
    project: {
      title: "Governance Scenario Simulator",
      brief: "Build a scenario package evaluating demand, leakage, and policy intervention outcomes.",
      outputs: ["Scenario matrix", "Impact dashboard", "Policy memo"],
    },
    deliverables: ["Feedback map", "Scenario datasets", "Policy brief", "Stakeholder summary"],
    textbooks: [
      { citation: "Sivapalan, M. et al. Socio-hydrology: A New Science", reason: "Core socio-hydrology framing." },
      { citation: "Gleick, P. and Cooley, H. Water governance references", reason: "Policy and governance grounding." },
      { citation: "Sterman, J. Business Dynamics", reason: "System dynamics methods for feedback analysis." },
    ],
  }),
  "gia-610": withBase("gia-610", {
    description:
      "Covers machine learning and hybrid forecasting workflows for groundwater quantity and quality prediction.",
    rationale:
      "Supports WP6 by enabling predictive analytics that augment physical model outputs.",
    objectives: [
      "Build supervised and time-series groundwater forecasting models.",
      "Evaluate model performance under non-stationary conditions.",
      "Combine physics-based and data-driven predictions.",
      "Deploy forecasts in decision-support contexts.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Prepare and feature-engineer groundwater datasets for ML." },
      { code: "LO2", statement: "Train and evaluate forecasting models with robust metrics." },
      { code: "LO3", statement: "Assess model drift, bias, and uncertainty." },
      { code: "LO4", statement: "Communicate forecast confidence for policy and operations." },
    ],
    courseUnits: [
      { title: "Groundwater Forecasting Data Pipelines", focus: "Feature extraction and temporal framing." },
      { title: "ML Models for Environmental Time Series", focus: "Tree models, sequence models, and baselines." },
      { title: "Hybrid Physics-AI Strategies", focus: "Residual learning and constrained prediction." },
      { title: "Operational Forecast Delivery", focus: "Monitoring, drift handling, and dashboard integration." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Data and Baselines", activities: ["Pipeline prep", "Baseline benchmarking"] },
      { week: "Week 3-4", topic: "Model Training", activities: ["Cross-validation", "Hyperparameter search"] },
      { week: "Week 5-6", topic: "Hybridization", activities: ["Physics residual workflow", "Error analysis"] },
      { week: "Week 7-8", topic: "Operationalization", activities: ["Dashboard integration", "Forecast defense"] },
    ],
    practicalActivities: [
      "Forecast target definition workshop",
      "Feature drift detection exercise",
      "Model explainability comparison",
      "Forecast uncertainty communication drill",
    ],
    codingLabs: [
      "TensorFlow time-series model lab",
      "Python model evaluation notebook",
      "Forecast API and dashboard connector",
    ],
    fieldActivities: [
      "Sensor-to-forecast data handoff walkthrough",
      "Forecast validation with observed station data",
    ],
    assessment: [
      { title: "Forecasting Notebook Portfolio", weight: 35, description: "End-to-end ML workflow with evaluation evidence." },
      { title: "Hybrid Model Technical Brief", weight: 25, description: "Physics-AI integration approach and limitations." },
      { title: "Final Forecasting Challenge", weight: 40, description: "Scenario forecast performance and interpretation." },
    ],
    project: {
      title: "Potable Risk Forecast Prototype",
      brief: "Develop a prototype forecasting model for water-level and quality-risk indicators.",
      outputs: ["Model artifact", "Validation dashboard", "Operations note"],
    },
    deliverables: ["Feature schema", "Model comparison table", "Forecast dashboard", "Interpretation memo"],
    textbooks: [
      { citation: "Goodfellow, I., Bengio, Y., and Courville, A. Deep Learning", reason: "ML model fundamentals." },
      { citation: "Hastie, T., Tibshirani, R., and Friedman, J. Elements of Statistical Learning", reason: "Statistical learning grounding." },
      { citation: "Raschka, S. and Mirjalili, V. Machine Learning with PyTorch and Scikit-Learn", reason: "Applied implementation guidance." },
    ],
  }),
  "gia-611": withBase("gia-611", {
    description:
      "Focuses on decision-support architecture, index development, and evidence-to-action translation.",
    rationale:
      "Anchors WP6 by converting integrated scientific outputs into decision-ready workflows.",
    objectives: [
      "Design indicators for quantity, quality, and treatment prioritization.",
      "Build transparent decision logic and ranking frameworks.",
      "Incorporate uncertainty in recommendation systems.",
      "Communicate decisions to technical and non-technical stakeholders.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Create defensible decision criteria for potable-water planning." },
      { code: "LO2", statement: "Develop index and ranking workflows from model outputs." },
      { code: "LO3", statement: "Evaluate trade-offs across intervention options." },
      { code: "LO4", statement: "Present evidence-based recommendations with confidence context." },
    ],
    courseUnits: [
      { title: "Decision-Support Foundations", focus: "Criteria, objectives, and stakeholder framing." },
      { title: "Indicator and Index Design", focus: "Normalization, weighting, and aggregation." },
      { title: "Uncertainty and Trade-offs", focus: "Sensitivity and robustness tests." },
      { title: "Dashboard and Policy Translation", focus: "Decision communication and implementation pathways." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Decision Problem Framing", activities: ["Stakeholder mapping", "Criteria workshops"] },
      { week: "Week 3-4", topic: "Index Construction", activities: ["Weighting tests", "Aggregation lab"] },
      { week: "Week 5-6", topic: "Robustness Analysis", activities: ["Sensitivity analysis", "Scenario trade-off matrix"] },
      { week: "Week 7-8", topic: "Decision Product Delivery", activities: ["Dashboard build", "Policy briefing"] },
    ],
    practicalActivities: [
      "Criteria elicitation and structuring",
      "Index design and stress testing",
      "Intervention option ranking",
      "Uncertainty narrative drafting",
    ],
    codingLabs: [
      "Python multicriteria decision analysis lab",
      "Dashboard tools integration exercise",
      "Scenario comparison scripting",
    ],
    fieldActivities: [
      "Decision workshop with utility-style scenario",
      "Stakeholder feedback and refinement simulation",
    ],
    assessment: [
      { title: "Decision Framework Report", weight: 35, description: "Indicator architecture and rationale." },
      { title: "Dashboard Prototype", weight: 25, description: "Interactive decision-support prototype." },
      { title: "Final Policy-Ready Presentation", weight: 40, description: "Defend recommendations under uncertainty." },
    ],
    project: {
      title: "Potable-Water Prioritization Engine",
      brief: "Implement and test a prioritization engine for treatment and intervention selection.",
      outputs: ["Index engine", "Decision dashboard", "Recommendation dossier"],
    },
    deliverables: ["Criteria matrix", "Index code", "Scenario outputs", "Policy recommendation pack"],
    textbooks: [
      { citation: "Keeney, R. Value-Focused Thinking", reason: "Decision analysis design principles." },
      { citation: "Belton, V., and Stewart, T. Multiple Criteria Decision Analysis", reason: "MCDA methods and practice." },
      { citation: "Few, S. Information Dashboard Design", reason: "Decision dashboard communication standards." },
    ],
  }),
  "gia-612": withBase("gia-612", {
    description:
      "Develops digital twin design, data integration, and scenario simulation for groundwater management contexts.",
    rationale:
      "Supports WP4 and WP6 by operationalizing model coupling and scenario exploration in a twin framework.",
    objectives: [
      "Design modular architecture for groundwater digital twins.",
      "Integrate sensor, model, and scenario data streams.",
      "Simulate intervention options with traceable assumptions.",
      "Deploy decision-facing digital twin views for stakeholders.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Explain digital twin architecture patterns for environmental systems." },
      { code: "LO2", statement: "Implement data-model synchronization workflows." },
      { code: "LO3", statement: "Run and compare twin-based intervention scenarios." },
      { code: "LO4", statement: "Produce governance-ready twin output summaries." },
    ],
    courseUnits: [
      { title: "Digital Twin Concepts", focus: "State representation and synchronization logic." },
      { title: "Data and Model Coupling", focus: "Streaming data, model updating, and provenance." },
      { title: "Scenario Simulation Engine", focus: "Intervention libraries and comparative simulation." },
      { title: "Operational Decision Interface", focus: "Visualization and action pathways." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Twin Architecture", activities: ["Architecture diagramming", "Reference patterns"] },
      { week: "Week 3-4", topic: "Data Integration", activities: ["Connector setup", "State update routines"] },
      { week: "Week 5-6", topic: "Scenario Engine", activities: ["Simulation batches", "Comparative analysis"] },
      { week: "Week 7-8", topic: "Interface and Deployment", activities: ["Twin dashboard", "Operational demo"] },
    ],
    practicalActivities: [
      "Twin state model design",
      "Data synchronization workflow testing",
      "Scenario intervention simulation",
      "Output interpretation and decision linkage",
    ],
    codingLabs: [
      "Python twin orchestration prototype",
      "Simulation tools coupling lab",
      "Scenario dashboard integration",
    ],
    fieldActivities: [
      "Field-data sync validation check",
      "Operational user feedback session",
    ],
    assessment: [
      { title: "Twin Architecture Dossier", weight: 30, description: "Design rationale and implementation plan." },
      { title: "Simulation Portfolio", weight: 30, description: "Scenario suite and comparative outputs." },
      { title: "Final Operational Demonstration", weight: 40, description: "Live twin workflow demonstration and defense." },
    ],
    project: {
      title: "Groundwater Digital Twin Prototype",
      brief: "Deliver a digital twin prototype with scenario controls and decision outputs.",
      outputs: ["Architecture specification", "Working prototype", "User guide"],
    },
    deliverables: ["Twin schema", "Simulation logs", "Dashboard view", "Deployment checklist"],
    textbooks: [
      { citation: "Tao, F., and Qi, Q. Digital Twin and Smart Manufacturing", reason: "Digital twin architecture concepts." },
      { citation: "Grieves, M. Digital Twin: Manufacturing Excellence through Virtual Factory Replication", reason: "Twin lifecycle framing." },
      { citation: "Batty, M. Digital Twins and Urban Modeling references", reason: "Large-scale system twin design parallels." },
    ],
  }),
  "gia-613": withBase("gia-613", {
    description:
      "Strengthens research design, reproducibility standards, ethics, and transparent scientific reporting.",
    rationale:
      "Prepares students for dissertation-quality work with robust methods and reproducible outputs.",
    objectives: [
      "Design coherent and ethical research plans.",
      "Apply reproducible workflows and data governance standards.",
      "Construct valid inference and uncertainty narratives.",
      "Prepare publishable technical reports and manuscripts.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Write research questions and hypotheses with methodological alignment." },
      { code: "LO2", statement: "Implement open and reproducible analysis pipelines." },
      { code: "LO3", statement: "Apply ethics and data governance requirements correctly." },
      { code: "LO4", statement: "Produce publication-ready scientific communication artifacts." },
    ],
    courseUnits: [
      { title: "Research Design", focus: "Question framing, methods selection, and validity." },
      { title: "Reproducibility and Open Science", focus: "Versioning, provenance, and sharing practices." },
      { title: "Ethics and Governance", focus: "Ethics applications and responsible data handling." },
      { title: "Scientific Communication", focus: "Technical writing and review response strategy." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Research Design Clinics", activities: ["Question refinement", "Method mapping"] },
      { week: "Week 3-4", topic: "Reproducibility Practice", activities: ["Pipeline packaging", "Audit checks"] },
      { week: "Week 5-6", topic: "Ethics and Governance", activities: ["Case reviews", "Ethics mock submission"] },
      { week: "Week 7-8", topic: "Writing and Publication", activities: ["Draft review", "Response-to-review simulation"] },
    ],
    practicalActivities: [
      "Research protocol drafting",
      "Reproducibility checklist implementation",
      "Ethics risk assessment exercise",
      "Peer-review and revision workshop",
    ],
    codingLabs: [
      "R reproducible reporting lab",
      "Git-based provenance tracking exercise",
      "Python/R analysis packaging workflow",
    ],
    fieldActivities: [
      "Research integrity case discussion",
      "Data-governance compliance scenario",
    ],
    assessment: [
      { title: "Research Proposal Pack", weight: 35, description: "Research design, methods, and ethics alignment." },
      { title: "Reproducibility Audit Portfolio", weight: 25, description: "Evidence that analyses are independently reproducible." },
      { title: "Final Methods Defense", weight: 40, description: "Methodological defense and uncertainty justification." },
    ],
    project: {
      title: "Dissertation-Ready Methods Blueprint",
      brief: "Produce a complete methods and reproducibility blueprint for dissertation research.",
      outputs: ["Methods chapter draft", "Reproducibility package", "Ethics file"],
    },
    deliverables: ["Proposal draft", "Audit checklist", "Ethics submission", "Methods appendix"],
    textbooks: [
      { citation: "Creswell, J. W. Research Design", reason: "Research design structure and logic." },
      { citation: "Kitzes, J., Turek, D., and Deniz, F. The Practice of Reproducible Research", reason: "Applied reproducibility methods." },
      { citation: "Day, R. A., and Gastel, B. How to Write and Publish a Scientific Paper", reason: "Scientific writing and publication guidance." },
    ],
  }),
  "gia-614": withBase("gia-614", {
    description:
      "Develops competency in translating groundwater evidence into policy instruments, stakeholder communication, and implementation plans.",
    rationale:
      "Enables WP5 and WP6 outputs to inform real governance and operational action.",
    objectives: [
      "Translate technical findings into policy-relevant recommendations.",
      "Design communication products for diverse stakeholders.",
      "Evaluate implementation pathways and barriers.",
      "Support evidence-based policy negotiation and adoption.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Produce concise policy briefs from complex technical evidence." },
      { code: "LO2", statement: "Match communication strategy to stakeholder needs." },
      { code: "LO3", statement: "Assess implementation feasibility and trade-offs." },
      { code: "LO4", statement: "Defend policy recommendations with evidence traceability." },
    ],
    courseUnits: [
      { title: "Policy Instruments and Governance", focus: "Regulatory and institutional pathways." },
      { title: "Evidence Translation", focus: "Converting models and metrics into policy language." },
      { title: "Stakeholder Communication", focus: "Framing, negotiation, and public communication." },
      { title: "Implementation Strategy", focus: "Roadmaps, monitoring, and adaptive management." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Policy Landscape", activities: ["Institutional mapping", "Instrument review"] },
      { week: "Week 3-4", topic: "Translation Methods", activities: ["Brief-writing lab", "Evidence chain mapping"] },
      { week: "Week 5-6", topic: "Stakeholder Strategy", activities: ["Role-play", "Communication rehearsal"] },
      { week: "Week 7-8", topic: "Implementation Planning", activities: ["Roadmap design", "Policy pitch"] },
    ],
    practicalActivities: [
      "Policy-brief drafting",
      "Stakeholder persona communication planning",
      "Implementation barrier analysis",
      "Monitoring and evaluation framework outline",
    ],
    codingLabs: [
      "Dashboard tools policy-summary view",
      "Python charting for policy narratives",
      "Evidence traceability matrix automation",
    ],
    fieldActivities: [
      "Stakeholder consultation simulation",
      "Policy workshop facilitation exercise",
    ],
    assessment: [
      { title: "Policy Brief Portfolio", weight: 35, description: "Technical-to-policy translation outputs." },
      { title: "Stakeholder Communication Plan", weight: 25, description: "Audience strategy and message architecture." },
      { title: "Final Implementation Pitch", weight: 40, description: "Evidence-based policy proposal defense." },
    ],
    project: {
      title: "Policy Translation Dossier",
      brief: "Create a full dossier connecting technical WP outputs to policy implementation actions.",
      outputs: ["Policy brief", "Implementation roadmap", "Stakeholder communication kit"],
    },
    deliverables: ["Policy memo", "Stakeholder map", "Implementation timeline", "Monitoring matrix"],
    textbooks: [
      { citation: "Bardach, E., and Patashnik, E. M. A Practical Guide for Policy Analysis", reason: "Policy analysis workflow." },
      { citation: "Cairney, P. Understanding Public Policy", reason: "Policy process context." },
      { citation: "OECD policy communication guidance", reason: "Evidence communication standards." },
    ],
  }),
  "gia-615": withBase("gia-615", {
    description:
      "Integrative studio module where students combine methods across all WPs into coherent solution prototypes.",
    rationale:
      "Serves as capstone integration before dissertation execution and deployment-ready portfolio development.",
    objectives: [
      "Integrate multi-module methods into one coherent technical workflow.",
      "Coordinate team-based delivery with clear technical roles.",
      "Produce end-to-end solution prototypes for real-case scenarios.",
      "Defend design choices using evidence and uncertainty analysis.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Assemble cross-domain modelling and decision pipelines." },
      { code: "LO2", statement: "Demonstrate team collaboration and technical leadership." },
      { code: "LO3", statement: "Deliver high-quality technical and communication artifacts." },
      { code: "LO4", statement: "Evaluate implementation readiness and scaling constraints." },
    ],
    courseUnits: [
      { title: "Studio Problem Framing", focus: "Scoping and requirements elicitation." },
      { title: "Integration Sprint I", focus: "Data-model coupling and prototype architecture." },
      { title: "Integration Sprint II", focus: "Scenario and decision-layer integration." },
      { title: "Final Demonstration and Reflection", focus: "Deployment readiness and lessons learned." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Problem and Team Setup", activities: ["Team charter", "Backlog creation"] },
      { week: "Week 3-4", topic: "Build Sprint I", activities: ["Prototype development", "Interim review"] },
      { week: "Week 5-6", topic: "Build Sprint II", activities: ["Integration hardening", "Scenario testing"] },
      { week: "Week 7-8", topic: "Final Showcase", activities: ["Live demonstration", "Panel feedback"] },
    ],
    practicalActivities: [
      "Agile sprint planning and execution",
      "Integration testing across modules",
      "Scenario stress-test workshop",
      "Team retrospective and improvement planning",
    ],
    codingLabs: [
      "End-to-end pipeline orchestration",
      "Repository collaboration and CI workflow",
      "Visualization and dashboard integration",
    ],
    fieldActivities: [
      "Case-site validation and stakeholder requirements check",
      "Prototype usability walkthrough with domain users",
    ],
    assessment: [
      { title: "Studio Prototype", weight: 40, description: "Integrated technical solution and functionality evidence." },
      { title: "Team Delivery Portfolio", weight: 20, description: "Planning, collaboration, and technical process artifacts." },
      { title: "Final Demonstration and Viva", weight: 40, description: "Panel defense of design and impact rationale." },
    ],
    project: {
      title: "Groundwater Intelligence Studio Capstone",
      brief: "Deliver a complete prototype linking data, model outputs, and decision support for a target case.",
      outputs: ["Working prototype", "Technical documentation", "Implementation recommendations"],
    },
    deliverables: ["Architecture map", "Integrated codebase", "Scenario report", "Demonstration deck"],
    textbooks: [
      { citation: "Sommerville, I. Software Engineering", reason: "System integration and delivery patterns." },
      { citation: "Cohn, M. Agile Estimating and Planning", reason: "Studio sprint planning support." },
      { citation: "Project-based learning in engineering references", reason: "Team and capstone pedagogy guidance." },
    ],
  }),
  "gia-616": withBase("gia-616", {
    description:
      "Prepares students for dissertation execution through proposal hardening, methods finalization, and supervision planning.",
    rationale:
      "Ensures dissertation projects are feasible, ethical, and aligned with programme research quality standards.",
    objectives: [
      "Refine dissertation scope, novelty, and feasibility.",
      "Finalize methods, data plans, and analysis strategy.",
      "Strengthen ethics, governance, and risk management plans.",
      "Prepare milestone-based dissertation execution roadmap.",
    ],
    learningOutcomes: [
      { code: "LO1", statement: "Produce a dissertation-ready proposal with clear contributions." },
      { code: "LO2", statement: "Align methods and data strategy to research questions." },
      { code: "LO3", statement: "Document ethical and governance compliance plans." },
      { code: "LO4", statement: "Defend timeline, risks, and contingency planning." },
    ],
    courseUnits: [
      { title: "Proposal Development", focus: "Question refinement, literature framing, and contribution claims." },
      { title: "Methods and Data Planning", focus: "Technical design and feasibility assessment." },
      { title: "Ethics and Risk", focus: "Compliance preparation and project-risk controls." },
      { title: "Execution and Supervision Plan", focus: "Milestones, supervision cadence, and reporting." },
    ],
    weeklySchedule: [
      { week: "Week 1-2", topic: "Proposal Clinics", activities: ["Scope refinement", "Literature synthesis"] },
      { week: "Week 3-4", topic: "Methods Hardening", activities: ["Methods review", "Data plan checks"] },
      { week: "Week 5-6", topic: "Ethics and Risk", activities: ["Ethics draft", "Risk register"] },
      { week: "Week 7-8", topic: "Final Defense Preparation", activities: ["Mock defense", "Roadmap finalization"] },
    ],
    practicalActivities: [
      "Proposal writing sprint",
      "Methods stress test with supervisor feedback",
      "Risk and contingency planning workshop",
      "Dissertation milestone board setup",
    ],
    codingLabs: [
      "Reproducible dissertation template setup",
      "Python/R analysis skeleton repository",
      "Reference management and citation tooling",
    ],
    fieldActivities: [
      "Dissertation fieldwork feasibility planning",
      "Data access and permissions workflow exercise",
    ],
    assessment: [
      { title: "Dissertation Proposal Document", weight: 45, description: "Full proposal including background, methods, and plan." },
      { title: "Ethics and Risk File", weight: 15, description: "Compliance readiness and risk controls." },
      { title: "Oral Proposal Defense", weight: 40, description: "Panel defense of scope, methods, and execution strategy." },
    ],
    project: {
      title: "Dissertation Launch Pack",
      brief: "Assemble all required materials for dissertation commencement and supervision agreement.",
      outputs: ["Approved proposal", "Methods package", "Execution roadmap"],
    },
    deliverables: ["Proposal manuscript", "Ethics packet", "Milestone timeline", "Supervisor agreement note"],
    textbooks: [
      { citation: "Booth, W. et al. The Craft of Research", reason: "Research question and argumentation quality." },
      { citation: "Punch, K. F. Developing Effective Research Proposals", reason: "Proposal development structure." },
      { citation: "Silvia, P. J. How to Write a Lot", reason: "Research writing productivity support." },
    ],
  }),
};
