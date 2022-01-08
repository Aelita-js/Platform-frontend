import React from 'react';
import About from '../components/About/About';
import Intro from '../components/Intro/Intro';
import Lessons from '../components/Lessons/Lessons';
import '../styles/MainPageStyles/MainStyles.css';

const Main = () => {
    // const [auth, setAuth] = useContext();

    // const [token, setToken] = useState();
    // if(!token) {
    //     return <LogIn setToken={setToken} />
    // }
    // console.log(setToken);


    return (
        // <>
        //     {!user.isAuth ? (
        //         <div className='main'>
        //             <div className='main-intro'>
        //                 <Intro />
        //             </div>

        //             <div className='main-about'>
        //                 <About />
        //             </div>

        //             <div className='main-lessons'>
        //                 <Lessons />
        //             </div>
        //         </div>

        //     ) : (
        //         <Route exact path="/auth" component={Auth} />
        //     )}
        // </>

        <div className='main'>
            <div className='main-intro'>
                <Intro />
            </div>

            <div className='main-about'>
                <About />
            </div>

            <div className='main-lessons'>
                <Lessons />
            </div>
        </div>
    );
};

export default Main;