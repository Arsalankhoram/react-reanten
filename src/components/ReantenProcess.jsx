import NoSignalBar from '../icons/NoSignalBar.svg'
import SignalBar from '../icons/SignalBar.svg'
import ArrowToRight from '../icons/ArrowToRight.svg'
import Logo from '../components/Logo';
import { Typewriter } from 'react-simple-typewriter'


export default function ReantenProcess() {

    let operators = ["Irancell", "Rightel", "IR-MCI"]





    return (
        <div className="bg-primary mx-auto flex flex-row-reverse justify-center items-center my-20 gap-5 py-3">
            <div className='flex flex-row-reverse text-white text-2xl font-semibold gap-2'>
                <img src={NoSignalBar} alt="No Signal Bar" />
                <span className='-mb-2 '>No Service</span>
            </div>
            <img src={ArrowToRight} alt="No Signal Bar" />
            <div className='bg-white p-8 rounded-lg'>
                <Logo title={false} description={false} />
            </div>
            <img src={ArrowToRight} alt="No Signal Bar" />
            <div>
                <div className='flex flex-row-reverse text-white text-2xl font-semibold gap-2'>
                    <img src={SignalBar} alt="Signal Bar" />
                    <span className='-mb-2 min-w-20 ltr'>
                        <Typewriter
                            words={['Irancell', 'Rightel', 'IR-MCI']}
                            loop={0}
                            cursor={false}
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    <span className='-mb-2 min-w-20 ltr'>LTE</span>
                </div>
            </div>
        </div>
    )
}