import { Heading } from "@chakra-ui/react";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return <Heading>{title}</Heading>;
};
