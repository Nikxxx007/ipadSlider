import './Styles/App.css';
import FirstBox from "./Components/FirstBox";
import SecondBox from "./Components/SecondBox";
import HomeButton from "./Components/HomeButton";
import Logo from "./Components/Logo";

function App() {
    return (
        <>
            <HomeButton/>
            {/*  carousel must be here*/}
            {/*<FirstBox/>*/}
            <SecondBox />
            <Logo/>
        </>
    );
}

export default App;
