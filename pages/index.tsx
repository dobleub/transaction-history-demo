import React from "react";

import { Container, Footer, Header, Main } from "@components";

const Home: React.FC = () => {
    return (
        <Container className="bg-gradient-to-br from-gray-100 to-gray-100">
            <Header />
            <Main />
            <Footer />
        </Container>
    );
};

export default Home;
