import NoSignalBar from '../icons/NoSignalBar.svg'
import SignalBar from '../icons/SignalBar.svg'
import ArrowToRight from '../icons/ArrowToRight.svg'
import Logo from '../components/Logo';


export default function ReantenProcess() {
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
                    <span className='-mb-2 '>IR-MCI</span>
                </div>
            </div>
        </div>
    )
}