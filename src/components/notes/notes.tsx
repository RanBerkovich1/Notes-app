import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { DateTime, Interval } from 'luxon';
import { SearchInput } from '../search-input/search-input';
import { Section } from '../section/section';
import styles from './notes.module.scss';

export interface NotesProps {
    className?: string;
}

type Note = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    modifiedAt: Date;
    deletedAt?: Date;
    isPinned: boolean;
};

const notes: Note[] = [
    {
        id: 'today',
        title: 'today',
        description: 'Today note',
        createdAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        isPinned: true,
    },
    {
        id: 'anotherone',
        title: 'Another',
        description: "Don't forget to buy milk",
        createdAt: DateTime.now().plus({ days: -1, hour: 3 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        isPinned: false,
    },
    {
        id: 'today 2',
        title: 'today 2',
        description: 'Today 2 note',
        createdAt: DateTime.now().minus({ hour: 2 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 2 }).toJSDate(),
        isPinned: false,
    },
    {
        id: '1',
        title: '1',
        description: 'some description 1',
        createdAt: DateTime.now().minus({ days: 1 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ days: 1 }).toJSDate(),
        isPinned: false,
    },
    {
        id: '2',
        title: '2',
        description: 'some description 2',
        createdAt: DateTime.now().minus({ days: 2 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ days: 2 }).toJSDate(),
        isPinned: false,
    },
    {
        id: '3',
        title: '3',
        description: 'some description 3',
        createdAt: DateTime.now().minus({ months: 1 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ months: 1 }).toJSDate(),
        isPinned: false,
    },
];

type NoteGroup = {
    period: string;
    startsAt: DateTime;
    notes: Note[];
};

function groupNotesByTimePeriod(notes: Note[]): Record<'today' | 'yesterday' | string, NoteGroup> {
    const groups: Record<string, NoteGroup> = {};
    const notPinnedNotes = notes.filter((note) => !note.isPinned);

    const now = DateTime.now();
    const todayInterval = Interval.fromDateTimes(now.startOf('day'), now.endOf('day'));
    const yesterdayInterval = todayInterval.mapEndpoints((date) => date.minus({ days: 1 }));

    for (const note of notPinnedNotes) {
        const date = DateTime.fromJSDate(note.createdAt);

        if (todayInterval.contains(date)) {
            groups.today ??= { period: 'Today', startsAt: now.startOf('day'), notes: [] };
            groups.today.notes.push(note);
        } else if (yesterdayInterval.contains(date)) {
            groups.yesterday ??= {
                period: 'Yesterday',
                startsAt: now.startOf('day').minus({ day: 1 }),
                notes: [],
            };
            groups.yesterday.notes.push(note);
        } else {
            const formattedDate = date.toFormat('LLLL yyyy');
            groups[formattedDate] ??= {
                period: formattedDate,
                startsAt: date.startOf('month'),
                notes: [],
            };
            groups[formattedDate].notes.push(note);
        }
    }

    const groupList = Object.values(groups);
    groupList.sort((a, b) => (b.startsAt.toMillis() > a.startsAt.toMillis() ? 1 : -1));
    groupList.forEach((group) =>
        group.notes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    );

    return groups;
}

export const Notes = ({ className }: NotesProps) => {
    const [searchString, setSearchString] = useState('');
    const relevantNotes = useMemo(
        () => (searchString ? notes.filter((note) => note.title.includes(searchString)) : notes),
        [notes, searchString]
    );

    const pinnedNotes = useMemo(
        () => relevantNotes.filter((note) => note.isPinned),
        [relevantNotes]
    );

    const noteGroups = useMemo(() => groupNotesByTimePeriod(relevantNotes), [relevantNotes]);

    return (
        <div className={classNames(styles.root, className)}>
            <SearchInput
                value={searchString}
                onChange={setSearchString}
                placeholder="Search all notes"
                className={styles.searchInput}
            />
            {pinnedNotes.length > 0 && (
                <Section title="Pinned">
                    {pinnedNotes.map((note) => (
                        <FakeNote note={note} key={note.id} />
                    ))}
                </Section>
            )}
            {(noteGroups.today?.notes.length > 0 || !searchString) && (
                <Section title="Today">
                    {noteGroups.today?.notes.map((note) => (
                        <FakeNote note={note} key={note.id} />
                    ))}
                </Section>
            )}
            {Object.values(noteGroups)
                .filter((group) => group.period !== 'Today')
                .map(({ period, notes }) => (
                    <Section title={period} key={period}>
                        {notes.map((note) => (
                            <FakeNote note={note} key={note.id} />
                        ))}
                    </Section>
                ))}
        </div>
    );
};

function FakeNote({ note }: { note: Note }) {
    return (
        <div className={styles.fakeNote}>
            <span>{note.title}</span>
            <span>{note.createdAt.toLocaleString()}</span>
        </div>
    );
}
