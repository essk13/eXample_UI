export default {
  title: 'assets/Image',
  component: 'Image',
  argTypes: {
      "src": {
          description: "이미지 파일 절대경로"
      },
    },
};

const Template = args => <img src={args.src} />;

export const Woori = Template.bind({})
Woori.args = {
  src: './Image/Woori.png',
}
Woori.storyName = 'Woori(PNG)'

export const Chat = Template.bind({})
Chat.args = {
  src: './Image/chat.png',
}
Chat.storyName = 'Chat(PNG)'

export const Easy = Template.bind({})
Easy.args = {
  src: './Image/easy.png',
}
Easy.storyName = 'Easy(PNG)'

export const People = Template.bind({})
People.args = {
  src: './Image/people.png',
}
People.storyName = 'People(PNG)'

export const Teamwork = Template.bind({})
Teamwork.args = {
  src: './Image/teamwork.png',
}
Teamwork.storyName = 'Teamwork(PNG)'