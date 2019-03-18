import { Fragment } from 'react';
import HeroImage from '../components/HeroImage';
import Research from '../components/Research';
import FeaturedPapers from '../components/FeaturedPapers';
import '../components/styles/index.scss';

export default function Home() {
    return <Fragment>
    <HeroImage />
    <Research />
    <FeaturedPapers />
    </Fragment>
}
  