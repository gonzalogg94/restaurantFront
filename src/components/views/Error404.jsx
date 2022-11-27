import React from 'react';
import { Container } from 'react-bootstrap';

const Error404 = () => {
    return (
        <section className='colorFondo pt-4 text-center'>
            <Container className='aling-contet-center pt-5 pb-2'>
            <img src="https://wetaca.com/images/404.png" alt="error404" className='w-100' />
            </Container>
        </section>
    );
};

export default Error404;