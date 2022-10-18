import NextLink from "next/link";
import { GetServerSideProps, NextPage } from "next";
import ErrorPage from "next/error";

type Data = {
  id: number;
  name: string;
  avatar: string;
};

const Notifications: NextPage<{ data: Data }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
        HELLO FUCKERS
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res
}) => {
  try {
    const { id } = params;
    const result = await fetch(`http://localhost:3000/api/users`);
    const data: Data = await result.json();

    return {
      props: { data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

export default Notifications;


    // <Box>
    //   <Flex flexDirection="column" alignItems="center">
    //     <Heading marginY="2rem">User</Heading>
    //     <SimpleGrid columns={2} width="2xs" spacingY={4}>
    //       <Text fontWeight="bold" marginRight={4}>
    //         UserID
    //       </Text>
    //       <Text>{props.data.id}</Text>

    //       <Text fontWeight="bold" marginRight={4}>
    //         Name
    //       </Text>
    //       <Text>{props.data.name}</Text>

    //       <Text fontWeight="bold" marginRight={4}>
    //         Email
    //       </Text>
    //       <Text>{props.data.avatar}</Text>
    //     </SimpleGrid>
    //     <NextLink href="/">
    //       <Link marginY="2rem">
    //         <Text fontStyle="italic">Go back home</Text>
    //       </Link>
    //     </NextLink>
    //   </Flex>
    // </Box>