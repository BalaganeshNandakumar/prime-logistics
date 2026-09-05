import roadTransportationImg from '../assets/images/services/road-transportation.jpg';
import fullLoadTransportationImg from '../assets/images/services/full-load-transportation.jpg';
import dedicatedFleetSolutionsImg from '../assets/images/services/dedicated-fleet-solutions.jpg';
import specializedFleetRequirementsImg from '../assets/images/services/specialized-fleet-requirements.jpg';
import panIndiaTransportationImg from '../assets/images/services/pan-india-transportation.jpg';

export const SERVICES = [
  {
    id: "road-transportation",
    title: "Road Transportation",
    shortDescription: "Dependable, efficient, and scalable point-to-point road transportation solutions across commercial corridors.",
    description: "Prime Logistics delivers structured road transportation solutions built around industrial timelines and commercial reliability. Combining disciplined route execution with versatile vehicle deployment, we ensure your cargo moves securely across key highway networks with complete operational oversight.",
    icon: "Truck",
    image: roadTransportationImg,
    keyBenefits: [
      "Disciplined point-to-point freight movement",
      "Flexible payload handling with verified vehicle configurations",
      "End-to-end trip coordination and structured transit milestones",
      "Proactive schedule adherence across major industrial routes"
    ],
    highlight: "Core Transportation"
  },
  {
    id: "full-load-transportation",
    title: "Full Load Transportation",
    shortDescription: "Exclusive, direct full-truckload (FTL) movement engineered for large-volume industrial and commercial shipments.",
    description: "Our Full Load Transportation service provides dedicated vehicle capacity exclusively reserved for your consignment. From single-consignor dispatch to multi-tonnage industrial deliveries, FTL guarantees zero intermediate cargo handling, minimizing turnaround times and optimizing supply chain predictability.",
    icon: "Boxes",
    image: fullLoadTransportationImg,
    keyBenefits: [
      "Single-consignor exclusive vehicle allocation",
      "Direct transit without intermediate transshipment delays",
      "Optimized for high-volume manufacturing and distributor shipments",
      "High integrity and minimal handling during transit"
    ],
    highlight: "Direct & Exclusive"
  },
  {
    id: "dedicated-fleet-solutions",
    title: "Dedicated Fleet Solutions",
    shortDescription: "Custom-assigned fleet capacity tailored to recurring business contracts and high-frequency distribution cycles.",
    description: "For enterprises with continuous, high-volume, or time-sensitive distribution cycles, Prime Logistics provides Dedicated Fleet Solutions. We assign dedicated assets and operational support tailored to your plant-to-hub or hub-to-dealer schedules, functioning as an extension of your internal logistics team.",
    icon: "ShieldCheck",
    image: dedicatedFleetSolutionsImg,
    keyBenefits: [
      "Custom asset reservation for long-term contract requirements",
      "Guaranteed capacity during seasonal or demand peaks",
      "Tailored loading and operational protocols matching your facility standards",
      "Dedicated account coordination for seamless supply chain synchronization"
    ],
    highlight: "Enterprise Fleet"
  },
  {
    id: "specialized-fleet-requirements",
    title: "Specialized Fleet Requirements",
    shortDescription: "Custom vehicle configurations and tailored deployment for complex cargo shapes, industrial machinery, and oversized loads.",
    description: "Not all cargo fits standard freight profiles. Prime Logistics accommodates specialized industrial needs—including open-body carriers, multi-axle trailers, and custom structural configurations—ensuring engineered cargo, engineering machinery, and heavy components are transported safely and compliantly.",
    icon: "Cpu",
    image: specializedFleetRequirementsImg,
    keyBenefits: [
      "Multi-axle, open-body, and high-cube trailer deployment",
      "Rigorous dimensional and weight distribution planning",
      "Expertise in securing engineering machinery and industrial fabrications",
      "Tailored route feasibility assessment for complex consignments"
    ],
    highlight: "Custom Configuration"
  },
  {
    id: "pan-india-transportation",
    title: "Pan-India Transportation",
    shortDescription: "Nationwide transportation network connecting businesses across major industrial, commercial, and distribution corridors.",
    description: "Connecting manufacturing hubs in Tamil Nadu and South India with major economic zones across the country, Prime Logistics delivers reliable Pan-India road transportation. Backed by our combined owned and attached fleet network, we ensure cross-regional transit execution with dependable coordination.",
    icon: "Globe",
    image: panIndiaTransportationImg,
    keyBenefits: [
      "Extensive inter-state corridor connectivity across India",
      "Smooth interstate transit management and documentation awareness",
      "Synchronized hub-to-hub and plant-to-depot transit lines",
      "Scalable network backing from the Tejas Logistics ecosystem"
    ],
    highlight: "Nationwide Reach"
  }
];
