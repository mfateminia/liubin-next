import { Fragment } from 'react';
import HeroImage from '../components/hero-image';
import Research from '../components/research';
import FeaturedPapers from '../components/featured-papers';

export default function Home() {
    return (
        <Fragment>
            <HeroImage />
            <Research />
            <FeaturedPapers />
        </Fragment>
    );
}
