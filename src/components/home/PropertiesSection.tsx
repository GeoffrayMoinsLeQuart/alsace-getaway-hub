import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Property, mockProperties, transformProperties } from '@/lib/properties';
import PropertyCard from '@/components/PropertyCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function PropertiesSection() {
	const { data: properties, isLoading } = useQuery<Property[]>({
		queryKey: ['homepage-properties'],
		queryFn: async () => {
			const { data, error } = await supabase.functions.invoke('superhote-properties', {
				body: { params: '' }
			});
			if (error) {
				console.error('Error fetching properties:', error);
				return mockProperties;
			}
			return transformProperties(data);
		}
	});

	return (
		<section className='py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className="text-4xl font-bold font-['Playfair_Display'] text-foreground mb-4">Nos Logements</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Découvrez notre sélection d'appartements et maisons de standing en Alsace
					</p>
				</div>

				{isLoading ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[...Array(6)].map((_, i) => (
							<div key={i} className='space-y-4 animate-pulse'>
								<Skeleton className='aspect-[4/3] w-full' />
								<Skeleton className='h-6 w-3/4' />
								<Skeleton className='h-4 w-1/2' />
							</div>
						))}
					</div>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in'>
						{properties?.map((property) => (
							<PropertyCard key={property.id} {...property} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
