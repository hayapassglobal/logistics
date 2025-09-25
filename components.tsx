
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SITE_CONFIG, HEADER_MENU_ITEMS, HERO_SLIDES } from './constants';
import type { Service, Feature, Testimonial, TrackingData, FaqItemData } from './types';
import { MOCK_TRACKING_DATA } from './constants';
import { IconFacebook, IconTwitterX, IconInstagram, IconLinkedIn, IconWhatsapp, IconWrapper } from './constants';


// --- BUTTON COMPONENT ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    asLink?: boolean;
    to?: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, primary, secondary, outline, asLink, to, className, ...props }) => {
  const baseClasses = "inline-block py-2.5 px-5 text-sm font-semibold rounded-md text-center transition-all duration-300 ease-in-out cursor-pointer border";
  const primaryClasses = "bg-[#00529b] text-white border-[#00529b] hover:bg-[#00427a] hover:border-[#00427a]";
  const secondaryClasses = "bg-[#b58e31] text-white border-[#b58e31] hover:bg-[#9f7b2a] hover:border-[#9f7b2a]";
  const outlineClasses = "bg-transparent text-[#00529b] border-2 border-[#00529b] hover:bg-[#00529b] hover:text-white";

  const appliedClasses = `${baseClasses} ${primary ? primaryClasses : ''} ${secondary ? secondaryClasses : ''} ${outline ? outlineClasses : ''} ${className}`;

  if (asLink && to) {
    return <Link to={to} className={appliedClasses}>{children}</Link>;
  }

  return <button className={appliedClasses} {...props}>{children}</button>;
};

