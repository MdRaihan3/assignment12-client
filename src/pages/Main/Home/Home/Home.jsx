import FeatureSection from "../FeatureSection/FeatureSection";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorkSection from '../HowItWorkSection/HowItWorkSection'
import TestimonialSection from '../TetimonialSection/TestimonialSection'

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeatureSection></FeatureSection>
            <HowItWorkSection></HowItWorkSection>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;