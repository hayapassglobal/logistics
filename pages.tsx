import React, { useState, useEffect } from 'react';
import { HeroSlider, ServiceCard, FeatureItem, TestimonialCard, TrackingForm, PageHeader, ContentBlock, FaqItem, Button } from './components';
import { CORE_SERVICES, WHY_CHOOSE_US_FEATURES, TESTIMONIALS, ALL_SERVICES, FAQ_DATA, SITE_CONFIG, CLIENT_SHIPMENTS_DATA, CLIENT_SHIPMENT_DETAILS_DATA, CLIENT_PREALERTS_DATA, CLIENT_INVOICES_DATA, WALLET_TRANSACTIONS_DATA, CLIENT_ADDRESSES_DATA, CLIENT_NOTIFICATIONS_DATA } from './constants';
import { IconMarker, IconPhone, IconEnvelope, IconWhatsapp, IconWrapper, IconDashboard, IconBoxSeam, IconBell, IconReceipt, IconWallet2, IconPerson, IconGeoAlt, IconHeadset, IconSearch, IconArrowDownCircle, IconArrowUpCircle, IconUpload, IconLayoutTextWindowReverse, IconUserPlus, IconSettings, IconFileEarmarkSpreadsheet, IconShieldLock, IconPencilSquare, IconListTask, IconCardImage, IconShare, IconGraphUpArrow, IconCodeSlash, IconPersonCircle, IconTruck } from './constants';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import type { ClientShipment, DetailedClientShipment, ClientPreAlert, ClientInvoice, WalletTransaction, Address, ClientNotification } from './types';


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
        <PageHeader title="About Hayapass Global Logistics" subtitle="Your Trusted Partner in Global Logistics, Committed to Excellence and Innovation." />
        <div className="w-[90%] max-w-4xl mx-auto px-4 py-8">
            <ContentBlock>
                <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-4">Our Story</h2>
                <p>Founded on the principles of reliability, efficiency, and client-centricity, Hayapass Global Logistics emerged from a desire to bridge the logistical gaps between the United Kingdom, Nigeria, and the wider global market. We saw the challenges businesses and individuals faced – complex customs procedures, unpredictable transit times, and a lack of transparent communication. Hayapass was created to change that.</p>
                <p>With strategic operational hubs in both the UK and Nigeria, and an ever-expanding network of global partners, we have quickly established ourselves as a leading provider of comprehensive logistics solutions. Our journey is one of continuous improvement, driven by a passion for innovation and an unwavering commitment to serving our clients' diverse needs.</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission & Vision</h2>
                <p><strong>Mission:</strong> To empower global trade and connectivity by delivering seamless, innovative, and dependable logistics services that exceed client expectations, foster sustainable growth, and contribute positively to the communities we serve.</p>
                <p><strong>Vision:</strong> To be the most trusted and preferred logistics partner for UK-Nigeria trade and beyond, recognized for our operational excellence, technological advancement, and dedication to client success.</p>
                 <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Core Values</h2>
                 <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
                        <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our interactions.</li>
                        <li><strong>Client Focus:</strong> Our clients are at the heart of everything we do. We listen, adapt, and strive to provide solutions that perfectly match their needs.</li>
                        <li><strong>Excellence:</strong> We pursue a standard of excellence in every aspect of our operations, from meticulous planning to flawless execution.</li>
                        <li><strong>Innovation:</strong> We embrace technology and creative thinking to continuously improve our services and offer cutting-edge logistics solutions.</li>
                        <li><strong>Reliability:</strong> We are committed to delivering on our promises, ensuring your goods arrive safely and on time.</li>
                    </ul>
            </ContentBlock>
        </div>
    </>
);

export const ServicesOverviewPage: React.FC = () => (
    <>
        <PageHeader title="Our Comprehensive Logistics Services" subtitle="Tailored solutions to meet your every shipping, freight, and supply chain requirement, locally and globally." />
        <div className="w-[90%] max-w-7xl mx-auto px-4 py-8">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ALL_SERVICES.map(service => <ServiceCard key={service.title} service={service} />)}
            </div>
        </div>
    </>
);

const ServicePageLayout: React.FC<{title: string, subtitle: string, children: React.ReactNode}> = ({title, subtitle, children}) => (
    <>
        <PageHeader title={title} subtitle={subtitle} />
        <div className="w-[90%] max-w-4xl mx-auto px-4 py-8">
            <ContentBlock>
                {children}
            </ContentBlock>
        </div>
    </>
)

export const ServiceDomesticPage: React.FC = () => (
    <ServicePageLayout title="UK & Nigeria Domestic Shipping" subtitle="Reliable, Fast, and Cost-Effective Delivery Within Borders.">
        <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-4">Connecting Your Nation, One Delivery at a Time</h2>
        <p>Hayapass Global Logistics offers robust domestic shipping solutions within both the United Kingdom and Nigeria. We provide a range of services tailored to your specific requirements for speed, security, and budget.</p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Services in the United Kingdom:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Express Parcel Delivery:</strong> Same-day and next-day delivery options for urgent shipments across the UK.</li>
            <li><strong>Standard Parcel Services:</strong> Cost-effective solutions for less time-sensitive packages, typically delivered within 2-3 working days.</li>
            <li><strong>Pallet & Freight Distribution:</strong> Reliable transportation for larger, heavier, or bulk shipments throughout the UK.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Services in Nigeria:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Inter-City Express Delivery:</strong> Fast courier services connecting major Nigerian cities like Lagos, Abuja, Port Harcourt.</li>
            <li><strong>Nationwide Parcel & Freight:</strong> Comprehensive coverage across Nigeria's states.</li>
            <li><strong>Last-Mile Delivery Solutions:</strong> Optimized delivery to end consumers, crucial for e-commerce.</li>
        </ul>
    </ServicePageLayout>
);

export const ServiceInternationalPage: React.FC = () => (
     <ServicePageLayout title="International Air & Sea Freight" subtitle="Connecting Continents, Powering Global Trade: UK, Nigeria, and Beyond.">
        <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-4">Your Gateway to Global Markets</h2>
        <p>Hayapass Global Logistics specializes in seamless international freight forwarding, with a particular focus on the busy UK-Nigeria trade lane, as well as comprehensive services to and from other key global destinations.</p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Air Freight Services:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Express Air Freight:</strong> For time-critical shipments requiring the quickest possible transit.</li>
            <li><strong>Standard/Economy Air Freight:</strong> A balance of speed and cost-effectiveness for less urgent cargo.</li>
            <li><strong>Consolidation Services:</strong> Cost savings by combining smaller shipments into larger consignments.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Sea Freight Services:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Full Container Load (FCL):</strong> Exclusive use of a container for your shipment.</li>
            <li><strong>Less than Container Load (LCL):</strong> Cost-effective option for smaller shipments that don't require a full container.</li>
            <li><strong>RoRo (Roll-on/Roll-off):</strong> Specialized shipping for vehicles and wheeled machinery.</li>
        </ul>
    </ServicePageLayout>
);
export const ServiceWarehousingPage: React.FC = () => (
     <ServicePageLayout title="Warehousing & Fulfilment Solutions" subtitle="Secure Storage, Efficient Inventory Management, and Scalable Order Fulfilment.">
        <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-4">Optimize Your Supply Chain</h2>
        <p>Our strategically located facilities in the UK and Nigeria are equipped with modern technology and security systems to ensure the safety and integrity of your inventory.</p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Our Warehousing Services Include:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Secure Storage:</strong> Flexible short-term and long-term storage options.</li>
            <li><strong>Inventory Management:</strong> Advanced Warehouse Management Systems (WMS) for real-time tracking.</li>
            <li><strong>Pick & Pack Services:</strong> Accurate and timely order picking, packing, and labeling.</li>
            <li><strong>E-commerce Fulfilment:</strong> End-to-end solutions for online businesses.</li>
        </ul>
    </ServicePageLayout>
);
export const ServiceCustomsPage: React.FC = () => (
    <ServicePageLayout title="Customs Clearance & Brokerage" subtitle="Navigating Global Trade Regulations with Expertise and Efficiency.">
        <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-4">Streamline Your Imports and Exports</h2>
        <p>Hayapass Global Logistics provides comprehensive customs brokerage services to ensure your goods move smoothly across borders, minimizing delays and avoiding costly penalties.</p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Our Customs Services Cover:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Import & Export Declarations:</strong> Accurate and timely preparation and submission of all necessary customs declarations.</li>
            <li><strong>Tariff Classification & Duty Calculation:</strong> Expert assistance in determining the correct Harmonized System (HS) codes.</li>
            <li><strong>Regulatory Compliance:</strong> Ensuring your shipments comply with all import/export controls.</li>
        </ul>
    </ServicePageLayout>
);
export const ServiceSpecializedPage: React.FC = () => (
    <ServicePageLayout title="Specialized Cargo Handling" subtitle="Expert solutions for your unique shipping needs.">
        <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-4">Tailored Logistics for Unique Cargo</h2>
        <p>We offer specialized cargo handling services to transport goods that require particular care, equipment, or regulatory compliance.</p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Our Specialized Cargo Services:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Project Cargo & Out-of-Gauge (OOG):</strong> Logistics for oversized, heavy-lift, or unconventional cargo.</li>
            <li><strong>Perishable & Temperature-Controlled Goods:</strong> Refrigerated (reefer) containers and temperature-monitored air freight.</li>
            <li><strong>Hazardous Materials (Hazmat/DG):</strong> Fully compliant handling and transportation of dangerous goods.</li>
        </ul>
    </ServicePageLayout>
);
export const ServiceConsultancyPage: React.FC = () => (
    <ServicePageLayout title="Logistics Consultancy Services" subtitle="Optimize Your Supply Chain, Enhance Efficiency, Reduce Costs.">
        <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-4">Strategic Insights to Transform Your Logistics</h2>
        <p>Our experienced consultants provide strategic advice and practical solutions tailored to your specific industry and challenges.</p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Our Consultancy Focus Areas:</h3>
        <ul className="list-disc pl-6 space-y-2 marker:text-[#b58e31]">
            <li><strong>Supply Chain Analysis & Design:</strong> Comprehensive review of your current supply chain processes.</li>
            <li><strong>Freight & Transportation Optimization:</strong> Analysis of your freight spend, carrier selection, and mode optimization.</li>
            <li><strong>Warehouse & Inventory Management Strategy:</strong> Assessment of your warehousing layout and inventory control systems.</li>
        </ul>
    </ServicePageLayout>
);

