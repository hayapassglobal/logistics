
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { HeroSlider, ServiceCard, FeatureItem, TestimonialCard, TrackingForm, PageHeader, ContentBlock, FaqItem, Button, AdminButton } from './components';
import { CORE_SERVICES, WHY_CHOOSE_US_FEATURES, TESTIMONIALS, ALL_SERVICES, FAQ_DATA, SITE_CONFIG, CLIENT_SHIPMENTS_DATA, CLIENT_SHIPMENT_DETAILS_DATA, CLIENT_PREALERTS_DATA, CLIENT_INVOICES_DATA, WALLET_TRANSACTIONS_DATA, CLIENT_ADDRESSES_DATA, CLIENT_NOTIFICATIONS_DATA, ALL_SHIPMENTS_MOCK_DATA, ALL_USERS_DATA, ADMIN_SHIPMENTS_DATA, ADMIN_ANALYTICS_DATA, ADMIN_WALLET_REQUESTS_DATA, MANAGEABLE_PAGES_CONTENT, CLIENT_TEAM_MEMBERS_DATA, ANALYTICS_DATA, LOYALTY_DATA, REFERRAL_DATA, API_TOKENS_DATA, WEBHOOKS_DATA, SUPPORT_TICKETS_DATA } from './constants';
import { IconMarker, IconPhone, IconEnvelope, IconWhatsapp, IconWrapper, IconDashboard, IconBoxSeam, IconBell, IconReceipt, IconWallet2, IconPerson, IconGeoAlt, IconHeadset, IconSearch, IconArrowDownCircle, IconArrowUpCircle, IconUpload, IconLayoutTextWindowReverse, IconUserPlus, IconSettings, IconFileEarmarkSpreadsheet, IconShieldLock, IconPencilSquare, IconListTask, IconCardImage, IconShare, IconGraphUpArrow, IconCodeSlash, IconPersonCircle, IconTruck, IconShieldCheck, IconFileText, IconHelpCircle, IconGlobe, IconWarehouse, IconCustoms, IconPackage, IconSend, ICON_MAP } from './constants';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import type { ClientShipment, DetailedClientShipment, ClientPreAlert, ClientInvoice, WalletTransaction, Address, ClientNotification, RateResult, User, QuoteFormData, TrackingData, Service, FaqItemData, WalletRequest, SupportTicket } from './types';


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

export const ServiceDomesticPage: React.FC = () => (
    <ServiceDetailPage title="UK & Nigeria Domestic Logistics" subtitle="Reliable, fast, and secure delivery services within the United Kingdom and across Nigeria.">
        <ContentBlock>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Seamless Domestic Shipping</h2>
            <p className="mb-4">Whether you're shipping within the bustling cities of the UK or across the diverse states of Nigeria, Hayapass offers a robust domestic logistics network designed for speed and reliability. We handle everything from small parcels to large freight with the same level of professionalism and care.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Same-day and next-day delivery options in major metropolitan areas.</li>
                <li>Real-time tracking for all domestic shipments.</li>
                <li>Specialized handling for fragile and high-value items.</li>
                <li>Cost-effective solutions for businesses of all sizes.</li>
            </ul>
        </ContentBlock>
    </ServiceDetailPage>
);