// --- HEADER ---
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="w-[90%] max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src={SITE_CONFIG.logoUrl} alt={`${SITE_CONFIG.brandName} Logo`} className="h-11" />
        </Link>
        <button
          className="md:hidden text-2xl text-[#00529b]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
        <nav className={`
          absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none
          transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} md:scale-y-100 origin-top
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            {HEADER_MENU_ITEMS.map((item) => (
              <li key={item.label} className="w-full md:w-auto">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-3 px-3 uppercase text-xs font-medium tracking-wider border-b-2 transition-colors duration-200 text-center
                    ${isActive ? 'text-[#00529b] border-[#b58e31]' : 'text-gray-800 border-transparent hover:text-[#00529b]'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="p-4 md:hidden w-full flex flex-col gap-2">
                <Button asLink to="/quote" primary className="w-full">Get a Quote</Button>
                <Button asLink to="/login" secondary className="w-full">Login / Register</Button>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asLink to="/quote" primary>Get a Quote</Button>
          <Button asLink to="/login" secondary>Login / Register</Button>
        </div>
      </div>
    </header>
  );
};


// --- FOOTER ---
export const Footer: React.FC = () => {
    const whatsappLink = `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`;
    return (
        <footer className="bg-slate-800 text-slate-400 py-16 px-4">
            <div className="w-[90%] max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="text-white text-lg font-bold mb-4">{SITE_CONFIG.brandName}</h4>
                        <p className="text-sm leading-relaxed mb-4">{SITE_CONFIG.tagline}</p>
                        <div className="flex items-center gap-5">
                            {SITE_CONFIG.social.facebook && <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#f0e1b0]"><IconWrapper className="w-6 h-6"><IconFacebook /></IconWrapper></a>}
                            {SITE_CONFIG.social.twitter && <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#f0e1b0]"><IconWrapper className="w-6 h-6"><IconTwitterX /></IconWrapper></a>}
                            {SITE_CONFIG.social.instagram && <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#f0e1b0]"><IconWrapper className="w-6 h-6"><IconInstagram /></IconWrapper></a>}
                            {SITE_CONFIG.social.linkedin && <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#f0e1b0]"><IconWrapper className="w-6 h-6"><IconLinkedIn /></IconWrapper></a>}
                            {SITE_CONFIG.contact.whatsapp && <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#f0e1b0]"><IconWrapper className="w-6 h-6"><IconWhatsapp /></IconWrapper></a>}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Our Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">Services</Link></li>
                            <li><Link to="/faq" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Quick Actions</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/tracking" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">Track Shipment</Link></li>
                            <li><Link to="/quote" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">Get a Quote</Link></li>
                            <li><Link to="/contact" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">Contact Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/privacy-policy" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-[#f0e1b0] hover:pl-1 transition-all">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-slate-700 text-sm">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.brandName}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


// --- HERO SLIDER ---
export const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef<number | null>(null);
  
    const resetTimeout = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }, []);
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = window.setTimeout(
        () =>
          setCurrentSlide((prevIndex) =>
            prevIndex === HERO_SLIDES.length - 1 ? 0 : prevIndex + 1
          ),
        5000
      );
  
      return () => {
        resetTimeout();
      };
    }, [currentSlide, resetTimeout]);
  
    const goToSlide = (slideIndex: number) => {
      setCurrentSlide(slideIndex);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    }
  
    return (
      <section className="relative h-[70vh] w-full overflow-hidden bg-[#00529b]">
        <div
          className="whitespace-nowrap h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className="inline-block w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-[#003e76]/70 z-10" />
              <div className="w-full h-full flex items-center justify-center text-center text-white relative z-20 p-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-down">{slide.headline}</h1>
                  <p className="text-lg md:text-xl mb-8 opacity-95 animate-fade-in-up">{slide.tagline}</p>
                  <div className="flex justify-center gap-4">
                    {slide.buttons?.map((btn, i) => (
                        <Button key={i} asLink to={btn.href} primary={btn.primary} secondary={!btn.primary} className="text-base py-3 px-8">
                            {btn.text}
                        </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full z-30 hover:bg-black/60 transition-colors hidden md:block">
            &#10094;
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full z-30 hover:bg-black/60 transition-colors hidden md:block">
            &#10095;
        </button>
  
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-110' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
};

// --- SERVICE CARD ---
export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg text-left transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl flex flex-col">
        <div className="w-16 h-16 mb-6 text-[#00529b] bg-[#f0e1b0] rounded-full flex items-center justify-center">
            <IconWrapper className="w-8 h-8">{service.icon}</IconWrapper>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
        <p className="text-base text-gray-600 flex-grow mb-6">{service.description}</p>
        <Button asLink to={service.link} outline className="self-start mt-auto">Learn More</Button>
    </div>
);

// --- FEATURE ITEM ---
export const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="flex items-start gap-5 p-4 text-left">
        <div className="w-10 h-10 text-[#b58e31] flex-shrink-0 mt-1">
            <IconWrapper className="w-full h-full">{feature.icon}</IconWrapper>
        </div>
        <div>
            <h4 className="text-lg font-bold mb-1 text-gray-800">{feature.title}</h4>
            <p className="text-base text-gray-600">{feature.description}</p>
        </div>
    </div>
);

// --- TESTIMONIAL CARD ---
export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="italic text-gray-600 mb-4 relative pl-8">
            <span className="absolute left-0 top-0 text-5xl text-[#b58e31]/50 font-serif">“</span>
            {testimonial.text}
        </p>
        <p className="font-bold text-[#00529b]">
            {testimonial.author}
            <span className="block text-sm font-normal text-gray-500">{testimonial.company}</span>
        </p>
    </div>
);


// --- TRACKING FORM ---
export const TrackingForm: React.FC = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<TrackingData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingNumber) return;
        setIsLoading(true);
        setError(null);
        setResult(null);

        setTimeout(() => {
            const data = MOCK_TRACKING_DATA[trackingNumber.toUpperCase()];
            if (data) {
                setResult(data);
            } else {
                setError("Shipment not found. Please verify the number and try again.");
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-lg shadow-lg">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Track Your Shipment</h2>
            <p className="text-center text-gray-600 mb-8">Enter your tracking number below to get real-time updates.</p>
            <form className="flex flex-col sm:flex-row gap-3 mb-6" onSubmit={handleSubmit}>
                <label htmlFor="tracking_number_public_home" className="sr-only">Tracking Number</label>
                <input
                    type="text"
                    id="tracking_number_public_home"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter Tracking Number (e.g., HGLUK123)"
                    required
                    className="flex-grow py-3 px-4 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:border-[#b58e31] focus:ring-2 focus:ring-[#b58e31]/25 focus:outline-none"
                />
                <Button type="submit" primary className="py-3 px-6" disabled={isLoading}>
                    {isLoading ? 'Tracking...' : 'Track'}
                </Button>
            </form>

            <div className="mt-8 text-left min-h-[200px]">
                {isLoading && <p className="text-center text-gray-600">Loading tracking information...</p>}
                {error && <p className="text-center text-red-600 bg-red-50 p-4 rounded-md">{error}</p>}
                {result && (
                    <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                        <h3 className="text-xl font-bold text-[#00529b] border-b pb-3 mb-4">Results for {trackingNumber.toUpperCase()}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <p><strong>Status:</strong> <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${result.badge}`}>{result.status}</span></p>
                            <p><strong>Origin:</strong> {result.origin}</p>
                            <p><strong>Destination:</strong> {result.destination}</p>
                            <p><strong>Est. Delivery:</strong> {new Date(result.estDelivery).toLocaleDateString()}</p>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-3">Shipment History:</h4>
                        <ul className="list-none p-0 space-y-3">
                            {result.milestones.map((m, i) => (
                                <li key={i} className="text-sm pb-3 border-b border-dashed border-gray-200 last:border-b-0">
                                    <span className="font-medium text-gray-500 block">{new Date(m.date).toLocaleString()}</span>
                                    {m.status} - {m.location}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- PAGE HEADER ---
export const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-[#00529b] text-white py-12 text-center mb-12">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className="text-lg text-[#f0e1b0] max-w-3xl mx-auto opacity-90">{subtitle}</p>
        </div>
    </div>
);

// --- CONTENT BLOCK ---
export const ContentBlock: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white p-8 rounded-lg shadow-lg mb-10 ${className}`}>
        {children}
    </div>
);

// --- FAQ ITEM ---
export const FaqItem: React.FC<{ item: FaqItemData; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-6">
        <button
            className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#00529b] hover:text-[#b58e31]"
            onClick={onClick}
        >
            <span>{item.question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        >
            <div className="pt-4 text-gray-600 space-y-4">
                {item.answer}
            </div>
        </div>
    </div>
);
