import ReviewPlaceholder from '../images/ReviewPlaceholder.png'
export default function ReviewSingle() {
    return (
        <>
            <div className="container mx-auto flex flex-col items-center border rounded-lg p-3">
                <h3 className="text-lg font-semibold text-primary">بازگردانی آنتن</h3>
                <h4 className="text-lg font-semibold">آیفون ۱۴ پرو</h4>
                <img className="m-2" src={ReviewPlaceholder} alt="fزاگردانی آنتن" />
                <span className="text-sm font-semibold">آقای خرم از تهران</span>
            </div>
        </>
    )
}