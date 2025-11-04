
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
    HeroSlider, ServiceCard, FeatureItem, TestimonialCard, TrackingForm, PageHeader, 
    ContentBlock, FaqItem, Button, AdminButton, Modal, Table, Pagination, FormInput, 
    FormTextarea, ProgressStepper, PasswordStrengthMeter, EnhancedFileUpload 
} from './components';
import { 
    CORE_SERVICES, WHY_CHOOSE_US_FEATURES, TESTIMONIALS, ALL_SERVICES, FAQ_DATA, SITE_CONFIG, 
    CLIENT_SHIPMENTS_DATA, CLIENT_SHIPMENT_DETAILS_DATA, CLIENT_PREALERTS_DATA, CLIENT_INVOICES_DATA, 
    WALLET_TRANSACTIONS_DATA, CLIENT_ADDRESSES_DATA, CLIENT_NOTIFICATIONS_DATA, ALL_SHIPMENTS_MOCK_DATA, 
    ALL_USERS_DATA, ADMIN_SHIPMENTS_DATA, ADMIN_ANALYTICS_DATA, ADMIN_WALLET_REQUESTS_DATA, 
    MANAGEABLE_PAGES_CONTENT, CLIENT_TEAM_MEMBERS_DATA, ANALYTICS_DATA, LOYALTY_DATA, REFERRAL_DATA, 
    API_TOKENS_DATA, WEBHOOKS_DATA, SUPPORT_TICKETS_DATA, ADMIN_ROLES_DATA, ADMIN_SHIPPING_RATES_DATA, 
    DEFAULT_ALERT_CONFIG, MOCK_WORKFLOW_RULES, INITIAL_ACTIVITY_LOGS, MOCK_SHIPMENT_DELAY_FORECASTS, 
    MOCK_PAYMENT_GATEWAY_SETTINGS, HERO_SLIDES 
} from './constants';
import { 
    IconMarker, IconPhone, IconEnvelope, IconWhatsapp, IconWrapper, IconDashboard, IconBoxSeam, 
    IconBell, IconReceipt, IconWallet2, IconPerson, IconGeoAlt, IconHeadset, IconSearch, 
    IconArrowDownCircle, IconArrowUpCircle, IconUpload, IconLayoutTextWindowReverse, IconUserPlus, 
    IconSettings, IconFileEarmarkSpreadsheet, IconShieldLock, IconPencilSquare, IconListTask, 
    IconCardImage, IconShare, IconGraphUpArrow, IconCodeSlash, IconPersonCircle, IconTruck, 
    IconShieldCheck, IconFileText, IconHelpCircle, IconGlobe, IconWarehouse, IconCustoms, 
    IconPackage, IconSend, ICON_MAP, IconPlus, IconKey, IconPlug, IconBellFill, IconRecycle, 
    IconPlayBtn, IconLightningCharge, IconFilter, IconCreditCard, IconClock 
} from './constants';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import type { 
    ClientShipment, DetailedClientShipment, ClientPreAlert, ClientInvoice, WalletTransaction, 
    Address, ClientNotification, RateResult, User, QuoteFormData, TrackingData, Service, 
    FaqItemData, WalletRequest, SupportTicket, ApiToken, Webhook, HeroSlide, AdminRole, 
    ShippingRate, AdminNotification, AlertConfiguration, WorkflowRule, ActivityLog, 
    ShipmentDelayForecast, Milestone, PaymentGatewaySettings, SiteConfig 
} from './types';


