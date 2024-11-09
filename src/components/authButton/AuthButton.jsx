import { useDispatch, useSelector } from 'react-redux';

import cl from './AuthButton.module.css'

import {
    selectAuth,
    showAuthWindow,
    resetPass,
    changeValuePass,
    changeValueLogin
} from '../../features/auth/authSlice';

const AuthButton = () => {
    const dispatch = useDispatch();
    const { passIsCorrect } = useSelector(selectAuth);

    const handlerEnterBtn = () => {
        if (passIsCorrect) {
            dispatch(resetPass(null));
            dispatch(changeValueLogin(''));
            dispatch(changeValuePass(''));
        } else {
            dispatch(showAuthWindow(true));
        }
    }

    return (
        <button onClick={handlerEnterBtn} className={cl.auth}>
            {passIsCorrect ? 'Выход' : 'Вход/Регистрация'}
        </button>
    )
}

export default AuthButton;