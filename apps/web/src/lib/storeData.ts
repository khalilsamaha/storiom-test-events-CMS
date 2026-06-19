/**
 * SINGLE SOURCE OF TRUTH — all store data hardcoded here.
 * No Sanity dependency. Edit this file to update any store info.
 */

export type Store = {
  id:          string
  name:        string
  description: string
  logo:        string
  floor:       number
  categories:  string[]
}

export const STORES: Store[] = [
  { id: "ayat",               name: "Ayat",               description: "Gadgets based on the Bible",                    logo: "/logos/AYAT.png",              floor:  1, categories: ["home-living","fashion-more"] },
  { id: "beytech",            name: "Beytech",             description: "Electronics & Appliances",                       logo: "/logos/BEYTECH.png",            floor:  2, categories: ["home-living"] },
  { id: "bi-side",            name: "Bi Side",             description: "Clothing & Accessories for Men, Women & Kids",   logo: "/logos/BISIDE.png",             floor:  1, categories: ["fashion-more"] },
  { id: "bourbon",            name: "Bourbon et Chocolat", description: "Pastries, Chocolates & more",                    logo: "/logos/BOURBON_ET_CHOCOLAT.png",floor:  0, categories: ["supermarket","food-dining"] },
  { id: "butchers-chop",      name: "Butcher's Chop",      description: "Meat & Poultry Butchery",                        logo: "/logos/BUTCHER_S_CHOP.png",     floor:  0, categories: ["supermarket"] },
  { id: "cannon-home",        name: "Cannon Home",         description: "Linen, Bedding & Bath Accessories",              logo: "/logos/CANNON_HOME.png",        floor:  2, categories: ["home-living","fashion-more"] },
  { id: "castania",           name: "Castania",            description: "Nuts & Confectionery Shop",                      logo: "/logos/CASTANIA.png",           floor:  0, categories: ["supermarket","food-dining"] },
  { id: "catalyst",           name: "Catalyst",            description: "Concept Coffee Shop",                            logo: "/logos/CATALYST.png",           floor:  1, categories: ["food-dining"] },
  { id: "dan-for-men",        name: "Dan for Men",         description: "Clothing & Suits for Men",                       logo: "/logos/DAN_FOR_MEN.png",        floor:  1, categories: ["fashion-more"] },
  { id: "himo",               name: "HIMO",                description: "Jewelry Shop",                                   logo: "/logos/HIMO.png",               floor:  0, categories: ["fashion-more"] },
  { id: "jardin-du-gout",     name: "Jardin du Goût",      description: "Ready-to-eat & Catering",                        logo: "/logos/JARDIN_DU_GOUT.png",     floor:  0, categories: ["supermarket"] },
  { id: "kawwa",              name: "Kawwa",               description: "Laundry Services",                               logo: "/logos/KAWA.png",               floor:  1, categories: ["home-living"] },
  { id: "la-poissonnerie",    name: "La Poissonnerie",     description: "Fish Shop",                                      logo: "/logos/LA_POISSONNERIE.png",    floor:  0, categories: ["supermarket"] },
  { id: "le-regard",          name: "Le Regard",           description: "Perfume & Makeup",                               logo: "/logos/LE_REGARD.png",          floor:  1, categories: ["fashion-more"] },
  { id: "murr-zero-3",        name: "Murr Zero 3",         description: "Cell & Gadgets",                                 logo: "/logos/MURR_ZERO_3.png",        floor:  1, categories: ["home-living"] },
  { id: "o-plaisir",          name: "Ö Plaisir Café",      description: "Resto Café Shop",                                logo: "/logos/O_PLAISIR.png",          floor:  0, categories: ["supermarket","food-dining"] },
  { id: "omg",                name: "OMG",                 description: "Gadgets & More",                                 logo: "/logos/OMG.png",                floor:  1, categories: ["home-living"] },
  { id: "maison-si-bon",      name: "Maison Si Bon",       description: "Pastry Shop",                                    logo: "/logos/SIBON.png",              floor:  0, categories: ["supermarket","food-dining"] },
  { id: "valepiu",            name: "Valepiu",             description: "Clothing & Accessories for Women",               logo: "/logos/VALEPIU.png",            floor:  1, categories: ["fashion-more"] },
  { id: "storiom-market",     name: "Storiom Market",      description: "Your full-service anchor supermarket",          logo: "/logos/STORIOM_MARKET.png",     floor:  0, categories: ["supermarket"] },
  { id: "storiom-greens",     name: "Storiom Greens",      description: "Farm-fresh fruits & vegetables daily",          logo: "/logos/STORIOM_GREENS.png",     floor:  0, categories: ["supermarket"] },
  { id: "storiom-household",  name: "Storiom Household",   description: "Home décor, kitchenware & lifestyle essentials",logo: "/logos/STORIOM_HOUSEHOLD.png",  floor: -1, categories: ["home-living"] },
  { id: "storiom-toys",       name: "Storiom Toys",        description: "Toys, games & entertainment for all ages",      logo: "/logos/STORIOM_TOYS.png",       floor:  2, categories: ["home-living"] },
]

export function getStoresByFloor(floor: number): Store[] {
  return STORES.filter(s => s.floor === floor).sort((a, b) => a.name.localeCompare(b.name))
}

export function getStoresByCategory(slug: string): Store[] {
  return STORES.filter(s => s.categories.includes(slug)).sort((a, b) => a.name.localeCompare(b.name))
}

export const FLOOR_TITLES: Record<number, string> = {
  [-1]: "Level -1",
  [0]:  "Level 0",
  [1]:  "Level 1",
  [2]:  "Level 2",
  [3]:  "Level 3",
}

export const FLOORS = [-1, 0, 1, 2, 3] as const

export const CATEGORIES = {
  "supermarket":   { slug: "supermarket",  label: "Supermarket & Essentials", tagline: "Your daily shop, covered",        description: "From fresh groceries and organic produce to household staples — everything you need for daily life, under one roof.", accentFrom: "#3AACBE", accentTo: "#8B9B2E", accentText: "#3AACBE", stroke: "#3AACBE", dx: 8,  dy: 8,  cx: 22, cy: 22 },
  "food-dining":   { slug: "food-dining",  label: "Food & Dining",             tagline: "Flavours from around the world.", description: "Restaurants, cafés, fresh produce counters, and specialty food stores — every craving satisfied, every visit.",       accentFrom: "#E8832A", accentTo: "#8B9B2E", accentText: "#E8832A", stroke: "#E8832A", dx: 12, dy: 8,  cx: 26, cy: 22 },
  "home-living":   { slug: "home-living",  label: "Home & Living",             tagline: "Everything for the home you love.",description: "Household goods, kitchenware, décor, and lifestyle essentials. Make every corner of your home a little more beautiful.", accentFrom: "#9B5EA2", accentTo: "#8B9B2E", accentText: "#9B5EA2", stroke: "#9B5EA2", dx: 8,  dy: 12, cx: 22, cy: 26 },
  "fashion-more":  { slug: "fashion-more", label: "Fashion & More",            tagline: "Style, beauty and beyond.",       description: "Fashion boutiques, electronics, beauty, eyewear, and lifestyle — curated brands that elevate the everyday.",            accentFrom: "#9B5EA2", accentTo: "#E8832A", accentText: "#9B5EA2", stroke: "#8B9B2E", dx: 12, dy: 12, cx: 26, cy: 26 },
} as const

export type CategorySlug = keyof typeof CATEGORIES
