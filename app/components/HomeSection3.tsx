import Image from "next/image";

import googleBadge from '@/public/google-play-badge.svg'
import appleBadge from '@/public/apple-badge.svg'
import ellipseBg from '@/public/ellipse-bg.svg'
import phone1 from '@/public/guitar-phone-1.png'
import phone2 from '@/public/guitar-phone-2.png'
import Link from "next/link";

export default function HomeSection3() {
    return (
        <section className='min-h-[90vh] flex items-center  w-page-width mx-auto'>
            <div className='flex items-center w-full gap-12 flex-col lg:flex-row'>
                <div className='flex-1  flex flex-col justify-center  h-full min-h-[520px]'>
                    <h2 className={'text-5xl/snug text-center'}>
                        Browse and buy your <br/> <span className={'text-accent'}>favorite guitars</span> with <br/> VibeStrings.
                    </h2>
                    <div className={'flex items-center gap-4 justify-center mt-12'}>
                        <Link href='/'>
                            <Image src={googleBadge} alt={'google play badge'} />
                        </Link>
                        <Link href='/'>
                            <Image src={appleBadge} alt={'apple badge'} />
                        </Link>
                    </div>
                </div>
                <div className='flex-1 flex-col sm:flex-row h-full min-h-[520px] relative flex justify-center gap-8'>
                    <Image src={ellipseBg} alt={'ellipse bg'}  className={' absolute top-1/2 left-1/2 hidden sm:block -translate-1/2 '} />
                    <Image
                        src={phone2}
                        alt={'phone 2'}
                        className={'z-20 relative object-cover object-center rounded-3xl shadow-2xl ml-6 sm:ml-0 sm:mt-12'}
                        width={240}
                        height={420}
                    />
                    <Image
                        src={phone1}
                        alt={'phone 1'}
                        className={'z-20 relative object-cover object-center rounded-3xl shadow-2xl mr-6 sm:mr-0 sm:mb-12'}
                        width={240}
                        height={420}
                    />
                </div>
            </div>
        </section>
    )
}
