import React, { useState, useEffect, useRef, useMemo } from 'react';
import { HeroSlider, ServiceCard, FeatureItem, TestimonialCard, TrackingForm, PageHeader, ContentBlock, FaqItem, Button } from './components';
import { CORE_SERVICES, WHY_CHOOSE_US_FEATURES, TESTIMONIALS, ALL_SERVICES, FAQ_DATA, SITE_CONFIG, CLIENT_SHIPMENTS_DATA, CLIENT_SHIPMENT_DETAILS_DATA, CLIENT_PREALERTS_DATA, CLIENT_INVOICES_DATA, WALLET_TRANSACTIONS_DATA, CLIENT_ADDRESSES_DATA, CLIENT_NOTIFICATIONS_DATA, CLIENT_TEAM_MEMBERS_DATA, ANALYTICS_DATA, API_TOKENS_DATA, WEBHOOKS_DATA, REFERRAL_DATA, LOYALTY_DATA, ALL_SHIPMENTS_MOCK_DATA, ALL_USERS_DATA, ADMIN_SHIPMENTS_DATA, ADMIN_ANALYTICS_DATA, HERO_SLIDES, ADMIN_WALLET_REQUESTS_DATA, ICON_MAP } from './constants';
import { IconMarker, IconPhone, IconEnvelope, IconWhatsapp, IconWrapper, IconDashboard, IconBoxSeam, IconBell, IconReceipt, IconWallet2, IconPerson, IconGeoAlt, IconHeadset, IconSearch, IconArrowDownCircle, IconArrowUpCircle, IconUpload, IconLayoutTextWindowReverse, IconUserPlus, IconSettings, IconFileEarmarkSpreadsheet, IconShieldLock, IconPencilSquare, IconListTask, IconCardImage, IconShare, IconGraphUpArrow, IconCodeSlash, IconPersonCircle, IconTruck, IconShieldCheck, IconFileText, IconHelpCircle, IconGlobe, IconWarehouse, IconCustoms, IconPackage, IconSend } from './constants';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import type { ClientShipment, DetailedClientShipment, ClientPreAlert, ClientInvoice, WalletTransaction, Address, ClientNotification, RateResult, User, AnalyticsDataPoint, ApiToken, Webhook, Referral, LoyaltyTier, QuoteFormData, TrackingData, Service, FaqItemData, HeroSlide, Feature, Testimonial, ShipmentMilestone, WalletRequest } from './types';


export const HomePage: React.FC = () => (
    <>
        <HeroSlider />
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="w-[90%] max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Logistics Services</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Comprehensive, reliable, and tailored solutions to meet your every shipping need, from local deliveries to international freight.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CORE_SERVICES.map(service => <ServiceCard key={service.title} service={service} />)}
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="w-[90%] max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Hayapass Global Logistics?</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">We are committed to exceeding your expectations with every shipment. Discover the Hayapass difference.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl mx-auto">
                    {WHY_CHOOSE_US_FEATURES.map(feature => <FeatureItem key={feature.title} feature={feature} />)}
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="w-[90%] max-w-7xl mx-auto px-4">
                <TrackingForm />
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="w-[90%] max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">We're proud to be a trusted logistics partner for businesses and individuals alike.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map(testimonial => <TestimonialCard key={testimonial.author} testimonial={testimonial} />)}
                </div>
            </div>
        </section>
        <section className="bg-[#00529b] text-white py-16 lg:py-20">
            <div className="w-[90%] max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Logistics?</h2>
                <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">Get a personalized quote today and experience the Hayapass Global Logistics advantage. Our experts are ready to help you find the perfect shipping solution.</p>
                <Button asLink to="/quote" secondary className="text-base py-3 px-8">Request a Quote Now</Button>
            </div>
        </section>
    </>
);

export const AboutPage: React.FC = () => (
    <>
        <PageHeader title="About Us" subtitle="Connecting continents with care, commitment, and cutting-edge logistics." />
        <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-6">To provide seamless, reliable, and innovative logistics solutions that bridge the distance between the UK, Nigeria, and the world. We are dedicated to simplifying complex supply chains, fostering global trade, and ensuring our clients' success through exceptional service and unwavering commitment.</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600">To be the leading logistics partner for UK-Nigeria trade, recognized for our operational excellence, client-centric approach, and technological innovation. We aim to build a future where geographical barriers are no longer an obstacle to business growth and personal connections.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop" alt="Diverse team collaborating in an office" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    </>
);

export const ServicesOverviewPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Our Services" subtitle="A complete suite of logistics solutions designed to meet your every need." />
            <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_SERVICES.map(service => <ServiceCard key={service.title} service={service} />)}
                </div>
            </div>
        </>
    );
};


const ServiceDetailPage: React.FC<{title: string; description: string; content: React.ReactNode}> = ({title, description, content}) => (
     <>
        <PageHeader title={title} subtitle={description} />
        <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
            <ContentBlock><div className="prose max-w-none">{content}</div></ContentBlock>
        </div>
    </>
);

export const ServiceUKDomesticPage: React.FC = () => <ServiceDetailPage title="UK Domestic Logistics" description="Specialized, reliable, and efficient shipping solutions across the United Kingdom." content={
    <>
        <h3>Your Partner for UK-Wide Distribution</h3>
        <p>Hayapass offers a complete range of domestic logistics services tailored for the UK market. Whether you're an e-commerce business reaching customers nationwide or a company managing a complex B2B supply chain, we have the infrastructure and expertise to support you.</p>
        
        <h4>Key UK Services:</h4>
        <ul>
            <li><strong>Next-Day Parcel Delivery:</strong> Our core service, ensuring your parcels reach their destination anywhere in the UK by the next working day.</li>
            <li><strong>Economy Services:</strong> A cost-effective solution for less urgent shipments, typically delivered within 2-3 working days.</li>
            <li><strong>Pallet & Freight Services:</strong> We handle everything from single pallets to full truckloads (FTL) and less-than-truckloads (LTL), with options for oversized and heavy goods.</li>
            <li><strong>Same-Day & Timed Delivery:</strong> For your most critical shipments, we offer dedicated same-day courier services and specific timed delivery slots.</li>
            <li><strong>Specialized Handling:</strong> Secure and compliant transport for high-value, fragile, or restricted items within the UK.</li>
        </ul>
        
        <h4>Why Choose Us for UK Logistics?</h4>
        <p>Our deep network of local hubs and couriers, combined with advanced tracking technology, provides unparalleled reliability and visibility. We offer flexible solutions that scale with your business needs, ensuring your goods are always in safe hands and delivered on schedule.</p>
    </>
} />;

export const ServiceDomesticPage: React.FC = () => <ServiceDetailPage title="UK & Nigeria Domestic Shipping" description="Fast, reliable, and secure delivery services within the UK and across Nigeria." content={
    <>
        <h3>Connecting Every Corner</h3>
        <p>Our domestic shipping services are the backbone of local commerce, designed for speed, security, and reliability. Whether you're a business sending stock to a retailer or an individual sending a gift to a loved one, we provide a seamless door-to-door experience.</p>
        
        <h4>Key Features:</h4>
        <ul>
            <li><strong>Extensive UK Network:</strong> Comprehensive coverage across England, Scotland, Wales, and Northern Ireland, including next-day delivery options.</li>
            <li><strong>Robust Nigeria Coverage:</strong> Reliable delivery to all major cities like Lagos, Abuja, and Port Harcourt, as well as connections to regional towns.</li>
            <li><strong>Multiple Service Levels:</strong> Choose from express (next-day), standard (2-3 days), and economy options to match your budget and urgency.</li>
            <li><strong>Real-Time Tracking:</strong> Monitor your shipment's journey from pickup to delivery with our precise tracking system.</li>
        </ul>
        
        <h4>Who is it for?</h4>
        <p>This service is ideal for e-commerce businesses fulfilling local orders, companies moving goods between their own facilities, and individuals needing dependable parcel delivery within either the UK or Nigeria.</p>
    </>
} />;

export const ServiceInternationalPage: React.FC = () => <ServiceDetailPage title="International Freight" description="Seamless air and sea freight connecting the UK, Nigeria, and the rest of the world." content={
    <>
        <h3>Your Global Trade Partner</h3>
        <p>Specializing in the UK-Nigeria trade lane, our international freight services are second to none. We simplify the complexities of global shipping, offering robust solutions by air and sea to connect you to markets around the world.</p>
        
        <h4>Air Freight Solutions:</h4>
        <p>When speed is your priority, our air freight services deliver. We leverage our strong relationships with major air carriers to offer competitive rates and reliable transit times.</p>
        <ul>
            <li><strong>Express vs. Standard:</strong> Choose express for critical shipments (3-5 days) or standard/economy for less urgent cargo (5-8 days).</li>
            <li><strong>Consolidation Services:</strong> Cost-effective options where we combine your shipment with others to reduce costs.</li>
            <li><strong>Global Reach:</strong> We connect all major international airports, handling everything from pickup to final delivery.</li>
        </ul>

        <h4>Sea Freight Solutions:</h4>
        <p>For larger, less time-sensitive shipments, sea freight is the most cost-effective solution. We manage the entire process to ensure your cargo arrives safely.</p>
        <ul>
            <li><strong>Full Container Load (FCL):</strong> Your goods, your own dedicated container. Ideal for high-volume shipments.</li>
            <li><strong>Less than Container Load (LCL):</strong> Share container space with other shippers for smaller volumes, paying only for the space you use.</li>
            <li><strong>Port-to-Port & Door-to-Door:</strong> Flexible service options to meet your specific supply chain needs.</li>
        </ul>
    </>
} />;

