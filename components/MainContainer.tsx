import A from '../components/A'
import Head from 'next/head'
import { ReactComponentElement } from 'react';

const MainContainer = (props: { children: ReactComponentElement, keywords?: string, title: string }) => {
    return (
        <>
            <Head>
                <meta key={"Dvingo cnc" + props.keywords}></meta>
                <title>{props.title}</title>
            </Head>

            <div className='navbar'>
                <A href={'/'} text="Главная" />
                <A href={'/services'} text="Услуги" />
                <A href={'/materials'} text="Материалы" />
                <A href={'/payment'} text="Оплата и доставка" />
                <A href={'/contacts'} text="Контакты" />
            </div>

            <div>
                {props.children}
            </div>
        </>
    );
};

export default MainContainer;