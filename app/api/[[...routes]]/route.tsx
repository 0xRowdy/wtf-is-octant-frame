/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
// import { neynar } from 'frog/hubs'
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";

import { Box, Heading, Text, VStack, vars } from "@/app/ui";

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  ui: { vars },
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
}).frame("/", (c) => {
  return c.res({
    image: process.env.NEXT_PUBLIC_URL + "/octant-animation-reverse.gif",
    intents: [
      <Button action="/wtf">WTF is Octant?</Button>,
      <Button action="/projects">Projects?</Button>,
      <Button action="/how">How does it work?</Button>,
    ],
  });
});

app.frame("/wtf", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"
        padding="32"
        textAlign="center"
      >
        <VStack gap="6" width="100%" paddingLeft="32" paddingRight="32">
          <Text
            font="default"
            align="center"
            wrap="balance"
            size="24"
            weight="600"
          >
            100,000+ ETH from the Golem treasury was staked, and the yield is
            driven to the platform
          </Text>
        </VStack>
      </Box>
    ),
    intents: [<Button action="/wtf2">Tell me more</Button>],
  });
});

app.frame("/wtf2", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"
        padding="32"
        textAlign="center"
      >
        <VStack gap="6" width="100%" paddingLeft="32" paddingRight="32">
          <Text
            font="default"
            align="center"
            wrap="balance"
            size="24"
            weight="600"
          >
            We fund public goods projects and our users every 90 days
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <Button action="/how">How does it work?</Button>,
      <Button.Link href="https://octant.app/">Octant</Button.Link>,
    ],
  });
});

app.frame("/projects", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"
        padding="32"
        textAlign="center"
      >
        <VStack gap="6" width="100%" paddingLeft="32" paddingRight="32">
          <Text font="default" align="center" size="24" weight="600">
            The Protocol Guild
          </Text>
          <Text font="default" align="left" size="24" weight="600">
            ETH - Staker
          </Text>
          <Text font="default" align="right" size="24" weight="600">
            The Tor Project
          </Text>
          <Text font="default" align="left" size="24" weight="600">
            Hypercerts
          </Text>
          <Text font="default" align="right" size="24" weight="600">
            ...30 projects so far!
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <Button action="/wtf">WTF is Octant?</Button>,
      <Button action="/how">How Does it Work?</Button>,
    ],
  });
});

app.frame("/how", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"
        padding="32"
        textAlign="center"
      >
        <VStack gap="20" width="100%" paddingLeft="32" paddingRight="32">
          <Text
            font="default"
            align="center"
            wrap="balance"
            size="24"
            weight="600"
          >
            When you lock $GLM into Octant, every 90 days you receive
            proportional ETH rewards
          </Text>
          <Text
            font="default"
            align="center"
            wrap="balance"
            size="24"
            weight="600"
          >
            You can keep them, or you can donate some or all!
          </Text>
        </VStack>
      </Box>
    ),
    intents: [<Button action="/how2">How long do I have to decide?</Button>],
  });
});

app.frame("/how2", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"
        padding="32"
        textAlign="center"
      >
        <VStack gap="20" width="100%" paddingLeft="32" paddingRight="32">
          <Text
            font="default"
            align="center"
            wrap="balance"
            size="24"
            weight="600"
          >
            When you lock $GLM into Octant, every 90 days you receive
            proportional ETH rewards
          </Text>
          <Text
            font="default"
            align="center"
            wrap="balance"
            size="24"
            weight="600"
          >
            You can keep them, or you can donate some or all!
          </Text>
        </VStack>
      </Box>
    ),
    intents: [<Button action="/how3">Cool, How do I get involved?</Button>],
  });
});

app.frame("/how3", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"
        padding="32"
        textAlign="center"
      >
        <VStack gap="20" width="100%" paddingLeft="32" paddingRight="32">
          <Text font="default" align="center" size="24" weight="600">
            To get started, get some $GLM and head to Octant
          </Text>
          <Text
            font="default"
            align="center"
            wrap="balance"
            size="24"
            weight="600"
          >
            or join our discord to learn more
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <Button.Link href="https://octant.app/">Octant</Button.Link>,
      <Button.Link
        href="https://discord.gg/octant
      "
      >
        Discord
      </Button.Link>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