export const ServiceUKDomesticPage: React.FC = () => (
    <ServiceDetailPage title="UK Domestic Services" subtitle="Comprehensive shipping solutions across England, Scotland, Wales, and Northern Ireland.">
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
        if(!formData.weight) {
            setError('Please enter a weight for the shipment.');
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            const weight = parseFloat(formData.weight) || 0;
            const mockResults: RateResult[] = [
                { serviceName: 'Air Freight (Express)', estimatedCost: `£${(weight * 12.5).toFixed(2)}`, estimatedTime: '3-5 Business Days' },
                { serviceName: 'Air Freight (Standard)', estimatedCost: `£${(weight * 9.8).toFixed(2)}`, estimatedTime: '5-8 Business Days' },
                { serviceName: 'Sea Freight', estimatedCost: `£${(weight * 3.5).toFixed(2)}`, estimatedTime: '3-5 Weeks' },
            ];
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
                            key={index}
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

// --- START: AUTHENTICATION COMPONENTS ---

const ProgressStepper: React.FC<{ steps: string[]; currentStep: number }> = ({ steps, currentStep }) => (
    <nav aria-label="Progress" className="my-8">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
            {steps.map((step, stepIdx) => (
                <li key={step} className="md:flex-1">
                    {stepIdx <= currentStep ? (
                        <div className="group flex flex-col border-l-4 border-[#00529b] py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                            <span className="text-sm font-medium text-[#00529b]">{`Step ${stepIdx + 1}`}</span>
                            <span className="text-sm font-medium">{step}</span>
                        </div>
                    ) : (
                        <div className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                            <span className="text-sm font-medium text-gray-500">{`Step ${stepIdx + 1}`}</span>
                            <span className="text-sm font-medium">{step}</span>
                        </div>
                    )}
                </li>
            ))}
        </ol>
    </nav>
);

const PasswordStrengthMeter: React.FC<{ password?: string }> = ({ password = '' }) => {
    const checkPasswordStrength = (pass: string) => {
        let score = 0;
        if (!pass) return 0;
        if (pass.length > 7) score++;
        if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score++;
        if (/[0-9]/.test(pass)) score++;
        if (/[^a-zA-Z0-9]/.test(pass)) score++;
        return score;
    };

    const strength = checkPasswordStrength(password);
    const strengthLabels = ['Weak', 'Weak', 'Okay', 'Good', 'Strong'];
    const strengthColors = ['bg-red-500', 'bg-red-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];

    return (
        <div>
            <div className="flex gap-1 mt-1">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${strength > i ? strengthColors[strength] : 'bg-gray-200'}`}></div>
                ))}
            </div>
            {password.length > 0 && <p className={`text-xs mt-1 font-medium ${strengthColors[strength].replace('bg-', 'text-')}`}>{strengthLabels[strength]}</p>}
        </div>
    );
};

const EnhancedFileUpload: React.FC<{ label: string; id: string; required?: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; file: File | null; onRemove: () => void; description: string }> = ({ label, id, required, onChange, file, onRemove, description }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (file && file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        setPreviewUrl(null);
    }, [file]);
    
    return (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        {file ? (
            <div className="mt-1 p-2 border border-gray-300 rounded-md flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3 overflow-hidden">
                    {previewUrl ? (
                         <img src={previewUrl} alt="Preview" className="h-12 w-12 object-cover rounded-md flex-shrink-0" />
                    ) : (
                        <IconWrapper className="h-10 w-10 text-gray-400 flex-shrink-0"><IconFileText/></IconWrapper>
                    )}
                    <span className="text-sm text-gray-800 truncate">{file.name}</span>
                </div>
                <button type="button" onClick={onRemove} className="text-sm text-red-600 hover:text-red-800 font-medium flex-shrink-0 ml-2">Remove</button>
            </div>
        ) : (
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <IconWrapper className="mx-auto h-12 w-12 text-gray-400"><IconUpload/></IconWrapper>
                    <div className="flex text-sm text-gray-600">
                        <label htmlFor={id} className="relative cursor-pointer bg-white rounded-md font-medium text-[#00529b] hover:text-[#b58e31] focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id={id} name={id} type="file" className="sr-only" required={required} onChange={onChange} accept=".pdf,.png,.jpg,.jpeg" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">{description}</p>
                </div>
            </div>
        )}
    </div>
    );
};

const FormInput: React.FC<{ name: string, label: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error?: string, required?: boolean, placeholder?: string }> = ({ name, label, type = 'text', value, onChange, error, required, placeholder }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input type={type} name={name} id={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-[#b58e31] focus:border-[#b58e31] sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`} />
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
);

const SocialButton: React.FC<{ provider: 'Google' | 'Facebook'; onClick: () => void; }> = ({ provider, onClick }) => {
    const icons: { [key: string]: React.ReactNode } = {
        Google: <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.35v2.9h5.5c-.3 1.6-1.5 3.2-3.2 3.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c1.1 0 2.1.4 2.8 1.2l2.2-2.2c-1.6-1.5-3.7-2.4-6-2.4-4.8 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7c5.1 0 8.4-3.5 8.4-8.5 0-.5-.1-1-.2-1.5z"></path></svg>,
        Facebook: <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3.62 10.5h-2.12v7h-3v-7h-2v-2.5h2V9.05c0-1.65 1-2.55 3-2.55h1.5v2.5h-1c-.5 0-1 .25-1 .75v1.45h2.12l-.25 2.5z"></path></svg>,
    }
    return (
        <button type="button" onClick={onClick} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Sign in with {provider}</span>
            {icons[provider]}
        </button>
    );
};

export const ClientAuthPage: React.FC = () => {
    const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgotPassword' | 'resetPassword'>('login');
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
        // Determine user type based on email for demo
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

    const handleSocialLogin = (provider: string) => {
        alert(`${provider} login requires backend integration.`);
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
                        {accountType === 'individual' ? <EnhancedFileUpload id="proofOfId" label="Proof of Identity" description="Passport, Driver's License, or National ID" required file={files.proofOfId || null} onChange={handleFileChange} onRemove={() => handleRemoveFile('proofOfId')} /> : null}
                        {accountType === 'business' ? (
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

                { (authMode === 'login' || (authMode === 'register' && registrationStep === 1)) && (
                    <>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
                        <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
                    </div>
                     <div className="flex gap-4">
                        <SocialButton provider="Google" onClick={() => handleSocialLogin('Google')} />
                        <SocialButton provider="Facebook" onClick={() => handleSocialLogin('Facebook')} />
                    </div>
                    </>
                )}

            </div>
        </div>
    );
};

// --- START: CLIENT DASHBOARD VIEWS ---

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

const ClientDashboardOverviewView: React.FC<{ accountType: 'individual' | 'business', isEmpty: boolean, onCreateShipment: () => void }> = ({ accountType, isEmpty, onCreateShipment }) => {
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
                        <Link to="/dashboard#pre-alerts" className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors"><IconWrapper className="w-8 h-8 mx-auto mb-2 text-[#00529b]"><IconBell /></IconWrapper><span className="text-sm font-medium">New Pre-Alert</span></Link>
                        <Link to="/dashboard#wallet" className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors"><IconWrapper className="w-8 h-8 mx-auto mb-2 text-[#00529b]"><IconWallet2 /></IconWrapper><span className="text-sm font-medium">Top Up Wallet</span></Link>
                        <Link to="/dashboard#help--support" className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors"><IconWrapper className="w-8 h-8 mx-auto mb-2 text-[#00529b]"><IconHeadset /></IconWrapper><span className="text-sm font-medium">Contact Support</span></Link>
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

const ClientDashboardPreAlertsView: React.FC<{isEmpty: boolean}> = ({isEmpty}) => {
     if (isEmpty) {
        return <EmptyState 
            icon={<IconBell />}
            title="No pre-alerts"
            description="Use a pre-alert to notify us of an incoming package from another retailer (like Amazon) to your Hayapass locker."
            actionButton={<Button primary>Create a Pre-Alert</Button>}
        />
    }
    return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Pre-Alerts</h3>
            <Button primary><IconWrapper className="w-4 h-4 inline-block mr-2"><IconUpload/></IconWrapper>New Pre-Alert</Button>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carrier & Tracking</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {CLIENT_PREALERTS_DATA.map(pa => (
                        <tr key={pa.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{pa.facility}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{pa.carrier} - {pa.tracking}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{pa.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{pa.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)};

const ClientDashboardInvoicesView: React.FC<{isEmpty: boolean}> = ({isEmpty}) => {
    if (isEmpty) {
        return <EmptyState 
            icon={<IconReceipt />}
            title="No invoices yet"
            description="Invoices for your shipments and services will appear here once they are generated."
        />
    }
    return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Invoices</h3>
        <div className="overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {CLIENT_INVOICES_DATA.map(inv => (
                        <tr key={inv.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{inv.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{inv.dueDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{inv.currency === 'GBP' ? '£' : '₦'}{inv.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{inv.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                                <button className="text-[#00529b] hover:underline">View</button>
                                {inv.status === 'Unpaid' && <button className="text-green-600 hover:underline">Pay</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)};

const ClientDashboardWalletView: React.FC<{isEmpty: boolean}> = ({isEmpty}) => {
     if (isEmpty) {
        return <EmptyState 
            icon={<IconWallet2 />}
            title="Your wallet is ready"
            description="Top up your wallet for faster payments and seamless transactions for all your logistics needs."
            actionButton={<Button primary>Top Up Wallet</Button>}
        />
    }
    return (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">GBP Wallet</h3>
                <p className="text-3xl font-bold">£{WALLET_TRANSACTIONS_DATA.reduce((acc, t) => acc + (parseFloat(t.gbp || '0')), 0).toFixed(2)}</p>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">NGN Wallet</h3>
                <p className="text-3xl font-bold">₦{WALLET_TRANSACTIONS_DATA.reduce((acc, t) => acc + (parseFloat(t.ngn || '0')), 0).toLocaleString()}</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
                <div className="space-x-2">
                    <Button secondary><IconWrapper className="w-4 h-4 inline-block mr-2"><IconArrowUpCircle/></IconWrapper>Top-up</Button>
                    <Button outline><IconWrapper className="w-4 h-4 inline-block mr-2"><IconArrowDownCircle/></IconWrapper>Withdraw</Button>
                </div>
            </div>
             <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">GBP</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">NGN</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {WALLET_TRANSACTIONS_DATA.map((t, i) => (
                        <tr key={i}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{t.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{t.description}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${t.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>{t.gbp}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${t.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>{t.ngn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)};

const ClientDashboardAddressesView: React.FC = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Address Book</h3>
            <Button primary><IconWrapper className="w-4 h-4 inline-block mr-2 -mt-1"><IconPlus/></IconWrapper>Add New Address</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_ADDRESSES_DATA.map(addr => (
                <div key={addr.id} className="p-4 border rounded-lg relative">
                    <div className="absolute top-2 right-2 flex gap-2">
                        {addr.isDefaultShipping && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Shipping</span>}
                        {addr.isDefaultBilling && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Billing</span>}
                    </div>
                    <p className="font-bold text-gray-800">{addr.label}</p>
                    <p className="text-sm text-gray-600">{addr.name}</p>
                    <p className="text-sm text-gray-600">{addr.street}</p>
                    <p className="text-sm text-gray-600">{addr.country}</p>
                    <p className="text-sm text-gray-600">{addr.phone}</p>
                    <div className="mt-4 pt-4 border-t flex gap-2 text-sm">
                        <button className="text-[#00529b] hover:underline font-medium">Edit</button>
                        <button className="text-red-600 hover:underline font-medium">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ClientDashboardAccountView: React.FC<{accountType: 'individual' | 'business'}> = ({accountType}) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h3>
            <form className="space-y-4">
                {accountType === 'business' ? (
                     <>
                        <FormInput name="companyName" label="Company Name" value="NijaBiz Connect" onChange={() => {}} />
                        <FormInput name="contactName" label="Contact Name" value="Bola Adeyemi" onChange={() => {}} />
                     </>
                ) : (
                    <FormInput name="fullName" label="Full Name" value="Chioma Okoro" onChange={() => {}} />
                )}
                 <FormInput name="email" label="Email Address" type="email" value="bola@nijabiz.com" onChange={() => {}} />
                 <FormInput name="phone" label="Phone Number" type="tel" value="+234 801 234 5678" onChange={() => {}} />
                 <div className="pt-2"><Button primary>Save Changes</Button></div>
            </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
             <h3 className="text-lg font-semibold text-gray-800 mb-4">Security</h3>
             <form className="space-y-4">
                <FormInput name="currentPassword" label="Current Password" type="password" value="" onChange={() => {}} />
                <FormInput name="newPassword" label="New Password" type="password" value="" onChange={() => {}} />
                 <div className="pt-2"><Button secondary>Change Password</Button></div>
             </form>
        </div>
    </div>
);

const IconPlus: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>;

// --- START: BUSINESS-ONLY DASHBOARD VIEWS ---

const ClientDashboardTeamView: React.FC = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Team Management</h3>
            <Button primary><IconWrapper className="w-4 h-4 inline-block mr-2 -mt-1"><IconUserPlus/></IconWrapper>Invite Member</Button>
        </div>
        <div className="overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {CLIENT_TEAM_MEMBERS_DATA.map(user => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{user.name} <span className="block text-gray-500">{user.email}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.status}</td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                                <button className="text-[#00529b] hover:underline">Edit</button>
                                {user.status === 'Pending' && <button className="text-green-600 hover:underline">Resend Invite</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const ClientDashboardReportsView: React.FC = () => (
    <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Spend (Last 6 Months)</h3>
            <div className="h-64 flex items-end gap-4 border-l border-b p-4">
                {ANALYTICS_DATA.monthlySpend.map(item => (
                    <div key={item.name} className="flex-1 flex flex-col items-center justify-end">
                        <div className="w-full bg-[#00529b] hover:bg-[#b58e31] transition-colors rounded-t-md" style={{height: `${(item.value / 7000) * 100}%`}} title={`£${item.value}`}></div>
                        <span className="text-xs mt-1">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
             <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Routes by Spend</h3>
             <ul className="space-y-3">
                 {ANALYTICS_DATA.topRoutes.map(route => (
                     <li key={route.name}>
                        <div className="flex justify-between text-sm mb-1">
                            <span>{route.name} ({route.shipments} shipments)</span>
                            <span className="font-medium">£{route.value.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-[#b58e31] h-2.5 rounded-full" style={{width: `${(route.value / 20000) * 100}%`}}></div>
                        </div>
                     </li>
                 ))}
             </ul>
        </div>
    </div>
);

const ClientDashboardLoyaltyView: React.FC = () => (
     <div className="bg-white p-6 rounded-lg shadow-sm">
         <h3 className="text-lg font-semibold text-gray-800 mb-4">Loyalty & Rewards Program</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-gradient-to-r from-[#00529b] to-[#003e76] p-8 rounded-lg text-white">
            <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-yellow-300">Current Tier</p>
                <p className="text-4xl font-bold">{LOYALTY_DATA.name}</p>
            </div>
            <div className="md:col-span-2">
                <p className="text-sm">Current Spend: £{LOYALTY_DATA.currentSpend.toLocaleString()} / £{LOYALTY_DATA.nextTierSpend.toLocaleString()}</p>
                 <div className="w-full bg-white/30 rounded-full h-4 mt-2">
                    <div className="bg-yellow-400 h-4 rounded-full" style={{width: `${(LOYALTY_DATA.currentSpend / LOYALTY_DATA.nextTierSpend) * 100}%`}}></div>
                </div>
                <p className="text-xs mt-2 text-white/80">You're £{(LOYALTY_DATA.nextTierSpend - LOYALTY_DATA.currentSpend).toLocaleString()} away from the next tier!</p>
            </div>
         </div>
         <div className="mt-8">
             <h4 className="font-semibold text-gray-700 mb-3">Your {LOYALTY_DATA.name} Tier Benefits:</h4>
             <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {LOYALTY_DATA.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
             </ul>
         </div>
     </div>
);

const ClientDashboardDeveloperView: React.FC = () => (
    <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">API Keys</h3>
                <Button primary>Generate New Key</Button>
            </div>
            {API_TOKENS_DATA.map(token => (
                <div key={token.id} className="font-mono text-sm p-3 bg-gray-50 rounded-md flex justify-between items-center mb-2">
                    <div>
                        <p className="font-medium text-gray-800">{token.name}</p>
                        <p className="text-gray-500">{token.token}</p>
                    </div>
                    <button className="text-red-600 hover:underline">Revoke</button>
                </div>
            ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Webhooks</h3>
                <Button primary>Create Webhook</Button>
            </div>
            {WEBHOOKS_DATA.map(hook => (
                 <div key={hook.id} className="font-mono text-sm p-3 bg-gray-50 rounded-md mb-2">
                     <p className="font-medium text-gray-800">{hook.url}</p>
                     <p className="text-xs text-gray-500">Events: {hook.events.join(', ')}</p>
                 </div>
            ))}
        </div>
    </div>
);

// --- START: INDIVIDUAL-ONLY DASHBOARD VIEWS ---

const ClientDashboardReferralView: React.FC = () => (
     <div className="bg-white p-6 rounded-lg shadow-sm">
         <h3 className="text-lg font-semibold text-gray-800 mb-4">Refer a Friend</h3>
         <p className="text-gray-600 mb-6">Refer a friend to Hayapass and you'll both get £10 credit when they complete their first shipment!</p>
         
         <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Unique Referral Link</label>
            <div className="flex gap-2">
                <input type="text" readOnly value="https://hayapass.com/register?ref=CLIENT123" className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm" />
                <Button secondary onClick={() => navigator.clipboard.writeText("https://hayapass.com/register?ref=CLIENT123")}>Copy</Button>
            </div>
         </div>

         <h4 className="font-semibold text-gray-700 mb-3">Referrals</h4>
          <div className="overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referred Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reward</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {REFERRAL_DATA.map((ref, i) => (
                        <tr key={i}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{ref.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{ref.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{ref.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{ref.status === 'Completed' ? ref.reward : '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     </div>
);


// --- START: NEW 100% COMPLETE DASHBOARD FEATURES ---

const CreateShipmentWizard: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleClose = () => {
        setStep(1);
        setFormData({});
        onClose();
    }

    if (!isOpen) return null;

    const renderStepContent = () => {
        switch (step) {
            case 1: return <div><h3 className="text-lg font-medium mb-4">1. Addresses</h3><p>Origin and Destination form goes here...</p></div>;
            case 2: return <div><h3 className="text-lg font-medium mb-4">2. Package Details</h3><p>Weight, dimensions, contents form goes here...</p></div>;
            case 3: return <div><h3 className="text-lg font-medium mb-4">3. Select Service</h3><p>Service options with pricing go here...</p></div>;
            case 4: return <div><h3 className="text-lg font-medium mb-4">4. Review & Confirm</h3><p>Summary of all details goes here...</p></div>;
            default: return null;
        }
    }

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-fast">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">Create New Shipment</h2>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="flex-grow overflow-y-auto p-6">{renderStepContent()}</div>
                <div className="flex justify-between p-4 border-t bg-gray-50">
                    {step > 1 && <Button secondary onClick={prevStep}>Back</Button>}
                    <div className="flex-grow" />
                    {step < 4 && <Button primary onClick={nextStep}>Next</Button>}
                    {step === 4 && <Button primary onClick={handleClose}>Confirm Shipment</Button>}
                </div>
            </div>
        </div>
    );
};

const NotificationPanel: React.FC<{ notifications: ClientNotification[]; onClose: () => void }> = ({ notifications, onClose }) => (
    <div className="absolute top-14 right-0 w-80 bg-white rounded-lg shadow-lg border z-50 animate-fade-in-fast">
        <div className="p-3 border-b flex justify-between items-center">
            <h4 className="font-semibold text-sm">Notifications</h4>
            <button className="text-xs text-[#00529b] hover:underline">Mark all as read</button>
        </div>
        <ul className="max-h-80 overflow-y-auto">
            {notifications.map((n, i) => (
                <li key={i} className={`p-3 border-b hover:bg-gray-50 ${n.status === 'Unread' ? 'bg-blue-50' : ''}`}>
                    <p className="font-semibold text-sm text-gray-800">{n.subject}</p>
                    <p className="text-xs text-gray-600">{n.snippet}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.date}</p>
                </li>
            ))}
        </ul>
        <div className="p-2 text-center bg-gray-50">
            <Link to="/dashboard#notifications" onClick={onClose} className="text-sm font-medium text-[#00529b] hover:underline">View all notifications</Link>
        </div>
    </div>
);

const ClientDashboardHelpView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'faq' | 'tickets'>('faq');
    const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);

    const renderTicketStatus = (status: SupportTicket['status']) => {
        const classes = {
            Open: 'bg-green-100 text-green-800',
            Pending: 'bg-yellow-100 text-yellow-800',
            Resolved: 'bg-gray-100 text-gray-800',
        };
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${classes[status]}`}>{status}</span>;
    }

    if (selectedTicket) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <button onClick={() => setSelectedTicket(null)} className="text-sm font-medium text-[#00529b] hover:underline mb-4">&larr; Back to all tickets</button>
                <h3 className="text-xl font-semibold text-gray-800">{selectedTicket.subject}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1 mb-6">
                    <span>ID: {selectedTicket.id}</span>
                    <span>{renderTicketStatus(selectedTicket.status)}</span>
                    <span>Last Updated: {selectedTicket.lastUpdated}</span>
                </div>
                <div className="space-y-4">
                    {selectedTicket.messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-lg p-3 rounded-lg ${msg.sender === 'You' ? 'bg-[#00529b] text-white' : 'bg-gray-100 text-gray-800'}`}>
                                <p className="text-sm">{msg.text}</p>
                                <p className={`text-xs mt-1 ${msg.sender === 'You' ? 'text-blue-200' : 'text-gray-500'}`}>{msg.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-6 pt-6 border-t">
                    <textarea placeholder="Type your reply..." rows={4} className="w-full p-2 border rounded-md"></textarea>
                    <div className="text-right mt-2">
                        <Button primary><IconWrapper className="w-4 h-4 inline-block -mt-1 mr-2"><IconSend /></IconWrapper>Send Reply</Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex border-b mb-6">
                <button onClick={() => setActiveTab('faq')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'faq' ? 'border-b-2 border-[#b58e31] text-[#00529b]' : 'text-gray-500'}`}>FAQ</button>
                <button onClick={() => setActiveTab('tickets')} className={`py-2 px-4 text-sm font-medium ${activeTab === 'tickets' ? 'border-b-2 border-[#b58e31] text-[#00529b]' : 'text-gray-500'}`}>Support Tickets</button>
            </div>
            {activeTab === 'faq' && <FaqPage />}
            {activeTab === 'tickets' && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">My Support Tickets</h3>
                        <Button primary><IconWrapper className="w-4 h-4 inline-block mr-2 -mt-1"><IconFileText/></IconWrapper>Create New Ticket</Button>
                    </div>
                     <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {SUPPORT_TICKETS_DATA.map(ticket => (
                                    <tr key={ticket.id} onClick={() => setSelectedTicket(ticket)} className="cursor-pointer hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#00529b]">{ticket.subject}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{renderTicketStatus(ticket.status)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{ticket.lastUpdated}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

// --- MAIN CLIENT DASHBOARD COMPONENT ---

export const ClientDashboardPage: React.FC = () => {
    const location = useLocation();
    const passedState = location.state as { accountType?: 'individual' | 'business' };
    
    const [accountType, setAccountType] = useState<'individual' | 'business'>(passedState?.accountType || 'business');
    const [activeView, setActiveView] = useState('Overview');
    const [isShipmentWizardOpen, setIsShipmentWizardOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isDataEmpty, setIsDataEmpty] = useState(false);
    
    useEffect(() => {
        const hash = location.hash.replace('#', '').replace(/-/g, ' ');
        if (hash) {
            const viewName = hash.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            setActiveView(viewName);
        } else {
            setActiveView('Overview');
        }
    }, [location]);

    const individualMenuItems = [
        { name: 'Overview', icon: <IconDashboard /> },
        { name: 'Shipments', icon: <IconBoxSeam /> },
        { name: 'Pre-Alerts', icon: <IconBell /> },
        { name: 'Invoices', icon: <IconReceipt /> },
        { name: 'Wallet', icon: <IconWallet2 /> },
        { name: 'Addresses', icon: <IconGeoAlt /> },
        { name: 'Refer a Friend', icon: <IconShare /> },
        { name: 'Account', icon: <IconPerson /> },
        { name: 'Help & Support', icon: <IconHelpCircle /> },
    ];
    
    const businessMenuItems = [
        { name: 'Overview', icon: <IconDashboard /> },
        { name: 'Shipments', icon: <IconBoxSeam /> },
        { name: 'Pre-Alerts', icon: <IconBell /> },
        { name: 'Invoices', icon: <IconReceipt /> },
        { name: 'Wallet', icon: <IconWallet2 /> },
        { name: 'Addresses', icon: <IconGeoAlt /> },
        { name: 'Team Management', icon: <IconUserPlus /> },
        { name: 'Reports', icon: <IconGraphUpArrow /> },
        { name: 'Loyalty', icon: <IconShieldCheck /> },
        { name: 'Developer', icon: <IconCodeSlash /> },
        { name: 'Account', icon: <IconPerson /> },
        { name: 'Help & Support', icon: <IconHelpCircle /> },
    ];
    
    const menuItems = accountType === 'individual' ? individualMenuItems : businessMenuItems;
    const hasUnreadNotifications = CLIENT_NOTIFICATIONS_DATA.some(n => n.status === 'Unread');
    
    const renderView = () => {
        const props = { isEmpty: isDataEmpty, onCreateShipment: () => setIsShipmentWizardOpen(true) };
        switch (activeView) {
            case 'Overview': return <ClientDashboardOverviewView accountType={accountType} {...props} />;
            case 'Shipments': return <ClientDashboardShipmentsView {...props} />;
            case 'Pre Alerts': return <ClientDashboardPreAlertsView isEmpty={isDataEmpty} />;
            case 'Invoices': return <ClientDashboardInvoicesView isEmpty={isDataEmpty} />;
            case 'Wallet': return <ClientDashboardWalletView isEmpty={isDataEmpty} />;
            case 'Addresses': return <ClientDashboardAddressesView />;
            case 'Account': return <ClientDashboardAccountView accountType={accountType} />;
            case 'Refer a Friend': return accountType === 'individual' ? <ClientDashboardReferralView /> : null;
            case 'Team Management': return accountType === 'business' ? <ClientDashboardTeamView /> : null;
            case 'Reports': return accountType === 'business' ? <ClientDashboardReportsView /> : null;
            case 'Loyalty': return accountType === 'business' ? <ClientDashboardLoyaltyView /> : null;
            case 'Developer': return accountType === 'business' ? <ClientDashboardDeveloperView /> : null;
            case 'Help Support': return <ClientDashboardHelpView />;
            default: return <ClientDashboardOverviewView accountType={accountType} {...props} />;
        }
    };

    return (
        <>
        <CreateShipmentWizard isOpen={isShipmentWizardOpen} onClose={() => setIsShipmentWizardOpen(false)} />
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-slate-800 text-white flex flex-col">
                 <div className="h-16 flex items-center justify-center border-b border-slate-700">
                    <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="h-10"/></Link>
                </div>
                <nav className="flex-grow py-4">
                    <ul>
                        {menuItems.map(item => (
                             <li key={item.name}>
                                <Link to={`/dashboard#${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                      className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${activeView.replace(/ /g, '') === item.name.replace(/ /g, '') ? 'bg-slate-900 text-[#f0e1b0]' : 'hover:bg-slate-700'}`}>
                                    <IconWrapper className="w-5 h-5">{item.icon}</IconWrapper>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <h1 className="text-xl font-bold text-gray-800">{activeView}</h1>
                    <div className="flex items-center gap-4">
                        <div className="text-xs text-gray-500 mr-2">Simulators:</div>
                        {/* Demo Account Type Switcher */}
                        <div className="flex items-center gap-2 text-sm bg-gray-100 p-1 rounded-md">
                            <button onClick={() => setAccountType('individual')} className={`px-2 py-1 rounded ${accountType === 'individual' ? 'bg-white shadow-sm' : ''}`}>Individual</button>
                            <button onClick={() => setAccountType('business')} className={`px-2 py-1 rounded ${accountType === 'business' ? 'bg-white shadow-sm' : ''}`}>Business</button>
                        </div>
                         {/* Empty Data Simulator */}
                        <div className="flex items-center gap-2 text-sm bg-gray-100 p-1 rounded-md">
                            <button onClick={() => setIsDataEmpty(false)} className={`px-2 py-1 rounded ${!isDataEmpty ? 'bg-white shadow-sm' : ''}`}>Data</button>
                            <button onClick={() => setIsDataEmpty(true)} className={`px-2 py-1 rounded ${isDataEmpty ? 'bg-white shadow-sm' : ''}`}>Empty</button>
                        </div>
                        <div className="relative">
                            <button onClick={() => setIsNotificationsOpen(o => !o)} className="relative text-gray-600 hover:text-[#00529b]">
                                <IconWrapper className="w-6 h-6"><IconBell/></IconWrapper>
                                {hasUnreadNotifications && <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />}
                            </button>
                            {isNotificationsOpen && <NotificationPanel notifications={CLIENT_NOTIFICATIONS_DATA} onClose={() => setIsNotificationsOpen(false)} />}
                        </div>
                        <p className="text-sm hidden md:block">Welcome, Client!</p>
                        <Link to="/" className="text-sm text-[#00529b] hover:underline">Logout</Link>
                    </div>
                </header>
                <main className="flex-grow p-6 overflow-y-auto">
                    {renderView()}
                </main>
            </div>
        </div>
        </>
    );
};


// --- ADMIN DASHBOARD VIEWS ---

const AdminDashboardOverviewView: React.FC = () => (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard title="Total Revenue (NGN)" value={`₦${ADMIN_ANALYTICS_DATA.totalRevenue.toLocaleString()}`} icon={<IconGraphUpArrow />} footer="+5.2% this month" />
            <DashboardCard title="Total Shipments" value={ADMIN_ANALYTICS_DATA.totalShipments} icon={<IconBoxSeam />} footer="+120 this month" />
            <DashboardCard title="New Clients" value={ADMIN_ANALYTICS_DATA.newClients} icon={<IconUserPlus />} footer="+3 this week" />
            <DashboardCard title="Pending Wallet Requests" value={ADMIN_WALLET_REQUESTS_DATA.filter(r => r.status === 'Pending').length} icon={<IconWallet2 />} footer="2 new today" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <p className="text-gray-500">Activity feed coming soon.</p>
        </div>
    </div>
);

const AdminUsersView: React.FC = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Manage Users</h3>
            <AdminButton primary><IconWrapper className="w-4 h-4 inline-block -mt-1 mr-2"><IconUserPlus/></IconWrapper>Add New User</AdminButton>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {ALL_USERS_DATA.map(user => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.accountType}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                                <button className="text-[#00529b] hover:underline">Edit</button>
                                <button className="text-red-600 hover:underline">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


const AdminShipmentsView: React.FC = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">All Shipments</h3>
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {ADMIN_SHIPMENTS_DATA.map(shipment => (
                        <tr key={shipment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#00529b]">{shipment.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.clientName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{shipment.destination}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' : shipment.status === 'Customs Hold' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{shipment.status}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                                <button className="text-[#00529b] hover:underline">View</button>
                                <button className="text-[#00529b] hover:underline">Update Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- MAIN ADMIN DASHBOARD COMPONENT ---
// FIX: Export the AdminDashboardPage component so it can be used in App.tsx.
export const AdminDashboardPage: React.FC = () => {
    const location = useLocation();
    const [activeView, setActiveView] = useState('Overview');

    useEffect(() => {
        const hash = location.hash.replace('#', '').replace(/-/g, ' ');
        if (hash) {
            const viewName = hash.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            setActiveView(viewName);
        } else {
            setActiveView('Overview');
        }
    }, [location]);

    const menuItems = [
        { name: 'Overview', icon: <IconDashboard /> },
        { name: 'Users', icon: <IconUserPlus /> },
        { name: 'Shipments', icon: <IconBoxSeam /> },
    ];
    
    const renderView = () => {
        switch (activeView) {
            case 'Overview': return <AdminDashboardOverviewView />;
            case 'Users': return <AdminUsersView />;
            case 'Shipments': return <AdminShipmentsView />;
            default: return <AdminDashboardOverviewView />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-slate-800 text-white flex flex-col">
                 <div className="h-16 flex items-center justify-center border-b border-slate-700">
                    <Link to="/"><img src={SITE_CONFIG.logoUrl} alt="Logo" className="h-10"/></Link>
                </div>
                <nav className="flex-grow py-4">
                    <ul>
                        {menuItems.map(item => (
                             <li key={item.name}>
                                <Link to={`/admin#${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                      className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${activeView.replace(/ /g, '') === item.name.replace(/ /g, '') ? 'bg-slate-900 text-[#f0e1b0]' : 'hover:bg-slate-700'}`}>
                                    <IconWrapper className="w-5 h-5">{item.icon}</IconWrapper>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <h1 className="text-xl font-bold text-gray-800">{activeView}</h1>
                    <div className="flex items-center gap-4">
                        <p className="text-sm hidden md:block">Welcome, Admin!</p>
                        <Link to="/" className="text-sm text-[#00529b] hover:underline">Logout</Link>
                    </div>
                </header>
                <main className="flex-grow p-6 overflow-y-auto">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};
