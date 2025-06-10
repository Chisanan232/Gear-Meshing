import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: require('@site/static/img/GearMeshing-AI_logo.png').default,
    description: (
      <>
        GearMeshing-AI was designed from the ground up to be easily installed and
        used to get your AI-powered development system up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: require('@site/static/img/GearMeshing-AI_logo.png').default,
    description: (
      <>
        GearMeshing-AI lets you focus on your code, and we&apos;ll do the chores. Go
        ahead and integrate the AI agents into your workflow.
      </>
    ),
  },
  {
    title: 'Powered by AI',
    image: require('@site/static/img/GearMeshing-AI_logo.png').default,
    description: (
      <>
        Extend or customize your development process with AI assistance. GearMeshing-AI can
        be extended while maintaining the same intuitive interface.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
