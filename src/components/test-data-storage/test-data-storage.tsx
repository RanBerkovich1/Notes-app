import { useState, useEffect } from 'react';
import styles from './test-data-storage.module.scss';
import Classnames from 'classnames';
import { useNotesStore } from '../../data-management/use-notes-store';

export const TestDataStorage = () => {
    const { notes, addNote, updateNote, deleteNote, restoreNote, syncNotes } = useNotesStore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        void syncNotes();
    }, [syncNotes]);

    const handleAddClick = () => {
        if (!title.trim() || !description.trim()) return;
        addNote({
            title: title,
            description: description,
        });

        setTitle('');
        setDescription('');
    };

    const handleUpdateClick = (id: string) => {
        const noteToEdit = notes.find((note) => note.id === id);
        if (noteToEdit) {
            updateNote(noteToEdit.id, {
                title: 'Updated title',
                description: 'Updated description',
            });
        }
    };

    const handleDeleteClick = (id: string, permanently = false) => {
        deleteNote(id, permanently);
    };
    const handleRestoreClick = (id: string) => {
        restoreNote(id);
    };

    return (
        <div className={styles.root}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />{' '}
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />{' '}
                <span onClick={handleAddClick} className={Classnames(styles.addBtn, styles.btn)}>
                    Add a note
                </span>
            </div>
            <div className={styles.notes}>
                {notes
                    .filter((note) => !note.deletedAt)
                    .map((note) => (
                        <div className={styles.note} key={note.id}>
                            <span>{note.id}</span>
                            <span className={styles.title}>{note.title}</span>{' '}
                            <span>{note.description}</span>{' '}
                            <span
                                onClick={() => handleUpdateClick(note.id)}
                                className={Classnames(styles.updateBtn, styles.btn)}
                            >
                                Update
                            </span>{' '}
                            <span
                                onClick={() => handleDeleteClick(note.id)}
                                className={Classnames(styles.delBtn, styles.btn)}
                            >
                                Move to trash
                            </span>
                        </div>
                    ))}
            </div>
            <h2>Trash</h2>
            <div className={styles.trash}>
                {notes
                    .filter((note) => note.deletedAt)
                    .map((note) => (
                        <div className={Classnames(styles.note, styles.disabled)} key={note.id}>
                            <span>{note.id}</span>
                            <span className={styles.title}>{note.title}</span>{' '}
                            <span>{note.description}</span>{' '}
                            <span
                                onClick={() => handleRestoreClick(note.id)}
                                className={Classnames(styles.restoreBtn, styles.btn)}
                            >
                                Restore
                            </span>{' '}
                            <span
                                onClick={() => handleDeleteClick(note.id, true)}
                                className={Classnames(styles.delBtn, styles.btn)}
                            >
                                Delete
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
};
