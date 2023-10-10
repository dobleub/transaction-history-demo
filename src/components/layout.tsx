import React from "react";

import { Container, Footer, Header } from "@commons";

const RootLayout: React.FC = ({ children }) => {
    return (
        <Container className="bg-gray-50">
            <Header />
            {children}
            <Footer />
        </Container>
    );
};

export default RootLayout;
