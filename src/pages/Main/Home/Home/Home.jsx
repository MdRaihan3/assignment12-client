import FeatureSection from "../FeatureSection/FeatureSection";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorkSection from '../HowItWorkSection/HowItWorkSection'
import TestimonialSection from '../TetimonialSection/TestimonialSection'
import TopEarners from "../TopEarners/TopEarners";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeatureSection></FeatureSection>
            <HowItWorkSection></HowItWorkSection>
            <TestimonialSection></TestimonialSection>
            <TopEarners></TopEarners>
        </div>
    );
};

export default Home;