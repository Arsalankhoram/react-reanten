import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='flex items-center'>
            <ul className='flex flex-row gap-5 font-semibold text-base'>
                <li>
                    <NavLink to="/">صفحه نخست</NavLink>
                </li>
                <li>
                    <NavLink to="/iphone14-anten">بازگردانی آنتن آیفون ۱۴</NavLink>
                </li>
                <li>
                    <NavLink to="/iphone15-anten">بازگردانی آنتن آیفون ۱۵</NavLink>
                </li>
                <li>
                    <NavLink to="/reviews">نظرات مشتریان</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us">تماس با ما</NavLink>
                </li>
            </ul>
        </nav>

    )
}