"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "#features", label: "Features" },
  { link: "mailto:contact@fantasytaco.com", label: "Contact" },
];

export function Hero() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Button
      component={Link}
      key={link.label}
      variant="transparent"
      href={link.link}
      onClick={() => {
        setActive(link.link);
        close();
      }}
      c={opened ? "gray.7" : "white"}
      style={{
        borderBottom: active === link.link ? "2px solid white" : "none",
      }}
      bdrs="0"
    >
      {link.label}
    </Button>
  ));

  return (
    <Box
      h="100vh"
      pt={10}
      pb={40}
      bg={
        "linear-gradient(135deg,var(--mantine-color-teal-5),var(--mantine-color-teal-8))"
      }
      w="100%"
    >
      <Stack h="100%" w="100%">
        <Box w="100%" py="md">
          <Container size="xl" w="100%">
            <Group justify="space-between" h="100%">
              <Group gap="8px">
                <Box>🌮</Box>
                <Text size="xl" fw={700} c="white" py={2}>
                  Fantasy Taco
                </Text>
              </Group>
            </Group>
          </Container>
        </Box>
        <Box w="100%" py="md" flex={1}>
          <Container size="xl" w="100%" h="100%">
            <Stack justify="center" align="center" gap="xl" h="100%">
              <Title order={1} size={52} fw={900} ta="center" c="white">
                Welcome to Fantasy Taco
              </Title>
              <Text size="xl" maw={600} ta="center" c="gray.1">
                Finally an answer to who makes the worst decisions in all of
                your fantasy leagues. Hope it's not you.
              </Text>
              <Button
                component={Link}
                href="https://app.tacobench.com"
                size="lg"
                color="teal"
                variant="white"
              >
                Get Started Free
              </Button>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
}
