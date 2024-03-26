import { Link } from 'react-router-dom'
import logo from '../images/Logo.svg'

export default function Logo({ title = true, description = true }) {
    return (
        <Link to='/'>
            <div className='flex flex-row-reverse gap-3'>
                <img src={logo} alt="لوگو ری ‌آنتن" />
                <div className='flex flex-col text-left content-center'>
                    {title && <span className='font-semibold -mb-0.5'>ReAnten</span>}
                    {description && <span className='text-sm'>Real Way to Enjoy Your IPhone</span>}
                </div>
            </div>
        </Link>
    )
}