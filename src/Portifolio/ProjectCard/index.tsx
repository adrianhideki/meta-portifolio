import { Link } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react/card";
import { Image } from "@chakra-ui/react/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  link?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  alt,
  link,
}: ProjectCardProps) => {
  return (
    <Card.Root>
      {image && <Image src={image} alt={alt} maxH={200} w="auto" fit="cover"  />}

      <Card.Body gap="2">
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        {link && (
          <Link href={link} target="_blank">
            View
          </Link>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
