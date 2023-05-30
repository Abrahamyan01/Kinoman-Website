import type { Meta, StoryObj } from '@storybook/react';

import MyLink from '../components/navigation/myLink';

const meta: Meta<typeof MyLink> = {
    title: 'MyLink',
    component: MyLink,
    tags: ['autodocs'],

};
export default meta;


type Story = StoryObj<typeof MyLink>;

export const Primary: Story = {
    args: {
        content:'Ссылка',
        link:'https://www.ivi.tv/'
    },
};

export const Gradiented: Story = {
    args: {
        content:'Ссылка с градиентом',
        link:'https://www.ivi.tv/',
        gradient:true
    },
};

export const Bigger: Story = {
    args: {
        content:'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7',
        link:'https://www.ivi.tv/',
        fontSize:'18px',
        fontWeight:600,
    },
};
//добавить ссылку на внутреннюю страницу