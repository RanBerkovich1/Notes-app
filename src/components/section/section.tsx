import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './section.module.scss';

export interface SectionProps {
    className?: string;
    title: string;
}

export const Section = ({ className, title, children }: PropsWithChildren<SectionProps>) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};
