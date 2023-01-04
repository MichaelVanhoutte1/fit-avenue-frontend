import Image from "next/image";
import {
    AboutDiv,
    HeadDiv,
    ImageDiv,
    MainImage,
    MuscleGroupsDiv,
    TagDiv,
    Text,
} from "../../styles/pages/exercise.styled";
import Title from "../../components/title";
import Tag from "../../components/tag";

export default function Exercise() {
    return (
        <>
            <HeadDiv>
                <ImageDiv>
                    <Image src="/images/icons/arrow-left.svg" alt="back" width={20} height={20} />
                    <Image src="/images/icons/plus.svg" alt="add exercise" width={20} height={20} />
                </ImageDiv>
            </HeadDiv>
            <Title content="Bench press" />
            <MainImage src="/images/rand.jpg" alt="exercise" />
            <MuscleGroupsDiv>
                <Title isSmall content="muscles involved" />
                <TagDiv>
                    <Tag name="Chest" />
                    <Tag name="Deltoids" />
                    <Tag name="Triceps" />
                </TagDiv>
            </MuscleGroupsDiv>
            <AboutDiv>
                <Title isSmall content="about" />
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt soluta assumenda adipisci veritatis commodi cum atque maxime saepe fuga accusantium, necessitatibus voluptates praesentium laudantium nam sint eius asperiores reiciendis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, dignissimos magnam illum soluta nobis nihil architecto? Aut natus repudiandae impedit quae incidunt, cumque dicta illo dolor excepturi eius, quas voluptatum!</Text>
            </AboutDiv>
        </>
    );
}
