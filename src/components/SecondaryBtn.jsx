import InfoIcon from '../icons/Info.svg'
export default function SecondaryBtn({ text, icon = null, color = "white" }) {
    return (

        <button className="bg-primary/15  py-2.5 px-5 mt-3 rounded-xl text-primary flex gap-2 font-medium">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6.09326H10.01M10 9.09326V14.0933M19 10.0933C19 15.0639 14.9706 19.0933 10 19.0933C5.02944 19.0933 1 15.0639 1 10.0933C1 5.1227 5.02944 1.09326 10 1.09326C14.9706 1.09326 19 5.1227 19 10.0933Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {text}
        </button>
    )
}