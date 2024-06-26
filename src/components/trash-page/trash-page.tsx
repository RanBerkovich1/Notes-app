import classNames from 'classnames';
import styles from './trash-page.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';
import { useEffect, useMemo, useState } from 'react';
import { SearchInput } from '../search-input/search-input';
import { Section } from '../section/section';
import { ScrollArea } from '../scroll-area/scroll-area';
import { Note } from '../note/note';

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
                <ScrollArea className={styles['scrollable-area']}>
                    <div className={styles['notes-list']}>
                        {relevantNotes.map((note) => (
                            <Note {...note} key={note.id} />
                        ))}
                    </div>
                </ScrollArea>
            </Section>
        </div>
    );
};
