import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Reservation() {
	const [searchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const webKey = 'TziRKaU5fDux8BLLfljl4wB7V';
		const checkin = searchParams.get('checkin');
		const checkout = searchParams.get('checkout');
		const adults = searchParams.get('adults') || '2';
		const children = searchParams.get('children') || '0';
		const lang = searchParams.get('lang') || 'fr';

		const iframe = document.getElementById('bookingengine') as HTMLIFrameElement;
		if (iframe) {
			iframe.src =
				checkin && checkout
					? `https://app.superhote.com/#/get-available-rentals/${webKey}?startDate=${checkin}&endDate=${checkout}&adultsNumber=${adults}&childrenNumber=${children}&lang=${lang}`
					: `https://app.superhote.com/#/get-available-rentals/${webKey}?lang=${lang}`;
		}
	}, [searchParams]);

	return (
		<div className='min-h-screen bg-background'>
			<Header />

			<section className='pt-20 relative'>
				{isLoading && (
					<div className='absolute inset-0 flex items-center justify-center bg-background z-10'>
						<div className='text-center'>
							<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
							<p className='text-muted-foreground'>Chargement...</p>
						</div>
					</div>
				)}
				<iframe
					id='bookingengine'
					className='w-full border-0'
					style={{ display: 'block', height: '100vh', minHeight: '800px' }}
					src=''
					width='100%'
					allowFullScreen
					sandbox='allow-scripts allow-forms allow-same-origin allow-presentation allow-top-navigation'
					onLoad={() => setIsLoading(false)}
				/>
			</section>

			<Footer />
		</div>
	);
}
