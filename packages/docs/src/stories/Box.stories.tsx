import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@srsouza/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Este é o teste do elemento Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
