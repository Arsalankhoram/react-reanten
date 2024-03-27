import HeroImage from '../images/HomeHeroImage.svg'
import PrimaryBtn from './PrimaryBtn'

export default function HomeHero() {
    return (
        <div className="container mx-auto flex justify-between m-8 content-center">
            <div className='w-1/2 content-center'>
                <h2 className='font-bold text-4xl leading-relaxed '>
                    بازگردانی آنتن آیفون ۱۴ و ۱۵؛
                    <br />
                    راهکاری <span className='text-primary'>قابل اعتماد</span> توسط <span className='text-primary'>ری‌آنتن</span>
                    <br />
                    برای استفاده از <span className='text-primary'>آنتن و اینترنت</span>
                </h2>
                <p className='text-xl font-medium leading-relaxed mt-2'>
                    استفاده از آنتن و اینترنت برای هر شهروند حق مسلمی هست که از دارندگان آیفون ۱۴ و ۱۵ گرفته شده، برای همین تیم ری‌آنتن تصمیم گرفت این خدمات رو به عنوان راهکاری موقت تا زمان باز شدن رجیستر این دستگاه‌ها ارائه کنه.
                </p>
                <PrimaryBtn text="کسب اطلاعات بیشتر" icon="info" />
            </div>
            <img src={HeroImage} alt="Hero Image" className='w-1/2' />
        </div>
    )
}