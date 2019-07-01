import { HeroImage } from '../components/hero-image';
import { Research } from '../components/research';
import { FeaturedPapers } from '../components/featured-papers';
import styled from 'styled-components';

const StyledContentWrapDiv = styled.div`
    padding: 0 20px;
`;

export default function Home() {
    return (
        <>
            <HeroImage />
            <StyledContentWrapDiv>
                <Research />
                <FeaturedPapers />
            </StyledContentWrapDiv>
        </>
    );
}
