const advantages = [
	{
		title: 'Meilleurs prix garantis sur clefsdalsace.fr',
		text: 'Si vous trouvez un meilleur tarif pour nos logements sur une autre plateforme (pour les mêmes dates), nous nous alignons et vous recevez un rabais de 5% complémentaire !',
		icon: (
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
			/>
		)
	},
	{
		title: 'Une expérience unique',
		text: "Avec Clés d'Alsace vous ne faites pas que louer un logement, vous passez un séjour exceptionnel : nos processus garantissent un taux de satisfaction de 4,8/5 en moyenne.",
		icon: (
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
			/>
		)
	},
	{
		title: 'Facture délivrée aux professionnels',
		text: 'En passant par clefsdalsace.fr, vous êtes éligibles aux factures professionnelles pour justifier la réservation dans votre comptabilité.',
		icon: (
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
			/>
		)
	}
];

export default function WhyChooseUsSection() {
	return (
		<section className='py-16 bg-secondary'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className="text-4xl font-bold font-['Playfair_Display'] text-foreground mb-4">
						Les petits + de Clés d&apos;Alsace
					</h2>
					<h3 className='text-2xl font-semibold text-foreground'>Pourquoi nous choisir ?</h3>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{advantages.map(({ title, text, icon }, i) => (
						<div key={i} className='bg-card p-8 rounded-2xl shadow-card text-center'>
							<div className='w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6'>
								<svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									{icon}
								</svg>
							</div>
							<h4 className="text-xl font-bold font-['Playfair_Display'] text-foreground mb-4">{title}</h4>
							<p className='text-muted-foreground'>{text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
