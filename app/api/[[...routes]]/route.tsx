/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
// import { neynar } from 'frog/hubs'
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";

import { Box, Row, Text, Image, VStack, vars } from "@/app/ui";

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
      <Box grow background="background" padding="32">
        <Row alignHorizontal="right" height="1/2">
          <Image src="/octant.svg" height="56" />
        </Row>
        <Box
          alignHorizontal="center"
          alignVertical="center"
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
      </Box>
    ),
    intents: [<Button action="/wtf2">Tell me more</Button>],
  });
});

app.frame("/wtf2", (c) => {
  return c.res({
    image: (
      <Box grow background="background" padding="32">
        <Row alignHorizontal="right" height="1/2">
          <Image src="/octant.svg" height="56" />
        </Row>
        <Box
          alignHorizontal="center"
          alignVertical="center"
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
      </Box>
    ),
    intents: [
      <Button action="/how">How does it work?</Button>,
      <Button action="/projects">Projects?</Button>,
    ],
  });
});

app.frame("/projects", (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        backgroundColor="background"
        padding="32"
        textAlign="center"
        gap="12"
      >
        <Text font="default" align="center" size="20" weight="600">
          Octant funds projects like...
        </Text>

        <VStack gap="4" width="100%" paddingLeft="32" paddingRight="32">
          {/* <Row grow> */}
          <Box
            justifyContent="flex-start"
            alignItems="center"
            flexDirection="row"
            gap="6"
          >
            <Image src="/protocol-guild.svg" height="38" />
            <Text font="default" align="center" size="24" weight="600">
              The Protocol Guild
            </Text>
          </Box>
          <Box
            justifyContent="flex-end"
            alignItems="center"
            flexDirection="row"
            gap="6"
          >
            <Image src="/eth-staker.svg" height="40" />
            <Text font="default" align="left" size="24" weight="600">
              ETH - Staker
            </Text>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems="center"
            flexDirection="row"
            gap="6"
          >
            <Image src="/tor.svg" height="40" />
            <Text font="default" align="right" size="24" weight="600">
              The Tor Project
            </Text>
          </Box>
          <Box
            justifyContent="flex-end"
            alignItems="center"
            flexDirection="row"
            gap="6"
          >
            <Image src="/hypercerts.svg" height="40" />

            <Text font="default" align="left" size="24" weight="600">
              Hypercerts
            </Text>
          </Box>
        </VStack>

        <Text font="default" size="20" weight="600">
          ...30 projects so far!
        </Text>
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
      <Box grow background="background" padding="32">
        <Row alignHorizontal="right" height="1/2">
          <Image src="/octant.svg" height="56" />
        </Row>
        <Box
          alignHorizontal="center"
          alignVertical="center"
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
              When you lock $GLM into Octant.app, every 90 days you receive
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
      </Box>
    ),
    intents: [<Button action="/how2">How long do I have to decide?</Button>],
  });
});

app.frame("/how2", (c) => {
  return c.res({
    image: (
      <Box grow background="background" padding="32">
        <Row alignHorizontal="right" height="1/2">
          <Image src="/octant.svg" height="56" />
        </Row>
        <Box
          alignHorizontal="center"
          alignVertical="center"
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
              There is a 2 week window where you must decide where rewards will
              go.
            </Text>
          </VStack>
        </Box>
      </Box>
    ),
    intents: [<Button action="/how3">Cool, How do I get involved?</Button>],
  });
});

app.frame("/how3", (c) => {
  return c.res({
    image: (
      <Box grow background="background" padding="32">
        <Row alignHorizontal="right" height="1/2">
          <Image src="/octant.svg" height="56" />
        </Row>
        <Box
          alignHorizontal="center"
          alignVertical="center"
          padding="32"
          textAlign="center"
        >
          <VStack gap="20" width="100%" paddingLeft="32" paddingRight="32">
            <Text font="default" align="center" size="24" weight="600">
              To get started, get some $GLM and head to Octant.app
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
      </Box>
    ),
    intents: [
      <Button.Link href="https://octant.app">Octant.app</Button.Link>,
      <Button.Link
        href="https://discord.gg/octant
      "
      >
        Discord
      </Button.Link>,
      <Button.Reset>Reset</Button.Reset>,
    ],
  });
});
// devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
