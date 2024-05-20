import classNames from 'classnames';
import styles from './trash-page.module.scss';
import { FakeNote } from '../notes/fake-note/fake-note';
import { useNotesStore } from '../../data-management/use-notes-store';
import { useEffect, useMemo, useState } from 'react';
import { SearchInput } from '../search-input/search-input';
import { Section } from '../section/section';
import {
    Root as ScrollAreaRoot,
    Viewport as ScrollAreaViewport,
    Scrollbar as ScrollAreaScrollbar,
    Thumb as ScrollAreaThumb,
} from '@radix-ui/react-scroll-area';

export interface TrashPageProps {
    className?: string;
}

export const TrashPage = ({ className }: TrashPageProps) => {
    const { notes, syncNotes } = useNotesStore();

    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        syncNotes();
    }, []);

    const relevantNotes = useMemo(() => {
        return searchString
            ? notes.filter((note) => note.deletedAt && note.title.includes(searchString))
            : notes.filter((note) => note.deletedAt);
    }, [notes, searchString]);

    return (
        <div className={classNames(styles.root, className)}>
            <SearchInput
                className={styles.searchInput}
                value={searchString}
                placeholder="Search deleted notes"
                onChange={setSearchString}
            />
            <Section title="Trash">
                <ScrollAreaRoot>
                    <ScrollAreaViewport>
                        <div className={styles['notes-list']}>
                            {relevantNotes.map((note) => (
                                <FakeNote note={note} key={note.id} />
                            ))}
                        </div>
                    </ScrollAreaViewport>
                    <ScrollAreaScrollbar orientation="vertical">
                        <ScrollAreaThumb />
                    </ScrollAreaScrollbar>
                </ScrollAreaRoot>
            </Section>
        </div>
    );
};
