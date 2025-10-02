import React from 'react';

type FAQItem = {
	question: string;
	answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Quelles sont les heures d'arrivées & de départ ?",
    answer:
      "Le checkin (arrivée dans l'appartement) est possible à partir de 17h et le checkout (départ de l'appartement) doit être fait au plus tard à 10h."
  },
  {
    question: "Comment se déroule la remise des clés ?",
    answer:
      "Pour vous garantir une certaine flexibilité et une remise des clés sans contact, nous avons mis en place un système d'ouverture de porte automatique à code. Suite à votre réservation, vous recevez un code unique qui vous permettra d'accéder facilement au logement."
  },
  {
    question: "Le parking est-il inclus ?",
    answer:
      "Cela dépend des appartements, merci de vous référer aux fiches appartement pour savoir si le parking est inclus."
  },
  {
    question: "Les serviettes de bain sont-elles fournies ?",
    answer:
      "Oui, les draps et les serviettes sont fournis ainsi que les torchons pour la cuisine."
  },
  {
    question: "Les animaux sont-ils autorisés ?",
    answer: "Oui, les animaux sont acceptés moyennant un supplément."
  },
  {
    question: "Est-ce que le ménage est inclus dans le séjour ?",
    answer:
      "Oui, bien sûr, et les frais de ménage sont obligatoires pour toutes les réservations."
  },
  {
    question: "Est-il possible de fumer dans les logements ?",
    answer: "Il est strictement interdit de fumer dans les logements."
  },
  {
    question: "Est-il possible d'organiser une soirée ?",
    answer: "Non, les soirées sont strictement interdites."
  },
  {
    question: "Les annulations de location sont-elles remboursées ?",
    answer:
      "Les séjours sont remboursables jusqu'à 5 jours avant l'entrée dans le logement. Passé ce délai, la réservation n'est plus remboursable."
  },
  {
    question: "Puis-je obtenir une facture pour mon entreprise ?",
    answer:
      "Oui, nous pouvons sur demande fournir la facture liée à votre séjour pour votre comptabilité."
  },
  {
    question: "Êtes-vous joignables durant le séjour ?",
    answer:
      "Oui, vous pouvez nous joindre via les coordonnées affichées sur la page contact du site. Nous restons disponibles pour toute question ou urgence."
  },

  // 👉 Suggestions supplémentaires (basées sur retours clients + conciergerie) :
  {
    question: "Le Wi-Fi est-il inclus et de bonne qualité ?",
    answer:
      "Oui, tous nos logements sont équipés du Wi-Fi haut débit gratuit pour télétravailler ou profiter de vos loisirs."
  },
  {
    question: "La cuisine est-elle équipée ?",
    answer:
      "Oui, chaque logement dispose d'une cuisine entièrement équipée (plaques, frigo, micro-ondes, vaisselle, ustensiles) afin que vous soyez totalement autonomes."
  },
  {
    question: "Que faire en cas de problème technique (panne, fuite, urgence) ?",
    answer:
      "Nous avons une équipe locale réactive. Contactez-nous immédiatement et nous interviendrons dans les plus brefs délais."
  },
  {
    question: "Les logements sont-ils adaptés aux familles ?",
    answer:
      "Oui, la plupart de nos logements sont adaptés aux familles. Certains disposent même d'équipements spécifiques (lit bébé, chaise haute) disponibles sur demande."
  },
  {
    question: "Acceptez-vous les longs séjours ?",
    answer:
      "Oui, certains logements peuvent être réservés en longue durée. Contactez-nous directement pour un devis personnalisé."
  }
];


const FAQ: React.FC = () => {
	return (
		<section className='py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className="text-3xl font-bold font-['Playfair_Display'] text-foreground mb-2">Questions Fréquentes</h2>
					<p className='text-lg text-muted-foreground'>Vous vous les posez peut-être aussi</p>
				</div>

				<div className='max-w-4xl mx-auto space-y-6'>
					{faqs.map(({ question, answer }, idx) => (
						<details key={idx} className='bg-card p-6 rounded-xl shadow-card group'>
							<summary className='font-semibold text-foreground cursor-pointer list-none flex justify-between items-center'>
								{question}
								<svg
									className='w-5 h-5 transition-transform group-open:rotate-180'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
								</svg>
							</summary>
							<p className='text-muted-foreground mt-4'>{answer}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
