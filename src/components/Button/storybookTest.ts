import { Button } from './';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export function runTest(story: ComponentStory<typeof Button>): ComponentStory<typeof Button> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // render children
    if (typeof args.children === 'string') {
      expect(button).toHaveTextContent(args.children);
    }

    // click button
    userEvent.click(button);
    expect(args.onClick).toHaveBeenCalled();

    // click outside
    userEvent.click(canvasElement);
    expect(button).not.toHaveFocus();
  };

  story.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/AcuzZ6ORFgI6bs5H8KMAd5/Untitled?node-id=12%3A2&t=2oI3SurHvvl0QsrB-0',
    },
  };

  return story;
}
