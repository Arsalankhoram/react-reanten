import HomeHero from "../components/HomeHero";
import MainHeader from "../components/MainHeader";
import ReantenProcess from "../components/ReantenProcess";
import HomeSections from "../components/HomeSections";
import Reviews from "../components/Reviews";
import SecondaryBtn from "../components/SecondaryBtn";




export default function HomePage() {
    return (
        <>
            <MainHeader />
            <HomeHero />
            <HomeSections
                sub="ری‌آنتن چطور کار میکنه؟"
                title="نحوه <span className='text-primary'>بازگردانی آنتن آیفون</span>"
                text="تیم برنامه‌نویسی ری‌آنتن از طریق یک پروفایل اختصاصی برای آیفون شما و همچنین چند تغییر بر روی موبایل و شبکه آنتن‌دهی، علاوه بر بازگردانی آنتن امکان استفاده از اینترنت LTE را برای شما فراهم می‌کنه.
                <br />
                فعالسازی برای شما متناسب با تعداد سفارشات بین چند ساعت تا ۱ روز نهایتا زمانبر خواهد بود."
            />
            <ReantenProcess />
            <HomeSections
                sub="رضایت مشتریان"
                title="چطور به ری‌آنتن <span className='text-primary'>اعتماد</span> کنم؟"
                text="اگرچه فعالیت برخی سودجویان با دریافت هزینه‌های بالا و خدمات ناقص موجب ایجاد بی اعتمادی به تبلیغات بازگردانی آنتن آیفون ۱۴ و آیفون ۱۵ شده اما رضایت همراهان ری‌آنتن می‌تونه این اطمینان رو به شما بده که بدون دغدغه مسئولیت بازگردانی آنتن خودتون رو به ما بسپارید. "
            />
            <Reviews />
            <div className="flex justify-center">
                <SecondaryBtn text="مشاهده همه نظرات" color="black" />
            </div>

        </>
    )
}