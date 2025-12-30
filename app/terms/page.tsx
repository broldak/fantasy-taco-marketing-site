import {
  Box,
  Container,
  Group,
  Stack,
  Title,
  Text,
  Image,
} from "@mantine/core";
import { Metadata } from "next";
import TermsText from "@/content/terms.md";
import Link from "next/link";
import styles from "@/app/nav.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Taco Bench",
  description: "Terms of Service | Taco Bench",
};

export default function Terms() {
  return (
    <main>
      <Stack h="100vh" w="100%" gap="0" bg="gray.0">
        <Box
          bg={
            "linear-gradient(135deg,var(--mantine-color-teal-5),var(--mantine-color-teal-8))"
          }
          h={200}
          pt={26}
          pb={40}
        >
          <Container size="xl" h="100%">
            <Link href="/" className={styles.link}>
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
            </Link>
            <Stack justify="flex-end" gap="xl" h="100%" pb={8}>
              <Title order={1} c="white">
                Terms of Service
              </Title>
            </Stack>
          </Container>
        </Box>

        <Container size="xl" py="md" flex={1} w="100%">
          <TermsText />
        </Container>
      </Stack>
    </main>
  );
}
