import ReviewSingle from "./ReviewSingle";

export default function Reviews() {
    return (
        <div className="container mx-auto flex flex-row gap-4 m-4">
            <ReviewSingle />
            <ReviewSingle />
            <ReviewSingle />
            <ReviewSingle />
        </div>
    )
}