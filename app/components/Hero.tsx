import Image from 'next/image';
import Link from "next/link";

import siteLogo from '@/public/logo.svg'
import heroImg from '@/public/hero.png'

export default function Hero() {
    return (
        <section className={'w-page-width mx-auto  min-h-[70vh] relative'}>
            <Link href="/" className={'mt-16 flex items-center relative z-10 gap-2'}>
                <Image src={siteLogo} alt="Logo" width={28} height={28} />
                <span className={'text-2xl'}>VibeStrings</span>
            </Link>
            <div className={'mt-32 w-fit relative z-10'}>
                <h1 className={'text-header font-bold text-center '}>
                    Browse top quality <br/>
                    <span className={'text-accent'}>Guitars </span>
                    online
                </h1>
                <p className={'text-grey-text text-center font-medium'}>
                    Explore 50k+ latest collections of branded guitars <br/> online with VibeStrings.
                </p>
            </div>
            <span className={'absolute right-0 -top-16 hidden lg:block z-0 '}>
                    <Image src={heroImg} alt={'Hero Image'} priority={true} className={'object-cover object-center'} />
                    <span className={'absolute bottom-0 right-2/5 bg-white p-7 rounded-full translate-1/2'}>
                        <Image src={siteLogo} alt={'site logo'} width={24} height={24} />
                    </span>
            </span>
        </section>
    )
}