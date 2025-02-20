import { Box, Image, Stack, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box height="100vh" w="100%" id="profile" py={10} margin="auto">
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
        h="100%"
      >
        <Stack alignItems="center" gap={10}>
          <Image
            src="https://avatars.githubusercontent.com/u/28422109?v=4"
            borderRadius={"full"}
            w={300}
            border={"10px solid"}
            borderColor={"purple.950"}
            alt="profile-image"
          />
          <Text textStyle={"2xl"}>
            A powerfull developer specialized in React 💜
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;
