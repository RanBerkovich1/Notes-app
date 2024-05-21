import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import {
    Root as ScrollAreaRoot,
    Viewport as ScrollAreaViewport,
    Scrollbar as ScrollAreaScrollbar,
    Thumb as ScrollAreaThumb,
} from '@radix-ui/react-scroll-area';
import styles from './scroll-area.module.scss';

export type ScrollAreaProps = PropsWithChildren<{
    className?: string;
}>;

export const ScrollArea = ({ className, children }: ScrollAreaProps) => {
    return (
        <ScrollAreaRoot className={classNames(styles.root, className)}>
            <ScrollAreaViewport className={styles.viewport}>{children}</ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="vertical" className={styles.scrollbar}>
                <ScrollAreaThumb className={styles.thumb} />
            </ScrollAreaScrollbar>
            <ScrollAreaScrollbar orientation="horizontal" className={styles.scrollbar}>
                <ScrollAreaThumb className={styles.thumb} />
            </ScrollAreaScrollbar>
        </ScrollAreaRoot>
    );
};
