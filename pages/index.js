import HeadMeta from '@/components/HeadTag/HeadMeta';
import Education from '@/components/home/Education';
import Work from '@/components/home/Work';
import { Box, Flex, Text } from '@chakra-ui/react';
import { supabase } from 'lib/supabase';
// import FeaturePost from '@/components/home/FeaturePost';

export default function Home({ workData, educationData }) {
	return (
		<>
			<HeadMeta title="Nishil Kapadia" />
			<Box w="70%" py={8} mx="auto">
				<Flex mb={14} align="center">
					<Box>
						<Text
							fontWeight="bold"
							fontSize="4xl"
							mx="auto"
							w="auto"
							letterSpacing={-0.25}
						>
							Nishil Kapadia
						</Text>
						<Text fontWeight="semibold">Front-end developer</Text>
						<Text mt={7} w="80%" letterSpacing={0.5}>
							I am a Front End Developer with a bit of backend experience,
							primarily working with Java(Type)Script. I am also an
							undergraduate computer science student at Toronto Metropolitan
							University, Toronto.
						</Text>
					</Box>
				</Flex>

				{/* <FeaturePost /> */}

				<Work data={workData} />

				<Education data={educationData} />
			</Box>
		</>
	);
}

export async function getStaticProps() {
	let { data: workData } = await supabase
		.from('Work')
		.select('*')
		.order('start_date', { ascending: false });

	let { data: educationData } = await supabase.from('Education').select('*');

	return {
		props: {
			workData,
			educationData,
		},
	};
}
