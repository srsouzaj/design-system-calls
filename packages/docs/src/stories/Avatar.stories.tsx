import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@srsouzaj/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/srsouzaj.png',
    alt: 'Jorge de Souza',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
