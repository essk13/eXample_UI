export default {
  title: 'assets/Image',
  component: 'Image',
  argTypes: {
      "src": {
          description: "이미지 파일 절대경로\nassets/Image"
      },
    },
};

const Template = args => <img src={args.src} />;

export const Woori = Template.bind({})
Woori.args = {
  src: 'https://github.com/essk13/eXample_UI/blob/master/src/assets/Image/Woori.png?raw=true',
}
Woori.storyName = 'Woori(PNG)'

export const Chat = Template.bind({})
Chat.args = {
  src: 'https://github.com/essk13/eXample_UI/blob/master/src/assets/Image/chat.png?raw=true',
}
Chat.storyName = 'Chat(PNG)'

export const Easy = Template.bind({})
Easy.args = {
  src: 'https://github.com/essk13/eXample_UI/blob/master/src/assets/Image/easy.png?raw=true',
}
Easy.storyName = 'Easy(PNG)'

export const People = Template.bind({})
People.args = {
  src: 'https://github.com/essk13/eXample_UI/blob/master/src/assets/Image/people.png?raw=true',
}
People.storyName = 'People(PNG)'

export const Teamwork = Template.bind({})
Teamwork.args = {
  src: 'https://github.com/essk13/eXample_UI/blob/master/src/assets/Image/teamwork.png?raw=true',
}
Teamwork.storyName = 'Teamwork(PNG)'