export const TrackingPage: React.FC = () => (
    <>
        <PageHeader title="Track Your Shipment" subtitle="Enter your tracking number to get real-time updates on your shipment's journey." />
        <div className="w-[90%] max-w-7xl mx-auto px-4 py-8">
            <TrackingForm />
        </div>
    </>
);
export const QuoteRequestPage: React.FC = () => (
    <>
        <PageHeader title="Request a Free Logistics Quote" subtitle="Tell us about your shipping needs, and our experts will provide a tailored, no-obligation quote." />
        <div className="w-[90%] max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={(e) => { e.preventDefault(); alert('Quote request submitted!'); }}>
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quote_name">Full Name / Company Name *</label>
                            <input type="text" id="quote_name" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quote_email">Email Address *</label>
                            <input type="email" id="quote_email" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]" />
                        </div>
                    </div>
                     <h3 className="text-xl font-bold text-gray-800 my-6">Shipment Details</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quote_origin_country">Origin Country *</label>
                            <input type="text" id="quote_origin_country" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quote_dest_country">Destination Country *</label>
                            <input type="text" id="quote_dest_country" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quote_commodity">Brief Description of Goods *</label>
                        <textarea id="quote_commodity" rows={3} required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"></textarea>
                    </div>
                     <div className="mt-8">
                        <Button type="submit" primary className="w-full py-3 text-base">Get My Free Quote</Button>
                    </div>
                </form>
            </div>
        </div>
    </>
);
export const FaqPage: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(0);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <>
            <PageHeader title="Frequently Asked Questions" subtitle="Find answers to common queries about our services, shipping process, and more." />
            <div className="w-[90%] max-w-4xl mx-auto px-4 py-8">
                <ContentBlock>
                    {FAQ_DATA.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openId === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </ContentBlock>
            </div>
        </>
    );
};
export const ContactPage: React.FC = () => (
    <>
        <PageHeader title="Get in Touch With Us" subtitle="We're here to help with all your logistics inquiries. Our team is ready to provide expert advice and support." />
         <div className="w-[90%] max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Contact Details</h2>
                     <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-[#00529b] mb-3">UK Office</h3>
                            <div className="flex items-start gap-4 mb-2">
                                <IconWrapper className="w-5 h-5 text-[#00529b] mt-1"><IconMarker /></IconWrapper>
                                <span>{SITE_CONFIG.contact.addressUK}</span>
                            </div>
                             <div className="flex items-start gap-4">
                                <IconWrapper className="w-5 h-5 text-[#00529b] mt-1"><IconPhone /></IconWrapper>
                                <a href={`tel:${SITE_CONFIG.contact.phoneUK}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.phoneUK}</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#00529b] mb-3">Nigeria Office</h3>
                            <div className="flex items-start gap-4 mb-2">
                                <IconWrapper className="w-5 h-5 text-[#00529b] mt-1"><IconMarker /></IconWrapper>
                                <span>{SITE_CONFIG.contact.addressNG}</span>
                            </div>
                             <div className="flex items-start gap-4">
                                <IconWrapper className="w-5 h-5 text-[#00529b] mt-1"><IconPhone /></IconWrapper>
                                <a href={`tel:${SITE_CONFIG.contact.phoneNG}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.phoneNG}</a>
                            </div>
                        </div>
                         <div className="border-t pt-8">
                            <h3 className="text-xl font-bold text-[#00529b] mb-3">General Inquiries</h3>
                             <div className="flex items-start gap-4 mb-2">
                                <IconWrapper className="w-5 h-5 text-[#00529b] mt-1"><IconEnvelope /></IconWrapper>
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#b58e31]">{SITE_CONFIG.contact.email}</a>
                            </div>
                             <div className="flex items-start gap-4">
                                <IconWrapper className="w-5 h-5 text-[#00529b] mt-1"><IconWhatsapp /></IconWrapper>
                                <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#b58e31]">Chat on WhatsApp</a>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                     <p className="text-gray-600 mb-6">Have a question or need assistance? Fill out the form below.</p>
                     <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }} className="space-y-5">
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact_name">Full Name *</label>
                            <input type="text" id="contact_name" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact_email">Email *</label>
                            <input type="email" id="contact_email" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact_message">Message *</label>
                            <textarea id="contact_message" rows={4} required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"></textarea>
                        </div>
                        <Button type="submit" primary className="w-full py-3 text-base">Send Message</Button>
                     </form>
                </div>
            </div>
        </div>
    </>
);

export const PrivacyPolicyPage: React.FC = () => (
    <ServicePageLayout title="Privacy Policy" subtitle="Understanding How We Collect, Use, and Protect Your Personal Information.">
        <div className="prose max-w-none">
            <p><em>Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>
            <h2>1. Introduction</h2>
            <p>Hayapass Global Logistics ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            <h2>2. Information We Collect</h2>
            <p>We may collect personal identification information from you in a variety of ways, including when you request a quote, fill out a form, or communicate with us. This may include your name, email address, phone number, and shipment details.</p>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to provide and operate our Services, process your transactions, communicate with you, and improve our offerings. We do not sell your personal information to third parties.</p>
            <h2>4. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.</p>
        </div>
    </ServicePageLayout>
);

export const TermsPage: React.FC = () => (
    <ServicePageLayout title="Terms & Conditions" subtitle="Please Read These Terms Carefully Before Using Our Services.">
        <div className="prose max-w-none">
            <p><em>Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the services provided by Hayapass Global Logistics, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access our services.</p>
            <h2>2. Shipper's Obligations</h2>
            <p>As a shipper, you warrant that all information provided is accurate, the goods are properly packed, and do not contain any prohibited items. You agree to indemnify Hayapass Global Logistics against any loss or damage resulting from a breach of these warranties.</p>
            <h2>3. Limitation of Liability</h2>
            <p>Our liability for loss, damage, or delay to any shipment is limited by applicable international conventions and our standard trading conditions. We are not liable for indirect or consequential damages.</p>
            <h2>4. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of England and Wales for UK operations, and Nigeria for Nigerian operations, without regard to its conflict of law provisions.</p>
        </div>
    </ServicePageLayout>
);

