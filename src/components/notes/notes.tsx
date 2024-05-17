import { useMemo, useState, useEffect } from 'react';
import classNames from 'classnames';
import { SearchInput } from '../search-input/search-input';
import { Section } from '../section/section';
import styles from './notes.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';
import { AddNoteCard } from '../add-note-card/add-note-card';
import { groupNotesByTimePeriod } from './group-notes-by-period';
import { FakeNote } from './fake-note/fake-note';
import { ScrollArea } from '../scroll-area/scroll-area';

export interface NotesProps {
    className?: string;
}

export const Notes = ({ className }: NotesProps) => {
    const { notes, syncNotes } = useNotesStore();
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        syncNotes();
    }, []);

    const relevantNotes = useMemo(() => {
        return searchString
            ? notes.filter((note) => !note.deletedAt && note.title.includes(searchString))
            : notes.filter((note) => !note.deletedAt);
    }, [notes, searchString]);

    const pinnedNotes = useMemo(
        () => relevantNotes.filter((note) => note.isPinned),
        [relevantNotes],
    );

    const noteGroups = useMemo(() => groupNotesByTimePeriod(relevantNotes), [relevantNotes]);
    const todaysNotes = noteGroups.find((group) => group.id === 'today');

    return (
        <div className={classNames(styles.root, className)}>
            <SearchInput
                value={searchString}
                onChange={setSearchString}
                placeholder="Search all notes"
                className={styles.searchInput}
            />
            <ScrollArea>
                <div className={styles.notes}>
                    {pinnedNotes.length > 0 && (
                        <Section title="Pinned">
                            {pinnedNotes.map((note) => (
                                <FakeNote note={note} key={note.id} />
                            ))}
                        </Section>
                    )}
                    {(todaysNotes || !searchString) && (
                        <Section title="Today">
                            {!searchString && <AddNoteCard />}
                            {todaysNotes?.notes.map((note) => (
                                <FakeNote note={note} key={note.id} />
                            ))}
                        </Section>
                    )}
                    {noteGroups
                        .filter((group) => group.id !== 'today')
                        .map(({ title: period, notes }) => (
                            <Section title={period} key={period}>
                                {notes.map((note) => (
                                    <FakeNote note={note} key={note.id} />
                                ))}
                            </Section>
                        ))}
                </div>
            </ScrollArea>
        </div>
    );
};