export const ServiceWarehousingPage: React.FC = () => <ServiceDetailPage title="Warehousing & Fulfilment" description="Secure storage and efficient order processing in our modern facilities." content={
    <>
        <h3>An Extension of Your Business</h3>
        <p>Our state-of-the-art warehousing facilities in London and Lagos provide more than just storage; they are strategic hubs designed to optimize your supply chain. Whether you need short-term storage or a long-term e-commerce fulfilment partner, we offer scalable solutions.</p>

        <h4>Our Warehousing Services Include:</h4>
        <ul>
            <li><strong>Secure Storage:</strong> 24/7 CCTV monitoring, controlled access, and modern fire suppression systems to keep your inventory safe.</li>
            <li><strong>Inventory Management:</strong> Our advanced Warehouse Management System (WMS) gives you real-time visibility and control over your stock levels.</li>
            <li><strong>Pick & Pack Services:</strong> Our skilled team accurately picks, packs, and prepares your orders for dispatch according to your specifications.</li>
            <li><strong>E-commerce Fulfilment:</strong> We integrate with major e-commerce platforms to automatically process and ship your online orders, managing returns efficiently.</li>
            <li><strong>Cross-Docking:</strong> Unload inbound shipments and directly transfer them to outbound transport with little to no storage time, increasing speed and reducing costs.</li>
        </ul>
    </>
} />;

export const ServiceCustomsPage: React.FC = () => <ServiceDetailPage title="Customs Clearance" description="Navigating the complexities of customs so you don't have to." content={
    <>
        <h3>Your Gateway to Smooth Cross-Border Trade</h3>
        <p>Customs can be one of the most challenging aspects of international shipping. Our experienced, in-house customs brokerage team ensures your shipments clear customs smoothly and without costly delays. We act as your trusted intermediary with government agencies.</p>

        <h4>Our Customs Process:</h4>
        <ul>
            <li><strong>Documentation Expertise:</strong> We prepare and submit all required documentation, including commercial invoices, packing lists, and certificates of origin.</li>
            <li><strong>Tariff Classification:</strong> Our experts correctly classify your goods with the right HS codes to ensure accurate duty and tax assessment.</li>
            <li><strong>Duty & Tax Management:</strong> We calculate and facilitate the payment of any applicable customs duties, VAT, or other taxes on your behalf.</li>
            <li><strong>Regulatory Compliance:</strong> We stay constantly up-to-date with the latest customs regulations in the UK, Nigeria, and globally to ensure your shipments are always compliant.</li>
        </ul>
        <p>By entrusting your customs clearance to us, you minimize risks, avoid potential fines, and ensure your goods keep moving across borders.</p>
    </>
} />;

export const ServiceSpecializedPage: React.FC = () => <ServiceDetailPage title="Specialized Cargo Handling" description="Expert handling for your unique and high-value shipments." content={
    <>
        <h3>Expert Care for Non-Standard Shipments</h3>
        <p>Some cargo requires special attention. We have the certified expertise, equipment, and processes to handle a wide range of specialized shipments safely and in full compliance with all regulations.</p>

        <h4>Our Capabilities Include:</h4>
        <ul>
            <li><strong>Temperature-Controlled Cargo:</strong> For pharmaceuticals, perishable foods, and other sensitive goods, we provide refrigerated containers ("reefers") and validated shipping processes to maintain the cold chain.</li>
            <li><strong>Hazardous Materials (Hazmat):</strong> Our team is fully trained and certified in IATA and IMDG regulations for the safe packing, labeling, and transport of dangerous goods.</li>
            <li><strong>Oversized & Project Cargo:</strong> From industrial machinery to construction equipment, we plan and execute the transport of out-of-gauge and heavy-lift items, managing permits and special equipment.</li>
            <li><strong>High-Value Goods:</strong> We offer enhanced security protocols, including secure transport, dedicated monitoring, and comprehensive insurance for valuable items like electronics, art, and luxury goods.</li>
        </ul>
    </>
} />;

export const ServiceConsultancyPage: React.FC = () => <ServiceDetailPage title="Logistics Consultancy" description="Optimizing your supply chain for efficiency and cost savings." content={
    <>
        <h3>Strategic Insights to Power Your Growth</h3>
        <p>Leverage our deep industry expertise to transform your supply chain from a cost center into a competitive advantage. Our consultancy services provide a strategic review of your entire logistics operation, identifying opportunities for improvement.</p>

        <h4>Our Consultancy Process:</h4>
        <ol>
            <li><strong>Analysis:</strong> We conduct a thorough audit of your current supply chain, from procurement and inventory management to transportation and final delivery.</li>
            <li><strong>Identification:</strong> We pinpoint bottlenecks, inefficiencies, hidden costs, and areas of risk within your current processes.</li>
            <li><strong>Strategy Development:</strong> We design a tailored roadmap with actionable recommendations. This could include network optimization, carrier selection, technology implementation, or process re-engineering.</li>
            <li><strong>Implementation Support:</strong> We can assist you in putting our recommendations into practice to ensure a smooth transition and measurable results.</li>
        </ol>

        <p>Our goal is to provide you with a strategic framework to reduce costs, enhance visibility, improve delivery times, and increase overall supply chain resilience.</p>
    </>
} />;

export const PersonalShopperPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', country: '', address: '', list: '', instructions: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Personal Shopper Request:", formData);
        setSubmitted(true);
        window.scrollTo(0, 0);
    };
    
    const formFieldClasses = "w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]";


    if (submitted) {
        return (
            <>
                <PageHeader title="Request Received!" subtitle="Thank you for your Personal Shopper request." />
                <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                    <ContentBlock className="text-center">
                        <h2 className="text-2xl font-bold mb-4">We've received your shopping list!</h2>
                        <p className="text-gray-600 mb-6">A member of our personal shopper team will review your request and contact you shortly via WhatsApp or email to confirm details and provide a quote. A confirmation has been sent to <strong>{formData.email}</strong>.</p>
                        <Button asLink to="/" primary>Back to Homepage</Button>
                    </ContentBlock>
                </div>
            </>
        )
    }

    return (
        <>
            <PageHeader
                title="Personal Shopper Service"
                subtitle="Craving authentic Nigerian food items? We shop, package, and ship them directly to you, anywhere in the world."
            />
            <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="prose max-w-none">
                        <h3>Authentic Nigerian Flavours, Delivered Globally</h3>
                        <p>Looking for fresh, top-quality Nigerian food items delivered straight to your doorstep? Whether you're in Nigeria or abroad, we are your trusted source for the authentic tastes of home. We shop for the best, so you don't have to.</p>
                        
                        <h4>What We Can Source For You</h4>
                        <p>We specialize in sourcing a wide variety of high-quality Nigerian foodstuffs, including:</p>
                        <ul className="list-disc pl-5 grid grid-cols-2 gap-x-4">
                            <li>Goat meat</li>
                            <li>Dry fish</li>
                            <li>Big dry crayfish (panla)</li>
                            <li>Stockfish (okporoko)</li>
                            <li>Egusi (ground)</li>
                            <li>Ogbono (ground)</li>
                            <li>Baskets of small crayfish</li>
                            <li>Big fresh snails</li>
                        </ul>

                        <h4>Our Process: Simple & Secure</h4>
                        <p>We handle everything with the utmost care to ensure your food arrives fresh and in perfect condition.</p>
                        <ol>
                            <li><strong>You Order:</strong> Fill out the form with your shopping list and any special preparation instructions.</li>
                            <li><strong>We Shop:</strong> Our team sources the freshest, highest-quality items from trusted local markets.</li>
                            <li><strong>We Package & Ship:</strong> Your order is meticulously prepared (e.g., washed, oven-dried), professionally sealed to prevent leaks, and packaged for international shipping. We then ship it directly to you via our reliable logistics network.</li>
                        </ol>

                        <p>Enjoy premium service and the authentic taste of Nigeria, no matter where you are. Place your order today!</p>
                    </div>
                    
                    <ContentBlock>
                        <h3 className="text-2xl font-bold mb-6">Place Your Shopping Request</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className={formFieldClasses} />
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className={formFieldClasses} />
                            <input type="tel" name="phone" placeholder="WhatsApp Phone Number (e.g. +44...)" value={formData.phone} onChange={handleChange} required className={formFieldClasses} />
                            <input type="text" name="country" placeholder="Delivery Country" value={formData.country} onChange={handleChange} required className={formFieldClasses} />
                            <textarea name="address" placeholder="Full Delivery Address" value={formData.address} onChange={handleChange} required rows={3} className={formFieldClasses} />
                            <textarea name="list" placeholder="Your Shopping List & Quantities (e.g., 2kg Goat meat, 1 paint bucket Egusi)" value={formData.list} onChange={handleChange} required rows={5} className={formFieldClasses} />
                            <textarea name="instructions" placeholder="Special Instructions (e.g., Snails should be washed, oven-dried & sealed)" value={formData.instructions} onChange={handleChange} rows={3} className={formFieldClasses} />
                            <Button type="submit" primary className="w-full">Submit Request</Button>
                        </form>
                    </ContentBlock>
                </div>
            </div>
        </>
    );
};


