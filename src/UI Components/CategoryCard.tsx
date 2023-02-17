import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

interface categoryCardInterface {
  title: string;
  description: string;
  imageSrc: string;
}

export const CategoryCard = (props: categoryCardInterface) => {
  return (
    <Card
      maxW="sm"
      fontFamily={"Karla"}
      borderColor="gray.100"
      borderWidth={"1px"}
      className={"hover:shadow-lg"}
    >
      <CardBody>
        <Image
          src={props.imageSrc}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          minWidth={"225"}
          height={"225"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            <Link to={`/products/${props.title}`}>{props.title}</Link>
          </Heading>
          <Text className="text-sm text-slate-500">{props.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
