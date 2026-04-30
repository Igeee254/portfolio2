import teslaCar from '../assets/tesla_style_hero_1775154304167.png';
import porscheCar from '../assets/car_angle_1_1775157882023.png';
import bmwCar from '../assets/suv_rugged_hero_1775154449392.png';
import interiorCar from '../assets/car_interior_premium_1775154493400.png';

export const carsData = [
    {
        id: 1,
        make: 'Tesla',
        model: 'Model S Plaid',
        year: 2024,
        price: 14500000,
        mileage: 1200,
        fuelType: 'Electric',
        transmission: 'Auto',
        location: 'Los Angeles, CA',
        image: teslaCar,
        details: {
            tagline: "Beyond the Road",
            sub_tagline: "Redefining Future Travel",
            description: "Step into a world of unparalleled innovation and sustainable elegance with our cutting-edge EVs.",
            specs: { battery: "100 kWh", motor: "Tri-Motor AWD", topSpeed: "322 km/h", weight: "4,766 LBS" },
            interiorImg: interiorCar,
            stats: { types: "15+", awards: "24", partners: "12" },
            sustainability: "Experience the next evolution in transportation. Embrace eco-friendly driving without compromising absolute hypercar performance."
        }
    },
    {
        id: 2,
        make: 'Porsche',
        model: '911 Carrera S',
        year: 2023,
        price: 22000000,
        mileage: 4500,
        fuelType: 'Petrol',
        transmission: 'PDK',
        location: 'Miami, FL',
        image: porscheCar,
        details: {
            tagline: "Timeless Precision",
            sub_tagline: "The Benchmark of Performance",
            description: "The unmistakable silhouette. The legendary flat-six engine. Over six decades of motorsport heritage distilled into street-legal perfection.",
            specs: { battery: "N/A", motor: "3.0L Twin-Turbo", topSpeed: "308 km/h", weight: "3,382 LBS" },
            interiorImg: interiorCar,
            stats: { types: "911", awards: "50+", partners: "Motorsport" },
            sustainability: "Engineered for maximum efficiency on the track and the road. The pinnacle of ICE development alongside synthetic fuel investments."
        }
    },
    {
        id: 3,
        make: 'BMW',
        model: 'M4 Competition',
        year: 2024,
        price: 13500000,
        mileage: 300,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Austin, TX',
        image: bmwCar,
        details: {
            tagline: "Unleash M Power",
            sub_tagline: "Aggression Meets Luxury",
            description: "Built to dominate the autobahn and the apex alike. Experience pure adrenaline in the ultimate driving machine.",
            specs: { battery: "N/A", motor: "3.0L Inline-6", topSpeed: "290 km/h", weight: "3,880 LBS" },
            interiorImg: interiorCar,
            stats: { types: "M Div", awards: "30+", partners: "Bavaria" },
            sustainability: "Focusing on unparalleled internal combustion thermal efficiency and a rigid, lightweight carbon core."
        }
    },
    {
        id: 4,
        make: 'Rivian',
        model: 'R1S Launch',
        year: 2023,
        price: 15000000,
        mileage: 8000,
        fuelType: 'Electric',
        transmission: 'Auto',
        location: 'Seattle, WA',
        image: teslaCar, // reusing image for mockup
        details: {
            tagline: "Keep Exploring",
            sub_tagline: "Adventure Amplified",
            description: "The world's first true Electric Adventure Vehicle. Capability that rivals legacy off-roaders with zero tailpipe emissions.",
            specs: { battery: "135 kWh", motor: "Quad-Motor AWD", topSpeed: "200 km/h", weight: "7,000 LBS" },
            interiorImg: interiorCar,
            stats: { types: "2", awards: "15+", partners: "Amazon" },
            sustainability: "Delivering the ultimate outdoor adventure capability while protecting the outdoors you came to explore."
        }
    },
    {
        id: 5,
        make: 'Mercedes-Benz',
        model: 'AMG GT Coupe',
        year: 2024,
        price: 28500000,
        mileage: 100,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Beverly Hills, CA',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Unleash the Beast",
            sub_tagline: "Luxury Meets V8 Roar",
            description: "A triumph of German engineering, featuring an aggressive stance and unparalleled grand touring luxury.",
            specs: { battery: "N/A", motor: "4.0L V8 BiTurbo", topSpeed: "315 km/h", weight: "4,300 LBS" },
            interiorImg: interiorCar,
            stats: { types: "AMG", awards: "40+", partners: "F1" },
            sustainability: "Continuing the legacy of handcrafted performance while moving towards a hybrid-assisted future."
        }
    },
    {
        id: 6,
        make: 'Audi',
        model: 'RS e-tron GT',
        year: 2023,
        price: 24000000,
        mileage: 3000,
        fuelType: 'Electric',
        transmission: 'Auto',
        location: 'San Francisco, CA',
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Electric Progression",
            sub_tagline: "The Art of Audi",
            description: "Sculpted aerodynamics and phenomenal electric acceleration in a breathtaking gran turismo package.",
            specs: { battery: "93 kWh", motor: "Dual-Motor AWD", topSpeed: "250 km/h", weight: "5,060 LBS" },
            interiorImg: interiorCar,
            stats: { types: "e-tron", awards: "25+", partners: "Design" },
            sustainability: "Pioneering sustainable mobility without compromising the thrilling dynamics expected from an RS badge."
        }
    },
    {
        id: 7,
        make: 'Lamborghini',
        model: 'Huracan Evo',
        year: 2022,
        price: 46000000,
        mileage: 6200,
        fuelType: 'Petrol',
        transmission: 'DCT',
        location: 'Las Vegas, NV',
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Defy Gravity",
            sub_tagline: "Naturally Aspirated Symphony",
            description: "The purest expression of supercar DNA. A screaming V10 engine meets razor-sharp Italian design.",
            specs: { battery: "N/A", motor: "5.2L V10", topSpeed: "325 km/h", weight: "3,135 LBS" },
            interiorImg: interiorCar,
            stats: { types: "Bulls", awards: "18+", partners: "Racing" },
            sustainability: "Celebrating the apex of internal combustion engineering in all its visceral glory."
        }
    },
    {
        id: 8,
        make: 'Ford',
        model: 'Bronco Raptor',
        year: 2024,
        price: 14500000,
        mileage: 50,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Denver, CO',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Untamed Capability",
            sub_tagline: "Own the Off-Road",
            description: "Baja-ready straight from the factory. Massive suspension travel and ruthless power to conquer any terrain.",
            specs: { battery: "N/A", motor: "3.0L EcoBoost V6", topSpeed: "180 km/h", weight: "5,733 LBS" },
            interiorImg: interiorCar,
            stats: { types: "4x4", awards: "12+", partners: "Fox" },
            sustainability: "Designed for the ultimate outdoor enthusiast who values traversing the toughest environments on Earth."
        }
    },
    {
        id: 9,
        make: 'Land Rover',
        model: 'Range Rover SV',
        year: 2024,
        price: 35000000,
        mileage: 1500,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'New York, NY',
        image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Absolute Refinement",
            sub_tagline: "The Pinnacle of Luxury SUV",
            description: "Unrivaled executive comfort fused with legendary off-road pedigree. The definitive statement of modern luxury.",
            specs: { battery: "N/A", motor: "4.4L Twin-Turbo V8", topSpeed: "261 km/h", weight: "5,700 LBS" },
            interiorImg: interiorCar,
            stats: { types: "SV", awards: "35+", partners: "Meridian" },
            sustainability: "Integrating sumptuous modern material ethics with sophisticated, highly efficient powertrains."
        }
    },
    {
        id: 10,
        make: 'McLaren',
        model: '720S',
        year: 2023,
        price: 50000000,
        mileage: 1800,
        fuelType: 'Petrol',
        transmission: 'SSG',
        location: 'Miami, FL',
        image: 'https://images.unsplash.com/photo-1582639510494-c80b5ea9f14b?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Raise Your Limits",
            sub_tagline: "Aerodynamic Perfection",
            description: "A ruthless track weapon disguised as a road car. Lighter, stronger, and faster than the competition.",
            specs: { battery: "N/A", motor: "4.0L Twin-Turbo V8", topSpeed: "341 km/h", weight: "3,128 LBS" },
            interiorImg: interiorCar,
            stats: { types: "Super Series", awards: "30+", partners: "Pirelli" },
            sustainability: "Maximizing aerodynamic efficiency to reduce drag and improve overall thermal management."
        }
    },
    {
        id: 11,
        make: 'Ferrari',
        model: 'F8 Tributo',
        year: 2024,
        price: 54000000,
        mileage: 800,
        fuelType: 'Petrol',
        transmission: 'DCT',
        location: 'Beverly Hills, CA',
        image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Prancing Horse",
            sub_tagline: "V8 Supremacy",
            description: "A celebration of excellence. The F8 Tributo pays homage to the most powerful V8 engine in Ferrari history.",
            specs: { battery: "N/A", motor: "3.9L Twin-Turbo V8", topSpeed: "340 km/h", weight: "3,164 LBS" },
            interiorImg: interiorCar,
            stats: { types: "Berlinetta", awards: "40+", partners: "Scuderia" },
            sustainability: "The most aerodynamically efficient mid-rear-engined berlinetta ever designed at Maranello."
        }
    },
    {
        id: 12,
        make: 'Aston Martin',
        model: 'Vantage',
        year: 2024,
        price: 27000000,
        mileage: 2200,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'London, UK',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Beautiful Is Absolute",
            sub_tagline: "British Elegance Meets Brute Force",
            description: "An archetype of the sports car. Sculptural presence paired with a roaring V8 and razor-sharp handling.",
            specs: { battery: "N/A", motor: "4.0L Twin-Turbo V8", topSpeed: "314 km/h", weight: "3,373 LBS" },
            interiorImg: interiorCar,
            stats: { types: "GT", awards: "20+", partners: "AMG" },
            sustainability: "Engineering beautifully sculpted, timeless machines designed to be cherished for generations."
        }
    },
    {
        id: 13,
        make: 'Lexus',
        model: 'LC 500',
        year: 2024,
        price: 16000000,
        mileage: 150,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Seattle, WA',
        image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Experience Amazing",
            sub_tagline: "Concept Car Reality",
            description: "A grand tourer without compromise. Combining a roaring naturally aspirated V8 with flawless Japanese craftsmanship.",
            specs: { battery: "N/A", motor: "5.0L V8", topSpeed: "270 km/h", weight: "4,340 LBS" },
            interiorImg: interiorCar,
            stats: { types: "Coupe", awards: "15+", partners: "Yamaha" },
            sustainability: "Employing Takumi craftsmanship to minimize waste and maximize the longevity of every masterfully built vehicle."
        }
    },
    {
        id: 14,
        make: 'Maserati',
        model: 'MC20',
        year: 2023,
        price: 40000000,
        mileage: 400,
        fuelType: 'Petrol',
        transmission: 'DCT',
        location: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1611181829672-04db801b637a?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Audacity",
            sub_tagline: "A New Era For The Trident",
            description: "100% made in Modena. An incredibly lightweight carbon-fiber chassis powered by the revolutionary Nettuno engine.",
            specs: { battery: "N/A", motor: "3.0L Twin-Turbo V6", topSpeed: "325 km/h", weight: "3,306 LBS" },
            interiorImg: interiorCar,
            stats: { types: "Supercar", awards: "10+", partners: "Dallara" },
            sustainability: "Utilizing F1-derived pre-chamber combustion technology to extract maximum power from minimal fuel."
        }
    },

    // ── HYBRID CARS ──────────────────────────────────────────────────────────

    {
        id: 15,
        make: 'Toyota',
        model: 'GR Supra Hybrid',
        year: 2025,
        price: 11200000,
        mileage: 200,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3c0?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Born on the Track",
            sub_tagline: "Hybrid Fury Unleashed",
            description: "A GR Supra like never before — the new plug-in hybrid setup marries the legendary turbo inline-6 with an electric motor for instantaneous torque.",
            specs: { battery: "18.8 kWh PHEV", motor: "3.0L Turbo + E-Motor", topSpeed: "290 km/h", weight: "3,320 LBS" },
            interiorImg: interiorCar,
            stats: { types: "GR Sport", awards: "22+", partners: "BMW" },
            sustainability: "Cuts emissions by 40% without compromising a single lap time."
        }
    },
    {
        id: 16,
        make: 'Porsche',
        model: 'Cayenne E-Hybrid',
        year: 2024,
        price: 18500000,
        mileage: 1800,
        fuelType: 'Hybrid',
        transmission: 'PDK',
        location: 'Stuttgart, Germany',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Sport Meets Conscience",
            sub_tagline: "Hybrid Heart, Porsche Soul",
            description: "The Cayenne E-Hybrid combines turbocharged power with an electric motor for sports car performance, SUV versatility, and a clean footprint.",
            specs: { battery: "25.9 kWh PHEV", motor: "3.0L Turbo + E-Motor", topSpeed: "295 km/h", weight: "5,060 LBS" },
            interiorImg: interiorCar,
            stats: { types: "E-Hybrid", awards: "28+", partners: "Siemens" },
            sustainability: "Over 60 km of pure electric range for zero-emission city driving."
        }
    },
    {
        id: 17,
        make: 'Ferrari',
        model: 'SF90 Stradale',
        year: 2024,
        price: 102000000,
        mileage: 500,
        fuelType: 'Hybrid',
        transmission: 'DCT',
        location: 'Maranello, Italy',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Ferrari's Electric Future",
            sub_tagline: "1,000 HP Hybrid Masterpiece",
            description: "Ferrari's first production PHEV. Three electric motors + twin-turbo V8 = 1,000 hp in a car you can actually drive every day.",
            specs: { battery: "7.9 kWh PHEV", motor: "4.0L V8 + 3 E-Motors", topSpeed: "340 km/h", weight: "3,461 LBS" },
            interiorImg: interiorCar,
            stats: { types: "PHEV", awards: "45+", partners: "Shell" },
            sustainability: "Prancing Horse's first major electrification step, slashing CO2 by 30%."
        }
    },
    {
        id: 18,
        make: 'Lamborghini',
        model: 'Revuelto',
        year: 2025,
        price: 142000000,
        mileage: 100,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Sant\'Agata, Italy',
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Hybrid Raging Bull",
            sub_tagline: "V12 + Electric = Insanity",
            description: "The Revuelto is the first Lamborghini PHEV and the most powerful road car Sant'Agata has ever built — 1,001 combined horsepower.",
            specs: { battery: "3.8 kWh PHEV", motor: "6.5L V12 + 3 E-Motors", topSpeed: "350 km/h", weight: "3,836 LBS" },
            interiorImg: interiorCar,
            stats: { types: "PHEV", awards: "20+", partners: "MIT" },
            sustainability: "First fully electric Lamborghini drive mode — the Raging Bull goes silent in the city."
        }
    },
    {
        id: 19,
        make: 'BMW',
        model: 'X5 xDrive50e',
        year: 2024,
        price: 15500000,
        mileage: 4200,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Munich, Germany',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Plug-In Powerhouse",
            sub_tagline: "Luxury Without Limits",
            description: "BMW's pinnacle hybrid SUV. Inline-6 + electric motor delivers seamless refinement with 83 km of pure EV range.",
            specs: { battery: "29.5 kWh PHEV", motor: "3.0L Inline-6 + E-Motor", topSpeed: "250 km/h", weight: "5,765 LBS" },
            interiorImg: interiorCar,
            stats: { types: "xDrive", awards: "32+", partners: "Northvolt" },
            sustainability: "83 km electric range covers most daily commutes with zero tailpipe emissions."
        }
    },
    {
        id: 20,
        make: 'Lexus',
        model: 'RZ 450e',
        year: 2024,
        price: 11800000,
        mileage: 900,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Nagoya, Japan',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Takumi Electrified",
            sub_tagline: "Crafted for Tomorrow",
            description: "Lexus's vision of luxury electrification — whisper-quiet, exquisitely crafted, and serenely powerful with dual-motor AWD.",
            specs: { battery: "71.4 kWh", motor: "Dual E-Motor AWD", topSpeed: "200 km/h", weight: "4,761 LBS" },
            interiorImg: interiorCar,
            stats: { types: "Electrified", awards: "19+", partners: "Panasonic" },
            sustainability: "Zero tailpipe emissions paired with legendary Takumi hand-craftsmanship."
        }
    },

    // ── HYBRID HEAVY MACHINERY ────────────────────────────────────────────────

    {
        id: 21,
        make: 'Volvo',
        model: 'FH Electric Hybrid Lorry',
        year: 2025,
        price: 30000000,
        mileage: 12000,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Gothenburg, Sweden',
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Electrifying Freight",
            sub_tagline: "Zero Emissions, Full Payload",
            description: "The world's most advanced long-haul lorry. Its hybrid system captures braking energy and returns it as electric boost on long gradients — radically cutting fuel on the Mombasa-Nairobi corridor.",
            specs: { battery: "165 kWh MHEV", motor: "Diesel + 490 kW E-Motor", topSpeed: "90 km/h", weight: "28,000 KG GVW" },
            interiorImg: interiorCar,
            stats: { types: "Heavy Duty", awards: "Truck of Year", partners: "DHL" },
            sustainability: "Up to 35% fuel savings vs conventional lorries on hilly East African routes."
        }
    },
    {
        id: 22,
        make: 'Mercedes-Benz',
        model: 'Actros Hybrid Truck',
        year: 2024,
        price: 34000000,
        mileage: 25000,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Stuttgart, Germany',
        image: 'https://images.unsplash.com/photo-1565708649986-d4f6b0c4b6bd?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Smart Lorry",
            sub_tagline: "Intelligence Meets Heavy Duty",
            description: "Using Predictive Powertrain Control — GPS data optimises energy recovery and gear shifting before hills appear, reducing fuel consumption by 5% on every run.",
            specs: { battery: "45 kWh PHEV", motor: "Diesel + 50 kW E-Motor", topSpeed: "89 km/h", weight: "25 Ton GVW" },
            interiorImg: interiorCar,
            stats: { types: "GigaSpace", awards: "18+", partners: "Bosch" },
            sustainability: "Predictive GPS energy management makes this the smartest fuel-saving heavy vehicle on the road."
        }
    },
    {
        id: 23,
        make: 'Scania',
        model: 'Super Hybrid Coach',
        year: 2025,
        price: 165000,
        mileage: 8000,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Södertälje, Sweden',
        image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Coach of the Future",
            sub_tagline: "Intercity Comfort, Green Future",
            description: "Purpose-built for the Nairobi-Mombasa route. Its PHEV powertrain runs the first 60 km silently on electricity before diesel takes over for the long haul.",
            specs: { battery: "60 kWh PHEV", motor: "Diesel + 130 kW E-Motor", topSpeed: "120 km/h", weight: "18 Ton GVW" },
            interiorImg: interiorCar,
            stats: { types: "Intercity", awards: "Coach of Year", partners: "Scania Finance" },
            sustainability: "Runs first 60 km on pure electricity, arriving in city centres with zero tailpipe emissions."
        }
    },

    // ── COMMON KENYAN MARKET VEHICLES ─────────────────────────────────────────

    {
        id: 24,
        make: 'Toyota',
        model: 'Fielder',
        year: 2015,
        price: 1150000,
        mileage: 84000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Kenya's Favourite Family Wagon",
            sub_tagline: "Reliable. Spacious. Affordable.",
            description: "The Toyota Fielder is one of the best-selling cars in Kenya for good reason — excellent fuel economy, genuine Toyota reliability, and enough space for the whole family. A must-have for the Nairobi commuter.",
            specs: { battery: "N/A", motor: "1.5L VVTI Petrol", topSpeed: "175 km/h", weight: "1,080 KG" },
            interiorImg: interiorCar,
            stats: { types: "Estate", awards: "Best Seller KE", partners: "CFAO Kenya" },
            sustainability: "Dependable 15+ km/l fuel efficiency makes it one of Kenya's most economical family cars."
        }
    },
    {
        id: 25,
        make: 'Nissan',
        model: 'Probox',
        year: 2013,
        price: 680000,
        mileage: 132000,
        fuelType: 'Petrol',
        transmission: 'Manual',
        location: 'Mombasa, Kenya',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Hustler's Choice",
            sub_tagline: "Tough. Economical. Unstoppable.",
            description: "Kenya's ultimate workhorse. The Nissan Probox is everywhere from Nairobi's industrial area to upcountry roads. Nearly indestructible, cheap to service, and delivers exceptional cargo space for a compact body.",
            specs: { battery: "N/A", motor: "1.3L Petrol", topSpeed: "155 km/h", weight: "960 KG" },
            interiorImg: interiorCar,
            stats: { types: "Van/Wagon", awards: "Workhorse KE", partners: "CMC Kenya" },
            sustainability: "Exceptional fuel economy of 18 km/l makes it the most cost-effective vehicle on Kenyan roads."
        }
    },
    {
        id: 26,
        make: 'Toyota',
        model: 'Premio',
        year: 2007,
        price: 850000,
        mileage: 115000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Executive Comfort",
            sub_tagline: "Affordable Luxury, Kenyan Style",
            description: "The Toyota Premio is the status symbol of middle Kenya. Smooth auto transmission, plush interior, and Toyota's rock-solid reliability combined with a price that makes sense. A staple of Nairobi's upper-income households.",
            specs: { battery: "N/A", motor: "1.8L VVTI Petrol", topSpeed: "185 km/h", weight: "1,200 KG" },
            interiorImg: interiorCar,
            stats: { types: "Sedan", awards: "Most Loved KE", partners: "DT Dobie" },
            sustainability: "Consistent 13 km/l fuel economy for a comfortable executive sedan used across Kenya."
        }
    },
    {
        id: 27,
        make: 'Toyota',
        model: 'Carina',
        year: 2002,
        price: 530000,
        mileage: 165000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nakuru, Kenya',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "A Classic That Never Quits",
            sub_tagline: "Old School Reliability",
            description: "The Toyota Carina is a legend on Kenyan roads. Its bulletproof 7A engine has survived Kenyan roads, potholes, and everything in between. Still found running taxis across the country decades after production ceased.",
            specs: { battery: "N/A", motor: "1.6L 7A Petrol", topSpeed: "170 km/h", weight: "1,050 KG" },
            interiorImg: interiorCar,
            stats: { types: "Sedan", awards: "Kenyan Classic", partners: "Local Garages" },
            sustainability: "Proven longevity of 20+ years keeps this off the scrapyard — the ultimate sustainable vehicle."
        }
    },
    {
        id: 28,
        make: 'Toyota',
        model: 'Axio',
        year: 2014,
        price: 920000,
        mileage: 96000,
        fuelType: 'Hybrid',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Smart Taxi Choice",
            sub_tagline: "Hybrid Economy Meets Comfort",
            description: "The Toyota Axio Hybrid dominates Nairobi's taxi and ride-hailing sector. Incredible fuel costs thanks to hybrid technology, combined with the Japanese reliability Kenyans trust. The perfect balance of economy and comfort.",
            specs: { battery: "1.3 kWh Hybrid", motor: "1.5L Hybrid VVTI", topSpeed: "175 km/h", weight: "1,150 KG" },
            interiorImg: interiorCar,
            stats: { types: "Hybrid Sedan", awards: "Uber Partner KE", partners: "Bolt Kenya" },
            sustainability: "20+ km/l hybrid fuel economy, drastically reducing fuel costs for taxi operators across Kenya."
        }
    },
    {
        id: 29,
        make: 'Toyota',
        model: 'Vitz',
        year: 2012,
        price: 620000,
        mileage: 78000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "City Life Made Easy",
            sub_tagline: "Nimble, Cute, Economical",
            description: "The Toyota Vitz is the top pick for young professionals in Nairobi. Tiny enough to squeeze through Westlands traffic, economical enough to survive fuel price hikes, and reliable enough to never let you down.",
            specs: { battery: "N/A", motor: "1.0L Petrol", topSpeed: "160 km/h", weight: "855 KG" },
            interiorImg: interiorCar,
            stats: { types: "Hatchback", awards: "City Star KE", partners: "CFAO Kenya" },
            sustainability: "Best-in-class 20 km/l fuel economy for urban Kenyan driving conditions."
        }
    },
    {
        id: 30,
        make: 'Mazda',
        model: 'Demio',
        year: 2013,
        price: 710000,
        mileage: 89000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Fun Meets Fuel Savings",
            sub_tagline: "SKYACTIV-G Performance",
            description: "The Mazda Demio is a favourite among Nairobi's young urban crowd. Stylish Japanese design, responsive SKYACTIV engine, and fantastic fuel economy make it a joy in city traffic or on a Nakuru weekend trip.",
            specs: { battery: "N/A", motor: "1.3L SKYACTIV Petrol", topSpeed: "175 km/h", weight: "980 KG" },
            interiorImg: interiorCar,
            stats: { types: "Hatchback", awards: "Style Icon KE", partners: "Toyota Tsusho" },
            sustainability: "SKYACTIV technology delivers 19 km/l — among the best for its class in Kenya."
        }
    },
    {
        id: 31,
        make: 'Toyota',
        model: 'Harrier',
        year: 2015,
        price: 3800000,
        mileage: 62000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Luxury SUV, Kenyan Roads",
            sub_tagline: "Executive Presence",
            description: "The Toyota Harrier is the symbol of success in Kenya's business circles. Plush leather interior, panoramic sunroof, and a powerful V6 engine ensure this SUV commands respect on Karen roads and Runda driveways alike.",
            specs: { battery: "N/A", motor: "2.4L VVTI Petrol", topSpeed: "200 km/h", weight: "1,720 KG" },
            interiorImg: interiorCar,
            stats: { types: "Luxury SUV", awards: "Status Symbol KE", partners: "DT Dobie" },
            sustainability: "Hybrid Harrier variant available cuts fuel consumption by 30% without sacrificing luxury."
        }
    },
    {
        id: 32,
        make: 'Toyota',
        model: 'Land Cruiser Prado',
        year: 2012,
        price: 5500000,
        mileage: 98000,
        fuelType: 'Diesel',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Safari King",
            sub_tagline: "Built for Kenya's Toughest Terrain",
            description: "The Toyota Land Cruiser Prado is the king of Kenya's roads — from Nairobi's tarmac to Masai Mara's murram tracks. Its bulletproof 1KD diesel engine and serious off-road ability make it the NGO fleet vehicle, safari workhorse, and government choice.",
            specs: { battery: "N/A", motor: "3.0L 1KD-FTV Diesel", topSpeed: "175 km/h", weight: "2,200 KG" },
            interiorImg: interiorCar,
            stats: { types: "4x4 SUV", awards: "Safari King KE", partners: "CFAO Kenya" },
            sustainability: "The go-to safari and conservation vehicle trusted by Kenya Wildlife Service and ECO-tourism operators."
        }
    },
    {
        id: 33,
        make: 'Toyota',
        model: 'Mark X',
        year: 2011,
        price: 1750000,
        mileage: 88000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Young Executive's Pride",
            sub_tagline: "Sport Sedan, Kenyan Price",
            description: "The Toyota Mark X is the aspirational car of young Nairobi professionals. Its powerful 2.5L V6 gives it punchy highway acceleration while still being practical enough to carry 5 adults in serious comfort.",
            specs: { battery: "N/A", motor: "2.5L V6 Petrol", topSpeed: "210 km/h", weight: "1,570 KG" },
            interiorImg: interiorCar,
            stats: { types: "Sports Sedan", awards: "Youth Star KE", partners: "DT Dobie" },
            sustainability: "Available in hybrid configuration delivering 15 km/l on a powerful V6 platform."
        }
    },
    {
        id: 34,
        make: 'Subaru',
        model: 'Impreza WRX',
        year: 2009,
        price: 1950000,
        mileage: 72000,
        fuelType: 'Petrol',
        transmission: 'Manual',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Kenyan Rally Legend",
            sub_tagline: "AWD Beast on Any Road",
            description: "The Subaru WRX has a cult following in Kenya. Its all-wheel drive system handles muddy Limuru roads as well as it handles Ngong Highway. With a boxer turbo engine, it's as fast as it is distinctive.",
            specs: { battery: "N/A", motor: "2.0L Boxer Turbo AWD", topSpeed: "230 km/h", weight: "1,430 KG" },
            interiorImg: interiorCar,
            stats: { types: "Rally Sport", awards: "Cult Classic KE", partners: "Kenya Rally" },
            sustainability: "Boxer engine provides lower centre of gravity and proven AWD grip for Kenya's diverse terrain."
        }
    },
    {
        id: 35,
        make: 'Honda',
        model: 'Fit / Jazz',
        year: 2014,
        price: 880000,
        mileage: 67000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1549399542-7d3b8a96c33b?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "More Space Than You Think",
            sub_tagline: "Magic Seat Versatility",
            description: "The Honda Fit's legendary Magic Seat system makes it the most versatile compact car in Kenya. Carry a mountain bike, fold fully flat for camping, or just enjoy the quiet, refined city drive. A favourite of Nairobi's practical crowd.",
            specs: { battery: "N/A", motor: "1.5L i-VTEC Petrol", topSpeed: "180 km/h", weight: "1,050 KG" },
            interiorImg: interiorCar,
            stats: { types: "Compact Hatch", awards: "Versatility KE", partners: "Honda Kenya" },
            sustainability: "Honda's i-VTEC engine delivers 18 km/l efficiency while reducing emissions across Kenyan cities."
        }
    },
    {
        id: 36,
        make: 'Nissan',
        model: 'X-Trail',
        year: 2013,
        price: 2100000,
        mileage: 95000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "The Family 4x4",
            sub_tagline: "Adventure Ready, City Approved",
            description: "Kenya's most popular mid-size SUV for families. The Nissan X-Trail handles school runs in Lang'ata and weekend safari drives to Amboseli with equal ease. Seven-seater option makes it the perfect family hauler.",
            specs: { battery: "N/A", motor: "2.0L MR20 Petrol", topSpeed: "190 km/h", weight: "1,680 KG" },
            interiorImg: interiorCar,
            stats: { types: "Family SUV", awards: "Family Pick KE", partners: "CMC Kenya" },
            sustainability: "Available in 2WD and 4WD, allowing families to choose fuel economy for city use."
        }
    },
    {
        id: 37,
        make: 'Toyota',
        model: 'Noah / Voxy',
        year: 2016,
        price: 2850000,
        mileage: 52000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Nairobi, Kenya',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Family Shuttle Supreme",
            sub_tagline: "8-Seater Kenyan MVP",
            description: "The Toyota Noah is a family institution in Kenya. Eight seats, automatic sliding doors, excellent boot space, and Toyota's legendary reliability make it the default choice for large families, church groups, and school runs alike.",
            specs: { battery: "N/A", motor: "2.0L VVTI Petrol", topSpeed: "170 km/h", weight: "1,750 KG" },
            interiorImg: interiorCar,
            stats: { types: "8-Seat MPV", awards: "Family MVP KE", partners: "CFAO Kenya" },
            sustainability: "Hybrid Noah variant available — popular with eco-conscious Kenyan families for its 18 km/l efficiency."
        }
    },
    {
        id: 38,
        make: 'Mitsubishi',
        model: 'Outlander / RVR',
        year: 2014,
        price: 1950000,
        mileage: 81000,
        fuelType: 'Petrol',
        transmission: 'Auto',
        location: 'Mombasa, Kenya',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
        details: {
            tagline: "Safari Compact, City Smart",
            sub_tagline: "The Compact Kenyan SUV",
            description: "The Mitsubishi RVR is one of the most popular compact SUVs in Kenya's used car market. Four-wheel drive capability, stylish looks, and a well-appointed interior make it the weekend warrior for Nairobi professionals.",
            specs: { battery: "N/A", motor: "1.8L MIVEC Petrol 4WD", topSpeed: "185 km/h", weight: "1,550 KG" },
            interiorImg: interiorCar,
            stats: { types: "Compact SUV", awards: "Value SUV KE", partners: "Toyota Tsusho" },
            sustainability: "MIVEC variable valve timing delivers refined performance while keeping fuel costs manageable."
        }
    }
];
