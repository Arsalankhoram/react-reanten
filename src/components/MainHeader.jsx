import Logo from "./Logo";
import Navbar from "./Navbar";


export default function MainHeader() {
    return (
        <div className="container mx-auto flex justify-between m-8 content-center">
            <Navbar />
            <Logo title={true} description={true} />
        </div>
    )
}