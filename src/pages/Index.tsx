import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

import PropertiesSection from '@/components/home/PropertiesSection';
import DescriptionSection from '@/components/home/DescriptionSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import FinalCTA from '@/components/home/FinalCTA';
import FAQ from '@/components/home/faq';

export default function Index() {
	return (
		<div className='min-h-screen bg-background'>
			<Header />
			<Hero />
			<PropertiesSection />
			<DescriptionSection />
			<TestimonialsSection />
			<WhyChooseUsSection />
			<FAQ />
			<FinalCTA />
			<Footer />
		</div>
	);
}
