import Link from 'next/link'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
	query GetCategories {
		categories {
		data {
			id,
			attributes {
			name
			}
		}
		}
	}
`;
export default async function Header() {
	const client = getClient();
	const { data } = await client.query({query});
	const actualData = data.categories.data;

	console.log(actualData);

	return (
		<>
			<div className='header'>
				<Link href='/'><h1>Game reviews</h1></Link>
			</div>
			<nav className='categories'>
				<span>Filter reviews by category:</span>
				{actualData.map(cat => (
					<Link key={cat.id} href={`/category/${cat.id}`}>{cat.attributes.name}</Link>
				))}
			</nav>
		</>
	)
}
