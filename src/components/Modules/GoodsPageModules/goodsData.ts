export type goodsDataType = {
    id:number
    image:string
    name:string
    description:string
}

export const goodsData = [
    {
        id: 1,
        image: 'https://cdn-icons-png.flaticon.com/512/126/126473.png',
        name: 'Большой опыт работы',
        description:
            'С 2001 года мы поставляем отделочные материалы. За это время работали со многими производителями и оставили в своем портфеле поставок по настоящему лучших.',
    },
    {
        id: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/1055/1055183.png',
        name: 'Высокие критерии отбора',
        description:
            'Мы выбираем наш ассортимент по:- Высокому качеству-Уникальным дизайнам-Экологичности-Стойкости к свету-Пригодность к уборке',
    },
    {
        id: 3,
        image: 'https://cdn-icons-png.flaticon.com/512/4258/4258917.png',
        name: 'Скорость поставки',
        description:
            'Мы работаем с представителями фабрик, что позволяет нам держать короткие сроки поставок.',
    },
    {
        id: 4,
        image: 'https://cdn-icons-png.flaticon.com/512/346/346945.png',
        name: 'Бессрочная гарантия возврата',
        description: 'При заводском браке,  даже в случае частичной выклейки',
    },
];

export default goodsData;
