import { DateTime, Interval } from 'luxon';
import { Note } from '../../data-management/types';

export type NoteGroup = {
    id: string;
    title: string;
    startsAt: DateTime;
    notes: Note[];
};

export function groupNotesByTimePeriod(notes: Note[]): NoteGroup[] {
    const groups: Record<string, NoteGroup> = {};
    const notPinnedNotes = notes.filter((note) => !note.isPinned);

    const now = DateTime.now();
    const todayInterval = Interval.fromDateTimes(now.startOf('day'), now.endOf('day'));
    const yesterdayInterval = todayInterval.mapEndpoints((date) => date.minus({ days: 1 }));

    for (const note of notPinnedNotes) {
        const date = DateTime.fromJSDate(note.createdAt);

        if (todayInterval.contains(date)) {
            groups.today ??= {
                id: 'today',
                title: 'Today',
                startsAt: now.startOf('day'),
                notes: [],
            };
            groups.today.notes.push(note);
        } else if (yesterdayInterval.contains(date)) {
            groups.yesterday ??= {
                id: 'yesterday',
                title: 'Yesterday',
                startsAt: now.startOf('day').minus({ day: 1 }),
                notes: [],
            };
            groups.yesterday.notes.push(note);
        } else {
            const groupId = date.startOf('month').toString();
            groups[groupId] ??= {
                id: groupId,
                title: date.toFormat('LLLL yyyy'),
                startsAt: date.startOf('month'),
                notes: [],
            };
            groups[groupId].notes.push(note);
        }
    }

    const groupList = Object.values(groups);
    groupList.sort((a, b) => (b.startsAt.toMillis() > a.startsAt.toMillis() ? 1 : -1));
    groupList.forEach((group) =>
        group.notes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    );

    return groupList;
}
