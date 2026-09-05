import fleet14ft from '../assets/images/fleet/14ft.jpg';
import fleet17ft from '../assets/images/fleet/17ft.jpg';
import fleet19ft from '../assets/images/fleet/19ft.jpg';
import fleet20ft from '../assets/images/fleet/20ft.jpg';
import fleet22ft from '../assets/images/fleet/22ft.jpg';
import fleet24ft from '../assets/images/fleet/24ft.jpg';
import fleet32ftSXL from '../assets/images/fleet/32ft-sxl.jpg';
import fleet32ftMXL from '../assets/images/fleet/32ft-mxl.jpg';
import fleetTrailers from '../assets/images/fleet/trailers.jpg';
import fleetOpenBody from '../assets/images/fleet/open-body.jpg';
import fleetContainer from '../assets/images/fleet/container.jpg';
import fleetSpecialized from '../assets/images/fleet/specialized.jpg';

export const FLEET_STRENGTH = {
  owned: "50+",
  attached: "150+",
  total: "200+",
  configurations: "Multiple Configurations",
  deployment: "Flexible Deployment",
  description: "Prime Logistics operates with a combination of owned and attached vehicles, giving customers access to a flexible transportation network capable of supporting different cargo volumes, routes, and vehicle requirements."
};

export const FLEET_CATEGORIES = [
  {
    id: "14ft-vehicles",
    name: "14 ft Vehicles",
    category: "Light / Medium Commercial",
    badge: "Urban & Regional",
    description: "Compact commercial carrier optimized for intra-city distribution, feeder runs, and regional manufacturing dispatches.",
    suitableFor: "FMCG, automotive spares, electrical components, and light industrial goods.",
    icon: "Truck",
    image: fleet14ft
  },
  {
    id: "17ft-vehicles",
    name: "17 ft Vehicles",
    category: "Medium Commercial",
    badge: "Regional Freight",
    description: "Versatile medium cargo vehicle designed for medium-weight industrial consignments and inter-district trade routes.",
    suitableFor: "Packaging materials, engineering components, and retail distribution.",
    icon: "Truck",
    image: fleet17ft
  },
  {
    id: "19ft-vehicles",
    name: "19 ft Vehicles",
    category: "Medium Commercial",
    badge: "Intermediate Transit",
    description: "Balanced platform offering expanded cubic volume for manufacturing transfers and high-cube commercial freight.",
    suitableFor: "Industrial supplies, consumer appliances, and secondary distribution.",
    icon: "Truck",
    image: fleet19ft
  },
  {
    id: "20ft-vehicles",
    name: "20 ft Vehicles",
    category: "Heavy Medium Freight",
    badge: "Standard Commercial",
    description: "Standard industrial cargo configuration delivering balanced payload and volumetric efficiency for medium corridors.",
    suitableFor: "Automotive components, machinery parts, and industrial raw materials.",
    icon: "Truck",
    image: fleet20ft
  },
  {
    id: "22ft-vehicles",
    name: "22 ft Vehicles",
    category: "Heavy Medium Freight",
    badge: "High Volume",
    description: "Extended chassis carrier ideal for bulk packaging, volumetric loads, and regional hub-to-hub movements.",
    suitableFor: "Finished goods, paper and packaging, and electrical equipment.",
    icon: "Truck",
    image: fleet22ft
  },
  {
    id: "24ft-vehicles",
    name: "24 ft Vehicles",
    category: "Heavy Commercial",
    badge: "Long Distance",
    description: "Heavy commercial platform engineered for substantial volume transfers across regional and national highway networks.",
    suitableFor: "Heavy engineering spares, bulk FMCG, and automotive tier-1 supply lines.",
    icon: "Truck",
    image: fleet24ft
  },
  {
    id: "32ft-sxl",
    name: "32 ft SXL",
    category: "Heavy Commercial Single Axle",
    badge: "Express FTL",
    description: "Single-Axle Extra Long container carrier offering maximum volume capacity for lightweight and standard bulk shipments.",
    suitableFor: "High-cube consumer goods, white goods, retail stocks, and e-commerce lines.",
    icon: "Container",
    image: fleet32ftSXL
  },
  {
    id: "32ft-mxl",
    name: "32 ft MXL",
    category: "Heavy Commercial Multi Axle",
    badge: "Heavy Duty FTL",
    description: "Multi-Axle Extra Long heavy hauler engineered for maximum payload strength and stability across long-haul interstate routes.",
    suitableFor: "Heavy industrial loads, automotive assemblies, raw materials, and high-density consignments.",
    icon: "Container",
    image: fleet32ftMXL
  },
  {
    id: "trailers",
    name: "Trailers",
    category: "Specialized Heavy Transport",
    badge: "Multi-Axle / Semi-Trailer",
    description: "Heavy-duty articulated trailer units designed for oversized cargo, structural components, and high-tonnage consignments.",
    suitableFor: "Project cargo, infrastructure equipment, steel structures, and heavy machinery.",
    icon: "ShieldAlert",
    image: fleetTrailers
  },
  {
    id: "open-body-vehicles",
    name: "Open-Body Vehicles",
    category: "Flexible Platform",
    badge: "Overhead Crane Loading",
    description: "Open-top and flatbed platforms enabling seamless top-loading via industrial cranes and side forklifts for robust goods.",
    suitableFor: "Structural steel, pipes, construction machinery, and crated industrial units.",
    icon: "Maximize",
    image: fleetOpenBody
  },
  {
    id: "container-vehicles",
    name: "Container Vehicles",
    category: "Weatherproof Closed Body",
    badge: "High Security & Weatherproof",
    description: "Fully enclosed, weatherproof containerized trucks providing maximum protection against climatic elements and road hazards.",
    suitableFor: "High-value electronics, automotive assemblies, sensitive FMCG, and carton freight.",
    icon: "ShieldCheck",
    image: fleetContainer
  },
  {
    id: "specialized-vehicles",
    name: "Specialized Vehicles",
    category: "Custom Engineering",
    badge: "Tailored Fleet",
    description: "Custom-configured vehicle chassis dedicated to non-standard dimensions, sensitive industrial freight, and specific plant requirements.",
    suitableFor: "Custom industrial fabrications, oversized equipment, and enterprise project movements.",
    icon: "Sliders",
    image: fleetSpecialized
  }
];
