import Image from "next/image";
import siteLogo from "@/public/logo.svg";
import emailIcon from '@/public/sms.svg'
import locationIcon from '@/public/location.svg'

import facebookIcon from '@/public/facebook.svg'
import twitterIcon from '@/public/twitter.svg'
import instagramIcon from '@/public/instagram.svg'

export default function Footer() {
    return (
        <footer className={'bg-[#EEEEEE]'}>
            <div className={'w-page-width mx-auto  h-full min-h-[380px] flex flex-wrap gap-12 pt-12 mt-12 justify-between items-center'}>
                <div>
                    <div className={'flex items-center relative z-10 gap-6'} >
                        <Image src={siteLogo} alt="Logo" width={40} height={40} />
                        <span className={'text-[40px]'}>VibeStrings</span>
                    </div>
                    <div className={'flex gap-4 mt-6'}>
                        <Image src={emailIcon} alt={'email icon'} width={24} height={24}/>
                        <p className={'text-grey-text text-base'}>Enquiry@VibeStrings.com</p>
                    </div>
                    <div className={'flex gap-4 mt-6'}>
                        <Image src={locationIcon} alt={'email icon'} width={24} height={24}/>
                        <p className={'text-grey-text text-base'}>San Francisco</p>
                    </div>
                </div>
                <div className={'h-full'}>
                    <h3 className={'text-lg font-bold text-black-text'}>PAGES</h3>
                    <ul className={'text-grey-text  *:mt-3.5 *:hover:underline *:select-none mt-4'}>
                        <li>Store</li>
                        <li>Collections</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <h3 className={'text-lg font-bold text-black-text'}>PRODUCT</h3>
                    <ul className={'text-grey-text *:mt-3.5 *:hover:underline *:select-none mt-4'}>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Copyright</li>
                    </ul>
                </div>
                <div>
                    <h3 className={'text-lg font-bold text-black-text'}>FOLLOW US</h3>
                    <div className={'flex gap-12 items-center mt-4'}>
                        <Image src={facebookIcon} alt={'facebook icon'} width={11} height={22}/>
                        <Image src={twitterIcon} alt={'twitter icon'} width={19} height={16}/>
                        <Image src={instagramIcon} alt={'instagram icon'} width={20} height={20}/>
                    </div>
                </div>
            </div>
            <p className={'text-center pb-8 text-grey-text mt-4'}>© 2022 Copyright.VibeStrings</p>
        </footer>
    )
}