// --- ADMIN LOGIN PAGE (Renamed) ---
export const AdminLoginPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1a1f25'; // Tailwind dark background
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
       document.body.style.backgroundColor = '#f8f9fa'; // Tailwind light background
      localStorage.setItem('theme', 'light');
    }
     // Cleanup function to reset body style on component unmount
    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'admin' && password === 'password') {
      setAlertMessage('Login successful! Redirecting to dashboard...');
      // In a real app, you would navigate to an admin dashboard
    } else {
      setAlertMessage('Invalid username or password. Please try again.');
    }
  };

  const handlePasswordReset = (e: React.FormEvent) => {
     e.preventDefault();
     const formData = new FormData(e.target as HTMLFormElement);
     const email = formData.get('email');
     setAlertMessage(`Password reset link sent to ${email} (simulated)!`);
     setIsModalOpen(false);
  }

  const CustomAlert = ({ message, onClose }: { message: string, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
        <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-6 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 max-w-sm w-[90%] text-center">
            <p className="mb-4 text-lg">{message}</p>
             <button
                onClick={onClose}
                className="w-full bg-[#00529b] text-white py-2 px-4 rounded-md hover:bg-[#00427a] dark:bg-[#e4b74e] dark:text-slate-900 dark:hover:bg-[#f0c05a] transition-colors"
             >OK</button>
        </div>
    </div>
  );

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-[#1a1f25] font-['Inter',_sans-serif] ${isDarkMode ? 'dark' : ''}`}>
      {alertMessage && <CustomAlert message={alertMessage} onClose={() => setAlertMessage(null)} />}
      
      <div className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className={`bg-white dark:bg-[#2c333c] p-10 rounded-lg shadow-xl w-full max-w-md transition-transform duration-300 border border-gray-200 dark:border-[#495057] ${isModalOpen ? 'scale-100' : 'scale-95'}`}>
              <h3 className="text-2xl font-bold text-center mb-6 text-[#00529b] dark:text-[#e4b74e]">Reset Password</h3>
              <form onSubmit={handlePasswordReset}>
                  <div className="mb-6 text-left">
                      <label htmlFor="reset-email" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Enter your email address</label>
                      <input type="email" id="reset-email" name="email" required placeholder="email@example.com" className="w-full p-3 border rounded-md bg-gray-100 dark:bg-[#3a4149] text-slate-800 dark:text-slate-200 border-gray-300 dark:border-[#495057] focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"/>
                  </div>
                  <div className="flex flex-col gap-3">
                      <button type="submit" className="w-full py-3 font-semibold rounded-md bg-[#00529b] text-white hover:bg-[#00427a] dark:bg-[#e4b74e] dark:text-slate-900 dark:hover:bg-[#f0c05a]">Reset Password</button>
                      <button type="button" className="w-full py-3 font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500" onClick={() => setIsModalOpen(false)}>Cancel</button>
                  </div>
              </form>
          </div>
      </div>

      <div className="relative bg-white dark:bg-[#2c333c] p-10 pt-16 rounded-lg shadow-2xl w-full max-w-md text-center border border-gray-200 dark:border-[#495057]">
          <img src="https://placehold.co/60x60/00529b/FFFFFF?text=HGL" alt="Logo" className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 shadow-md" />
          <div className="absolute top-6 right-6">
              <label htmlFor="theme-toggle" className="relative inline-block w-10 h-5 rounded-full cursor-pointer">
                  <input type="checkbox" id="theme-toggle" className="sr-only peer" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                  <div className="w-full h-full bg-slate-300 dark:bg-slate-600 rounded-full peer-checked:bg-[#e4b74e]"></div>
                  <div className="absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
              </label>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-[#00529b] dark:text-[#e4b74e]">Admin Login</h2>
          
          <form onSubmit={handleLogin}>
              <div className="mb-4 text-left">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Username</label>
                  <input type="text" id="username" name="username" defaultValue="admin" required placeholder="Enter your username" className="w-full p-3 border rounded-md bg-gray-100 dark:bg-[#3a4149] text-slate-800 dark:text-slate-200 border-gray-300 dark:border-[#495057] focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"/>
              </div>
              <div className="mb-6 text-left">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
                  <input type="password" id="password" name="password" defaultValue="password" required placeholder="Enter your password" className="w-full p-3 border rounded-md bg-gray-100 dark:bg-[#3a4149] text-slate-800 dark:text-slate-200 border-gray-300 dark:border-[#495057] focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31]"/>
              </div>
              <button type="submit" className="w-full py-3 text-base font-semibold rounded-md mt-4 bg-[#00529b] text-white hover:bg-[#00427a] dark:bg-[#e4b74e] dark:text-slate-900 dark:hover:bg-[#f0c05a] transition-colors">Login</button>
              <div className="mt-4 text-sm">
                  <button type="button" onClick={() => setIsModalOpen(true)} className="text-slate-500 dark:text-slate-400 hover:text-[#00529b] dark:hover:text-[#e4b74e] underline bg-transparent border-none">
                      Forgot Password?
                  </button>
              </div>
          </form>
      </div>
    </div>
  );
};

// --- CLIENT LOGIN / REGISTER PAGE ---

// Helper components for consistent form styling
const AuthInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input 
        {...props} 
        className="w-full p-2.5 border rounded-md bg-gray-100 dark:bg-[#3a4149] text-slate-800 dark:text-slate-200 border-gray-300 dark:border-[#495057] focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31] transition"
    />
);
const AuthSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {children: React.ReactNode}> = ({children, ...props}) => (
    <select 
        {...props}
        className="w-full p-2.5 border rounded-md bg-gray-100 dark:bg-[#3a4149] text-slate-800 dark:text-slate-200 border-gray-300 dark:border-[#495057] focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31] transition"
    >
        {children}
    </select>
);
const FormSectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="pt-6 pb-2 mb-4 mt-2 border-t border-gray-200 dark:border-gray-600 first:mt-0 first:pt-0 first:border-none">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 tracking-wide uppercase">{title}</h3>
    </div>
);
const FileUpload: React.FC<{id: string, name: string, label: string, fileName: string | null, onChange: React.ChangeEventHandler<HTMLInputElement>, required?: boolean}> = ({id, name, label, fileName, onChange, required}) => (
    <div className="mt-4">
         <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
             {label} {required && <span className="text-red-500">*</span>}
         </label>
         <div className="mt-1.5 flex items-center gap-4">
             <label htmlFor={id} className="cursor-pointer inline-flex items-center text-sm text-[#00529b] dark:text-[#e4b74e] border border-[#00529b] dark:border-[#e4b74e] rounded-md px-4 py-2 hover:bg-[#00529b] hover:text-white dark:hover:bg-[#e4b74e] dark:hover:text-slate-900 transition-colors font-semibold">
                <IconWrapper className="w-4 h-4 mr-2"><IconUpload /></IconWrapper>
                <span>Choose File</span>
            </label>
             <input type="file" id={id} name={name} onChange={onChange} className="sr-only" accept=".pdf,.jpg,.jpeg,.png" required={required} />
             <p className="text-sm text-gray-500 dark:text-gray-400 italic truncate flex-1">{fileName || 'No file chosen'}</p>
         </div>
    </div>
);
const AuthLabel: React.FC<{htmlFor: string, children: React.ReactNode, required?: boolean, className?: string}> = ({htmlFor, children, required, className}) => (
     <label htmlFor={htmlFor} className={`block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 ${className || ''}`}>
        {children} {required && <span className="text-red-500">*</span>}
    </label>
);


