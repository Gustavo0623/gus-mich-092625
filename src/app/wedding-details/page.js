import Link from "next/link"

export default function Details() {
    return (
        <div className="details-bg flex flex-wrap items-center justify-center gap-6 h-dvh overflow-scroll overscroll-contain">
            <div className="absolute justify-self-start self-start w-full">
                <Link
                href="/"
                className="absolute px-4 py-2 rounded" style={{color: "#6c416e"}}
                >
                    ←
                </Link>
            </div>
            <img className="w-dvw max-h-dvh lg:max-w-lg xl:max-w-1/2" src="/1st.png" alt="invitation"/>
            <div className="px-6 pb-6 flex-1/2 flex flex-col gap-3 flex-1">
                <p className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center flex-1" style={{color: "#6c416e"}} >Location</p>
                <div className="w-full h-64">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3925.7368028246533!2d123.9930105!3d10.282778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a990b5b78ec603%3A0x4b79bfe360b09e7c!2sJpark%20Island%20Resort%20and%20Waterpark%2C%20Cebu!5e0!3m2!1sen!2sus!4v1747108350628!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:"0"}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                    >
                    </iframe>
                </div>
                <a
                    href="https://www.google.com/maps/place/Jpark+Island+Resort+and+Waterpark,+Cebu/@10.282778,123.9930105,17z/data=!4m9!3m8!1s0x33a990b5b78ec603:0x4b79bfe360b09e7c!5m2!4m1!1i2!8m2!3d10.282778!4d123.9955854!16s%2Fg%2F11bbrlskn7?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-6 py-3 bg-[#6c416e] text-white font-semibold rounded-lg hover:bg-[#5a365e] transition"
                >
                    Open in Google Maps
                </a>
            </div>
            <div className="px-6 pb-6 flex-1/2 flex flex-col justify-center items-center gap-3 flex-1">
                <p className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center flex-1" style={{color: "#6c416e"}} >Registry</p>
                <p className="text-lg sm:text-2xl lg:text-4xl text-center flex-1" style={{color: "#6c416e"}} >
                    Your presence is the greatest gift, but if you wish to favor us a present, a thoughtful monetary gift will be much appreciated and cherished as we build our future together.
                </p>
            </div>
        </div>
    )
}