import HTMLString from 'react-html-string';

export default function HomeSections({ sub, title, text, margin = "" }) {
    return (
        <>
            <div className={`container mx-auto flex flex-col items-center ${margin}`}>
                <span className="font-semibold text-gray-500"><HTMLString html={sub} /></span>
                <h2 className="font-bold text-4xl leading-relaxed "><HTMLString html={title} /></h2>
                <p className="text-xl font-medium leading-relaxed mt-2 text-center w-10/12"><HTMLString html={text} /></p>
            </div>
        </>
    )
}