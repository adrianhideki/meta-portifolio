import {
  GridItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Portifolio = () => {
  return (
    <Stack
      height="100vh"
      w="100%"
      id="portifolio"
      backgroundColor="gray.900"
      gap={20}
      justifyContent="center"
    >
      <Text textStyle="3xl">Projects</Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: 2, md: 4 }}
        paddingX={10}
      >
        <GridItem>
          <ProjectCard
            title="SQL Server Guide"
            description="A guide for SQL Server T-SQL programming best pratices and utilities."
            link="https://github.com/adrianhideki/sql-server-guide"
            image="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="a data center"
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <ProjectCard
            title="Google Maps"
            description="A example how to use google maps api, using view street and map controls."
            link="https://github.com/adrianhideki/next-auth-google"
            image="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="a map"
          />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <ProjectCard
            image="https://images.unsplash.com/photo-1586023914901-7b36abf78de3?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="a grid"
            title="Mui Datagrid with toolbar"
            description="A example how to create a toolbar with datagrid from mui lib."
            link="https://github.com/adrianhideki/mui-datagrid-toolbar"
          />
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
};

export default Portifolio;
