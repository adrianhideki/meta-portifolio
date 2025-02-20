import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const hoverStyle = { color: "purple.200", transition: "0.3s color" };
  const scrollRef = useRef(0);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const { theme } = useTheme();

  const handleScroll = () => {
    setHasScrolledDown(window.scrollY > scrollRef.current)
    scrollRef.current = window.scrollY;
  }

  useEffect(() => {
    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      height={20}
      w="100%"
      display="flex"
      backgroundColor={theme ==="dark" ? "purple.950" : "purple.200"}
      paddingX={40}
      position="fixed"
      top={0}
      zIndex={999}
      transform={hasScrolledDown ? "translateY(-200px)" : "translateY(0px)"}
      transition={"transform 0.5s ease-in-out"}
    >
      <HStack gap={10} w="100%">
        <Link href="https://github.com/adrianhideki" target="_blank">
          <Icon fontSize="2xl" _hover={hoverStyle}>
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
        </Link>
        <Link href="mailto:hideki.kyun@gmail.com">
          <Icon fontSize="2xl" _hover={hoverStyle}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
        </Link>
        <Link href="https://linkedin.com/in/hidekyun" target="_blank">
          <Icon fontSize="2xl" _hover={hoverStyle}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Icon>
        </Link>
        <Link href="https://stackoverflow.com/users/14121496/adrianhideki" target="_blank">
          <Icon fontSize="2xl" _hover={hoverStyle}>
            <FontAwesomeIcon icon={faStackOverflow} />
          </Icon>
        </Link>
        <Link href="https://medium.com/@hidekyun" target="_blank">
          <Icon fontSize="2xl" _hover={hoverStyle}>
            <FontAwesomeIcon icon={faMedium} />
          </Icon>
        </Link>
        <HStack gap={10} w="100%" justifyContent="end">
          <Link href="#portifolio">
            <Text>Portifolio</Text>
          </Link>
          <Link href="#contact-me">
            <Text>Contact Me</Text>
          </Link>
          <ColorModeButton />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
