import { NextPage } from "next";
import Header from "./Header";
import Footer from "./Footer";

const App: NextPage = props => (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default App;
