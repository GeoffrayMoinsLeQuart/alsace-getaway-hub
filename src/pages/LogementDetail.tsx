import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LogementDetail() {
	const { propertyKey } = useParams<{ propertyKey: string }>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const lang = 'fr';
		const iframe = document.getElementById('propertyengine') as HTMLIFrameElement;
		if (iframe && propertyKey) {
			iframe.src = `https://app.superhote.com/#/rental/${propertyKey}?lang=${lang}`;
		}
	}, [propertyKey]);

	return (
		<div className='min-h-screen bg-background'>
			<Header />

			<section className='pt-20 relative'>
				{isLoading && (
					<div className='absolute inset-0 flex items-center justify-center bg-background z-10'>
						<div className='text-center'>
							<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
							<p className='text-muted-foreground'>Chargement du logement...</p>
						</div>
					</div>
				)}
				<iframe
					id='propertyengine'
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
