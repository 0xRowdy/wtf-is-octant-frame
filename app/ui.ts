import { createSystem } from "frog/ui";

export const {
  Box,
  Columns,
  Column,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  vars,
} = createSystem({
  colors: {
    text: "#171717",
    background: "#ffffff",
  },
  fonts: {
    default: [
      {
        name: "Inter",
        source: "google",
        weight: 400,
      },
      {
        name: "Inter",
        source: "google",
        weight: 600,
      },
    ],
  },
});
