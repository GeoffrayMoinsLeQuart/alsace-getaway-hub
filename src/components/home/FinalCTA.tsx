export default function FinalCTA() {
	return (
		<section className='py-20 bg-gradient-primary'>
			<div className='container mx-auto px-4 text-center'>
				<h2 className="text-4xl font-bold font-['Playfair_Display'] text-white mb-8">
					Prêt à passer un excellent séjour ?
				</h2>
				<a
					href='/logements'
					className='inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-elegant'
				>
					Réserver maintenant
				</a>
			</div>
		</section>
	);
}
