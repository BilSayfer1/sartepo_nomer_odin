const items = [
    {
        imgSrc: './img/featured1.webp',
        title: 'STRIPE FOR SAAS',
        description: 'Accept payments in your Software-as-a-Service product with Stripe'
    },
    {
        imgSrc: './img/featured2.webp',
        title: 'NEXT.JS FULL COURSE',
        description: 'Master the fundamentals of Next.js 14 and the App Router'
    },
    {
        imgSrc: './img/featured3.webp',
        title: 'SVELTEKIT FULL COURSE',
        description: 'Learn how to build awesome full-stack apps with SvelteKit'
    }
];

const container = document.querySelector('.container')

const box = document.createElement('div');
box.classList.add('box');
container.appendChild(box);

items.forEach((itemData, index) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const img = document.createElement('img');
    img.src = itemData.imgSrc;
    img.alt = '';
    item.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = itemData.title;
    item.appendChild(title);

    const description = document.createElement('h5');
    description.textContent = itemData.description;
    item.appendChild(description);

    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('btns');

    if (index === 0) {
        const button1 = document.createElement('button');
        button1.textContent = '#stripe';
        button1.id = 'stripe';
        btnsDiv.appendChild(button1);

        const button2 = document.createElement('button');
        button2.textContent = '#pro';
        button2.id = 'pro';
        btnsDiv.appendChild(button2);

        const button3 = document.createElement('button');
        button3.textContent = '#typescript';
        button3.id = 'typescript';
        btnsDiv.appendChild(button3);
    } else if (index === 1) {
        const button1 = document.createElement('button');
        button1.textContent = '#react';
        button1.id = 'react';
        btnsDiv.appendChild(button1);

        const button2 = document.createElement('button');
        button2.textContent = '#nextjs';
        button2.id = 'nextjs';
        btnsDiv.appendChild(button2);

        const button3 = document.createElement('button');
        button3.textContent = '#postgres';
        button3.id = 'postgres';
        btnsDiv.appendChild(button3);

        const button4 = document.createElement('button');
        button4.textContent = '#pro';
        button4.id = 'pro2';
        btnsDiv.appendChild(button4);
    } else if (index === 2) {
        const button1 = document.createElement('button');
        button1.textContent = '#svelte';
        button1.id = 'svelte';
        btnsDiv.appendChild(button1);

        const button2 = document.createElement('button');
        button2.textContent = '#firebase';
        button2.id = 'firebase';
        btnsDiv.appendChild(button2);

        const button3 = document.createElement('button');
        button3.textContent = '#pro';
        button3.id = 'pro2';
        btnsDiv.appendChild(button3);
    }

    item.appendChild(btnsDiv);
    box.appendChild(item);
});

document.body.appendChild(container);
