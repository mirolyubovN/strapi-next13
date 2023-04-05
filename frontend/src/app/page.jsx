
import Link from 'next/link'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
	query GetReviews {
		reviews {
		data {
			id
			attributes {
			title
			body
			rating
			categories {
				data {
				id
				attributes {
					name
				}
				}
			}
			}
		}
		}
	}
`;

export default async function Home() {
	const client = getClient();
	const { data } = await client.query({ query });

	return (
		<div>
			{data.reviews.data.map(review => (
				<div key={review.id} className='review-card'>
					<h2 className='review-card__title'>
						{review.attributes.title}
					</h2>
					<div className='category-meta'>
						{review.attributes.categories.data.map(category => (
							<small key={category.id}>{category.attributes.name} </small>
						))}
					</div>
					<div className='review-card__rating'>
						{review.attributes.rating}
					</div>
					<div className='review-card__body'>
						{review.attributes.body.substring(0, 200)}...
					</div>
					<Link href={`/details/${review.id}`}>Read more</Link>
				</div>
			))}
		</div>
	);
}
