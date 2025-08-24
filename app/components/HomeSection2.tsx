import Image, {StaticImageData} from "next/image";

import categoryIcon from '@/public/category.svg'
import deliveryTruckIcon from '@/public/delivery-truck.svg'
import walletIcon from '@/public/empty-wallet-tick.svg'

const WhyTryCard = ({img, alt, title, par}: {img: StaticImageData, alt: string, title: string, par: string}) => {
    return (
        <div className={'text-center flex flex-col items-center gap-3 '}>
            <span className={'bg-[#262626] rounded-[20px] flex justify-center items-center p-5'}>
                <Image src={img} alt={alt} width={32} height={32}/>
            </span>
            <h3 className={'font-bold text-lg text-white uppercase mt-6'}>{title}</h3>
            <p className={'text-grey-text text-sm w-2/3'}>{par}</p>
        </div>
    )
}

export default function HomeSection2() {
    return (
        <section className={'bg-black-text w-auto'}>
            <div className={'w-page-width mx-auto flex flex-col h-full min-h-[500px] py-12 items-center justify-center'}>
                <h1 className={'text-[44px] text-center text-white '}>Why try <span className={'text-accent  '}>VibeStrings?</span></h1>
                <div className={'mt-24 flex flex-wrap justify-center  gap-12 md:justify-between items-center w-full'}>
                    <WhyTryCard img={categoryIcon} alt={'category icon'} title={'smooth browsing'} par={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                    <WhyTryCard img={categoryIcon} alt={'category icon'} title={'EASY Delivery'} par={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                    <WhyTryCard img={categoryIcon} alt={'category icon'} title={'SwiFT PAYMENTS'} par={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                </div>
            </div>
        </section>
    )
}