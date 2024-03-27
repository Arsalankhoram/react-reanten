import { useEffect, useState } from "react";
import ReviewSingle from "./ReviewSingle";

export default function Reviews() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://66044b042393662c31d11cd6.mockapi.io/Reviews', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);


    return (
        <div className="container mx-auto flex flex-row gap-4 m-4">
            {
                data.map((review) => {
                    return <ReviewSingle key={review.id} review={review} />
                })
            }
        </div>
    )
}