import './Styles/App.css';
import FirstBox from "./Components/FirstBox";
import HomeButton from "./Components/HomeButton";
import Logo from "./Components/Logo";

function App() {
    return (
        <>
            <HomeButton/>
            {/*  carousel must be here*/}
            <FirstBox/>

            <Logo/>
        </>
    );
}

export default App;
