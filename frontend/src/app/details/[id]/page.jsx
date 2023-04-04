import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import ReactMarkdown from 'react-markdown';

const REVIEW = gql`
query GetReview($id: ID!) {
  review(id: $id) {
    data {
      id
      attributes {
        title,
        rating,
        body,
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

export default async function ReviewDetails({ params }) {
	const client = getClient();
	console.log(params, 'params');
	const { data } = await client.query({
		query: REVIEW,
		variables: {
			id: params.id
		}
	});

	console.log(data, 'data');
	const actualData = data.review.data.attributes;

	return (
		<div className='review-card'>
			<h2 className='review-card__title'>
				{actualData.title}
			</h2>
			<div className='category-meta'>
				{actualData.categories.data.map(category => (
					<small key={category.id}>{category.attributes.name} </small>
				))}
			</div>
			<div className='review-card__rating'>
				{actualData.rating}
			</div>
			<div className='review-card__body'>
				<ReactMarkdown>{actualData.body}</ReactMarkdown>
			</div>
		</div>
	);
}