export const TrackingPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<TrackingData[]>([]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setResults([]);
            return;
        }
        const lowercasedFilter = searchTerm.toLowerCase();
        const filtered = ALL_SHIPMENTS_MOCK_DATA.filter(s =>
            s.id.toLowerCase().includes(lowercasedFilter) ||
            s.origin.toLowerCase().includes(lowercasedFilter) ||
            s.destination.toLowerCase().includes(lowercasedFilter)
        );
        setResults(filtered);
    }, [searchTerm]);

    return (
        <>
            <PageHeader title="Track Your Shipment" subtitle="Enter a tracking ID, origin, or destination for real-time updates." />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                <ContentBlock>
                    <div className="relative mb-6">
                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <IconWrapper><IconSearch/></IconWrapper>
                        </span>
                        <input
                            type="text"
                            placeholder="Search by Tracking ID, Origin, or Destination..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"
                        />
                    </div>
                    {searchTerm && (
                         <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3">Tracking ID</th>
                                        <th className="px-4 py-3">Route</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Est. Delivery</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.length > 0 ? results.map(s => (
                                        <tr key={s.id} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-3 font-medium">{s.id}</td>
                                            <td className="px-4 py-3">{s.origin} &rarr; {s.destination}</td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${s.badge}`}>{s.status}</span>
                                            </td>
                                            <td className="px-4 py-3">{new Date(s.estDelivery).toLocaleDateString()}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={4} className="text-center py-8 text-gray-500">No shipments found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </ContentBlock>
            </div>
        </>
    );
};

export const RatesCalculatorPage: React.FC = () => {
    const [params, setParams] = useState({
        origin: 'UK',
        destination: 'NG',
        serviceType: 'air',
        weight: '',
        length: '',
        width: '',
        height: '',
    });
    const [result, setResult] = useState<RateResult | null>(null);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setResult(null);

        const weight = parseFloat(params.weight);
        if (isNaN(weight) || weight <= 0) {
            setError('Please enter a valid weight.');
            return;
        }

        // Mock calculation logic
        let cost = 10; // Base fee
        cost += weight * (params.serviceType === 'air' ? 7.5 : 3.2);
        const l = parseFloat(params.length);
        const w = parseFloat(params.width);
        const h = parseFloat(params.height);
        if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
            const volume = (l * w * h) / 5000; // Volumetric weight calculation
            const chargeableWeight = Math.max(weight, volume);
            cost = 10 + chargeableWeight * (params.serviceType === 'air' ? 7.5 : 3.2);
        }

        setResult({
            serviceName: `International ${params.serviceType === 'air' ? 'Air' : 'Sea'} Freight`,
            estimatedCost: `£${cost.toFixed(2)}`,
            estimatedTime: params.serviceType === 'air' ? '5-8 Business Days' : '3-5 Weeks',
        });
    };

    return (
        <>
            <PageHeader title="Rates Calculator" subtitle="Get an instant estimate for your shipment." />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                <ContentBlock>
                    <form onSubmit={handleCalculate} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                                <select name="origin" value={params.origin} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                    <option value="UK">United Kingdom</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                                <select name="destination" value={params.destination} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                    <option value="NG">Nigeria</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                             <select name="serviceType" value={params.serviceType} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="air">Air Freight</option>
                                <option value="sea">Sea Freight</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                                <input type="number" name="weight" value={params.weight} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions (cm)</label>
                                <div className="flex gap-2">
                                    <input type="number" name="length" placeholder="L" value={params.length} onChange={handleChange} className="w-1/3 p-2 border border-gray-300 rounded-md" />
                                    <input type="number" name="width" placeholder="W" value={params.width} onChange={handleChange} className="w-1/3 p-2 border border-gray-300 rounded-md" />
                                    <input type="number" name="height" placeholder="H" value={params.height} onChange={handleChange} className="w-1/3 p-2 border border-gray-300 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button type="submit" primary>Calculate Estimate</Button>
                        </div>
                    </form>
                    {error && <p className="mt-6 text-center text-red-600 bg-red-50 p-3 rounded-md">{error}</p>}
                    {result && (
                         <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg text-center">
                             <h3 className="text-xl font-bold text-[#00529b] mb-4">Your Estimate</h3>
                             <div className="flex justify-around items-center">
                                 <div>
                                    <p className="text-sm text-gray-500">Service</p>
                                    <p className="text-lg font-semibold">{result.serviceName}</p>
                                 </div>
                                 <div>
                                    <p className="text-sm text-gray-500">Estimated Cost</p>
                                    <p className="text-2xl font-bold text-gray-800">{result.estimatedCost}</p>
                                 </div>
                                 <div>
                                    <p className="text-sm text-gray-500">Estimated Transit</p>
                                    <p className="text-lg font-semibold">{result.estimatedTime}</p>
                                 </div>
                             </div>
                             <p className="text-xs text-gray-500 mt-4">This is an estimate only and is subject to change. For a formal quote, please use our quote request form.</p>
                         </div>
                    )}
                </ContentBlock>
            </div>
        </>
    );
};

export const QuoteRequestPage: React.FC = () => {
    const [formData, setFormData] = useState<QuoteFormData>({
        origin: 'UK', destination: 'NG', serviceType: 'air',
        weight: '', length: '', width: '', height: '',
        specialRequirements: '', name: '', email: '', phone: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quote Request Submitted:", formData);
        setSubmitted(true);
        window.scrollTo(0,0);
    };

    if (submitted) {
        return (
             <>
                <PageHeader title="Thank You!" subtitle="Your quote request has been received." />
                <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                    <ContentBlock className="text-center">
                        <h2 className="text-2xl font-bold mb-4">We're on it!</h2>
                        <p className="text-gray-600 mb-6">Our team will review the details you provided and get back to you with a personalized, no-obligation quote within one business day. A confirmation has been sent to <strong>{formData.email}</strong>.</p>
                        <Button asLink to="/" primary>Back to Homepage</Button>
                    </ContentBlock>
                </div>
            </>
        )
    }

    return (
        <>
            <PageHeader title="Request a Quote" subtitle="Fill in the details below and our team will get back to you with a personalized quote." />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                <ContentBlock>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-xl font-semibold border-b pb-3 mb-4">Shipment Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <select name="origin" value={formData.origin} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"><option>UK</option><option>NG</option><option>Other</option></select>
                            <select name="destination" value={formData.destination} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"><option>NG</option><option>UK</option><option>Other</option></select>
                        </div>
                        <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"><option value="air">Air Freight</option><option value="sea">Sea Freight</option><option value="domestic-uk">Domestic UK</option><option value="domestic-ng">Domestic Nigeria</option></select>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                            <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                            <div className="flex gap-2"><input type="number" name="length" placeholder="L (cm)" value={formData.length} onChange={handleChange} className="w-1/3 p-2 border border-gray-300 rounded-md" /><input type="number" name="width" placeholder="W (cm)" value={formData.width} onChange={handleChange} className="w-1/3 p-2 border border-gray-300 rounded-md" /><input type="number" name="height" placeholder="H (cm)" value={formData.height} onChange={handleChange} className="w-1/3 p-2 border border-gray-300 rounded-md" /></div>
                        </div>

                        <textarea name="specialRequirements" placeholder="Any special requirements? (e.g., fragile, hazardous)" value={formData.specialRequirements} onChange={handleChange} rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>

                        <h3 className="text-xl font-semibold border-b pb-3 mb-4 pt-6">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                        
                        <div className="text-center pt-4">
                            <Button type="submit" primary className="w-full md:w-auto">Submit Quote Request</Button>
                        </div>
                    </form>
                </ContentBlock>
            </div>
        </>
    );
};

export const FaqPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            <PageHeader title="Frequently Asked Questions" subtitle="Find answers to common questions about our services and processes." />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                <ContentBlock>
                    {FAQ_DATA.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </ContentBlock>
            </div>
        </>
    );
};

export const ContactPage: React.FC = () => (
    <>
        <PageHeader title="Contact Us" subtitle="We're here to help. Reach out to us with any questions or for support." />
        <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ContentBlock>
                    <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-[#00529b] mb-2">United Kingdom</h4>
                        <p className="flex items-start gap-3"><IconWrapper className="w-4 h-4 mt-1 flex-shrink-0"><IconMarker/></IconWrapper> {SITE_CONFIG.contact.addressUK}</p>
                        <p className="flex items-center gap-3 mt-2"><IconWrapper className="w-4 h-4"><IconPhone/></IconWrapper> <a href={`tel:${SITE_CONFIG.contact.phoneUK}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.phoneUK}</a></p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-[#00529b] mb-2">Nigeria</h4>
                        <p className="flex items-start gap-3"><IconWrapper className="w-4 h-4 mt-1 flex-shrink-0"><IconMarker/></IconWrapper> {SITE_CONFIG.contact.addressNG}</p>
                        <p className="flex items-center gap-3 mt-2"><IconWrapper className="w-4 h-4"><IconPhone/></IconWrapper> <a href={`tel:${SITE_CONFIG.contact.phoneNG}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.phoneNG}</a></p>
                    </div>
                     <div className="border-t pt-6 mt-6">
                         <p className="flex items-center gap-3 mt-2"><IconWrapper className="w-4 h-4"><IconEnvelope/></IconWrapper> <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.email}</a></p>
                         <p className="flex items-center gap-3 mt-2"><IconWrapper className="w-4 h-4"><IconWhatsapp/></IconWrapper> <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="hover:text-[#b58e31]">WhatsApp Support</a></p>
                    </div>
                </ContentBlock>
                 <ContentBlock>
                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" rows={5} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                        </div>
                        <Button type="submit" primary className="w-full">Send Message</Button>
                    </form>
                </ContentBlock>
            </div>
        </div>
    </>
);

const PlaceholderLegalPage: React.FC<{title: string}> = ({title}) => (
     <>
        <PageHeader title={title} subtitle={`Details about our ${title.toLowerCase()}.`} />
        <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
            <ContentBlock>
                <div className="prose max-w-none">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Hayapass Global Logistics. This document outlines our {title.toLowerCase()}.</p>
                    <h2>2. Information Collection</h2>
                    <p>Placeholder text about information collection and usage goes here.</p>
                     <h2>3. Data Security</h2>
                    <p>Placeholder text about data security measures goes here.</p>
                </div>
            </ContentBlock>
        </div>
    </>
);

export const PrivacyPolicyPage: React.FC = () => <PlaceholderLegalPage title="Privacy Policy" />;
export const TermsPage: React.FC = () => <PlaceholderLegalPage title="Terms & Conditions" />;

// --- AUTH PAGES ---
export const AdminLoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for admin login logic
        navigate('/admin');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <img src={SITE_CONFIG.logoUrl} alt="Logo" className="mx-auto h-12"/>
                <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
                <form className="space-y-4" onSubmit={handleLogin}>
                     <div>
                        <label htmlFor="admin-email">Email Address</label>
                        <input type="email" id="admin-email" defaultValue="admin@hayapass.com" className="w-full p-2 border rounded"/>
                    </div>
                     <div>
                        <label htmlFor="admin-password">Password</label>
                        <input type="password" id="admin-password" defaultValue="password" className="w-full p-2 border rounded"/>
                    </div>
                    <Button type="submit" primary className="w-full">Sign In</Button>
                </form>
            </div>
        </div>
    );
}

export const ClientAuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [registrationComplete, setRegistrationComplete] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for login logic
        navigate('/dashboard');
    }
    
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for registration logic
        setRegistrationComplete(true);
    }

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8">
                 <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="mx-auto h-12 mb-6"/></Link>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex border-b mb-6">
                        <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-center font-semibold ${isLogin ? 'text-[#00529b] border-b-2 border-[#00529b]' : 'text-gray-500'}`}>Sign In</button>
                        <button onClick={() => { setIsLogin(false); setRegistrationComplete(false); }} className={`flex-1 py-2 text-center font-semibold ${!isLogin ? 'text-[#00529b] border-b-2 border-[#00529b]' : 'text-gray-500'}`}>Register</button>
                    </div>
                    {isLogin ? (
                         <form className="space-y-4" onSubmit={handleLogin}>
                            <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
                             <div>
                                <label htmlFor="client-email">Email</label>
                                <input type="email" id="client-email" className="w-full p-2 border rounded"/>
                            </div>
                             <div>
                                <label htmlFor="client-password">Password</label>
                                <input type="password" id="client-password" className="w-full p-2 border rounded"/>
                            </div>
                            <Button primary className="w-full">Sign In</Button>
                         </form>
                    ) : registrationComplete ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Registration Successful</h2>
                            <p className="mt-4 text-gray-600">Please check your email to confirm your account before signing in.</p>
                            <Button 
                                primary 
                                className="w-full mt-6" 
                                onClick={() => { setRegistrationComplete(false); setIsLogin(true); }}
                            >
                                Back to Sign In
                            </Button>
                        </div>
                    ) : (
                         <form className="space-y-4" onSubmit={handleRegister}>
                             <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
                              <div>
                                <label htmlFor="reg-name">Full Name</label>
                                <input type="text" id="reg-name" required className="w-full p-2 border rounded"/>
                            </div>
                             <div>
                                <label htmlFor="reg-email">Email</label>
                                <input type="email" id="reg-email" required className="w-full p-2 border rounded"/>
                            </div>
                             <div>
                                <label htmlFor="reg-password">Password</label>
                                <input type="password" id="reg-password" required className="w-full p-2 border rounded"/>
                            </div>
                            <Button primary className="w-full">Create Account</Button>
                         </form>
                    )}
                </div>
                 <p className="text-center text-sm text-gray-500 mt-4">
                    <Link to="/" className="hover:underline">← Back to Homepage</Link>
                </p>
            </div>
        </div>
    );
};

// --- DASHBOARD HELPER COMPONENTS ---
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode, size?: 'md' | 'lg' | 'xl' }> = ({ isOpen, onClose, title, children, size = 'md' }) => {
    if (!isOpen) return null;
    
    const sizeClasses = {
        md: 'max-w-md',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className={`bg-white rounded-lg shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] flex flex-col`} onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center border-b p-4 flex-shrink-0">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
                </div>
                <div className="p-6 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
};

interface DashboardCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    actions?: React.ReactNode;
}
const DashboardCard: React.FC<DashboardCardProps> = ({ children, className, title, actions }) => (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
        {title && (
            <div className="flex justify-between items-center border-b pb-3 mb-4">
                 <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                 {actions && <div>{actions}</div>}
            </div>
        )}
        {children}
    </div>
);

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <DashboardCard className="flex items-center gap-4">
        <div className="p-3 bg-blue-100 text-[#00529b] rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </DashboardCard>
);