export const ClientAuthPage: React.FC = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [isBusiness, setIsBusiness] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({ score: 0, text: '', className: '' });
    
    const [idDocName, setIdDocName] = useState<string | null>(null);
    const [bizRegDocName, setBizRegDocName] = useState<string | null>(null);
    const [proofAddressDocName, setProofAddressDocName] = useState<string | null>(null);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#1a1f25';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = '#f8f9fa';
            localStorage.setItem('theme', 'light');
        }
        return () => {
            document.body.style.backgroundColor = '';
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleClientLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get('email');
        const password = formData.get('password');
        if (email === 'client@example.com' && password === 'password') {
            setAlertMessage('Client login successful! Redirecting to dashboard...');
            setTimeout(() => navigate('/dashboard'), 1500);
        } else {
            setAlertMessage('Invalid email or password. Please try again.');
        }
    };

    const handleClientRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        if (formData.get('password') !== formData.get('confirm_password')) {
            setAlertMessage('Passwords do not match.');
            return;
        }
        if (!formData.get('terms_agree')) {
            setAlertMessage('You must agree to the Terms & Conditions.');
            return;
        }
        setAlertMessage(`Registration successful! Please log in.`);
        setActiveTab('login');
    };

    const handlePasswordReset = (e: React.FormEvent) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        setAlertMessage(`Password reset link sent to ${email} (simulated).`);
        setIsModalOpen(false);
    };
    
    const checkPasswordStrength = (password: string) => {
        let score = 0;
        let text = '';
        let className = '';

        if (password.length > 0) {
            if (password.length >= 8) score++;
            if (/[a-z]/.test(password)) score++;
            if (/[A-Z]/.test(password)) score++;
            if (/[0-9]/.test(password)) score++;
            if (/[^A-Za-z0-9]/.test(password)) score++;
        }

        if (score <= 1) {
            text = 'Weak';
            className = 'w-1/3 bg-red-500';
        } else if (score <= 3) {
            text = 'Medium';
            className = 'w-2/3 bg-yellow-500';
        } else {
            text = 'Strong';
            className = 'w-full bg-green-500';
        }
        
        if(password.length === 0) { text = ''; className = ''; }
        setPasswordStrength({ score, text, className });
    };
    
    const handleFileChange = (setter: React.Dispatch<React.SetStateAction<string | null>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.files && event.target.files.length > 0 ? event.target.files[0].name : null);
    };

    const CustomAlert = ({ message, onClose }: { message: string, onClose: () => void }) => (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
            <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-6 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 max-w-sm w-[90%] text-center">
                <p className="mb-4 text-lg whitespace-pre-wrap">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-[#00529b] text-white py-2 px-4 rounded-md hover:bg-[#00427a] dark:bg-[#e4b74e] dark:text-slate-900 dark:hover:bg-[#f0c05a] transition-colors"
                >OK</button>
            </div>
        </div>
    );
    
    return (
        <div className={`min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-[#1a1f25] font-['Inter',_sans-serif] ${isDarkMode ? 'dark' : ''}`}>
             {alertMessage && <CustomAlert message={alertMessage} onClose={() => setAlertMessage(null)} />}

             <div className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`bg-white dark:bg-[#2c333c] p-10 rounded-lg shadow-xl w-full max-w-md transition-transform duration-300 border border-gray-200 dark:border-[#495057] ${isModalOpen ? 'scale-100' : 'scale-95'}`}>
                    <h3 className="text-2xl font-bold text-center mb-6 text-[#00529b] dark:text-[#e4b74e]">Reset Password</h3>
                    <form onSubmit={handlePasswordReset}>
                        <div className="mb-6 text-left">
                            <label htmlFor="reset-email" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Enter your email address</label>
                            <AuthInput type="email" id="reset-email" name="email" required placeholder="email@example.com" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <button type="submit" className="w-full py-3 font-semibold rounded-md bg-[#00529b] text-white hover:bg-[#00427a] dark:bg-[#e4b74e] dark:text-slate-900 dark:hover:bg-[#f0c05a]">Send Reset Link</button>
                            <button type="button" className="w-full py-3 font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="relative bg-white dark:bg-[#2c333c] p-8 md:p-12 pt-16 rounded-lg shadow-2xl w-full max-w-2xl text-center border border-gray-200 dark:border-[#495057]">
                 <img src="https://placehold.co/60x60/00529b/FFFFFF?text=HGL" alt="Logo" className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 shadow-md" />
                 <div className="absolute top-6 right-6">
                    <label htmlFor="theme-toggle-client" className="relative inline-block w-10 h-5 rounded-full cursor-pointer">
                        <input type="checkbox" id="theme-toggle-client" className="sr-only peer" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                        <div className="w-full h-full bg-slate-300 dark:bg-slate-600 rounded-full peer-checked:bg-[#e4b74e]"></div>
                        <div className="absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                    </label>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-[#00529b] dark:text-[#e4b74e]">Client Access</h2>
                
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                    <nav className="flex justify-center -mb-px">
                        <button onClick={() => setActiveTab('login')} className={`py-3 px-6 font-semibold border-b-2 transition-colors ${activeTab === 'login' ? 'text-[#00529b] dark:text-[#e4b74e] border-[#00529b] dark:border-[#e4b74e]' : 'text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300'}`}>Login</button>
                        <button onClick={() => setActiveTab('register')} className={`py-3 px-6 font-semibold border-b-2 transition-colors ${activeTab === 'register' ? 'text-[#00529b] dark:text-[#e4b74e] border-[#00529b] dark:border-[#e4b74e]' : 'text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300'}`}>Register</button>
                    </nav>
                </div>

                {activeTab === 'login' && (
                    <form onSubmit={handleClientLogin} className="animate-fade-in max-w-sm mx-auto">
                        <div className="mb-4 text-left">
                            <AuthLabel htmlFor="login-email" required>Email Address</AuthLabel>
                            <AuthInput type="email" id="login-email" name="email" defaultValue="client@example.com" required />
                        </div>
                        <div className="mb-6 text-left">
                            <AuthLabel htmlFor="login-password" required>Password</AuthLabel>
                            <AuthInput type="password" id="login-password" name="password" defaultValue="password" required />
                        </div>
                        <button type="submit" className="w-full py-3 text-base font-semibold rounded-md mt-4 bg-[#00529b] text-white hover:bg-[#00427a] dark:bg-[#e4b74e] dark:text-slate-900 dark:hover:bg-[#f0c05a]">Login</button>
                         <div className="mt-4 text-sm">
                            <button type="button" onClick={() => setIsModalOpen(true)} className="text-slate-500 dark:text-slate-400 hover:text-[#00529b] dark:hover:text-[#e4b74e] underline bg-transparent border-none">Forgot Password?</button>
                        </div>
                    </form>
                )}

                {activeTab === 'register' && (
                    <form onSubmit={handleClientRegister} className="animate-fade-in text-left max-h-[65vh] overflow-y-auto pr-4 -mr-4">
                        <FormSectionHeader title="Contact Information" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <AuthLabel htmlFor="reg-fullname" required>Full Name</AuthLabel>
                                <AuthInput type="text" id="reg-fullname" name="fullname" required />
                            </div>
                             <div>
                                <AuthLabel htmlFor="reg-email" required>Email Address</AuthLabel>
                                <AuthInput type="email" id="reg-email" name="email" required />
                            </div>
                             <div>
                                <AuthLabel htmlFor="reg-phone" required>Phone Number</AuthLabel>
                                <AuthInput type="tel" id="reg-phone" name="phone" required />
                            </div>
                        </div>

                        <FormSectionHeader title="Account Type" />
                         <div className="flex gap-6 items-center">
                            <AuthLabel htmlFor="type-individual" className="flex items-center cursor-pointer">
                                <input type="radio" id="type-individual" name="account_type" value="individual" checked={!isBusiness} onChange={() => setIsBusiness(false)} className="mr-2 h-4 w-4 text-[#00529b] focus:ring-[#b58e31]"/> Individual
                            </AuthLabel>
                            <AuthLabel htmlFor="type-business" className="flex items-center cursor-pointer">
                                <input type="radio" id="type-business" name="account_type" value="business" checked={isBusiness} onChange={() => setIsBusiness(true)} className="mr-2 h-4 w-4 text-[#00529b] focus:ring-[#b58e31]"/> Business
                            </AuthLabel>
                        </div>

                        {isBusiness && (
                            <div className="animate-fade-in">
                                <FormSectionHeader title="Business Details" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                    <div>
                                        <AuthLabel htmlFor="reg-company" required={isBusiness}>Company Name</AuthLabel>
                                        <AuthInput type="text" id="reg-company" name="company_name" required={isBusiness} />
                                    </div>
                                    <div>
                                        <AuthLabel htmlFor="reg-taxid" required={isBusiness}>Business Reg/Tax ID</AuthLabel>
                                        <AuthInput type="text" id="reg-taxid" name="tax_id" required={isBusiness} />
                                    </div>
                                    <div>
                                        <AuthLabel htmlFor="reg-biz-type" required={isBusiness}>Type of Business</AuthLabel>
                                        <AuthSelect id="reg-biz-type" name="business_type" required={isBusiness}><option value="">Select...</option><option value="sole_proprietorship">Sole Proprietorship</option><option value="llc">LLC</option><option value="corporation">Corporation</option></AuthSelect>
                                    </div>
                                    <div>
                                        <AuthLabel htmlFor="reg-job-title" required={isBusiness}>Your Job Title</AuthLabel>
                                        <AuthInput type="text" id="reg-job-title" name="job_title" required={isBusiness} />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <FormSectionHeader title="Primary Address" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                             <div className="md:col-span-2">
                                <AuthLabel htmlFor="reg-street" required>Street Address</AuthLabel>
                                <AuthInput type="text" id="reg-street" name="address_street" required />
                            </div>
                            <div>
                                <AuthLabel htmlFor="reg-city" required>City</AuthLabel>
                                <AuthInput type="text" id="reg-city" name="address_city" required />
                            </div>
                             <div>
                                <AuthLabel htmlFor="reg-state" required>State/Region</AuthLabel>
                                <AuthInput type="text" id="reg-state" name="address_state" required />
                            </div>
                             <div>
                                <AuthLabel htmlFor="reg-zip" required>Postal/Zip Code</AuthLabel>
                                <AuthInput type="text" id="reg-zip" name="address_zip" required />
                            </div>
                             <div>
                                <AuthLabel htmlFor="reg-country" required>Country</AuthLabel>
                                <AuthSelect id="reg-country" name="address_country" required><option value="">Select...</option><option value="NG">Nigeria</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="CA">Canada</option><option value="AU">Australia</option></AuthSelect>
                            </div>
                        </div>

                        <FormSectionHeader title="Document Upload" />
                         <div>
                            <FileUpload id="id_doc" name="id_doc" label="Government-Issued ID (e.g., Passport)" fileName={idDocName} onChange={handleFileChange(setIdDocName)} required />
                             {isBusiness && <div className="animate-fade-in">
                                <FileUpload id="biz_reg_doc" name="biz_reg_doc" label="Business Registration Document" fileName={bizRegDocName} onChange={handleFileChange(setBizRegDocName)} required />
                                <FileUpload id="proof_address_doc" name="proof_address_doc" label="Proof of Business Address" fileName={proofAddressDocName} onChange={handleFileChange(setProofAddressDocName)} required />
                             </div>}
                             <p className="text-xs text-gray-500 mt-3">Accepted formats: PDF, JPG, PNG. Maximum size: 5MB per file.</p>
                        </div>

                        <FormSectionHeader title="Account Security" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <AuthLabel htmlFor="reg-password" required>Password</AuthLabel>
                                <AuthInput type="password" id="reg-password" name="password" required onChange={(e) => checkPasswordStrength(e.target.value)} />
                                 <div className="h-2 mt-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full transition-all duration-300 ${passwordStrength.className}`}></div>
                                </div>
                                <p className="text-right text-xs mt-1 h-4 text-gray-500">{passwordStrength.text}</p>
                            </div>
                             <div>
                                <AuthLabel htmlFor="reg-confirm" required>Confirm Password</AuthLabel>
                                <AuthInput type="password" id="reg-confirm" name="confirm_password" required />
                            </div>
                             <div>
                                <AuthLabel htmlFor="reg-how-heard">How did you hear about us?</AuthLabel>
                                <AuthSelect id="reg-how-heard" name="how_heard"><option value="">Select an option...</option><option value="search_engine">Search Engine</option><option value="social_media">Social Media</option><option value="referral">Referral</option></AuthSelect>
                            </div>
                            <div>
                                <AuthLabel htmlFor="reg-referral">Referral Code (Optional)</AuthLabel>
                                <AuthInput type="text" id="reg-referral" name="referral_code" />
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                           <label htmlFor="terms-agree" className="flex items-center text-sm cursor-pointer">
                               <input type="checkbox" id="terms-agree" name="terms_agree" required className="mr-3 h-4 w-4 rounded text-[#00529b] focus:ring-[#b58e31]" /> 
                               <span>I agree to the <Link to="/terms" target="_blank" className="underline text-[#00529b] dark:text-[#e4b74e] hover:text-[#b58e31]">Terms & Conditions</Link> and <Link to="/privacy-policy" target="_blank" className="underline text-[#00529b] dark:text-[#e4b74e] hover:text-[#b58e31]">Privacy Policy</Link>.</span>
                            </label>
                        </div>
                        <button type="submit" className="w-full py-3 text-base font-semibold rounded-md mt-6 bg-[#00529b] text-white hover:bg-[#00427a] dark:bg-[#e4b74e] dark:text-slate-900 dark:hover:bg-[#f0c05a]">Create Account</button>
                    </form>
                )}
            </div>
        </div>
    );
};


// --- NEW CLIENT DASHBOARD & COMPONENTS ---

const DashboardModal: React.FC<{ isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode, size?: 'md' | 'lg' | 'xl' }> = ({ isOpen, onClose, title, children, size = 'lg' }) => {
    if (!isOpen) return null;
    const sizeMap = {
        'md': 'max-w-md',
        'lg': 'max-w-2xl',
        'xl': 'max-w-4xl'
    };
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 animate-fade-in-fast" onClick={onClose}>
            <div className={`bg-white dark:bg-[#2c333c] rounded-lg shadow-xl w-full ${sizeMap[size]} border border-gray-300 dark:border-gray-600`} onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-2xl leading-none">&times;</button>
                </div>
                <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
            </div>
        </div>
    );
};

const DashboardModule: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white dark:bg-[#2c333c] p-6 rounded-lg shadow-md border border-gray-200 dark:border-[#495057] ${className}`}>
        {children}
    </div>
);

const DashboardModuleHeader: React.FC<{ title: string, children?: React.ReactNode }> = ({ title, children }) => (
    <div className="flex flex-wrap gap-4 justify-between items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        <div>{children}</div>
    </div>
);

const DashboardStatusBadge: React.FC<{ status: string }> = ({ status }) => {
    const statusMap: { [key: string]: string } = {
        'in transit': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        'customs hold': 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
        'delivered': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        'pending arrival': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
        'arrived at hgl': 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300',
        'unpaid': 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
        'paid': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        'unread': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 font-bold',
        'read': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    };
    const badgeClass = statusMap[status.toLowerCase()] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    return <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${badgeClass}`}>{status}</span>;
};

const NewShipmentModal: React.FC<{ isOpen: boolean, onClose: () => void, onShipmentCreated: (msg: string) => void }> = ({ isOpen, onClose, onShipmentCreated }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onShipmentCreated('New shipment has been successfully created (simulated)!');
        onClose();
    };
    return (
        <DashboardModal isOpen={isOpen} onClose={onClose} title="Create New Shipment">
             <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><AuthLabel htmlFor="ship_origin" required>Origin Country</AuthLabel><AuthInput id="ship_origin" required /></div>
                    <div><AuthLabel htmlFor="ship_dest" required>Destination Country</AuthLabel><AuthInput id="ship_dest" required /></div>
                    <div className="md:col-span-2"><AuthLabel htmlFor="ship_desc" required>Description of Goods</AuthLabel><textarea id="ship_desc" rows={3} required className="w-full p-2.5 border rounded-md bg-gray-100 dark:bg-[#3a4149] text-slate-800 dark:text-slate-200 border-gray-300 dark:border-[#495057] focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31] transition" /></div>
                </div>
                <div className="mt-6 pt-6 border-t dark:border-gray-600 flex justify-end gap-4">
                    <Button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-500">Cancel</Button>
                    <Button type="submit" primary>Create Shipment</Button>
                </div>
            </form>
        </DashboardModal>
    );
};

const ShipmentsView: React.FC<{ onShipmentSelect: (id: string) => void, setAlertMessage: (msg: string) => void }> = ({ onShipmentSelect, setAlertMessage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
    <>
        <NewShipmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onShipmentCreated={setAlertMessage} />
        <DashboardModule>
            <DashboardModuleHeader title="My Shipments">
                <Button primary onClick={() => setIsModalOpen(true)}>New Shipment</Button>
            </DashboardModuleHeader>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Origin</th>
                            <th scope="col" className="px-6 py-3">Destination</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Est. Delivery</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CLIENT_SHIPMENTS_DATA.map(s => (
                            <tr key={s.id} className="bg-white dark:bg-[#2c333c] border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={() => onShipmentSelect(s.id)}>
                                <td className="px-6 py-4 font-medium text-[#00529b] dark:text-[#e4b74e] underline">{s.id}</td>
                                <td className="px-6 py-4">{s.date}</td>
                                <td className="px-6 py-4">{s.origin}</td>
                                <td className="px-6 py-4">{s.destination}</td>
                                <td className="px-6 py-4"><DashboardStatusBadge status={s.status} /></td>
                                <td className="px-6 py-4">{s.estDelivery}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardModule>
    </>
)};

const CreatePreAlertModal: React.FC<{ isOpen: boolean, onClose: () => void, onAlertCreated: (msg: string) => void }> = ({ isOpen, onClose, onAlertCreated }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAlertCreated('New Pre-Alert has been successfully created!');
        onClose();
    };
    
    return (
        <DashboardModal isOpen={isOpen} onClose={onClose} title="Create New Pre-Alert">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <AuthLabel htmlFor="pa_facility" required>HGL Facility</AuthLabel>
                        <AuthSelect id="pa_facility" name="facility" required>
                            <option value="UK">UK Facility</option>
                            <option value="NG">NG Facility</option>
                        </AuthSelect>
                    </div>
                    <div>
                        <AuthLabel htmlFor="pa_carrier" required>Carrier</AuthLabel>
                        <AuthInput id="pa_carrier" name="carrier" placeholder="e.g., Amazon, FedEx" required />
                    </div>
                     <div>
                        <AuthLabel htmlFor="pa_tracking" required>Tracking Number</AuthLabel>
                        <AuthInput id="pa_tracking" name="tracking" placeholder="Enter carrier tracking number" required />
                    </div>
                     <div>
                        <AuthLabel htmlFor="pa_arrival" required>Estimated Arrival</AuthLabel>
                        <AuthInput type="date" id="pa_arrival" name="arrival_date" required />
                    </div>
                    <div className="md:col-span-2">
                        <AuthLabel htmlFor="pa_desc" required>Description of Goods</AuthLabel>
                        <textarea id="pa_desc" name="description" rows={3} required className="w-full p-2.5 border rounded-md bg-gray-100 dark:bg-[#3a4149] text-slate-800 dark:text-slate-200 border-gray-300 dark:border-[#495057] focus:ring-2 focus:ring-[#b58e31]/50 focus:border-[#b58e31] transition" placeholder="e.g., 2x Blue T-shirts, 1x iPhone 15 Pro"></textarea>
                    </div>
                </div>
                <div className="mt-6 pt-6 border-t dark:border-gray-600 flex justify-end gap-4">
                    <Button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-500">Cancel</Button>
                    <Button type="submit" primary>Create Pre-Alert</Button>
                </div>
            </form>
        </DashboardModal>
    );
};

const PreAlertsView: React.FC<{ setAlertMessage: (msg: string) => void }> = ({ setAlertMessage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
        <CreatePreAlertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAlertCreated={setAlertMessage} />
        <DashboardModule>
            <DashboardModuleHeader title="Pre-Alerts">
                <Button primary onClick={() => setIsModalOpen(true)}>New Pre-Alert</Button>
            </DashboardModuleHeader>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Facility</th>
                            <th scope="col" className="px-6 py-3">Carrier</th>
                            <th scope="col" className="px-6 py-3">Tracking</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Est. Arrival</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CLIENT_PREALERTS_DATA.map(p => (
                            <tr key={p.id} className="bg-white dark:bg-[#2c333c] border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{p.id}</td>
                                <td className="px-6 py-4">{p.facility}</td>
                                <td className="px-6 py-4">{p.carrier}</td>
                                <td className="px-6 py-4">{p.tracking}</td>
                                <td className="px-6 py-4">{p.description}</td>
                                <td className="px-6 py-4">{p.estArrival}</td>
                                <td className="px-6 py-4"><DashboardStatusBadge status={p.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardModule>
        </>
    );
};

const InvoicesView: React.FC<{ setAlertMessage: (msg: string) => void }> = ({ setAlertMessage }) => {
    const [invoices, setInvoices] = useState<ClientInvoice[]>(CLIENT_INVOICES_DATA);
    const [isPayModalOpen, setPayModalOpen] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState<ClientInvoice | null>(null);

    const handlePayClick = (invoice: ClientInvoice) => {
        setSelectedInvoice(invoice);
        setPayModalOpen(true);
    };

    const handleConfirmPayment = () => {
        if (!selectedInvoice) return;
        setInvoices(prev => prev.map(inv => inv.id === selectedInvoice.id ? { ...inv, status: 'Paid' } : inv));
        setPayModalOpen(false);
        setAlertMessage(`Invoice ${selectedInvoice.id} has been paid successfully!`);
    };

    return (
        <>
            <DashboardModal isOpen={isPayModalOpen} onClose={() => setPayModalOpen(false)} title={`Pay Invoice ${selectedInvoice?.id}`}>
                {selectedInvoice && (
                    <div>
                        <p className="mb-2 text-gray-700 dark:text-gray-300">You are about to pay:</p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedInvoice.currency === 'GBP' ? '£' : '₦'}{selectedInvoice.amount}</p>
                        <p className="text-sm text-gray-500 mb-6">This amount will be deducted from your {selectedInvoice.currency} wallet.</p>
                         <div className="mt-6 pt-6 border-t dark:border-gray-600 flex justify-end gap-4">
                            <Button type="button" onClick={() => setPayModalOpen(false)} className="bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-500">Cancel</Button>
                            <Button type="button" onClick={handleConfirmPayment} primary>Confirm Payment</Button>
                        </div>
                    </div>
                )}
            </DashboardModal>
            <DashboardModule>
                <DashboardModuleHeader title="Invoices & Billing" />
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Issue Date</th>
                                <th scope="col" className="px-6 py-3">Due Date</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map(i => (
                                <tr key={i.id} className="bg-white dark:bg-[#2c333c] border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{i.id}</td>
                                    <td className="px-6 py-4">{i.issueDate}</td>
                                    <td className="px-6 py-4">{i.dueDate}</td>
                                    <td className="px-6 py-4">{i.amount} <span className="text-xs">{i.currency}</span></td>
                                    <td className="px-6 py-4"><DashboardStatusBadge status={i.status} /></td>
                                    <td className="px-6 py-4 text-right">
                                        {i.status === 'Unpaid' ? <Button onClick={() => handlePayClick(i)} secondary className="!text-xs !py-1 !px-3">Pay Now</Button> : <Button outline className="!text-xs !py-1 !px-3">View</Button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DashboardModule>
        </>
    );
};

const TopUpWalletModal: React.FC<{ isOpen: boolean, onClose: () => void, onTopUp: (msg: string) => void }> = ({ isOpen, onClose, onTopUp }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const amount = formData.get('amount');
        const currency = formData.get('currency');
        onTopUp(`Successfully topped up ${currency} wallet with ${amount} (simulated)!`);
        onClose();
    };
    return (
        <DashboardModal isOpen={isOpen} onClose={onClose} title="Top Up Wallet">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <AuthLabel htmlFor="topup_amount" required>Amount</AuthLabel>
                        <AuthInput type="number" id="topup_amount" name="amount" step="0.01" min="1" required />
                    </div>
                    <div>
                        <AuthLabel htmlFor="topup_currency" required>Currency</AuthLabel>
                        <AuthSelect id="topup_currency" name="currency" required><option value="GBP">GBP (£)</option><option value="NGN">NGN (₦)</option></AuthSelect>
                    </div>
                </div>
                 <p className="text-center text-sm text-gray-500 my-6">You will be redirected to our payment provider to complete the transaction.</p>
                <div className="mt-6 pt-6 border-t dark:border-gray-600 flex justify-end gap-4">
                    <Button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-500">Cancel</Button>
                    <Button type="submit" primary>Proceed to Payment</Button>
                </div>
            </form>
        </DashboardModal>
    );
};


const WalletView: React.FC<{ setAlertMessage: (msg: string) => void }> = ({ setAlertMessage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
    <>
        <TopUpWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onTopUp={setAlertMessage} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 flex flex-col gap-6">
                <DashboardModule>
                     <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">GBP Wallet Balance</h3>
                     <p className="text-3xl font-bold text-gray-900 dark:text-white">£ 75.50</p>
                </DashboardModule>
                 <DashboardModule>
                     <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">NGN Wallet Balance</h3>
                     <p className="text-3xl font-bold text-gray-900 dark:text-white">₦ 15,000.00</p>
                </DashboardModule>
                <DashboardModule>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Top Up Wallet</h3>
                    <div className="space-y-4">
                        <Button primary className="w-full" onClick={() => setIsModalOpen(true)}>Top Up Now</Button>
                        <div>
                            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">For Nigeria:</p>
                            <div className="flex justify-center items-center gap-3 grayscale opacity-60">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png" alt="Paystack" className="h-4"/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Flutterwave_Logo.png" alt="Flutterwave" className="h-5"/>
                            </div>
                        </div>
                         <div>
                            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2">For Rest of World:</p>
                             <div className="flex justify-center items-center gap-4 grayscale opacity-60">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5"/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-5"/>
                            </div>
                        </div>
                    </div>
                </DashboardModule>
            </div>
            <div className="lg:col-span-2">
                 <DashboardModule>
                    <DashboardModuleHeader title="Transaction History" />
                    <div className="overflow-x-auto">
                         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Date</th>
                                    <th scope="col" className="px-6 py-3">Description</th>
                                    <th scope="col" className="px-6 py-3 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {WALLET_TRANSACTIONS_DATA.map((t, idx) => (
                                     <tr key={idx} className="bg-white dark:bg-[#2c333c] border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">{t.date}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{t.description}</td>
                                        <td className={`px-6 py-4 text-right font-semibold flex items-center justify-end gap-2 ${t.type === 'Credit' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                           {t.type === 'Credit' ? <IconWrapper className="w-4 h-4"><IconArrowDownCircle /></IconWrapper> : <IconWrapper className="w-4 h-4"><IconArrowUpCircle /></IconWrapper>}
                                           <span>{t.gbp ? `£${t.gbp.replace(/[+-]/g, '')}` : `₦${t.ngn?.replace(/[+-]/g, '')}`}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </DashboardModule>
            </div>
        </div>
    </>
)};

const AddressBookView: React.FC = () => (
    <DashboardModule>
        <DashboardModuleHeader title="Address Book">
            <Button primary onClick={() => alert("Open 'Add Address' modal.")}>Add New Address</Button>
        </DashboardModuleHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_ADDRESSES_DATA.map(a => (
                <div key={a.id} className="p-4 border rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200">{a.label}</h4>
                        <div className="flex gap-2">
                           <Button outline className="!text-xs !py-1 !px-2" onClick={() => alert(`Editing address: ${a.label}`)}>Edit</Button>
                           <Button secondary className="!text-xs !py-1 !px-2 !bg-red-600 !border-red-600 hover:!bg-red-700" onClick={() => confirm(`Are you sure you want to delete the address '${a.label}'?`)}>Delete</Button>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p>{a.name}</p>
                        <p>{a.street}</p>
                        <p>{a.country}</p>
                        <p>{a.phone}</p>
                    </div>
                    <div className="flex gap-4 mt-3 text-xs">
                        {a.isDefaultShipping && <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-2 py-0.5 rounded">Default Shipping</span>}
                        {a.isDefaultBilling && <span className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 px-2 py-0.5 rounded">Default Billing</span>}
                    </div>
                </div>
            ))}
        </div>
    </DashboardModule>
);

const ShipmentDetailView: React.FC<{ shipmentId: string; onBack: () => void }> = ({ shipmentId, onBack }) => {
    const shipment = CLIENT_SHIPMENT_DETAILS_DATA[shipmentId];

    if (!shipment) {
        return <DashboardModule>
            <p>Shipment not found.</p>
            <Button onClick={onBack} outline className="mt-4">Back to Shipments</Button>
        </DashboardModule>;
    }
    
    return (
        <div>
            <div className="mb-6">
                <button onClick={onBack} className="text-sm font-semibold text-[#00529b] dark:text-[#e4b74e] hover:underline">
                    &larr; Back to all shipments
                </button>
            </div>
            <DashboardModule>
                <DashboardModuleHeader title={`Shipment Details: ${shipment.id}`} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                            <div><p className="text-sm text-gray-500 dark:text-gray-400">Status</p><DashboardStatusBadge status={shipment.status} /></div>
                            <div><p className="text-sm text-gray-500 dark:text-gray-400">Origin</p><p className="font-semibold text-gray-800 dark:text-gray-200">{shipment.origin}</p></div>
                            <div><p className="text-sm text-gray-500 dark:text-gray-400">Destination</p><p className="font-semibold text-gray-800 dark:text-gray-200">{shipment.destination}</p></div>
                             <div><p className="text-sm text-gray-500 dark:text-gray-400">Est. Delivery</p><p className="font-semibold text-gray-800 dark:text-gray-200">{shipment.estDelivery}</p></div>
                             <div><p className="text-sm text-gray-500 dark:text-gray-400">Weight</p><p className="font-semibold text-gray-800 dark:text-gray-200">{shipment.weight}</p></div>
                            <div><p className="text-sm text-gray-500 dark:text-gray-400">Service</p><p className="font-semibold text-gray-800 dark:text-gray-200">{shipment.service}</p></div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Tracking History</h3>
                        <div className="border-l-2 border-[#00529b] dark:border-[#e4b74e] pl-6 space-y-8">
                            {shipment.milestones.map((m, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[34px] top-1 h-4 w-4 bg-[#b58e31] rounded-full border-4 border-white dark:border-[#2c333c]"></div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">{m.status}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{m.location}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{m.date} at {m.time}</p>
                                    {m.notes && <p className="text-sm italic text-orange-600 dark:text-orange-400 mt-2">Note: {m.notes}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="p-4 border rounded-md dark:border-gray-700">
                             <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Associated Invoices</h4>
                             {shipment.associatedInvoiceIds.length > 0 ? (
                                 <ul className="text-sm list-disc pl-5">
                                    {shipment.associatedInvoiceIds.map(id => <li key={id}><a href={`#invoices`} className="text-[#00529b] dark:text-[#e4b74e] underline">{id}</a></li>)}
                                 </ul>
                             ) : <p className="text-sm text-gray-500 dark:text-gray-400">None</p>}
                        </div>
                         <div className="p-4 border rounded-md dark:border-gray-700">
                             <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Handling Notes</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{shipment.notes || 'No special handling notes.'}</p>
                        </div>
                    </div>
                </div>
            </DashboardModule>
        </div>
    );
};

const StatCard: React.FC<{title: string, value: string, icon: React.ReactNode}> = ({ title, value, icon }) => (
    <DashboardModule className="flex items-center gap-4">
        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#b58e31]/20 dark:bg-[#e4b74e]/20 text-[#b58e31] dark:text-[#e4b74e] flex items-center justify-center">
            <IconWrapper className="w-6 h-6">{icon}</IconWrapper>
        </div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
        </div>
    </DashboardModule>
);

const DashboardOverview: React.FC<{onNavClick: (viewId: string) => void}> = ({onNavClick}) => (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard title="In Transit" value={CLIENT_SHIPMENTS_DATA.filter(s => s.status === 'In Transit').length.toString()} icon={<IconTruck />} />
            <StatCard title="Unpaid Invoices" value={CLIENT_INVOICES_DATA.filter(i => i.status === 'Unpaid').length.toString()} icon={<IconReceipt />} />
            <StatCard title="Unread Notifications" value={CLIENT_NOTIFICATIONS_DATA.filter(n => n.status === 'Unread').length.toString()} icon={<IconBell />} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardModule>
                <DashboardModuleHeader title="Recent Shipments">
                    <Button outline className="!text-xs !py-1 !px-3" onClick={() => onNavClick('shipments')}>View All</Button>
                </DashboardModuleHeader>
                <ul className="space-y-4">
                    {CLIENT_SHIPMENTS_DATA.slice(0, 3).map(s => (
                        <li key={s.id} className="flex justify-between items-center text-sm">
                            <div>
                                <p className="font-semibold text-gray-800 dark:text-gray-200">{s.id}</p>
                                <p className="text-gray-500 dark:text-gray-400">{s.origin} &rarr; {s.destination}</p>
                            </div>
                            <DashboardStatusBadge status={s.status} />
                        </li>
                    ))}
                </ul>
            </DashboardModule>
            <DashboardModule>
                <DashboardModuleHeader title="Recent Notifications">
                     <Button outline className="!text-xs !py-1 !px-3" onClick={() => onNavClick('notifications')}>View All</Button>
                </DashboardModuleHeader>
                <ul className="space-y-4">
                    {CLIENT_NOTIFICATIONS_DATA.slice(0, 3).map((n, i) => (
                         <li key={i} className={`p-3 rounded-md ${n.status === 'Unread' ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                             <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{n.subject}</p>
                             <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{n.snippet}</p>
                         </li>
                    ))}
                </ul>
            </DashboardModule>
        </div>
    </div>
);

const NotificationsView: React.FC<{ setAlertMessage: (msg: string) => void }> = ({ setAlertMessage }) => {
    const [notifications, setNotifications] = useState(CLIENT_NOTIFICATIONS_DATA);

    const handleMarkAsRead = (index: number) => {
        setNotifications(prev => prev.map((n, i) => i === index ? { ...n, status: 'Read' } : n));
    };

    const handleDelete = (index: number) => {
        setNotifications(prev => prev.filter((_, i) => i !== index));
        setAlertMessage("Notification deleted.");
    };

    return (
        <DashboardModule>
            <DashboardModuleHeader title="Notifications" />
            <ul className="space-y-4">
                {notifications.map((n, i) => (
                    <li key={i} className={`p-4 border rounded-lg flex items-start gap-4 transition-colors ${n.status === 'Unread' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'dark:border-gray-700'}`}>
                        <div className="flex-grow">
                            <div className="flex justify-between items-center mb-1">
                                <p className="font-semibold text-gray-800 dark:text-gray-200">{n.subject}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{n.date}</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{n.snippet}</p>
                            <div className="flex gap-2">
                                {n.status === 'Unread' && <Button outline onClick={() => handleMarkAsRead(i)} className="!text-xs !py-1 !px-3">Mark as Read</Button>}
                                <Button secondary onClick={() => handleDelete(i)} className="!text-xs !py-1 !px-3 !bg-red-600 !border-red-600 hover:!bg-red-700">Delete</Button>
                            </div>
                        </div>
                    </li>
                ))}
                {notifications.length === 0 && <p className="text-center text-gray-500 dark:text-gray-400 py-8">You have no notifications.</p>}
            </ul>
        </DashboardModule>
    );
};

const ProfileSettingsView: React.FC<{ setAlertMessage: (msg: string) => void }> = ({ setAlertMessage }) => {
    const handleSave = (e: React.FormEvent, message: string) => {
        e.preventDefault();
        setAlertMessage(message);
    };

    return (
        <div className="space-y-6">
            <DashboardModule>
                <DashboardModuleHeader title="Personal Information" />
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => handleSave(e, 'Personal information updated!')}>
                    <div><AuthLabel htmlFor="profile_name">Full Name</AuthLabel><AuthInput id="profile_name" defaultValue="Client Example Name" /></div>
                    <div><AuthLabel htmlFor="profile_email">Email Address</AuthLabel><AuthInput id="profile_email" type="email" defaultValue="client@example.com" /></div>
                    <div><AuthLabel htmlFor="profile_phone">Phone Number</AuthLabel><AuthInput id="profile_phone" type="tel" defaultValue="+44 7012345678" /></div>
                    <div className="md:col-span-2 text-right"><Button primary type="submit">Save Changes</Button></div>
                </form>
            </DashboardModule>
            <DashboardModule>
                <DashboardModuleHeader title="Change Password" />
                 <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => handleSave(e, 'Password updated successfully!')}>
                    <div className="md:col-span-2"><AuthLabel htmlFor="profile_pass_current">Current Password</AuthLabel><AuthInput id="profile_pass_current" type="password" /></div>
                    <div><AuthLabel htmlFor="profile_pass_new">New Password</AuthLabel><AuthInput id="profile_pass_new" type="password" /></div>
                    <div><AuthLabel htmlFor="profile_pass_confirm">Confirm New Password</AuthLabel><AuthInput id="profile_pass_confirm" type="password" /></div>
                    <div className="md:col-span-2 text-right"><Button primary type="submit">Update Password</Button></div>
                </form>
            </DashboardModule>
        </div>
    );
};


export const ClientDashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [activeView, setActiveView] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) setActiveView(hash);
        else setActiveView('dashboard');
    }, [location]);

    useEffect(() => {
        if (alertMessage) {
            const timer = setTimeout(() => setAlertMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [alertMessage]);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#1f2937';
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = '#f3f4f6';
        }
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
         return () => { document.body.style.backgroundColor = ''; }
    }, [isDarkMode]);

    const handleNavClick = (viewId: string) => {
        setActiveView(viewId);
        navigate(`#${viewId}`);
        setSidebarOpen(false);
    };

    const navItems = [
        { id: 'dashboard', title: 'Dashboard', icon: <IconDashboard /> },
        { id: 'shipments', title: 'Shipments', icon: <IconTruck /> },
        { id: 'pre-alerts', title: 'Pre-Alerts', icon: <IconBoxSeam /> },
        { id: 'invoices', title: 'Invoices', icon: <IconReceipt /> },
        { id: 'wallet', title: 'Wallet', icon: <IconWallet2 /> },
        { id: 'addresses', title: 'Address Book', icon: <IconGeoAlt /> },
        { id: 'notifications', title: 'Notifications', icon: <IconBell /> },
        { id: 'settings', title: 'Profile Settings', icon: <IconPerson /> },
    ];
    
    const renderView = () => {
        const [view, subView] = activeView.split('/');
        switch(view) {
            case 'shipments': 
                return subView ? <ShipmentDetailView shipmentId={subView} onBack={() => handleNavClick('shipments')} /> : <ShipmentsView onShipmentSelect={(id) => handleNavClick(`shipments/${id}`)} setAlertMessage={setAlertMessage} />;
            case 'pre-alerts': return <PreAlertsView setAlertMessage={setAlertMessage} />;
            case 'invoices': return <InvoicesView setAlertMessage={setAlertMessage}/>;
            case 'wallet': return <WalletView setAlertMessage={setAlertMessage}/>;
            case 'addresses': return <AddressBookView />;
            case 'notifications': return <NotificationsView setAlertMessage={setAlertMessage} />;
            case 'settings': return <ProfileSettingsView setAlertMessage={setAlertMessage} />;
            case 'dashboard':
            default: return <DashboardOverview onNavClick={handleNavClick} />;
        }
    };

    const Sidebar = () => (
        <aside className={`fixed lg:relative z-20 w-64 bg-[#00529b] dark:bg-[#111827] text-white flex-shrink-0 flex flex-col h-full transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
            <div className="h-16 flex items-center justify-center px-4 border-b border-white/20">
                <Link to="/" className="text-xl font-bold text-center">HAYAPASS</Link>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
                <ul>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button onClick={() => handleNavClick(item.id)} className={`w-full flex items-center gap-3 text-left py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${activeView.startsWith(item.id) ? 'bg-[#b58e31] dark:bg-[#e4b74e] text-white dark:text-black' : 'hover:bg-white/10'}`}>
                                <IconWrapper className="w-5 h-5">{item.icon}</IconWrapper> 
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-white/20">
                <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 text-left py-2.5 px-4 rounded-md text-sm font-medium transition-colors hover:bg-white/10">Logout</button>
            </div>
        </aside>
    );

    return (
        <div className={`font-sans ${isDarkMode ? 'dark' : ''}`}>
             {alertMessage && (
                <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-[100] animate-fade-in">
                    {alertMessage}
                </div>
            )}
            <div className="flex min-h-screen bg-gray-100 dark:bg-[#1f2937]">
                {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-10 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}
                <Sidebar />
                <div className="flex-1 flex flex-col">
                     <header className="h-16 bg-white dark:bg-[#2c333c] shadow-md flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-600 sticky top-0 z-10">
                        <button className="lg:hidden text-gray-600 dark:text-gray-300" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hidden lg:block">Client Dashboard</h2>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600 dark:text-gray-400 text-sm hidden sm:block">Welcome, Client!</span>
                             <label htmlFor="theme-toggle-client-dash" className="relative inline-block w-10 h-5 rounded-full cursor-pointer">
                                <input type="checkbox" id="theme-toggle-client-dash" className="sr-only peer" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                                <div className="w-full h-full bg-slate-300 dark:bg-slate-600 rounded-full peer-checked:bg-[#e4b74e]"></div>
                                <div className="absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </label>
                            <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full" />
                        </div>
                     </header>
                     <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                        <div className="animate-fade-in">
                            {renderView()}
                        </div>
                     </main>
                </div>
            </div>
        </div>
    );
};
