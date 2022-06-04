import { Box, Divider, Flex, Text } from '@chakra-ui/react';

function Work({ data }) {
	return (
		<Flex mt={20}>
			<Text fontWeight="semibold" color="gray.400">
				Work
			</Text>

			<Box w="full" ml={10}>
				{data.map((j) => (
					<Job
						key={j.id}
						comp={j.name}
						role={j.role}
						start_date={j.start_date}
						end_date={j.end_date}
					/>
				))}
			</Box>
		</Flex>
	);
}

function Job({ comp, role, start_date, end_date }) {
	const start_year = new Date(start_date).getFullYear();
	const end_year = new Date(end_date).getFullYear().toString().slice(2);

	const dur = `${start_year}-${end_year}`;

	return (
		<Flex justify="space-between" align="center" mb={2}>
			<Text whiteSpace="nowrap" mr={5}>
				{comp}
			</Text>
			<Divider variant="dashed" borderColor="gray.400" />

			<Flex ml={5}>
				<Text mr={5} whiteSpace="nowrap">
					{role}
				</Text>
				<Text color="gray.600" whiteSpace="nowrap">
					{dur}
				</Text>
			</Flex>
		</Flex>
	);
}

export default Work;
