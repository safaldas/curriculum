import styles from './CourseSpotlight.module.scss';
import Image from 'next/image'

export default function CourseSpotlight({contents}) {
    return (
        <section className={styles.spotlight}>
            <div className="container container--small">
                <div className="md:flex items-center justify-between">
                    <div className="md:w-5/12">
                        <h2>{contents.title}</h2>
                        <a href="" className="btn btn--purple">
                            <span className="btn__text">{contents.buttonText}</span>
                        </a>
                    </div>
                    <div className="md:w-5/12">
                        <Image
                            src={contents.image}
                            alt={contents.alt}
                            width={contents.imageWidth}
                            height={contents.imageHeight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}