import Image from 'next/image'
import DashboardPreviousWorkout from '../components/dashboard/previous-workout'
import DashboardSummary from '../components/dashboard/summary'
import Title from '../components/title'
import WorkoutChart from '../components/workout/chart'
import { HeadDiv, WorkoutHeadDiv, WorkoutsButton, WorkoutsDiv } from '../styles/pages/dashboard.styled'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'

export default function Dashboard() {
    return (
        <>
            <HeadDiv>
                <Title content="Dashboard" />
                <Image src="/images/icons/user.svg" alt="profile" width={30} height={30} />
            </HeadDiv>
            <DashboardSummary />
            <DashboardPreviousWorkout />
            <WorkoutsDiv>
                <WorkoutHeadDiv>
                    <Title isSmall content="My workouts" />
                    <Link href="/workouts">
                        <WorkoutsButton>Show all</WorkoutsButton>
                    </Link>
                </WorkoutHeadDiv>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                    {[1, 2, 3].map(() => {
                        return (
                            <SwiperSlide>
                                <Link href="/workout/1">
                                    <WorkoutChart />
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </WorkoutsDiv>
        </>
    )
}
