import automotiveImg from '../assets/images/industries/automotive.jpg';
import manufacturingImg from '../assets/images/industries/manufacturing.jpg';
import engineeringImg from '../assets/images/industries/engineering.jpg';
import fmcgImg from '../assets/images/industries/fmcg.jpg';
import retailImg from '../assets/images/industries/retail.jpg';
import infrastructureImg from '../assets/images/industries/infrastructure.jpg';

export const INDUSTRIES = [
  {
    id: "automotive",
    title: "Automotive",
    description: "Transportation of automotive components, parts, materials, and finished products.",
    fullDescription: "Prime Logistics supports India's automotive manufacturing ecosystem with precision-timed road transportation. We move raw parts, precision-engineered assemblies, tier-1 subcomponents, and finished units between component manufacturers, assembly plants, and regional distribution nodes with extreme care.",
    icon: "Car",
    image: automotiveImg,
    keyGoods: ["Automotive Components", "Chassis Assemblies", "Engine Parts", "Tier-1 Spares", "Body Panels"],
    badge: "Just-In-Time Focus"
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Reliable movement of raw materials, components, machinery, and finished goods between manufacturing facilities and destinations.",
    fullDescription: "Industrial manufacturing depends on seamless inbound raw material flow and disciplined outbound finished goods dispatch. We provide dedicated and flexible truckload solutions that align directly with factory production schedules and inter-plant transfers.",
    icon: "Factory",
    image: manufacturingImg,
    keyGoods: ["Raw Materials", "Sheet Metal & Coils", "Factory Consumables", "Machinery Sub-assemblies", "Finished Industrial Goods"],
    badge: "Plant-to-Plant Movement"
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Transportation solutions for engineering products, equipment, components, and industrial materials.",
    fullDescription: "We deliver specialized road freight for heavy engineering enterprises, electrical fabricators, precision machine builders, and industrial component manufacturers across India's premier engineering corridors.",
    icon: "Cog",
    image: engineeringImg,
    keyGoods: ["Industrial Machinery", "Precision Engineering Parts", "Turbines & Motors", "Structural Fabrications", "Heavy Tooling"],
    badge: "Engineered Cargo"
  },
  {
    id: "fmcg-consumer-goods",
    title: "FMCG & Consumer Goods",
    description: "Efficient transportation supporting distribution and replenishment requirements.",
    fullDescription: "Rapid inventory turnover requires consistent transit reliability. Prime Logistics moves FMCG products, packaged foods, personal care goods, and household consumables with sealed, weatherproof container vehicles to maintain product integrity.",
    icon: "ShoppingBag",
    image: fmcgImg,
    keyGoods: ["Packaged Foods", "Personal Care Products", "Household Consumables", "Beverage Containers", "Paper Goods"],
    badge: "High Velocity Transit"
  },
  {
    id: "retail-distribution",
    title: "Retail & Distribution",
    description: "Transportation support for businesses moving products between suppliers, warehouses, distribution centers, and retail networks.",
    fullDescription: "We strengthen B2B supply chains by transporting consolidated freight between regional supplier bases, mother hubs, regional fulfillment points, and retail distribution centers with verified vehicle configurations.",
    icon: "Store",
    image: retailImg,
    keyGoods: ["Consumer Electronics", "Apparel & Textiles", "Home Furnishings", "Packaged Goods", "Retail Inventory"],
    badge: "Distribution Network"
  },
  {
    id: "industrial-infrastructure",
    title: "Industrial & Infrastructure",
    description: "Fleet solutions for industrial materials, equipment, and project-related transportation requirements.",
    fullDescription: "We provide high-capacity road transportation for infrastructure projects, industrial plant installations, and commercial construction projects, deploying open-body vehicles and heavy-duty trailers suited for heavy cargo.",
    icon: "Building2",
    image: infrastructureImg,
    keyGoods: ["Steel & Metal Profiles", "Piping & Valves", "Construction Machinery", "Project Materials", "Electrical Switchgear"],
    badge: "Project & Heavy Haul"
  }
];
