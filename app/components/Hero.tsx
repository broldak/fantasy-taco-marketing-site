"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Box,
  Image,
} from "@mantine/core";
import Link from "next/link";

export function Hero() {
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
              <Group gap={12}>
                <Box>
                  <Image
                    src="/bench_taco.png"
                    alt="Taco Bench"
                    width={32}
                    height={32}
                    fit="contain"
                  />
                </Box>
                <Text size="xl" fw={700} c="white" py={2}>
                  Taco Bench
                </Text>
              </Group>
            </Group>
          </Container>
        </Box>
        <Box w="100%" py="md" flex={1}>
          <Container size="xl" w="100%" h="100%">
            <Stack justify="center" align="center" gap="xl" h="100%">
              <Image
                src="/bench_taco.png"
                alt="Taco Bench"
                width={80}
                height={80}
                fit="contain"
              />
              <Title order={1} size={52} fw={900} ta="center" c="white">
                Welcome to Taco Bench
              </Title>
              <Text size="xl" maw={600} ta="center" c="gray.1">
                Finally an answer to who makes the worst decisions in all of
                your fantasy leagues. Hope it&apos;s not you.
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
