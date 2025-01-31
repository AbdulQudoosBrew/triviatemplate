"use client";
import React from 'react';
import {
    Container,
    IconImage,
    Divider,
    InfoCard,
    ContentImage,
    StrongSpan,
} from './MotivationalStyle';
// import { TextBlock } from './TextBlock';
import SmallParagraph from '../../text/SmallParagraph';
import HeaderLarge from '@/components/template/text/HeaderLarge';
import { ActionButton } from '@/components/template/button/NextQuestionButton';
import { assests } from '../../../../../public/assests';
import MediumHeading from '../../text/MediumHeading';

const MotivationalPage: React.FC = () => {
    const handleStartQuiz = () => {
        // Quiz start logic here
    };
    return (
        <Container>
            <IconImage
                loading="lazy"
                src={assests.SOYUMMY_MAIN_LOGO_SMALL}
                alt="Food waste icon"
            />
            <HeaderLarge
                fontFamily='plamerLakePrintRegular'
                fontSize='semiLarge'
                lineheight='30px'
                margin="20px 0px 0px"
            >
                DID YOU KNOW?💡
            </HeaderLarge>
            <Divider />
            <InfoCard>
                <MediumHeading fontFamily='hindRegular' fontSize='medium' lineheight="27.6px">
                    The average household wastes over $1,300 in food each year.{" "}<StrongSpan>
                        Say goodbye to food rotting in the back of your fridge!
                    </StrongSpan>
                </MediumHeading>
                <ContentImage
                    loading="lazy"
                    src={assests.MOTIVATIONAL_IMAGE_ONE}
                    alt="Food waste illustration"
                />
            </InfoCard>
            <SmallParagraph fontSize="small" fontFamily='hindRegular' lineheight='12px' margin="1.25rem 0.938rem 0px" color="#A0A0A0">
                William & Mary. Study Calculates True Cost of Food Waste in America. 2020.
            </SmallParagraph>
            <ActionButton
                setmargintop="30px"
                height="56px"
                type="button"
                onClick={handleStartQuiz}
            >
                Let&apos;s keep going!
            </ActionButton>
        </Container>
    );
};

export default MotivationalPage;