export const HomePage: React.FC = () => (
    <>
        <HeroSlider />
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="w-[90%] max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Logistics Services</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Comprehensive, reliable, and tailored solutions to meet your every shipping need, from local deliveries to international freight.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CORE_SERVICES.slice(0, 4).map(service => <ServiceCard key={service.title} service={service} />)}
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

export const AboutPage: React.FC = () => {
    const page = MANAGEABLE_PAGES_CONTENT.about;
    return (
        <>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
                {page.content}
            </div>
        </>
    );
};

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

const ServiceDetailPage: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
    <>
        <PageHeader title={title} subtitle={subtitle} />
        <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    {children}
                </div>
                <aside className="lg:col-span-1">
                    <div className="bg-gray-50 p-8 rounded-lg sticky top-28">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">All Services</h3>
                        <ul className="space-y-4">
                            {ALL_SERVICES.map(service => (
                                <li key={service.link}>
                                    <Link to={service.link} className="flex items-center gap-3 text-gray-700 hover:text-[#00529b] font-medium transition-colors">
                                        <IconWrapper className="w-6 h-6 text-[#b58e31]">{ICON_MAP[service.icon]}</IconWrapper>
                                        <span>{service.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                         <Button asLink to="/quote" primary className="w-full mt-8">Get a Quote</Button>
                    </div>
                </aside>
            </div>
        </div>
    </>
);

export const ServiceNigeriaDomesticPage: React.FC = () => (
    <ServiceDetailPage title="Nigeria Domestic Logistics" subtitle="Connecting cities and regions across Nigeria with reliable and timely delivery services.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Nationwide Partner in Nigeria</h2>
            <p className="mb-4">Our extensive network within Nigeria ensures your goods are moved efficiently across the country. From Lagos to Abuja, Port Harcourt to Kano, we provide flexible and dependable shipping services for businesses and individuals.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Inter-state cargo and parcel delivery.</li>
                <li>Last-mile delivery solutions for e-commerce businesses.</li>
                <li>Secure transport for valuable goods.</li>
                <li>Easy booking and real-time tracking via our client portal.</li>
            </ul>
        </ContentBlock>
    </ServiceDetailPage>
);

export const ServiceUKDomesticPage: React.FC = () => (
    <ServiceDetailPage title="UK Domestic Logistics" subtitle="Dedicated and comprehensive shipping services within the United Kingdom, from single parcels to full truckloads.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your UK Logistics Partner</h2>
            <p className="mb-4">Our dedicated UK domestic service ensures your goods are moved efficiently across the country. We leverage a network of trusted partners and our own fleet to provide flexible and dependable shipping services.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Nationwide pallet delivery and full truckload (FTL) services.</li>
                <li>E-commerce fulfilment and last-mile delivery solutions.</li>
                <li>Timed delivery slots and white-glove services available.</li>
                <li>Easy booking and management through our client portal.</li>
            </ul>
        </ContentBlock>
    </ServiceDetailPage>
);

export const ServiceInternationalPage: React.FC = () => (
    <ServiceDetailPage title="International Freight" subtitle="Connecting your business to the world with expert Air and Sea freight services.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Global Reach, Local Touch</h2>
            <p className="mb-4">Our international freight services are the cornerstone of our business, specializing in the UK-Nigeria trade lane while connecting you to major markets worldwide. We manage the entire process, from documentation to final delivery, ensuring a smooth journey for your cargo.</p>
            <h3 className="text-xl font-bold text-gray-700 mt-6 mb-3">Air Freight</h3>
            <p className="mb-4">When speed is critical, our air freight services provide a reliable and efficient solution. We offer flexible options to meet your budget and timeline.</p>
            <h3 className="text-xl font-bold text-gray-700 mt-6 mb-3">Sea Freight</h3>
            <p className="mb-4">For larger shipments where cost is a key factor, our sea freight services offer a dependable and economical choice. We handle both Full Container Load (FCL) and Less than Container Load (LCL) shipments.</p>
        </ContentBlock>
    </ServiceDetailPage>
);

export const ServiceWarehousingPage: React.FC = () => (
    <ServiceDetailPage title="Warehousing & Fulfilment" subtitle="Secure, strategic, and scalable solutions for your inventory management needs.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Smart Storage Solutions</h2>
            <p className="mb-4">Our state-of-the-art warehouses in the UK and Nigeria are more than just storage spaces. They are strategic hubs for your supply chain, equipped with modern technology and security systems to manage your inventory effectively.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Short-term and long-term storage options.</li>
                <li>Pick and pack, kitting, and e-commerce order fulfilment.</li>
                <li>Advanced Warehouse Management System (WMS) for real-time visibility.</li>
                <li>Temperature-controlled and high-security storage areas available.</li>
            </ul>
        </ContentBlock>
    </ServiceDetailPage>
);

export const ServiceCustomsPage: React.FC = () => (
    <ServiceDetailPage title="Customs Clearance" subtitle="Navigating the complexities of international trade with expertise and efficiency.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hassle-Free Customs Brokerage</h2>
            <p className="mb-4">Avoid delays and complications at the border. Our licensed customs brokers have in-depth knowledge of international trade regulations, ensuring your shipments are cleared smoothly and compliantly.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Expertise in both UK (HMRC) and Nigerian (NCS) customs procedures.</li>
                <li>Accurate tariff classification and duty/tax calculation.</li>
                <li>Handling of all necessary import/export documentation.</li>
                <li>Guidance on trade agreements and compliance to minimize costs.</li>
            </ul>
        </ContentBlock>
    </ServiceDetailPage>
);

export const ServiceSpecializedPage: React.FC = () => (
    <ServiceDetailPage title="Specialized Cargo Handling" subtitle="Expert solutions for your unique and challenging shipping requirements.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Handling with Expertise</h2>
            <p className="mb-4">Some shipments require more than standard handling. We have the experience and equipment to manage a wide range of specialized cargo, ensuring it's transported safely and securely.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Perishable Goods:</strong> Temperature-controlled transport and storage.</li>
                <li><strong>Oversized & Project Cargo:</strong> Custom logistics for heavy and out-of-gauge items.</li>
                <li><strong>Hazardous Materials (Hazmat):</strong> Certified handling and transport of dangerous goods.</li>
                <li><strong>High-Value Cargo:</strong> Enhanced security protocols for valuable and sensitive shipments.</li>
            </ul>
        </ContentBlock>
    </ServiceDetailPage>
);

export const ServiceConsultancyPage: React.FC = () => (
    <ServiceDetailPage title="Logistics Consultancy" subtitle="Optimizing your supply chain for greater efficiency and competitive advantage.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Strategic Supply Chain Solutions</h2>
            <p className="mb-4">Leverage our industry expertise to enhance your logistics operations. Our consultancy services are designed to identify inefficiencies, reduce costs, and build a more resilient and effective supply chain for your business.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Comprehensive supply chain analysis and network design.</li>
                <li>Cost-to-serve modeling and optimization.</li>
                <li>Inventory management and demand planning strategies.</li>
                <li>Guidance on international trade compliance and risk management.</li>
            </ul>
        </ContentBlock>
    </ServiceDetailPage>
);

export const PersonalShopperPage: React.FC = () => (
    <ServiceDetailPage title="Personal Shopper Service" subtitle="Bringing the authentic taste of Nigeria to your doorstep, anywhere in the world.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Connection to Home</h2>
            <p className="mb-4">Craving authentic Nigerian food items or goods? Our personal shopper service is here to help. We source high-quality, genuine products from trusted local suppliers in Nigeria and deliver them directly to you, no matter where you are in the world.</p>
             <h3 className="text-xl font-bold text-gray-700 mt-6 mb-3">How It Works</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li><strong>Submit Your List:</strong> Tell us what you need, from specific spices and grains to local snacks and fabrics.</li>
                <li><strong>We Shop for You:</strong> Our dedicated shoppers in Nigeria find the best quality products for you.</li>
                <li><strong>Secure Packaging:</strong> We carefully package your items to ensure they arrive in perfect condition.</li>
                <li><strong>Fast Delivery:</strong> We ship your goods using our reliable international network, right to your doorstep.</li>
            </ol>
        </ContentBlock>
    </ServiceDetailPage>
);

export const TrackingPage: React.FC = () => {
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof TrackingData; direction: 'ascending' | 'descending' } | null>(null);

    const filteredData = useMemo(() => {
        return ALL_SHIPMENTS_MOCK_DATA.filter(item =>
            item.id.toLowerCase().includes(search.toLowerCase()) ||
            item.origin.toLowerCase().includes(search.toLowerCase()) ||
            item.destination.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const sortedData = useMemo(() => {
        let sortableItems = [...filteredData];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                const valA = a[sortConfig.key];
                const valB = b[sortConfig.key];

                if (valA < valB) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (valA > valB) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [filteredData, sortConfig]);

    const requestSort = (key: keyof TrackingData) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicator = (key: keyof TrackingData) => {
        if (!sortConfig || sortConfig.key !== key) {
            return '↕';
        }
        return sortConfig.direction === 'ascending' ? '↑' : '↓';
    };
    
    return (
        <>
            <PageHeader title="Track All Shipments" subtitle="Search and view real-time status of all shipments in our system." />
            <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
                 <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Shipment Details</h2>
                         <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by ID, Origin, Destination..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b58e31]"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <IconSearch />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    {['id', 'origin', 'destination', 'status', 'estDelivery'].map(key => (
                                        <th key={key} className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <button onClick={() => requestSort(key as keyof TrackingData)} className="flex items-center gap-2">
                                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} 
                                                <span>{getSortIndicator(key as keyof TrackingData)}</span>
                                            </button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {sortedData.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="py-4 px-4 whitespace-nowrap font-medium text-[#00529b]">{item.id}</td>
                                        <td className="py-4 px-4 whitespace-nowrap">{item.origin}</td>
                                        <td className="py-4 px-4 whitespace-nowrap">{item.destination}</td>
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.badge}`}>{item.status}</span>
                                        </td>
                                        <td className="py-4 px-4 whitespace-nowrap">{new Date(item.estDelivery).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                                {sortedData.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="py-8 px-4 text-center text-gray-500">No shipments found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export const RatesCalculatorPage: React.FC = () => {
    const [formData, setFormData] = useState({
        origin: 'uk',
        destination: 'nigeria',
        weight: '',
        length: '',
        width: '',
        height: ''
    });
    const [result, setResult] = useState<RateResult[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setResult(null);
        if (!formData.weight) {
            setError('Please enter a weight for the shipment.');
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            const weight = parseFloat(formData.weight) || 0;
            let mockResults: RateResult[] = [];

            if (formData.origin === 'uk' && formData.destination === 'uk') {
                mockResults = [
                    { serviceName: 'UK Domestic (Standard)', estimatedCost: `£${(8 + weight * 1.5).toFixed(2)}`, estimatedTime: '1-2 Business Days' },
                    { serviceName: 'UK Domestic (Express)', estimatedCost: `£${(12 + weight * 2.5).toFixed(2)}`, estimatedTime: 'Next Business Day' },
                ];
            } else if (formData.origin === 'nigeria' && formData.destination === 'nigeria') {
                 mockResults = [
                    { serviceName: 'Nigeria Domestic (Road)', estimatedCost: `₦${(5000 + weight * 1000).toLocaleString()}`, estimatedTime: '2-4 Business Days' },
                    { serviceName: 'Nigeria Domestic (Air)', estimatedCost: `₦${(15000 + weight * 3000).toLocaleString()}`, estimatedTime: '1-2 Business Days' },
                ];
            } else { // International
                 mockResults = [
                    { serviceName: 'Air Freight (Express)', estimatedCost: `£${(20 + weight * 12.5).toFixed(2)}`, estimatedTime: '3-5 Business Days' },
                    { serviceName: 'Air Freight (Standard)', estimatedCost: `£${(15 + weight * 9.8).toFixed(2)}`, estimatedTime: '5-8 Business Days' },
                    { serviceName: 'Sea Freight', estimatedCost: `£${(100 + weight * 3.5).toFixed(2)}`, estimatedTime: '3-5 Weeks' },
                ];
            }
            
            setResult(mockResults);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <>
            <PageHeader title="Rates Calculator" subtitle="Get an instant estimate for your shipment." />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                                <select name="origin" value={formData.origin} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                    <option value="uk">United Kingdom</option>
                                    <option value="nigeria">Nigeria</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                                <select name="destination" value={formData.destination} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                    <option value="nigeria">Nigeria</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Total Weight (kg)</label>
                                <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g., 5" required className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="md:col-span-2 grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Length (cm)</label>
                                    <input type="number" name="length" value={formData.length} onChange={handleChange} placeholder="Optional" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
                                    <input type="number" name="width" value={formData.width} onChange={handleChange} placeholder="Optional" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                                    <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Optional" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button type="submit" primary disabled={isLoading}>{isLoading ? 'Calculating...' : 'Calculate Rates'}</Button>
                        </div>
                    </form>
                    {error && <p className="mt-6 text-center text-red-600 bg-red-50 p-3 rounded-md">{error}</p>}
                    {result && (
                         <div className="mt-8 border-t pt-6">
                             <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Estimated Rates</h3>
                             <div className="space-y-4">
                                 {result.map(rate => (
                                     <div key={rate.serviceName} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                                         <div>
                                             <p className="font-bold text-[#00529b]">{rate.serviceName}</p>
                                             <p className="text-sm text-gray-500">{rate.estimatedTime}</p>
                                         </div>
                                         <p className="text-lg font-bold text-gray-800">{rate.estimatedCost}</p>
                                     </div>
                                 ))}
                             </div>
                         </div>
                    )}
                </div>
            </div>
        </>
    );
};

export const QuoteRequestPage: React.FC = () => {
    const [formData, setFormData] = useState<QuoteFormData>({
        origin: '', destination: '', serviceType: '', weight: '',
        length: '', width: '', height: '', specialRequirements: '',
        name: '', email: '', phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <>
                <PageHeader title="Quote Request Sent" subtitle="Thank you for your inquiry!" />
                <div className="w-[90%] max-w-4xl mx-auto px-4 py-16 text-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
                        <p className="text-gray-700 mb-6">Your quote request has been successfully submitted. Our team will review the details and get back to you with a personalized quote at <strong>{formData.email}</strong> within 1-2 business days.</p>
                        <Button asLink to="/">Back to Home</Button>
                    </div>
                </div>
            </>
        );
    }
    
    return (
        <>
            <PageHeader title="Request a Quote" subtitle="Provide your shipment details, and our experts will tailor a competitive quote for you." />
             <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-8">
                    <div className="border-b pb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Shipment Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">Origin (City, Country)</label>
                                <input type="text" name="origin" id="origin" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination (City, Country)</label>
                                <input type="text" name="destination" id="destination" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                             <div>
                                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                                <select name="serviceType" id="serviceType" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                                    <option value="">Select a service...</option>
                                    <option value="air-express">Air Freight (Express)</option>
                                    <option value="air-standard">Air Freight (Standard)</option>
                                    <option value="sea-fcl">Sea Freight (FCL)</option>
                                    <option value="sea-lcl">Sea Freight (LCL)</option>
                                    <option value="domestic-uk">Domestic (UK)</option>
                                    <option value="domestic-ng">Domestic (Nigeria)</option>
                                    <option value="customs">Customs Clearance Only</option>
                                </select>
                            </div>
                             <div>
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Total Weight (kg)</label>
                                <input type="number" name="weight" id="weight" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                             <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Length (cm)</label>
                                    <input type="number" name="length" id="length" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
                                    <input type="number" name="width" id="width" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                                    <input type="number" name="height" id="height" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                            </div>
                             <div className="md:col-span-2">
                                <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                                <textarea name="specialRequirements" id="specialRequirements" rows={3} onChange={handleChange} placeholder="e.g., Fragile items, temperature control needed, etc." className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-b pb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" name="name" id="name" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" name="email" id="email" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" name="phone" id="phone" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button type="submit" primary className="py-3 px-8 text-lg">Submit Quote Request</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export const FaqPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <PageHeader title="Frequently Asked Questions" subtitle="Find answers to common questions about our services." />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                 <div className="bg-white p-8 rounded-lg shadow-lg">
                    {FAQ_DATA.map((item, index) => (
                        <FaqItem
                            key={item.id}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export const ContactPage: React.FC = () => {
    const whatsappLink = `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`;
    return (
        <>
            <PageHeader title="Contact Us" subtitle="We're here to help. Reach out to us through any of our channels." />
             <div className="w-[90%] max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <IconWrapper className="w-12 h-12 mx-auto mb-4 text-[#00529b]"><IconMarker/></IconWrapper>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">UK Office</h3>
                        <p className="text-gray-600">{SITE_CONFIG.contact.addressUK}</p>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <IconWrapper className="w-12 h-12 mx-auto mb-4 text-[#00529b]"><IconMarker/></IconWrapper>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Nigeria Office</h3>
                        <p className="text-gray-600">{SITE_CONFIG.contact.addressNG}</p>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-lg text-center md:col-span-2 lg:col-span-1">
                        <IconWrapper className="w-12 h-12 mx-auto mb-4 text-[#00529b]"><IconPhone/></IconWrapper>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Phone & Email</h3>
                        <p className="text-gray-600"><a href={`tel:${SITE_CONFIG.contact.phoneUK}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.phoneUK}</a></p>
                        <p className="text-gray-600"><a href={`tel:${SITE_CONFIG.contact.phoneNG}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.phoneNG}</a></p>
                         <p className="text-gray-600 mt-2"><a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.email}</a></p>
                         <p className="text-gray-600 mt-2 flex items-center justify-center gap-2">
                             <IconWrapper className="w-5 h-5 text-green-500"><IconWhatsapp/></IconWrapper>
                             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#b58e31]">Chat with us</a>
                         </p>
                    </div>
                </div>
            </div>
        </>
    );
};

const PlaceholderLegalPage: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
    const page = MANAGEABLE_PAGES_CONTENT[title.toLowerCase().includes('privacy') ? 'privacy' : 'terms'];
    return (
        <>
            <PageHeader title={page.title} subtitle={page.subtitle} />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-16">
                 <div className="bg-white p-8 rounded-lg shadow-lg">
                     {page.content}
                 </div>
            </div>
        </>
    );
};

export const PrivacyPolicyPage: React.FC = () => <PlaceholderLegalPage title="Privacy Policy" subtitle="Your privacy is important to us." />;
export const TermsPage: React.FC = () => <PlaceholderLegalPage title="Terms & Conditions" subtitle="The legal terms for using our services." />;

export const AdminLoginPage: React.FC = () => {
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/admin');
    };

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-8">
                    <img src={SITE_CONFIG.logoUrl} alt="Logo" className="mx-auto h-12 mb-4"/>
                    <h1 className="text-2xl font-bold text-gray-800">Admin Panel Login</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" required defaultValue="admin@hayapass.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" required defaultValue="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm" />
                    </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#00529b] focus:ring-[#b58e31] border-gray-300 rounded"/>
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-[#00529b] hover:text-[#b58e31]">Forgot your password?</a>
                        </div>
                    </div>
                    <div>
                        <Button type="submit" primary className="w-full justify-center py-3">Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- START: AUTHENTICATION PAGE ---

export const ClientAuthPage: React.FC = () => {
    const location = useLocation();
    const initialMode = location.pathname === '/register' ? 'register' : 'login';

    const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgotPassword' | 'resetPassword'>(initialMode);
    const [registrationStep, setRegistrationStep] = useState(0);
    const [accountType, setAccountType] = useState<'individual' | 'business' | null>(null);
    const [files, setFiles] = useState<{ [key: string]: File | null }>({});
    const [formData, setFormData] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [forgotPasswordEmailSent, setForgotPasswordEmailSent] = useState(false);
    const navigate = useNavigate();

    const registrationSteps = ['Account Type', 'Your Details', 'Verification', 'Verify Email', 'Complete'];
    
    useEffect(() => {
        if (authMode === 'register' && (registrationStep < 0 || registrationStep >= registrationSteps.length)) {
            setRegistrationStep(0);
        }
    }, [registrationStep, authMode]);

    useEffect(() => {
        try {
            const savedProgress = localStorage.getItem('registrationProgress');
            if (savedProgress) {
                if (window.confirm('You have saved registration progress. Would you like to continue?')) {
                    const { step, type, data } = JSON.parse(savedProgress);
                    setRegistrationStep(step);
                    setAccountType(type);
                    setFormData(data);
                    setAuthMode('register');
                } else {
                    localStorage.removeItem('registrationProgress');
                }
            }
        } catch (error) {
            console.error("Could not load saved progress:", error);
            localStorage.removeItem('registrationProgress');
        }
    }, []);

    const saveProgress = () => {
        const progress = {
            step: registrationStep,
            type: accountType,
            data: formData,
        };
        localStorage.setItem('registrationProgress', JSON.stringify(progress));
        alert('Progress saved!');
    };

    const validateField = (name: string, value: string) => {
        let errorMsg = '';
        if ((name === 'confirmPassword' || name === 'resetConfirmPassword') && value !== formData[name.replace('Confirm', '')]) {
            errorMsg = 'Passwords do not match.';
        }
        if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
            errorMsg = 'Please enter a valid email address.';
        }
        setErrors((prev: any) => ({ ...prev, [name]: errorMsg }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({ ...prev, [e.target.name]: e.target.files![0] }));
        }
    };
    
    const handleRemoveFile = (fileName: string) => {
        setFiles(prev => ({ ...prev, [fileName]: null }));
    };

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userType = formData.loginEmail?.includes('business') ? 'business' : 'individual';
        navigate('/dashboard', { state: { accountType: userType } });
    };
    
    const handleRegistrationSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRegistrationStep(3); // Move to email verification
    };
    
    const handleForgotPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setForgotPasswordEmailSent(true);
    };
    
    const handleResetPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Password has been reset successfully!");
        setAuthMode('login');
    };

    const renderRegistrationForm = () => {
        const commonFields = (
            <>
                <FormInput name="email" label="Contact Email Address" type="email" value={formData.email || ''} onChange={handleInputChange} error={errors.email} required />
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" value={formData.password || ''} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm" />
                    <PasswordStrengthMeter password={formData.password} />
                </div>
                <FormInput name="confirmPassword" label="Confirm Password" type="password" value={formData.confirmPassword || ''} onChange={handleInputChange} error={errors.confirmPassword} required />
            </>
        );

        switch (registrationStep) {
            case 0:
                return (
                    <div>
                        <h2 className="text-xl font-semibold mb-6 text-center">Choose Your Account Type</h2>
                        <div className="space-y-4">
                            <button onClick={() => { setAccountType('individual'); setRegistrationStep(1); }} className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b58e31]"><h3 className="font-bold text-[#00529b]">Individual Client</h3><p className="text-sm text-gray-600">For personal shipments and individual use.</p></button>
                            <button onClick={() => { setAccountType('business'); setRegistrationStep(1); }} className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b58e31]"><h3 className="font-bold text-[#00529b]">Business Client</h3><p className="text-sm text-gray-600">For companies, SMEs, and corporate logistics.</p></button>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <form onSubmit={(e) => { e.preventDefault(); setRegistrationStep(2); }} className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4 text-center">{accountType === 'individual' ? 'Individual' : 'Business'} Account Details</h2>
                        {accountType === 'individual' ? (
                            <>
                                <FormInput name="fullName" label="Full Legal Name" placeholder="As on your ID" value={formData.fullName || ''} onChange={handleInputChange} required />
                                {commonFields}
                                <FormInput name="phone" label="Mobile Phone Number" type="tel" value={formData.phone || ''} onChange={handleInputChange} required />
                                <div><label className="block text-sm font-medium text-gray-700">Residential Address</label><textarea name="address" value={formData.address || ''} onChange={handleInputChange} required rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm"></textarea></div>
                            </>
                        ) : (
                             <>
                                <fieldset className="border p-4 rounded-md space-y-4"><legend className="text-sm font-medium px-1">Company Details</legend>
                                    <FormInput name="companyName" label="Full Legal Company Name" value={formData.companyName || ''} onChange={handleInputChange} required />
                                    <FormInput name="tradingName" label="Company Trading Name (if different)" value={formData.tradingName || ''} onChange={handleInputChange} />
                                     <div><label className="block text-sm font-medium text-gray-700">Full Registered Business Address</label><textarea name="companyAddress" value={formData.companyAddress || ''} onChange={handleInputChange} required rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea></div>
                                     <FormInput name="companyWebsite" label="Company Website" type="url" value={formData.companyWebsite || ''} onChange={handleInputChange} />
                                     <FormInput name="registrationNumber" label="Company Registration Number" value={formData.registrationNumber || ''} onChange={handleInputChange} required />
                                     <FormInput name="taxNumber" label="VAT / Tax ID Number" value={formData.taxNumber || ''} onChange={handleInputChange} required />
                                </fieldset>
                                <fieldset className="border p-4 rounded-md space-y-4"><legend className="text-sm font-medium px-1">Primary Contact Details</legend>
                                    <FormInput name="contactName" label="Full Name" value={formData.contactName || ''} onChange={handleInputChange} required />
                                    <FormInput name="jobTitle" label="Job Title" value={formData.jobTitle || ''} onChange={handleInputChange} required />
                                    <FormInput name="workPhone" label="Direct Phone Number" type="tel" value={formData.workPhone || ''} onChange={handleInputChange} required />
                                    {commonFields}
                                </fieldset>
                            </>
                        )}
                        <div className="flex justify-between items-center pt-4">
                            <button type="button" onClick={saveProgress} className="text-sm font-medium text-gray-600 hover:text-[#00529b]">Save & Continue Later</button>
                            <Button type="submit" primary>Next: Upload Documents</Button>
                        </div>
                    </form>
                );
            case 2:
                return (
                    <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                        <h2 className="text-xl font-semibold text-center">Verification Documents</h2>
                        {accountType === 'individual' ? (
                            <EnhancedFileUpload id="proofOfId" label="Proof of Identity" description="Passport, Driver's License, or National ID" required file={files.proofOfId || null} onChange={handleFileChange} onRemove={() => handleRemoveFile('proofOfId')} />
                        ) : accountType === 'business' ? (
                             <>
                                <EnhancedFileUpload id="proofOfReg" label="Proof of Business Registration" description="Certificate of Incorporation" required file={files.proofOfReg || null} onChange={handleFileChange} onRemove={() => handleRemoveFile('proofOfReg')} />
                                <EnhancedFileUpload id="proofOfAddr" label="Proof of Business Address" description="Recent utility bill or bank statement" required file={files.proofOfAddr || null} onChange={handleFileChange} onRemove={() => handleRemoveFile('proofOfAddr')} />
                                <EnhancedFileUpload id="proofOfDirectorId" label="Proof of ID for Director/Primary Contact" description="Passport or Driver's License" required file={files.proofOfDirectorId || null} onChange={handleFileChange} onRemove={() => handleRemoveFile('proofOfDirectorId')} />
                             </>
                        ) : null}
                        <div className="flex items-start"><input id="terms" name="terms" type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="h-4 w-4 text-[#00529b] focus:ring-[#b58e31] border-gray-300 rounded mt-1" /><label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I agree to the <Link to="/terms" target="_blank" className="font-medium text-[#00529b] hover:underline">Terms & Conditions</Link> and <Link to="/privacy-policy" target="_blank" className="font-medium text-[#00529b] hover:underline">Privacy Policy</Link>.</label></div>
                        <div className="flex justify-between items-center pt-4">
                           <button type="button" onClick={() => setRegistrationStep(1)} className="text-sm font-medium text-gray-600 hover:text-[#00529b]">Back to details</button>
                           <Button type="submit" primary disabled={!termsAccepted}>Create Account</Button>
                       </div>
                   </form>
                );
            case 3: // Email Verification
                 return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Please Verify Your Email</h2>
                        <p className="text-gray-700 mb-6">We've sent a verification link to <strong>{formData.email}</strong>. Please check your inbox and click the link to activate your account.</p>
                        <p className="text-sm text-gray-500 mb-6">Didn't receive the email? Check your spam folder or...</p>
                        <div className="space-y-3">
                           <Button onClick={() => alert('Verification email resent!')} primary className="w-full">Resend Verification Email</Button>
                           <Button onClick={() => { localStorage.removeItem('registrationProgress'); setRegistrationStep(4); }} secondary className="w-full">Continue (Simulate Verification)</Button>
                        </div>
                    </div>
                );
            case 4: // Success / 2FA
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Set Up Two-Factor Authentication</h2>
                        <p className="text-gray-600 mb-6">Scan this QR code with your authenticator app.</p>
                        <div className="flex justify-center my-4">
                           <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=otpauth://totp/Hayapass:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Hayapass" alt="QR Code Placeholder" />
                        </div>
                        <FormInput name="2faCode" label="Verification Code" value={formData['2faCode'] || ''} onChange={handleInputChange} placeholder="Enter 6-digit code" required />
                         <div className="flex flex-col sm:flex-row gap-3 mt-4">
                           <Button onClick={() => navigate('/dashboard', { state: { accountType } })} primary className="w-full">Verify & Finish</Button>
                           <Button onClick={() => navigate('/dashboard', { state: { accountType } })} secondary className="w-full">Skip for Now</Button>
                        </div>
                    </div>
                );
            default:
                setRegistrationStep(0);
                return null;
        }
    };

    const renderMainContent = () => {
        switch(authMode) {
            case 'login':
                return (
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <FormInput name="loginEmail" label="Email Address" type="email" value={formData.loginEmail || ''} onChange={handleInputChange} required placeholder="user@example.com or user@business.com"/>
                        <FormInput name="loginPassword" label="Password" type="password" value={formData.loginPassword || ''} onChange={handleInputChange} required />
                        <div className="text-sm text-right">
                            <button type="button" onClick={() => setAuthMode('forgotPassword')} className="font-medium text-[#00529b] hover:text-[#b58e31]">Forgot your password?</button>
                        </div>
                        <div><Button type="submit" primary className="w-full justify-center py-3">Sign In</Button></div>
                    </form>
                );
            case 'register':
                return renderRegistrationForm();
            case 'forgotPassword':
                if (forgotPasswordEmailSent) {
                    return (
                        <div className="text-center">
                             <h2 className="text-xl font-semibold text-gray-800 mb-4">Check Your Email</h2>
                             <p className="text-gray-600">If an account with that email exists, we have sent a password reset link to it.</p>
                             <button onClick={() => setAuthMode('resetPassword')} className="text-sm text-gray-500 mt-4 underline">Simulate clicking email link</button>
                        </div>
                    );
                }
                return (
                    <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                        <h2 className="text-xl font-semibold text-center">Reset Password</h2>
                        <FormInput name="forgotEmail" label="Enter your account's email" type="email" value={formData.forgotEmail || ''} onChange={handleInputChange} required />
                        <div><Button type="submit" primary className="w-full justify-center py-2">Send Reset Link</Button></div>
                        <div className="text-center"><button type="button" onClick={() => setAuthMode('login')} className="font-medium text-sm text-[#00529b] hover:text-[#b58e31]">Back to Login</button></div>
                    </form>
                );
            case 'resetPassword':
                return (
                     <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
                        <h2 className="text-xl font-semibold text-center">Set New Password</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <input type="password" name="resetPassword" value={formData.resetPassword || ''} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                            <PasswordStrengthMeter password={formData.resetPassword} />
                        </div>
                        <FormInput name="resetConfirmPassword" label="Confirm New Password" type="password" value={formData.resetConfirmPassword || ''} onChange={handleInputChange} error={errors.resetConfirmPassword} required />
                        <div><Button type="submit" primary className="w-full justify-center py-2">Set New Password</Button></div>
                    </form>
                );
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4" style={{ background: "url('https://images.unsplash.com/photo-1587671391393-39789696380a?q=80&w=2070&auto=format&fit=crop') center/cover" }}>
            <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 transition-all duration-500">
                <div className="text-center mb-6">
                     <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="mx-auto h-12 mb-4"/></Link>
                </div>
                
                {authMode !== 'forgotPassword' && authMode !== 'resetPassword' && (
                    <>
                        <div className="mb-6 flex justify-center border border-gray-300 rounded-lg p-1 bg-gray-200">
                            <button onClick={() => setAuthMode('login')} className={`w-1/2 py-2 text-sm font-medium rounded-md transition-colors ${authMode === 'login' ? 'bg-white shadow-sm text-[#00529b]' : 'text-gray-600'}`}>Login</button>
                            <button onClick={() => { setAuthMode('register'); setRegistrationStep(0); setAccountType(null); }} className={`w-1/2 py-2 text-sm font-medium rounded-md transition-colors ${authMode === 'register' ? 'bg-white shadow-sm text-[#00529b]' : 'text-gray-600'}`}>Register</button>
                        </div>
                        {authMode === 'register' && registrationStep < registrationSteps.length -1 && <ProgressStepper steps={registrationSteps} currentStep={registrationStep} />}
                    </>
                )}
                
                {renderMainContent()}

            </div>
        </div>
    );
};


// --- START: CLIENT DASHBOARD PAGE & VIEWS ---

const DashboardCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; footer?: string; }> = ({ title, value, icon, footer }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
            </div>
            <div className="w-10 h-10 bg-[#b58e31]/10 text-[#b58e31] rounded-full flex items-center justify-center">
                <IconWrapper className="w-5 h-5">{icon}</IconWrapper>
            </div>
        </div>
        {footer && <p className="text-xs text-gray-400 mt-4">{footer}</p>}
    </div>
);

const EmptyState: React.FC<{ icon: React.ReactNode; title: string; description: string; actionButton?: React.ReactNode; }> = ({ icon, title, description, actionButton }) => (
    <div className="text-center py-16 px-6 bg-white rounded-lg shadow-sm">
        <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconWrapper className="w-8 h-8">{icon}</IconWrapper>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 mt-2 mb-6 max-w-md mx-auto">{description}</p>
        {actionButton}
    </div>
);

const ClientDashboardOverviewView: React.FC<{ accountType: 'individual' | 'business', isEmpty: boolean, onCreateShipment: () => void, onNewPreAlert: () => void, onTopUp: () => void, onNewTicket: () => void }> = ({ accountType, isEmpty, onCreateShipment, onNewPreAlert, onTopUp, onNewTicket }) => {
    if (isEmpty) {
        return <EmptyState 
            icon={<IconDashboard />}
            title={`Welcome to your ${accountType} dashboard!`}
            description="This is your command center for all your logistics needs. To get started, create your first shipment."
            actionButton={<Button primary onClick={onCreateShipment}>Create Your First Shipment</Button>}
        />
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="Active Shipments" value={CLIENT_SHIPMENTS_DATA.filter(s => s.status !== 'Delivered').length} icon={<IconBoxSeam />} footer="+1 this week" />
                <DashboardCard title="Wallet (GBP)" value={`£${WALLET_TRANSACTIONS_DATA.reduce((acc, t) => acc + (parseFloat(t.gbp || '0')), 0).toFixed(2)}`} icon={<IconWallet2 />} footer="Last transaction: 3 Nov" />
                <DashboardCard title="Wallet (NGN)" value={`₦${WALLET_TRANSACTIONS_DATA.reduce((acc, t) => acc + (parseFloat(t.ngn || '0')), 0).toLocaleString()}`} icon={<IconWallet2 />} footer="Last transaction: 28 Oct" />
                <DashboardCard title="Pending Pre-Alerts" value={CLIENT_PREALERTS_DATA.filter(p => p.status === 'Pending Arrival').length} icon={<IconBell />} footer="1 arrived today" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Shipments</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {CLIENT_SHIPMENTS_DATA.slice(0, 3).map(shipment => (
                                    <tr key={shipment.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#00529b]">{shipment.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.destination}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{shipment.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={onCreateShipment} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors"><IconWrapper className="w-8 h-8 mx-auto mb-2 text-[#00529b]"><IconTruck /></IconWrapper><span className="text-sm font-medium">New Shipment</span></button>
                        <button onClick={onNewPreAlert} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors"><IconWrapper className="w-8 h-8 mx-auto mb-2 text-[#00529b]"><IconBell /></IconWrapper><span className="text-sm font-medium">New Pre-Alert</span></button>
                        <button onClick={onTopUp} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors"><IconWrapper className="w-8 h-8 mx-auto mb-2 text-[#00529b]"><IconWallet2 /></IconWrapper><span className="text-sm font-medium">Top Up Wallet</span></button>
                        <button onClick={onNewTicket} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors"><IconWrapper className="w-8 h-8 mx-auto mb-2 text-[#00529b]"><IconHeadset /></IconWrapper><span className="text-sm font-medium">Contact Support</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ClientDashboardShipmentsView: React.FC<{isEmpty: boolean, onCreateShipment: () => void}> = ({ isEmpty, onCreateShipment }) => {
    const [selectedShipment, setSelectedShipment] = useState<DetailedClientShipment | null>(CLIENT_SHIPMENT_DETAILS_DATA[CLIENT_SHIPMENTS_DATA[0]?.id]);

    if (isEmpty) {
        return <EmptyState 
            icon={<IconBoxSeam />}
            title="No shipments yet"
            description="All your created shipments will appear here. Let's get your first package on its way!"
            actionButton={<Button primary onClick={onCreateShipment}>Create New Shipment</Button>}
        />
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">All Shipments</h3>
                <Button primary onClick={onCreateShipment}><IconWrapper className="w-4 h-4 inline-block mr-2 -mt-1"><IconTruck /></IconWrapper>Create New Shipment</Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 h-96 overflow-y-auto pr-2">
                    <ul className="space-y-2">
                        {CLIENT_SHIPMENTS_DATA.map(s => (
                             <li key={s.id} onClick={() => setSelectedShipment(CLIENT_SHIPMENT_DETAILS_DATA[s.id])}
                                className={`p-3 rounded-lg cursor-pointer transition-colors ${selectedShipment?.id === s.id ? 'bg-[#00529b] text-white' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                <p className={`font-bold ${selectedShipment?.id === s.id ? 'text-white' : 'text-[#00529b]'}`}>{s.id}</p>
                                <p className="text-sm">{s.origin} to {s.destination}</p>
                                <p className="text-xs mt-1">{s.status}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:col-span-2">
                    {selectedShipment ? (
                        <div className="p-4 border rounded-lg h-full">
                            <h4 className="text-xl font-bold mb-4 text-gray-800">{selectedShipment.id}</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                                <p><strong>Service:</strong> {selectedShipment.service}</p>
                                <p><strong>Weight:</strong> {selectedShipment.weight}</p>
                                <p><strong>Origin:</strong> {selectedShipment.origin}</p>
                                <p><strong>Destination:</strong> {selectedShipment.destination}</p>
                            </div>
                            <h5 className="font-semibold mb-2 text-gray-700">Milestones</h5>
                            <ul className="border-l-2 border-gray-200 pl-4 space-y-4">
                                {selectedShipment.milestones.map((m, i) => (
                                     <li key={i} className="relative">
                                         <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 ${i===0 ? 'bg-[#00529b]' : 'bg-gray-400'} rounded-full ring-4 ring-white`}></div>
                                        <p className="font-medium text-gray-800">{m.status} - {m.location}</p>
                                        <p className="text-xs text-gray-500">{m.date} @ {m.time}</p>
                                        {m.notes && <p className="text-xs text-red-500 mt-1">{m.notes}</p>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : <p className="flex items-center justify-center h-full text-gray-500">Select a shipment to view details.</p>}
                </div>
            </div>
        </div>
    );
};

// ... other client dashboard views are unchanged and omitted for brevity ...
export const ClientDashboardPage: React.FC = () => {
    const location = useLocation();
    const [activeView, setActiveView] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    // This is a placeholder; in a real app, this would come from auth context.
    const accountType = (location.state as any)?.accountType || 'individual';
    const isBusiness = accountType === 'business';
    const isEmpty = false; // Set to true to test empty states

    const baseMenuItems = [
        { id: 'overview', label: 'Dashboard', icon: <IconDashboard /> },
        { id: 'shipments', label: 'Shipments', icon: <IconBoxSeam /> },
        { id: 'pre-alerts', label: 'Pre-Alerts', icon: <IconBell /> },
        { id: 'invoices', label: 'Invoices', icon: <IconReceipt /> },
        { id: 'wallet', label: 'Wallet', icon: <IconWallet2 /> },
        { id: 'addresses', label: 'Address Book', icon: <IconGeoAlt /> },
        { id: 'support', label: 'Support', icon: <IconHeadset /> },
    ];

    const businessMenuItems = [
        { id: 'team', label: 'Team', icon: <IconUserPlus /> },
        { id: 'reports', label: 'Reports', icon: <IconFileEarmarkSpreadsheet /> },
        { id: 'api', label: 'API & Webhooks', icon: <IconCodeSlash /> },
    ];

    const menuItems = isBusiness ? [...baseMenuItems.slice(0, 6), ...businessMenuItems, ...baseMenuItems.slice(6)] : baseMenuItems;
    
    const handleNavigation = (viewId: string) => {
        setActiveView(viewId);
        setIsSidebarOpen(false); // Close sidebar on navigation
    };

    const renderView = () => {
        // Dummy components for brevity
        const PlaceholderView: React.FC<{title: string}> = ({title}) => <div className="bg-white p-6 rounded-lg shadow-sm">This is the {title} view.</div>;
        
        switch (activeView) {
            case 'overview': return <ClientDashboardOverviewView accountType={accountType} isEmpty={isEmpty} onCreateShipment={() => setActiveView('shipments')} onNewPreAlert={() => setActiveView('pre-alerts')} onTopUp={() => setActiveView('wallet')} onNewTicket={() => setActiveView('support')} />;
            case 'shipments': return <ClientDashboardShipmentsView isEmpty={isEmpty} onCreateShipment={() => alert('New Shipment form would open.')} />;
            case 'pre-alerts': return <PlaceholderView title="Pre-Alerts" />;
            case 'invoices': return <PlaceholderView title="Invoices" />;
            case 'wallet': return <PlaceholderView title="Wallet" />;
            case 'addresses': return <PlaceholderView title="Address Book" />;
            case 'support': return <PlaceholderView title="Support" />;
            case 'team': return isBusiness ? <PlaceholderView title="Team Management" /> : null;
            case 'reports': return isBusiness ? <PlaceholderView title="Reports" /> : null;
            case 'api': return isBusiness ? <PlaceholderView title="API & Webhooks" /> : null;
            default: return <ClientDashboardOverviewView accountType={accountType} isEmpty={isEmpty} onCreateShipment={() => setActiveView('shipments')} onNewPreAlert={() => setActiveView('pre-alerts')} onTopUp={() => setActiveView('wallet')} onNewTicket={() => setActiveView('support')} />;
        }
    };

    const pageTitle = menuItems.find(item => item.id === activeView)?.label || 'Dashboard';
    
    return (
        <div className="flex h-screen bg-gray-100 font-sans">
             {/* Sidebar */}
            <aside className={`absolute lg:relative z-20 h-full w-64 bg-slate-800 text-slate-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                <div className="p-4 border-b border-slate-700">
                     <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="h-10"/></Link>
                </div>
                <nav className="py-4">
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id}>
                                <button onClick={() => handleNavigation(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${activeView === item.id ? 'bg-slate-700 text-white' : 'hover:bg-slate-700/50'}`}>
                                    <IconWrapper className="w-5 h-5">{item.icon}</IconWrapper>
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm flex items-center justify-between p-4">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">{pageTitle}</h1>
                    <div className="flex items-center gap-4">
                        <button className="relative text-gray-600 hover:text-[#00529b]">
                            <IconWrapper className="w-6 h-6"><IconBell/></IconWrapper>
                            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button onClick={() => alert('Navigate to account page')} className="flex items-center gap-2">
                             <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="h-8 w-8 rounded-full"/>
                             <span className="hidden sm:inline text-sm font-medium">{isBusiness ? 'Bola Adeyemi' : 'Chioma Okoro'}</span>
                        </button>
                        <Link to="/" className="text-sm text-gray-500 hover:text-[#00529b]">Exit</Link>
                    </div>
                </header>
                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

// --- START: ADMIN DASHBOARD VIEWS & PAGE ---

const AdminStatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; change?: string; }> = ({ title, value, icon, change }) => (
    <div className="bg-white p-5 rounded-lg shadow-sm">
        <div className="flex items-center">
            <div className="w-12 h-12 bg-[#00529b]/10 text-[#00529b] rounded-full flex items-center justify-center mr-4">
                <IconWrapper className="w-6 h-6">{icon}</IconWrapper>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
        {change && <p className="text-xs text-green-500 mt-2">{change} from last month</p>}
    </div>
);

const AdminDashboardOverviewView: React.FC<{ onViewAll: (view: string) => void }> = ({ onViewAll }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AdminStatCard title="Total Revenue" value={`£${ADMIN_ANALYTICS_DATA.totalRevenue.toLocaleString()}`} icon={<IconGraphUpArrow />} change="+5.2%" />
                <AdminStatCard title="Total Shipments" value={ALL_SHIPMENTS_MOCK_DATA.length} icon={<IconBoxSeam />} change="+12 shipments" />
                <AdminStatCard title="New Clients" value={ADMIN_ANALYTICS_DATA.newClients} icon={<IconUserPlus />} change="+3" />
                <AdminStatCard title="Pending Issues" value={ADMIN_ANALYTICS_DATA.pendingIssues} icon={<IconBellFill />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Shipments</h3>
                    <table className="min-w-full">
                        <thead className="border-b-2 border-gray-100"><tr>
                            <th className="text-left text-sm font-medium text-gray-500 pb-2">ID</th>
                            <th className="text-left text-sm font-medium text-gray-500 pb-2">Client</th>
                            <th className="text-left text-sm font-medium text-gray-500 pb-2">Status</th>
                        </tr></thead>
                        <tbody>
                            {ALL_SHIPMENTS_MOCK_DATA.slice(0, 5).map(s => (
                                <tr key={s.id} className="border-b border-gray-100"><td className="py-3 text-sm">{s.id}</td><td className="py-3 text-sm">{s.clientId}</td><td className="py-3 text-sm">{s.status}</td></tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={() => onViewAll('shipments')} className="text-sm font-medium text-[#00529b] hover:underline mt-4">View all shipments →</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Wallet Requests</h3>
                    <ul className="space-y-3">
                        {ADMIN_WALLET_REQUESTS_DATA.filter(w => w.status === 'Pending').map(w => (
                            <li key={w.id} className="flex justify-between items-center text-sm">
                                <div><p className="font-medium">{w.clientName}</p><p className="text-gray-500">{w.type} of {w.currency}{w.amount}</p></div>
                                <button className="text-green-600 hover:underline">Approve</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => onViewAll('finance')} className="text-sm font-medium text-[#00529b] hover:underline mt-4">Manage requests →</button>
                </div>
            </div>
        </div>
    );
};

const AdminDashboardShipmentsView: React.FC = () => {
    const [shipments, setShipments] = useState(ALL_SHIPMENTS_MOCK_DATA);
    const [selectedShipment, setSelectedShipment] = useState<TrackingData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleViewDetails = (shipment: TrackingData) => {
        setSelectedShipment(shipment);
        setIsModalOpen(true);
    };

    const handleUpdateMilestone = (shipmentId: string, newMilestone: Milestone) => {
        setShipments(prevShipments => prevShipments.map(s => 
            s.id === shipmentId ? { ...s, milestones: [newMilestone, ...s.milestones], status: newMilestone.status, badge: "bg-[#17a2b8] text-white" } : s
        ));
        setSelectedShipment(prev => prev ? { ...prev, milestones: [newMilestone, ...prev.milestones], status: newMilestone.status, badge: "bg-[#17a2b8] text-white" } : null);
    };
    
    const MilestoneEditor: React.FC<{ shipment: TrackingData, onUpdate: (shipmentId: string, milestone: Milestone) => void }> = ({ shipment, onUpdate }) => {
        const [status, setStatus] = useState('');
        const [location, setLocation] = useState('');
        const [notes, setNotes] = useState('');

        const handleAdd = () => {
            if (!status || !location) return;
            onUpdate(shipment.id, { date: Date.now(), status, location, notes });
            setStatus(''); setLocation(''); setNotes('');
        };
        
        return (
            <div className="mt-6 border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Add New Milestone</h4>
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} className="p-2 border rounded-md" />
                    <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="p-2 border rounded-md" />
                    <textarea placeholder="Internal Notes (Optional)" value={notes} onChange={e => setNotes(e.target.value)} className="col-span-2 p-2 border rounded-md" rows={2}></textarea>
                </div>
                <AdminButton primary onClick={handleAdd} className="mt-2">Add Milestone</AdminButton>
            </div>
        );
    };
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Manage Shipments</h3>
            <Table 
                headers={[ {key: 'id', label: 'ID'}, {key: 'client', label: 'Client'}, {key: 'origin', label: 'Origin'}, {key: 'destination', label: 'Destination'}, {key: 'status', label: 'Status'}, {key: 'actions', label: 'Actions'} ]}
                data={shipments}
                renderRow={(s: TrackingData) => (
                    <tr key={s.id}>
                        <td className="py-3 px-4 text-sm font-medium text-[#00529b]">{s.id}</td>
                        <td className="py-3 px-4 text-sm">{s.clientId}</td>
                        <td className="py-3 px-4 text-sm">{s.origin}</td>
                        <td className="py-3 px-4 text-sm">{s.destination}</td>
                        <td className="py-3 px-4 text-sm"><span className={`px-2 py-1 text-xs font-semibold rounded-full ${s.badge}`}>{s.status}</span></td>
                        <td className="py-3 px-4 text-sm"><AdminButton onClick={() => handleViewDetails(s)}>Manage</AdminButton></td>
                    </tr>
                )}
            />
            
            {selectedShipment && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Manage Shipment: ${selectedShipment.id}`}>
                   <h4 className="font-semibold text-gray-800 mb-2">Current Milestones</h4>
                   <ul className="space-y-2 max-h-60 overflow-y-auto">
                       {selectedShipment.milestones.map((m, i) => (
                           <li key={i} className="text-sm pb-2 border-b last:border-0">
                               <p className="font-medium">{new Date(m.date).toLocaleString()} - {m.status}</p>
                               <p className="text-gray-600">{m.location}</p>
                               {m.notes && <p className="text-xs text-blue-600">Note: {m.notes}</p>}
                           </li>
                       ))}
                   </ul>
                   <MilestoneEditor shipment={selectedShipment} onUpdate={handleUpdateMilestone} />
                </Modal>
            )}
        </div>
    );
};

const AdminDashboardClientsView: React.FC = () => {
    const [selectedClient, setSelectedClient] = useState<User | null>(null);
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm h-full overflow-y-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">All Clients</h3>
                <ul className="space-y-2">
                    {ALL_USERS_DATA.filter(u => u.accountType === 'Client').map(client => (
                        <li key={client.id} onClick={() => setSelectedClient(client)} className={`p-3 rounded-lg cursor-pointer ${selectedClient?.id === client.id ? 'bg-[#00529b] text-white' : 'bg-slate-50 hover:bg-slate-100'}`}>
                            <p className="font-bold">{client.name}</p>
                            <p className="text-sm">{client.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm h-full overflow-y-auto">
                {selectedClient ? (
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{selectedClient.name}</h3>
                        <p className="text-gray-500">{selectedClient.email}</p>
                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-700 mb-2">Recent Shipments</h4>
                            <ul className="text-sm space-y-1">
                                {ALL_SHIPMENTS_MOCK_DATA.filter(s => s.clientId === selectedClient.id).slice(0, 3).map(s => (
                                    <li key={s.id} className="flex justify-between p-2 bg-slate-50 rounded-md"><span>{s.id}</span> <span>{s.status}</span></li>
                                ))}
                            </ul>
                             <h4 className="font-semibold text-gray-700 mt-4 mb-2">Recent Support Tickets</h4>
                             <ul className="text-sm space-y-1">
                                {SUPPORT_TICKETS_DATA.filter(t => t.clientId === selectedClient.id).map(t => (
                                    <li key={t.id} className="flex justify-between p-2 bg-slate-50 rounded-md"><span>{t.subject}</span> <span>{t.status}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-500">Select a client to view their 360° profile.</div>
                )}
            </div>
        </div>
    );
};

const AdminDashboardSupportView: React.FC = () => {
    const [tickets, setTickets] = useState(SUPPORT_TICKETS_DATA);
    const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);

    const handleReply = (ticketId: string, replyText: string) => {
        if(!replyText) return;
        const newReply = { sender: 'Support' as 'Support', text: replyText, timestamp: new Date().toLocaleString() };
        
        const updateState = (items: SupportTicket[]) => items.map(t => 
            t.id === ticketId ? { ...t, messages: [...t.messages, newReply], status: 'Pending' as 'Pending' } : t
        );

        setTickets(updateState);
        setSelectedTicket(prev => prev ? updateState([prev])[0] : null);
        (document.getElementById('reply') as HTMLTextAreaElement).value = '';
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm h-full overflow-y-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Queue</h3>
                <ul className="space-y-2">
                    {tickets.map(ticket => (
                        <li key={ticket.id} onClick={() => setSelectedTicket(ticket)} className={`p-3 rounded-lg cursor-pointer ${selectedTicket?.id === ticket.id ? 'bg-[#00529b] text-white' : 'bg-slate-50 hover:bg-slate-100'}`}>
                            <p className="font-bold">{ticket.subject}</p>
                            <p className="text-sm">{ticket.clientName} - {ticket.id}</p>
                            <p className="text-xs mt-1">{ticket.status}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
                {selectedTicket ? (
                    <>
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-xl font-bold text-gray-800">{selectedTicket.subject}</h3>
                            <p className="text-sm text-gray-500">From: {selectedTicket.clientName} | Status: {selectedTicket.status}</p>
                        </div>
                        <div className="flex-1 space-y-4 overflow-y-auto pr-2 mb-4">
                            {selectedTicket.messages.map((msg, i) => (
                                <div key={i} className={`p-3 rounded-lg ${msg.sender === 'Client' ? 'bg-slate-100' : 'bg-blue-100'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                    <p className="text-xs text-gray-500 text-right mt-1">{msg.timestamp}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <textarea id="reply" rows={4} className="w-full p-2 border rounded-md" placeholder="Type your reply..."></textarea>
                            <AdminButton primary className="mt-2" onClick={() => handleReply(selectedTicket.id, (document.getElementById('reply') as HTMLTextAreaElement).value)}>Send Reply</AdminButton>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-500">Select a ticket to view and reply.</div>
                )}
            </div>
        </div>
    );
};

const AdminDashboardReportsView: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Reports & Analytics</h3>
                <AdminButton primary><IconWrapper className="w-4 h-4 inline-block -mt-1 mr-2"><IconFileEarmarkSpreadsheet/></IconWrapper>Download CSV</AdminButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <DashboardCard title="Total Revenue" value={`£${ADMIN_ANALYTICS_DATA.totalRevenue.toLocaleString()}`} icon={<IconGraphUpArrow />} footer="+5.2% this month" />
                 <DashboardCard title="Shipments this Month" value={28} icon={<IconBoxSeam />} footer="+12% this month" />
                 <DashboardCard title="Avg. Delivery Time" value={"4.2 Days"} icon={<IconClock />} footer="-0.5 days this month" />
                 <DashboardCard title="Client Growth" value={12} icon={<IconUserPlus />} footer="+3 new clients" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-4">Revenue by Service</h4>
                <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
                    <p className="text-gray-500">Chart Placeholder</p>
                </div>
            </div>
        </div>
    )
};

const AdminDashboardSettingsView: React.FC = () => {
    const [activeSetting, setActiveSetting] = useState<string | null>(null);

    // Existing states for forms
    const [gatewaySettings, setGatewaySettings] = useState<PaymentGatewaySettings>(MOCK_PAYMENT_GATEWAY_SETTINGS);
    const [shippingRates, setShippingRates] = useState<ShippingRate[]>(ADMIN_SHIPPING_RATES_DATA);

    // Existing handlers for forms
    const handleGatewayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const [gateway, key] = name.split('.');
        setGatewaySettings(prev => ({ ...prev, [gateway]: { ...prev[gateway as keyof PaymentGatewaySettings], [key]: value } }));
    };

    const handleSaveGateways = () => {
        alert('Payment gateway settings saved!');
        console.log(gatewaySettings);
    };

    // Card component
    const SettingsCard: React.FC<{ title: string; description: string; icon: React.ReactNode; onClick: () => void; }> = ({ title, description, icon, onClick }) => (
        <button onClick={onClick} className="bg-white p-6 rounded-lg shadow-sm text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00529b]">
            <div className="w-12 h-12 bg-[#00529b]/10 text-[#00529b] rounded-full flex items-center justify-center mb-4">
                <IconWrapper className="w-6 h-6">{icon}</IconWrapper>
            </div>
            <h4 className="font-bold text-lg text-gray-800">{title}</h4>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
        </button>
    );

    // Settings data for cards
    const settingsCards = [
        { id: 'financials', title: 'Financial', description: 'Manage payment gateways like Stripe and Paystack.', icon: <IconCreditCard /> },
        { id: 'shippingRates', title: 'Shipping Rates', description: 'Configure shipping costs, zones, and options.', icon: <IconTruck /> },
        { id: 'roles', title: 'Roles & Permissions', description: 'Manage admin user accounts and their permissions.', icon: <IconShieldLock /> },
        { id: 'notifications', title: 'Notifications', description: 'Configure system alerts and client email templates.', icon: <IconBellFill /> },
        { id: 'workflows', title: 'Workflows', description: 'Automate tasks like post-delivery feedback emails.', icon: <IconRecycle /> },
        { id: 'api', title: 'API & Integrations', description: 'Manage API keys and webhook endpoints for integrations.', icon: <IconPlug /> },
        { id: 'security', title: 'Security', description: 'Update password policies and manage 2FA settings.', icon: <IconKey /> },
    ];

    // Placeholder for unimplemented views
    const PlaceholderSettingView: React.FC<{title: string}> = ({title}) => (
        <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
            <div className="p-8 border-2 border-dashed rounded-md bg-gray-50 text-center text-gray-500">
                This feature is a placeholder and has not been implemented.
            </div>
        </div>
    );
    
    // Renders the specific settings view based on activeSetting
    const renderSettingView = () => {
        switch(activeSetting) {
            case 'financials':
                return (
                    <div className="max-w-2xl">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Gateway Configuration</h3>
                         <div className="space-y-6">
                            <div className="p-4 border rounded-md">
                                <h4 className="font-semibold text-gray-700 mb-2">Stripe</h4>
                                <div className="space-y-2">
                                    <FormInput name="stripe.publicKey" label="Public Key" value={gatewaySettings.stripe.publicKey} onChange={handleGatewayChange} />
                                    <FormInput name="stripe.secretKey" label="Secret Key" type="password" value={gatewaySettings.stripe.secretKey} onChange={handleGatewayChange} />
                                </div>
                            </div>
                             <div className="p-4 border rounded-md">
                                <h4 className="font-semibold text-gray-700 mb-2">Paystack</h4>
                                <div className="space-y-2">
                                    <FormInput name="paystack.publicKey" label="Public Key" value={gatewaySettings.paystack.publicKey} onChange={handleGatewayChange} />
                                    <FormInput name="paystack.secretKey" label="Secret Key" type="password" value={gatewaySettings.paystack.secretKey} onChange={handleGatewayChange} />
                                </div>
                            </div>
                             <div className="p-4 border rounded-md">
                                <h4 className="font-semibold text-gray-700 mb-2">PayPal</h4>
                                <div className="space-y-2">
                                    <FormInput name="paypal.clientId" label="Client ID" value={gatewaySettings.paypal.clientId} onChange={handleGatewayChange} />
                                </div>
                            </div>
                            <AdminButton primary onClick={handleSaveGateways}>Save Financial Settings</AdminButton>
                        </div>
                    </div>
                );
            case 'shippingRates':
                return (
                     <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Manage Shipping Rates</h3>
                        <Table
                            headers={[ {key: 'serviceName', label: 'Service'}, {key: 'route', label: 'Route'}, {key: 'basePrice', label: 'Base Price'}, {key: 'pricePerKg', label: 'Price/kg'}, {key: 'actions', label: 'Actions'} ]}
                            data={shippingRates}
                            renderRow={(rate: ShippingRate) => (
                                 <tr key={rate.id}>
                                    <td className="py-3 px-4 text-sm font-medium">{rate.serviceName}</td>
                                    <td className="py-3 px-4 text-sm">{rate.origin} → {rate.destination}</td>
                                    <td className="py-3 px-4 text-sm">£{rate.basePrice.toFixed(2)}</td>
                                    <td className="py-3 px-4 text-sm">£{rate.pricePerKg.toFixed(2)}</td>
                                    <td className="py-3 px-4 text-sm"><AdminButton>Edit</AdminButton></td>
                                 </tr>
                            )}
                        />
                    </div>
                );
            case 'roles': return <PlaceholderSettingView title="Roles & Permissions" />;
            case 'notifications': return <PlaceholderSettingView title="Notifications & Alerts" />;
            case 'workflows': return <PlaceholderSettingView title="Workflows" />;
            case 'api': return <PlaceholderSettingView title="API & Integrations" />;
            case 'security': return <PlaceholderSettingView title="Security" />;
            default:
                return <div>Setting not found. Please go back.</div>;
        }
    };

    if (activeSetting) {
        const currentSetting = settingsCards.find(s => s.id === activeSetting);
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-6 border-b pb-4">
                    <button onClick={() => setActiveSetting(null)} className="p-2 rounded-full hover:bg-gray-100 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                    <div>
                         <h2 className="text-xl font-bold text-gray-800">{currentSetting?.title}</h2>
                         <p className="text-sm text-gray-500">{currentSetting?.description}</p>
                    </div>
                </div>
                {renderSettingView()}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
            <p className="text-gray-600">Manage your application's configuration, financial settings, and operational parameters.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {settingsCards.map(card => (
                    <SettingsCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        onClick={() => setActiveSetting(card.id)}
                    />
                ))}
            </div>
        </div>
    );
};
const AdminDashboardContentView: React.FC = () => {
    const [activeTab, setActiveTab] = useState('hero');
    const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(HERO_SLIDES);
    const [faqs, setFaqs] = useState<FaqItemData[]>(FAQ_DATA);
    const [services, setServices] = useState<Service[]>(ALL_SERVICES);
    const [pageContent, setPageContent] = useState(MANAGEABLE_PAGES_CONTENT);
    const [siteConfig, setSiteConfig] = useState<SiteConfig>(SITE_CONFIG);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<HeroSlide | FaqItemData | Service | null>(null);
    const [modalType, setModalType] = useState<'hero' | 'faq' | 'service' | null>(null);
    
    const [editingPage, setEditingPage] = useState<keyof typeof MANAGEABLE_PAGES_CONTENT | null>(null);

    const handleSavePage = (pageKey: keyof typeof MANAGEABLE_PAGES_CONTENT, newContent: string) => {
        // In a real app, this would also update the React.ReactNode version or have a parser
        setPageContent(prev => ({...prev, [pageKey]: {...prev[pageKey], rawContent: newContent}}));
        setEditingPage(null);
        alert(`${pageContent[pageKey].title} page saved!`);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Website Content Management</h3>
             <div className="border-b">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button onClick={() => setActiveTab('pages')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'pages' ? 'border-[#00529b] text-[#00529b]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Manageable Pages</button>
                </nav>
            </div>
            <div className="py-6">
                {editingPage ? (
                     <div>
                        <h4 className="text-xl font-bold mb-4">Editing: {pageContent[editingPage].title}</h4>
                        <FormTextarea 
                            name="pageContent" 
                            label="Page Content (HTML)" 
                            value={pageContent[editingPage].rawContent || ''} 
                            onChange={(e) => setPageContent(prev => ({...prev, [editingPage]: {...prev[editingPage], rawContent: e.target.value}}))}
                            rows={20}
                        />
                        <div className="flex gap-2 mt-4">
                            <AdminButton primary onClick={() => handleSavePage(editingPage, pageContent[editingPage].rawContent || '')}>Save Page</AdminButton>
                            <AdminButton secondary onClick={() => setEditingPage(null)}>Cancel</AdminButton>
                        </div>
                    </div>
                ) : (
                    <ul className="space-y-3">
                        {/* FIX: Use Object.keys to iterate for better type inference and avoid 'unknown' type on page object. */}
                        {Object.keys(pageContent).map((key) => {
                            const pageKey = key as keyof typeof MANAGEABLE_PAGES_CONTENT;
                            const page = pageContent[pageKey];
                            return (
                                <li key={key} className="p-4 border rounded-md flex justify-between items-center">
                                    <div>
                                        <h5 className="font-semibold text-gray-800">{page.title}</h5>
                                        <p className="text-sm text-gray-500">/{key === 'terms' ? 'terms' : key}</p>
                                    </div>
                                    <AdminButton onClick={() => setEditingPage(pageKey)}>Edit</AdminButton>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};
export const AdminDashboardPage: React.FC = () => {
    const [activeView, setActiveView] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: <IconDashboard /> },
        { id: 'shipments', label: 'Shipments', icon: <IconTruck /> },
        { id: 'clients', label: 'Clients', icon: <IconPersonCircle /> },
        { id: 'support', label: 'Support Tickets', icon: <IconHeadset /> },
        { id: 'finance', label: 'Finance', icon: <IconReceipt /> },
        { id: 'reports', label: 'Reports', icon: <IconGraphUpArrow /> },
        { id: 'content', label: 'Content Mgmt', icon: <IconPencilSquare /> },
        { id: 'settings', label: 'Settings', icon: <IconSettings /> },
    ];
    
     const handleNavigation = (viewId: string) => {
        setActiveView(viewId);
        setIsSidebarOpen(false);
    };

    const PlaceholderView: React.FC<{title: string}> = ({title}) => (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
            <div className="p-8 border-2 border-dashed rounded-md bg-gray-50 text-center text-gray-500">
                This feature is a placeholder and has not been implemented.
            </div>
        </div>
    );

    const renderView = () => {
        switch (activeView) {
            case 'overview':
                return <AdminDashboardOverviewView onViewAll={setActiveView} />;
            case 'shipments':
                return <AdminDashboardShipmentsView />;
            case 'clients':
                return <AdminDashboardClientsView />;
            case 'support':
                return <AdminDashboardSupportView />;
            case 'reports':
                return <AdminDashboardReportsView />;
            case 'settings':
                return <AdminDashboardSettingsView />;
            case 'content':
                return <AdminDashboardContentView />;
            case 'finance':
                return <PlaceholderView title="Finance" />;
            default:
                return <AdminDashboardOverviewView onViewAll={setActiveView} />;
        }
    };
    
    const pageTitle = menuItems.find(item => item.id === activeView)?.label || 'Dashboard';

    return (
        <div className="flex h-screen bg-slate-100 font-sans">
            {/* Sidebar */}
            <aside className={`absolute lg:relative z-20 h-full w-64 bg-slate-900 text-slate-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                     <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="h-10"/></Link>
                </div>
                <nav className="py-4">
                    <ul>
                         {menuItems.map(item => (
                            <li key={item.id}>
                                <button onClick={() => handleNavigation(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${activeView === item.id ? 'bg-slate-700 text-white' : 'hover:bg-slate-700/50'}`}>
                                    <IconWrapper className="w-5 h-5">{item.icon}</IconWrapper>
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                 <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
                    <Link to="/" className="text-sm text-slate-400 hover:text-white">← Back to Main Site</Link>
                </div>
            </aside>
            <div className="flex-1 flex flex-col overflow-hidden">
                 {/* Header */}
                <header className="bg-white shadow-sm flex items-center justify-between p-4">
                    <div className="flex items-center">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-600 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <h1 className="text-xl font-bold text-gray-800">{pageTitle}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                         <button className="relative text-gray-600 hover:text-[#00529b]">
                            <IconWrapper className="w-6 h-6"><IconBell/></IconWrapper>
                            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="flex items-center gap-2">
                             <img src="https://i.pravatar.cc/150?u=admin" alt="Admin User" className="h-8 w-8 rounded-full"/>
                             <span className="hidden sm:inline text-sm font-medium">Admin User</span>
                        </button>
                    </div>
                </header>
                 {/* Main Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};
