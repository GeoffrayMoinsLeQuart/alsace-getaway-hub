import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
	const sections = [
		{
			title: '1 – Éditeur du site',
			content: (
				<div className='space-y-2'>
					<p>
						<strong>Raison sociale :</strong> Les Clés d’Alsace (SASU)
					</p>
					<p>
						<strong>Capital social :</strong> 100 €
					</p>
					<p>
						<strong>Siège social :</strong> 5B Rue de Margnolles, 69300 Caluire-et-Cuire, France
					</p>
					<p>
						<strong>SIREN :</strong> 938 391 158
					</p>
					<p>
						<strong>RCS :</strong> Lyon
					</p>
					<p>
						<strong>N° TVA intracommunautaire :</strong> FR07938391158
					</p>
					<p>
						<strong>Email :</strong> contact@clefsdalsace.fr
					</p>
					<p>
						<strong>Téléphone :</strong> 06 21 47 19 22
					</p>
				</div>
			)
		},
		{
			title: '2 – Hébergement',
			content: (
				<div className='space-y-2'>
					<p>
						Le site est hébergé par : <strong>Vercel Inc.</strong>
					</p>
					<p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
					<p>Infrastructure technique : Supabase (hébergement de la base de données)</p>
				</div>
			)
		},
		{
			title: '3 – Propriété intellectuelle',
			content: (
				<>
					<p>
						L’ensemble du site relève de la législation française et internationale sur le droit d’auteur et la
						propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
						téléchargeables et les représentations iconographiques et photographiques.
					</p>
					<p>
						La reproduction de tout ou partie du site sur un support électronique ou papier est interdite sauf
						autorisation expresse du directeur de la publication.
					</p>
				</>
			)
		},
		{
			title: '4 – Protection des données personnelles',
			content: (
				<>
					<p>
						Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et
						Libertés » modifiée, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition
						concernant vos données.
					</p>
					<p>
						Pour plus d’informations, consultez notre{' '}
						<a href='/confidentialite' className='text-primary hover:underline'>
							Politique de confidentialité
						</a>
						.
					</p>
				</>
			)
		},
		{
			title: '5 – Responsabilité',
			content: (
				<>
					<p>
						Les Clés d’Alsace met tout en œuvre pour assurer l’exactitude et la mise à jour des informations diffusées
						sur ce site. Toutefois, l’éditeur ne peut garantir l’exactitude, la complétude ou la disponibilité
						permanente des contenus.
					</p>
					<p>
						Le site peut contenir des liens vers d’autres sites dont l’éditeur n’a pas la maîtrise et décline toute
						responsabilité quant à leur contenu.
					</p>
				</>
			)
		},
		{
			title: '6 – Crédits',
			content: (
				<p>
					Conception et réalisation : <strong>Les Clés d’Alsace</strong>
				</p>
			)
		}
	];

	return (
		<div className='min-h-screen bg-background'>
			<Header />

			<main className='container mx-auto px-4 mt-24 mb-24'>
				<div className='max-w-4xl mx-auto space-y-12'>
					<h1 className='text-4xl font-display font-bold text-foreground mb-6'>Mentions Légales</h1>

					{sections.map((sec, i) => (
						<section key={i} className='space-y-4'>
							<h2 className='text-2xl font-semibold text-foreground'>{sec.title}</h2>
							<div className='text-muted-foreground space-y-2'>{sec.content}</div>
						</section>
					))}

					<div className='mt-12 p-6 bg-muted rounded-lg'>
						<p className='text-sm text-muted-foreground'>
							Dernière mise à jour :{' '}
							{new Date().toLocaleDateString('fr-FR', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</p>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