const SimpleBarChart: React.FC<{ data: AnalyticsDataPoint[], label: string }> = ({ data, label }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    return (
        <div className="h-64 flex items-end justify-around gap-2 p-4 border rounded-lg bg-gray-50">
            {data.map(item => (
                <div key={item.name} className="flex flex-col items-center flex-1">
                    <div className="relative w-full h-full flex items-end">
                         <div
                            className="w-full bg-[#00529b] hover:bg-[#b58e31] rounded-t-md transition-all"
                            style={{ height: `${(item.value / maxValue) * 100}%` }}
                            title={`${label}: £${item.value.toLocaleString()}`}
                        ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">{item.name}</span>
                </div>
            ))}
        </div>
    );
};

const formFieldClasses = "w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]";

// --- DASHBOARD VIEW COMPONENTS ---

const DashboardOverviewView: React.FC = () => {
    const walletBalance = useMemo(() => {
        const balance = { gbp: 0, ngn: 0 };
        WALLET_TRANSACTIONS_DATA.forEach(t => {
            if (t.gbp) balance.gbp += parseFloat(t.gbp.replace(/,/g, ''));
            if (t.ngn) balance.ngn += parseFloat(t.ngn.replace(/,/g, ''));
        });
        return balance;
    }, []);

    const activeShipments = CLIENT_SHIPMENTS_DATA.filter(s => s.status !== 'Delivered').length;
    const pendingPreAlerts = CLIENT_PREALERTS_DATA.filter(p => p.status === 'Pending Arrival').length;
    const unpaidInvoices = CLIENT_INVOICES_DATA.filter(i => i.status === 'Unpaid').length;

    const getStatusClass = (status: ClientShipment['status'] | ClientPreAlert['status'] | ClientInvoice['status'] | User['status']) => {
        switch (status) {
            case 'In Transit': return 'bg-blue-100 text-blue-800';
            case 'Customs Hold': return 'bg-yellow-100 text-yellow-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Pending Arrival': return 'bg-gray-100 text-gray-800';
            case 'Arrived at HGL': return 'bg-indigo-100 text-indigo-800';
            case 'Unpaid': return 'bg-red-100 text-red-800';
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Deactivated': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };


    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">Welcome back, Client!</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Active Shipments" value={String(activeShipments)} icon={<IconTruck />} />
                <StatCard title="Wallet (GBP)" value={`£${walletBalance.gbp.toFixed(2)}`} icon={<IconWallet2 />} />
                <StatCard title="Pending Pre-Alerts" value={String(pendingPreAlerts)} icon={<IconBell />} />
                <StatCard title="Unpaid Invoices" value={String(unpaidInvoices)} icon={<IconReceipt />} />
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 <DashboardCard title="Recent Shipments" className="lg:col-span-2">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                             <tbody>
                                {CLIENT_SHIPMENTS_DATA.slice(0, 3).map(shipment => (
                                     <tr key={shipment.id} className="border-b last:border-0 hover:bg-gray-50">
                                        <td className="p-3 font-medium text-gray-800">{shipment.id}</td>
                                        <td className="p-3 text-gray-600">{shipment.origin} → {shipment.destination}</td>
                                        <td className="p-3 text-right">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(shipment.status)}`}>{shipment.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </DashboardCard>
                 <DashboardCard title="Quick Actions">
                    <div className="flex flex-col space-y-3">
                        <Button primary>Create New Shipment</Button>
                        <Button secondary>Add Pre-Alert</Button>
                        <Button outline>Top-up Wallet</Button>
                    </div>
                </DashboardCard>
            </div>
        </div>
    );
};

const ShipmentsView: React.FC = () => {
    const [selectedShipment, setSelectedShipment] = useState<DetailedClientShipment | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const getStatusClass = (status: ClientShipment['status'] | ClientPreAlert['status'] | ClientInvoice['status'] | User['status']) => {
        switch (status) {
            case 'In Transit': return 'bg-blue-100 text-blue-800';
            case 'Customs Hold': return 'bg-yellow-100 text-yellow-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Pending Arrival': return 'bg-gray-100 text-gray-800';
            case 'Arrived at HGL': return 'bg-indigo-100 text-indigo-800';
            case 'Unpaid': return 'bg-red-100 text-red-800';
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Deactivated': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };


    const filteredShipments = useMemo(() => {
        if (!searchTerm) return CLIENT_SHIPMENTS_DATA;
        const lowercasedFilter = searchTerm.toLowerCase();
        return CLIENT_SHIPMENTS_DATA.filter(s =>
            s.id.toLowerCase().includes(lowercasedFilter) ||
            s.origin.toLowerCase().includes(lowercasedFilter) ||
            s.destination.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm]);

    if (selectedShipment) {
        return (
            <DashboardCard>
                <button onClick={() => setSelectedShipment(null)} className="mb-4 text-sm text-[#00529b] font-semibold hover:underline">
                    &larr; Back to All Shipments
                </button>
                <div className="border-b pb-4 mb-6">
                    <div className="flex justify-between items-start">
                         <div>
                             <h3 className="text-xl font-bold text-gray-800">{selectedShipment.id}</h3>
                             <p className="text-sm text-gray-500">{selectedShipment.origin} to {selectedShipment.destination}</p>
                         </div>
                         <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusClass(selectedShipment.status)}`}>{selectedShipment.status}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-sm mb-6 bg-gray-50 p-4 rounded-lg">
                    <div><strong className="block text-gray-500">Est. Delivery:</strong> <span className="font-semibold text-gray-800">{selectedShipment.estDelivery}</span></div>
                    <div><strong className="block text-gray-500">Service:</strong> <span className="font-semibold text-gray-800">{selectedShipment.service}</span></div>
                    <div><strong className="block text-gray-500">Weight:</strong> <span className="font-semibold text-gray-800">{selectedShipment.weight}</span></div>
                    <div><strong className="block text-gray-500">Dimensions:</strong> <span className="font-semibold text-gray-800">{selectedShipment.dimensions}</span></div>
                    {selectedShipment.notes && <div className="col-span-2 md:col-span-4"><strong className="block text-gray-500">Notes:</strong> <span className="font-semibold text-gray-800">{selectedShipment.notes}</span></div>}
                    {selectedShipment.associatedInvoiceIds.length > 0 && <div className="col-span-2 md:col-span-4"><strong className="block text-gray-500">Invoices:</strong> <span className="font-semibold text-[#00529b]">{selectedShipment.associatedInvoiceIds.join(', ')}</span></div>}
                </div>

                <h4 className="font-semibold text-gray-700 mb-4">Shipment History</h4>
                 <ol className="relative border-l border-gray-200">
                    {selectedShipment.milestones.map((m, index) => (
                        <li key={index} className="mb-10 ml-6">
                            <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ${index === 0 ? 'bg-[#00529b]' : 'bg-gray-300'}`}>
                                <IconTruck className="w-3 h-3 text-white"/>
                            </span>
                            <h3 className="flex items-center mb-1 text-base font-semibold text-gray-900">{m.status}</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{m.date} at {m.time}</time>
                            <p className="text-sm text-gray-600">{m.location}</p>
                            {m.notes && <p className="mt-1 text-xs text-gray-500 italic">Note: {m.notes}</p>}
                        </li>
                    ))}
                </ol>
            </DashboardCard>
        );
    }

    return (
        <DashboardCard title="My Shipments">
            <div className="mb-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <IconSearch />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by ID, origin, destination..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-sm py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th className="px-4 py-3">Tracking ID</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Route</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredShipments.map(s => (
                            <tr key={s.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3 font-medium">{s.id}</td>
                                <td className="px-4 py-3">{s.date}</td>
                                <td className="px-4 py-3">{s.origin} &rarr; {s.destination}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(s.status)}`}>{s.status}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <button onClick={() => setSelectedShipment(CLIENT_SHIPMENT_DETAILS_DATA[s.id])} className="font-medium text-[#00529b] hover:underline">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 {filteredShipments.length === 0 && (
                    <p className="text-center text-gray-500 py-8">No shipments found matching your search.</p>
                )}
            </div>
        </DashboardCard>
    );
};

const PreAlertsView: React.FC = () => {
    const getStatusClass = (status: ClientShipment['status'] | ClientPreAlert['status'] | ClientInvoice['status'] | User['status']) => {
        switch (status) {
            case 'In Transit': return 'bg-blue-100 text-blue-800';
            case 'Customs Hold': return 'bg-yellow-100 text-yellow-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Pending Arrival': return 'bg-gray-100 text-gray-800';
            case 'Arrived at HGL': return 'bg-indigo-100 text-indigo-800';
            case 'Unpaid': return 'bg-red-100 text-red-800';
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Deactivated': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return(
    <DashboardCard title="Pre-Alerts">
        <div className="flex justify-end mb-4">
            <Button primary>+ Add New Pre-Alert</Button>
        </div>
         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                    <tr>
                        <th className="px-4 py-3">Carrier</th>
                        <th className="px-4 py-3">Tracking</th>
                        <th className="px-4 py-3">Description</th>
                        <th className="px-4 py-3">Est. Arrival</th>
                        <th className="px-4 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {CLIENT_PREALERTS_DATA.map(p => (
                        <tr key={p.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{p.carrier}</td>
                            <td className="px-4 py-3">{p.tracking}</td>
                            <td className="px-4 py-3">{p.description}</td>
                            <td className="px-4 py-3">{p.estArrival}</td>
                            <td className="px-4 py-3">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(p.status)}`}>{p.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </DashboardCard>
);
}

const InvoicesView: React.FC = () => {
    const getStatusClass = (status: ClientShipment['status'] | ClientPreAlert['status'] | ClientInvoice['status'] | User['status']) => {
        switch (status) {
            case 'In Transit': return 'bg-blue-100 text-blue-800';
            case 'Customs Hold': return 'bg-yellow-100 text-yellow-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Pending Arrival': return 'bg-gray-100 text-gray-800';
            case 'Arrived at HGL': return 'bg-indigo-100 text-indigo-800';
            case 'Unpaid': return 'bg-red-100 text-red-800';
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Deactivated': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    return (
     <DashboardCard title="Invoices">
         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                    <tr>
                        <th className="px-4 py-3">Invoice ID</th>
                        <th className="px-4 py-3">Issue Date</th>
                        <th className="px-4 py-3">Due Date</th>
                        <th className="px-4 py-3 text-right">Amount</th>
                        <th className="px-4 py-3 text-center">Status</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {CLIENT_INVOICES_DATA.map(i => (
                        <tr key={i.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{i.id}</td>
                            <td className="px-4 py-3">{i.issueDate}</td>
                            <td className="px-4 py-3">{i.dueDate}</td>
                            <td className="px-4 py-3 text-right">{i.amount} {i.currency}</td>
                            <td className="px-4 py-3 text-center">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(i.status)}`}>{i.status}</span>
                            </td>
                            <td className="px-4 py-3 text-center space-x-2">
                                <button className="font-medium text-gray-500 hover:underline text-xs">PDF</button>
                                {i.status === 'Unpaid' && <button className="font-medium text-[#00529b] hover:underline text-xs">Pay Now</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </DashboardCard>
);
};

const WalletView: React.FC = () => {
    const walletBalance = useMemo(() => {
        const balance = { gbp: 0, ngn: 0 };
        WALLET_TRANSACTIONS_DATA.forEach(t => {
            if (t.gbp) balance.gbp += parseFloat(t.gbp.replace(/,/g, ''));
            if (t.ngn) balance.ngn += parseFloat(t.ngn.replace(/,/g, ''));
        });
        return balance;
    }, []);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <DashboardCard title="Wallet Balance">
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-500">GBP Balance</p>
                            <p className="text-3xl font-bold">£{walletBalance.gbp.toFixed(2)}</p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500">NGN Balance</p>
                            <p className="text-3xl font-bold">₦{walletBalance.ngn.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                    </div>
                </DashboardCard>
                <DashboardCard title="Top-up Your Wallet">
                    <p className="text-sm text-gray-600 mb-4">Add funds to your wallet for quick and easy payments for services and invoices.</p>
                     <Button primary className="w-full">Top-up GBP</Button>
                     <Button secondary className="w-full mt-2">Top-up NGN</Button>
                </DashboardCard>
            </div>
             <DashboardCard title="Transaction History">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Description</th>
                                <th className="px-4 py-3 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {WALLET_TRANSACTIONS_DATA.map((t, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{t.date}</td>
                                    <td className="px-4 py-3 font-medium">{t.description}</td>
                                    <td className={`px-4 py-3 text-right font-semibold ${t.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
                                        {t.gbp ? `${t.gbp} GBP` : `${t.ngn} NGN`}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
        </div>
    );
};

const AddressBookView: React.FC = () => (
     <DashboardCard title="Address Book">
        <div className="flex justify-end mb-4">
            <Button primary>+ Add New Address</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_ADDRESSES_DATA.map(address => (
                <div key={address.id} className="p-4 border rounded-lg bg-gray-50/50">
                    <div className="flex justify-between items-start">
                        <h4 className="font-bold text-gray-800">{address.label}</h4>
                        <div className="text-xs space-x-2">
                             <button className="font-medium text-gray-500 hover:underline">Edit</button>
                             <button className="font-medium text-red-500 hover:underline">Delete</button>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                        <p>{address.name}</p>
                        <p>{address.street}</p>
                        <p>{address.country}</p>
                        <p>{address.phone}</p>
                    </div>
                    <div className="mt-3 space-x-2">
                        {address.isDefaultShipping && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Default Shipping</span>}
                        {address.isDefaultBilling && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Default Billing</span>}
                    </div>
                </div>
            ))}
        </div>
    </DashboardCard>
);

const ProfileSettingsView: React.FC = () => (
    <div className="space-y-6">
         <DashboardCard title="Personal Information">
             <form className="space-y-4 max-w-lg">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" defaultValue="Client Example Name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" defaultValue="client@example.com" disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm sm:text-sm" />
                </div>
                 <div className="pt-2">
                     <Button primary>Save Changes</Button>
                 </div>
            </form>
        </DashboardCard>
        <DashboardCard title="Change Password">
             <form className="space-y-4 max-w-lg">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Current Password</label>
                    <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">New Password</label>
                    <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm" />
                </div>
                 <div className="pt-2">
                     <Button primary>Update Password</Button>
                 </div>
            </form>
        </DashboardCard>
    </div>
);


const LoyaltyProgramView: React.FC = () => {
    const progress = (LOYALTY_DATA.currentSpend / LOYALTY_DATA.nextTierSpend) * 100;

    return (
        <div className="space-y-6">
            <DashboardCard>
                 <div className="text-center">
                    <p className="text-sm text-gray-500">Your current tier</p>
                    <h2 className="text-3xl font-bold text-[#b58e31]">{LOYALTY_DATA.name} Tier</h2>
                </div>
                <div className="my-6">
                     <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#00529b] h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>£{LOYALTY_DATA.currentSpend.toLocaleString()}</span>
                        <span>Next Tier at £{LOYALTY_DATA.nextTierSpend.toLocaleString()}</span>
                    </div>
                </div>
            </DashboardCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <DashboardCard title="Your Benefits">
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                        {LOYALTY_DATA.benefits.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                </DashboardCard>
                 <DashboardCard title="Refer a Friend">
                    <p className="text-sm text-gray-600 mb-4">Refer a friend and you both get £10 wallet credit when they complete their first shipment!</p>
                    <form className="flex gap-2">
                        <input type="email" placeholder="Friend's email address" className="flex-grow w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm"/>
                        <Button primary>Send Invite</Button>
                    </form>
                </DashboardCard>
            </div>
        </div>
    );
};

const ReportingAnalyticsView: React.FC = () => {
    const totalSpend = ANALYTICS_DATA.topRoutes.reduce((sum, route) => sum + route.value, 0);
    const totalShipments = ANALYTICS_DATA.topRoutes.reduce((sum, route) => sum + route.shipments, 0);
    const avgCost = totalShipments > 0 ? (totalSpend / totalShipments).toFixed(2) : "0.00";

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="October Spend" value={`£${ANALYTICS_DATA.monthlySpend[5].value.toLocaleString()}`} icon={<IconWallet2 />} />
                <StatCard title="Total Shipments" value={totalShipments.toLocaleString()} icon={<IconBoxSeam />} />
                <StatCard title="Avg. Cost/Shipment" value={`£${avgCost}`} icon={<IconReceipt />} />
                <StatCard title="On-Time Delivery" value="98.5%" icon={<IconShieldCheck />} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                 <DashboardCard title="Monthly Spend (GBP)" className="lg:col-span-3">
                    <SimpleBarChart data={ANALYTICS_DATA.monthlySpend} label="Spend" />
                </DashboardCard>
                 <DashboardCard title="Top Routes by Spend" className="lg:col-span-2">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3">Route</th>
                                    <th className="px-4 py-3 text-right">Shipments</th>
                                    <th className="px-4 py-3 text-right">Spend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ANALYTICS_DATA.topRoutes.map(route => (
                                     <tr key={route.name} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium">{route.name}</td>
                                        <td className="px-4 py-3 text-right">{route.shipments.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-right">£{route.value.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </DashboardCard>
            </div>
        </div>
    );
};

const BulkOperationsView: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus('idle');
            setMessage('');
        }
    };

    const handleUpload = () => {
        if (!file) return;
        setStatus('uploading');
        setMessage('Processing your file...');

        // Simulate API call
        setTimeout(() => {
            // Simulate a random success/error outcome
            if (Math.random() > 0.2) {
                setStatus('success');
                setMessage(`Successfully processed ${file.name}. 15 shipments have been created.`);
            } else {
                setStatus('error');
                setMessage(`Error processing ${file.name}. Row 8: Invalid postcode. Please fix and re-upload.`);
            }
            setFile(null);
            if(inputRef.current) inputRef.current.value = "";
        }, 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DashboardCard title="Download Templates">
                <p className="text-gray-600 mb-4">Download our templates to easily create multiple shipments at once. Fill out the required columns and upload the file.</p>
                <div className="flex gap-4">
                    <Button secondary>
                        <IconWrapper className="inline-block w-4 h-4 mr-2"><IconFileEarmarkSpreadsheet/></IconWrapper>
                        Download CSV
                    </Button>
                    <Button secondary>
                        <IconWrapper className="inline-block w-4 h-4 mr-2"><IconFileEarmarkSpreadsheet/></IconWrapper>
                        Download XLSX
                    </Button>
                </div>
            </DashboardCard>
            <DashboardCard title="Upload Completed File">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="bulk-upload" className="sr-only">Choose file</label>
                        <input type="file" ref={inputRef} onChange={handleFileChange} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#00529b] hover:file:bg-blue-100"/>
                    </div>
                    {file && <p className="text-sm text-gray-700">Selected file: <span className="font-medium">{file.name}</span></p>}
                    
                    {status !== 'idle' && (
                        <div className={`p-4 rounded-md text-sm ${status === 'success' ? 'bg-green-100 text-green-800' : ''} ${status === 'error' ? 'bg-red-100 text-red-800' : ''} ${status === 'uploading' ? 'bg-blue-100 text-blue-800' : ''}`}>
                            {message}
                        </div>
                    )}

                    <Button primary onClick={handleUpload} disabled={!file || status === 'uploading'} className="w-full">
                        {status === 'uploading' ? 'Processing...' : 'Upload and Process Shipments'}
                    </Button>
                </div>
            </DashboardCard>
        </div>
    );
};

const TeamManagementView: React.FC = () => {
    const [users, setUsers] = useState<User[]>(CLIENT_TEAM_MEMBERS_DATA);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    const [inviteEmail, setInviteEmail] = useState('');
    const [inviteRole, setInviteRole] = useState<User['role']>('Member');
        const getStatusClass = (status: ClientShipment['status'] | ClientPreAlert['status'] | ClientInvoice['status'] | User['status']) => {
        switch (status) {
            case 'In Transit': return 'bg-blue-100 text-blue-800';
            case 'Customs Hold': return 'bg-yellow-100 text-yellow-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Pending Arrival': return 'bg-gray-100 text-gray-800';
            case 'Arrived at HGL': return 'bg-indigo-100 text-indigo-800';
            case 'Unpaid': return 'bg-red-100 text-red-800';
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Deactivated': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };


    const handleRoleChange = (userId: string, newRole: User['role']) => {
        if (editingUser?.id === userId) {
            setEditingUser(prev => prev ? { ...prev, role: newRole } : null);
        }
    };

    const handleSave = () => {
        if (!editingUser) return;
        setUsers(prev => prev.map(u => u.id === editingUser.id ? editingUser : u));
        setEditingUser(null);
    }
    
    const handleInvite = () => {
        if (!inviteEmail.trim()) return;
        const newUser: User = {
            id: `new-${Date.now()}`,
            name: 'Invitation Sent',
            email: inviteEmail,
            role: inviteRole,
            status: 'Pending',
            accountType: 'Client',
            lastLogin: 'Never',
        };
        setUsers(prev => [...prev, newUser]);
        setIsInviteModalOpen(false);
        setInviteEmail('');
        setInviteRole('Member');
    };

    return (
        <>
            <DashboardCard title="Team Management">
                <div className="flex justify-end mb-4">
                    <Button primary onClick={() => setIsInviteModalOpen(true)}>+ Invite New Member</Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Role</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium">{user.name}</td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3 font-semibold">{user.role}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(user.status)}`}>{user.status}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <button onClick={() => setEditingUser(user)} className="font-medium text-[#00529b] hover:underline">Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
            <Modal isOpen={!!editingUser} onClose={() => setEditingUser(null)} title={`Manage ${editingUser?.name}`}>
                {editingUser && (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Assign Role</label>
                            <select
                                id="role"
                                value={editingUser.role}
                                onChange={(e) => handleRoleChange(editingUser.id, e.target.value as User['role'])}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm rounded-md"
                            >
                                <option>Admin</option>
                                <option>Member</option>
                                <option>Finance</option>
                                <option>Warehouse</option>
                            </select>
                        </div>
                        <p className="text-xs text-gray-500">
                            <strong>Admin:</strong> Full access. <br/>
                            <strong>Finance:</strong> Access to invoices and wallet. <br/>
                            <strong>Warehouse:</strong> Access to shipments and pre-alerts. <br/>
                            <strong>Member:</strong> View-only access.
                        </p>
                        <div className="flex justify-end gap-3 pt-4">
                             <Button onClick={() => setEditingUser(null)}>Cancel</Button>
                             <Button primary onClick={handleSave}>Save Changes</Button>
                        </div>
                    </div>
                )}
            </Modal>
            <Modal isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} title="Invite New Team Member">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="invite-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="invite-email"
                            type="email"
                            value={inviteEmail}
                            onChange={(e) => setInviteEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                            placeholder="member@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="invite-role" className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                            id="invite-role"
                            value={inviteRole}
                            onChange={(e) => setInviteRole(e.target.value as User['role'])}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm rounded-md"
                        >
                            <option>Member</option>
                            <option>Finance</option>
                            <option>Warehouse</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button onClick={() => setIsInviteModalOpen(false)}>Cancel</Button>
                        <Button primary onClick={handleInvite}>Send Invitation</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

const ApiWebhooksView: React.FC = () => {
    const [tokens, setTokens] = useState<ApiToken[]>(API_TOKENS_DATA);
    const [isGenerating, setIsGenerating] = useState(false);
    const [newToken, setNewToken] = useState<{name: string, token: string} | null>(null);
    const [newTokenName, setNewTokenName] = useState("");
    const [copySuccess, setCopySuccess] = useState('');

    const generateToken = () => {
        if (!newTokenName.trim()) return;
        const generatedToken = `hp_live_sk_${[...Array(32)].map(() => Math.random().toString(36)[2]).join('')}`;
        const newApiToken: ApiToken = {
            id: String(tokens.length + 1),
            name: newTokenName,
            token: `hp_live_sk_****...**_${generatedToken.slice(-4)}`,
            created: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            lastUsed: 'Never'
        };
        setNewToken({ name: newTokenName, token: generatedToken });
        setTokens(prev => [...prev, newApiToken]);
        setIsGenerating(false);
        setNewTokenName("");
    }
    
    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
    };

    const revokeToken = (tokenId: string) => {
        if(window.confirm("Are you sure you want to revoke this token? This action cannot be undone.")){
            setTokens(prev => prev.filter(t => t.id !== tokenId));
        }
    }

    return (
        <>
            <DashboardCard title="API Keys">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-600">Use API keys to integrate your systems with Hayapass.</p>
                    <Button primary onClick={() => setIsGenerating(true)}>+ Generate New Key</Button>
                </div>
                <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Token</th>
                                <th className="px-4 py-3">Created</th>
                                <th className="px-4 py-3">Last Used</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                             {tokens.map(token => (
                                <tr key={token.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium">{token.name}</td>
                                    <td className="px-4 py-3 font-mono">{token.token}</td>
                                    <td className="px-4 py-3">{token.created}</td>
                                    <td className="px-4 py-3">{token.lastUsed}</td>
                                    <td className="px-4 py-3">
                                        <button onClick={() => revokeToken(token.id)} className="font-medium text-red-600 hover:underline">Revoke</button>
                                    </td>
                                </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
            <DashboardCard title="Webhooks" className="mt-6">
                <p className="text-sm text-gray-600 mb-4">Configure webhooks to receive real-time notifications for events.</p>
                 {/* Webhook implementation would go here */}
                 <p className="text-center text-gray-500 py-4">Webhook management UI coming soon.</p>
            </DashboardCard>

            <Modal isOpen={isGenerating} onClose={() => setIsGenerating(false)} title="Generate New API Key">
                 <div className="space-y-4">
                    <p className="text-sm text-gray-600">Give your key a descriptive name to remember its purpose.</p>
                    <div>
                        <label htmlFor="tokenName" className="block text-sm font-medium text-gray-700">Key Name</label>
                        <input
                            type="text"
                            id="tokenName"
                            value={newTokenName}
                            onChange={(e) => setNewTokenName(e.target.value)}
                            placeholder="e.g., Shopify Integration"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                         <Button onClick={() => setIsGenerating(false)}>Cancel</Button>
                         <Button primary onClick={generateToken}>Generate Key</Button>
                    </div>
                 </div>
            </Modal>
             <Modal isOpen={!!newToken} onClose={() => setNewToken(null)} title="API Key Generated Successfully">
                {newToken && (
                     <div className="space-y-4">
                        <p className="text-sm text-gray-600">Please copy your new API key. For your security, <strong className="font-semibold">it will not be shown again</strong>.</p>
                        <div className="p-3 bg-gray-100 rounded-md font-mono text-sm break-all relative">
                            {newToken.token}
                            <button onClick={() => copyToClipboard(newToken.token)} className="absolute top-2 right-2 text-sm bg-white p-1 rounded hover:bg-gray-200">
                                 {copySuccess || 'Copy'}
                            </button>
                        </div>
                        <div className="flex justify-end pt-4">
                            <Button primary onClick={() => setNewToken(null)}>Done</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

// --- MAIN CLIENT DASHBOARD PAGE ---

export const ClientDashboardPage: React.FC = () => {
    const [currentView, setCurrentView] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    // Set user type to 'business' to show all features including new ones
    const [accountType] = useState<'personal' | 'business'>('business'); 
    
    const navigate = useNavigate();

    const sidebarItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <IconDashboard />, businessOnly: false },
        { id: 'shipments', label: 'My Shipments', icon: <IconBoxSeam />, businessOnly: false },
        { id: 'pre-alerts', label: 'Pre-Alerts', icon: <IconBell />, businessOnly: false },
        { id: 'invoices', label: 'Invoices', icon: <IconReceipt />, businessOnly: false },
        { id: 'wallet', label: 'Wallet', icon: <IconWallet2 />, businessOnly: false },
        { id: 'addresses', label: 'Address Book', icon: <IconGeoAlt />, businessOnly: false },
        { id: 'analytics', label: 'Reporting & Analytics', icon: <IconGraphUpArrow />, businessOnly: true },
        { id: 'bulk-operations', label: 'Bulk Operations', icon: <IconUpload />, businessOnly: true },
        { id: 'settings-divider', label: 'divider', icon: null, businessOnly: false },
        { id: 'profile', label: 'Profile Settings', icon: <IconPerson />, businessOnly: false },
        { id: 'team', label: 'Team Management', icon: <IconUserPlus />, businessOnly: true },
        { id: 'api-webhooks', label: 'API & Webhooks', icon: <IconCodeSlash />, businessOnly: true },
        { id: 'loyalty', label: 'Loyalty Program', icon: <IconShare />, businessOnly: false },
    ].filter(item => !item.businessOnly || accountType === 'business');

    const renderView = () => {
        switch(currentView) {
            case 'dashboard': return <DashboardOverviewView />;
            case 'shipments': return <ShipmentsView />;
            case 'pre-alerts': return <PreAlertsView />;
            case 'invoices': return <InvoicesView />;
            case 'wallet': return <WalletView />;
            case 'addresses': return <AddressBookView />;
            case 'analytics': return <ReportingAnalyticsView />;
            case 'bulk-operations': return <BulkOperationsView />;
            case 'profile': return <ProfileSettingsView />;
            case 'team': return <TeamManagementView />;
            case 'api-webhooks': return <ApiWebhooksView />;
            case 'loyalty': return <LoyaltyProgramView />;
            default: return <DashboardOverviewView />;
        }
    };

    const handleLogout = () => {
        // Placeholder for logout logic
        navigate('/login');
    }

    const PageTitle: {[key: string]: string} = {
        dashboard: "Dashboard",
        shipments: "My Shipments",
        'pre-alerts': "Pre-Alerts",
        invoices: "Invoices",
        wallet: "Wallet",
        addresses: "Address Book",
        profile: "Profile Settings",
        loyalty: "Loyalty Program",
        analytics: "Reporting & Analytics",
        'bulk-operations': "Bulk Operations",
        team: "Team Management",
        'api-webhooks': "API & Webhooks",
    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className={`absolute lg:relative z-20 flex-shrink-0 w-64 h-full bg-white border-r transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex items-center justify-center h-20 border-b">
                     <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="h-10"/></Link>
                </div>
                <nav className="mt-6">
                    <ul>
                        {sidebarItems.map(item => (
                            item.label === 'divider' ? <hr key={item.id} className="my-4" /> :
                            <li key={item.id} className="relative px-6 py-3">
                                <button onClick={() => { setCurrentView(item.id); setSidebarOpen(false); }} className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${currentView === item.id ? 'text-gray-800' : 'text-gray-500'}`}>
                                     {currentView === item.id && <span className="absolute inset-y-0 left-0 w-1 bg-[#b58e31] rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
                                    <IconWrapper className="w-5 h-5">{item.icon}</IconWrapper>
                                    <span className="ml-4">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div className="flex flex-col flex-1 w-full">
                {/* Header */}
                 <header className="z-10 py-4 bg-white shadow-md">
                    <div className="container flex items-center justify-between h-full px-6 mx-auto text-[#00529b]">
                        <button className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple" onClick={() => setSidebarOpen(!isSidebarOpen)} aria-label="Menu" aria-expanded={isSidebarOpen}>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="flex justify-center flex-1 lg:mr-32">
                             <h1 className="text-2xl font-semibold text-gray-700">{PageTitle[currentView] || "Dashboard"}</h1>
                        </div>
                        <ul className="flex items-center flex-shrink-0 space-x-6">
                            <li className="relative">
                                <button className="relative align-middle rounded-md focus:outline-none" aria-label="Notifications" aria-haspopup="true">
                                    <IconBell />
                                    <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
                                </button>
                            </li>
                            <li className="relative">
                                 <button onClick={handleLogout} className="text-sm font-semibold text-gray-600 hover:text-[#b58e31]">Log Out</button>
                            </li>
                        </ul>
                    </div>
                </header>

                {/* Main Content */}
                <main className="h-full overflow-y-auto">
                    <div className="container px-6 py-8 mx-auto grid">
                        {renderView()}
                    </div>
                </main>
            </div>
        </div>
    );
};

// --- NEW ADMIN DASHBOARD PAGE & VIEWS ---

type AllStatusTypes = ClientShipment['status'] | ClientPreAlert['status'] | ClientInvoice['status'] | User['status'] | WalletRequest['status'];
const getStatusClass = (status: AllStatusTypes) => {
    switch (status) {
        case 'In Transit': return 'bg-blue-100 text-blue-800';
        case 'Customs Hold': return 'bg-yellow-100 text-yellow-800';
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'Cancelled': return 'bg-red-100 text-red-800';
        case 'Pending Arrival': return 'bg-gray-100 text-gray-800';
        case 'Arrived at HGL': return 'bg-indigo-100 text-indigo-800';
        case 'Unpaid': return 'bg-red-100 text-red-800';
        case 'Paid': return 'bg-green-100 text-green-800';
        case 'Active': return 'bg-green-100 text-green-800';
        case 'Approved': return 'bg-green-100 text-green-800';
        case 'Pending': return 'bg-yellow-100 text-yellow-800';
        case 'Deactivated': return 'bg-gray-100 text-gray-800';
        case 'Declined': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const AdminDashboardOverviewView: React.FC = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">System Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Revenue (YTD)" value={`£${ADMIN_ANALYTICS_DATA.totalRevenue.toLocaleString()}`} icon={<IconGraphUpArrow />} />
            <StatCard title="Total Shipments" value={ADMIN_ANALYTICS_DATA.totalShipments.toLocaleString()} icon={<IconBoxSeam />} />
            {/* FIX: Corrected typo from `ADMIN_ANALYTICS_DATA.new` to `ADMIN_ANALYTICS_DATA.newClients` to match the data structure. */}
            <StatCard title="New Clients (Month)" value={String(ADMIN_ANALYTICS_DATA.newClients)} icon={<IconUserPlus />} />
            <StatCard title="Pending Issues" value={String(ADMIN_ANALYTICS_DATA.pendingIssues)} icon={<IconHelpCircle />} />
        </div>
        <DashboardCard title="Revenue by Service (YTD)">
            <SimpleBarChart data={ADMIN_ANALYTICS_DATA.revenueByService} label="Revenue" />
        </DashboardCard>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard title="Recent Wallet Requests">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <tbody>
                            {ADMIN_WALLET_REQUESTS_DATA.slice(0, 3).map(req => (
                                <tr key={req.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="p-3 font-medium text-gray-800">{req.clientName}</td>
                                    <td className="p-3 text-gray-600">{req.type} - {req.amount} {req.currency}</td>
                                    <td className="p-3 text-right">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(req.status)}`}>{req.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
            <DashboardCard title="Recent Shipments">
                <div className="overflow-x-auto">
                     <table className="w-full text-sm">
                        <tbody>
                            {ADMIN_SHIPMENTS_DATA.slice(0, 3).map(shipment => (
                                <tr key={shipment.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="p-3 font-medium text-gray-800">{shipment.id}</td>
                                    <td className="p-3 text-gray-600">{shipment.clientName}</td>
                                    <td className="p-3 text-right">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(shipment.status)}`}>{shipment.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DashboardCard>
        </div>
    </div>
);

const AdminManageShipmentsView: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredShipments = useMemo(() => {
        if (!searchTerm) return ADMIN_SHIPMENTS_DATA;
        const lowercasedFilter = searchTerm.toLowerCase();
        return ADMIN_SHIPMENTS_DATA.filter(s =>
            s.id.toLowerCase().includes(lowercasedFilter) ||
            s.clientName.toLowerCase().includes(lowercasedFilter) ||
            s.origin.toLowerCase().includes(lowercasedFilter) ||
            s.destination.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm]);

    return (
        <DashboardCard title="All Shipments">
             <div className="mb-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <IconSearch />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by ID, client, origin, destination..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-lg py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"
                    />
                </div>
            </div>
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th className="px-4 py-3">Tracking ID</th>
                            <th className="px-4 py-3">Client</th>
                            <th className="px-4 py-3">Route</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredShipments.map(s => (
                            <tr key={s.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3 font-medium">{s.id}</td>
                                <td className="px-4 py-3">{s.clientName}</td>
                                <td className="px-4 py-3">{s.origin} &rarr; {s.destination}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(s.status)}`}>{s.status}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <button className="font-medium text-[#00529b] hover:underline">Manage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardCard>
    );
};

const AdminManageUsersView: React.FC = () => (
    <DashboardCard title="All Users (Clients & Admins)">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                    <tr>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Company</th>
                        <th className="px-4 py-3">Account Type</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ALL_USERS_DATA.map(user => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{user.name}</td>
                            <td className="px-4 py-3">{user.company}</td>
                            <td className="px-4 py-3">{user.accountType}</td>
                            <td className="px-4 py-3">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(user.status)}`}>{user.status}</span>
                            </td>
                            <td className="px-4 py-3">
                                <button className="font-medium text-[#00529b] hover:underline">Edit User</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </DashboardCard>
);

const AdminWalletRequestsView: React.FC = () => (
    <DashboardCard title="Wallet Top-up & Withdrawal Requests">
         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                    <tr>
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3 text-right">Amount</th>
                        <th className="px-4 py-3">Method</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ADMIN_WALLET_REQUESTS_DATA.map(req => (
                        <tr key={req.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{req.clientName}</td>
                            <td className="px-4 py-3">{req.type}</td>
                            <td className="px-4 py-3 text-right font-semibold">{req.amount.toLocaleString()} {req.currency}</td>
                            <td className="px-4 py-3 text-xs">{req.method}</td>
                            <td className="px-4 py-3">
                                 <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(req.status)}`}>{req.status}</span>
                            </td>
                            <td className="px-4 py-3 text-center space-x-2">
                                {req.status === 'Pending' && (
                                    <>
                                        <button className="font-medium text-green-600 hover:underline text-xs">Approve</button>
                                        <button className="font-medium text-red-600 hover:underline text-xs">Decline</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </DashboardCard>
);

const AdminReportsView: React.FC = () => (
    <div className="space-y-6">
        <DashboardCard title="Key Metrics">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div>
                    <p className="text-sm text-gray-500">Revenue (YTD)</p>
                    <p className="text-2xl font-bold">£{ADMIN_ANALYTICS_DATA.totalRevenue.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Shipments (YTD)</p>
                    <p className="text-2xl font-bold">{ADMIN_ANALYTICS_DATA.totalShipments.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">New Clients (MTD)</p>
                    <p className="text-2xl font-bold">{ADMIN_ANALYTICS_DATA.newClients}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Pending Issues</p>
                    <p className="text-2xl font-bold">{ADMIN_ANALYTICS_DATA.pendingIssues}</p>
                </div>
            </div>
        </DashboardCard>
        <DashboardCard title="Revenue Breakdown">
             <SimpleBarChart data={ADMIN_ANALYTICS_DATA.revenueByService} label="Revenue" />
        </DashboardCard>
    </div>
);

const AdminSettingsView: React.FC = () => (
    <DashboardCard title="System Settings">
        <p>Placeholder for global system settings, such as shipping rates, API integrations, etc.</p>
    </DashboardCard>
);

{/* FIX: Export the AdminDashboardPage component so it can be imported and used in App.tsx. */}
export const AdminDashboardPage: React.FC = () => {
    const [currentView, setCurrentView] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const sidebarItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <IconDashboard /> },
        { id: 'manage-shipments', label: 'Manage Shipments', icon: <IconBoxSeam /> },
        { id: 'manage-users', label: 'Manage Users', icon: <IconUserPlus /> },
        { id: 'wallet-requests', label: 'Wallet Requests', icon: <IconWallet2 /> },
        { id: 'reports', label: 'Reports', icon: <IconFileEarmarkSpreadsheet /> },
        { id: 'settings-divider', label: 'divider' },
        { id: 'settings', label: 'Settings', icon: <IconSettings /> },
    ];

    const renderView = () => {
        switch(currentView) {
            case 'dashboard': return <AdminDashboardOverviewView />;
            case 'manage-shipments': return <AdminManageShipmentsView />;
            case 'manage-users': return <AdminManageUsersView />;
            case 'wallet-requests': return <AdminWalletRequestsView />;
            case 'reports': return <AdminReportsView />;
            case 'settings': return <AdminSettingsView />;
            default: return <AdminDashboardOverviewView />;
        }
    };
    
     const handleLogout = () => {
        // Placeholder for logout logic
        navigate('/admin-login');
    }

    const PageTitle: {[key: string]: string} = {
        dashboard: "Admin Dashboard",
        'manage-shipments': "Manage Shipments",
        'manage-users': "Manage Users",
        'wallet-requests': "Wallet Requests",
        reports: "Reports & Analytics",
        settings: "System Settings",
    }

    return (
         <div className="flex h-screen bg-gray-100 font-sans">
            <aside className={`absolute lg:relative z-20 flex-shrink-0 w-64 h-full bg-white border-r transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex items-center justify-center h-20 border-b">
                     <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="h-10"/></Link>
                </div>
                 <nav className="mt-6">
                    <ul>
                        {sidebarItems.map(item => (
                            item.label === 'divider' ? <hr key={item.id} className="my-4" /> :
                            <li key={item.id} className="relative px-6 py-3">
                                <button onClick={() => { setCurrentView(item.id); setSidebarOpen(false); }} className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${currentView === item.id ? 'text-gray-800' : 'text-gray-500'}`}>
                                     {currentView === item.id && <span className="absolute inset-y-0 left-0 w-1 bg-[#b58e31] rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
                                    <IconWrapper className="w-5 h-5">{item.icon}</IconWrapper>
                                    <span className="ml-4">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div className="flex flex-col flex-1 w-full">
                 <header className="z-10 py-4 bg-white shadow-md">
                    <div className="container flex items-center justify-between h-full px-6 mx-auto text-[#00529b]">
                        <button className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple" onClick={() => setSidebarOpen(!isSidebarOpen)} aria-label="Menu">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                         <div className="flex justify-center flex-1 lg:mr-32">
                             <h1 className="text-2xl font-semibold text-gray-700">{PageTitle[currentView] || "Dashboard"}</h1>
                        </div>
                        <ul className="flex items-center flex-shrink-0 space-x-6">
                            <li className="relative">
                                 <button onClick={handleLogout} className="text-sm font-semibold text-gray-600 hover:text-[#b58e31]">Log Out</button>
                            </li>
                        </ul>
                    </div>
                </header>
                 <main className="h-full overflow-y-auto">
                    <div className="container px-6 py-8 mx-auto grid">
                        {renderView()}
                    </div>
                </main>
            </div>
        </div>
    );
};
