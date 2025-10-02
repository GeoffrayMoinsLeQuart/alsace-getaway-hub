const testimonials = [
	{
		name: 'Brigitte',
		role: 'Voyageuse',
		text: 'Très bien équipé avec des équipements intérieurs top...',
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
	},
	{
		name: 'Clara',
		role: 'Voyageuse',
		text: 'Magnifique séjour dans ce nouvel appartement décoré avec goût...',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
	},
	{
		name: 'Sophie',
		role: 'Voyageuse',
		text: 'Très bel appartement refait à neuf, proche du centre ville...',
		image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
	}
];

export default function TestimonialsSection() {
	return (
		<section className='py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<h3 className="text-2xl font-bold font-['Playfair_Display'] text-foreground mb-12 text-center">
					Découvrez quelques témoignages de précédents voyageurs
				</h3>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{testimonials.map(({ name, role, text, image }) => (
						<div key={name} className='bg-card p-8 rounded-2xl shadow-card'>
							<p className='text-muted-foreground mb-6 italic'>"{text}"</p>
							<div className='flex items-center gap-4'>
								<img src={image} alt={`Photo de ${name}`} className='w-12 h-12 rounded-full object-cover' />
								<div>
									<p className='font-semibold text-foreground'>{name}</p>
									<p className='text-sm text-muted-foreground'>{role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
