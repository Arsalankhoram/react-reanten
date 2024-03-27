import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ReviewSingle({ review }) {
    return (
        <>
            <div className="container mx-auto flex flex-col items-center border rounded-lg p-3">
                <h3 className="text-lg font-semibold text-primary">{review?.type}</h3>
                <h4 className="text-lg font-semibold">{review?.device}</h4>
                <Zoom><img className="m-2 h-[305px] object-cover rounded-xl singleReview" src={review?.photo} alt={review?.type} width="175px" height="305px" /></Zoom>
                <span className="text-sm font-semibold">{review?.name} از {review?.city}</span>
            </div>
        </>
    )
}