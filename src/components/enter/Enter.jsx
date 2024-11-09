import { useDispatch, useSelector } from 'react-redux';

import cl from './Enter.module.css';

import {
    selectAuth,
    showAuthWindow,
    changeValueLogin,
    changeValuePass,
    submitLogin
} from '../../features/auth/authSlice.js'



function Enter() {
    const { authWindowIsVisible, values, passIsCorrect } = useSelector(selectAuth);
    const dispatch = useDispatch();

    const handlerEnter = (e) => {
        e.preventDefault();
        dispatch(submitLogin({ login: values.login, pass: values.pass }));
    }

    return (
        <>
            {authWindowIsVisible && <div className={cl.enter}>
                <div className={cl.window}>
                    <svg onClick={() => dispatch(showAuthWindow(false))} className={cl.close} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="#F3F2F1" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.3536 13.6464C26.5488 13.8417 26.5488 14.1583 26.3536 14.3536L14.3536 26.3536C14.1583 26.5488 13.8417 26.5488 13.6464 26.3536C13.4512 26.1583 13.4512 25.8417 13.6464 25.6464L25.6464 13.6464C25.8417 13.4512 26.1583 13.4512 26.3536 13.6464Z" fill="#414141" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6464 13.6464C13.8417 13.4512 14.1583 13.4512 14.3536 13.6464L26.3536 25.6464C26.5488 25.8417 26.5488 26.1583 26.3536 26.3536C26.1583 26.5488 25.8417 26.5488 25.6464 26.3536L13.6464 14.3536C13.4512 14.1583 13.4512 13.8417 13.6464 13.6464Z" fill="#414141" />
                    </svg>
                    <p className={cl.enter__text}>Вход</p>
                    {passIsCorrect === false && <p className={cl.wrong}>Неверный Логин и/или пароль</p>}
                    <form >
                        <input
                            onChange={(e) => dispatch(changeValueLogin(e.target.value))}
                            value={values.login}
                            className={cl.input}
                            placeholder='Логин'
                        />
                        <input
                            onChange={(e) => dispatch(changeValuePass(e.target.value))}
                            value={values.pass}
                            className={cl.input}
                            placeholder='Пароль'
                        />
                        <button onClick={handlerEnter} className={cl.buttonEnter}>
                            Вход
                        </button>
                    </form>
                    <div className={cl.authActions}>
                        <button className={cl.buttonReg}                        >
                            Регистрация
                        </button>
                        <a className={cl.forgotPass} href="#">Забыли пароль ?</a>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Enter;