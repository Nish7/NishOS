import HeadMeta from '@/components/headTag/HeadMeta';
import { Flex, Text } from '@chakra-ui/react';

function comingsoon() {
	return (
		<>
			<HeadMeta title="Coming Soon" />
			<Flex h="100vh" justifyContent="center" alignItems="center">
				<Text fontWeight="bold" fontSize="7xl">
					Coming Soon...
				</Text>
			</Flex>
		</>
	);
}

export default comingsoon;
