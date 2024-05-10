import { useState, useEffect } from 'react';
import styles from './test-data-storage.module.scss';
import { useNoteStore } from '../../data-management/store';
import Classnames from 'classnames';

export const TestDataStorage = () => {
    const { notes, trash, addNote, editNote, deleteNote, getNotes, getTrash } = useNoteStore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getNotes();
    }, [getNotes]);

    useEffect(() => {
        getTrash();
    }, [getTrash]);

    const handleAddClick = () => {
        if (!title.trim() || !description.trim()) return;
        addNote({
            title: title,
            description: description,
            isPinned: false,
        });

        setTitle('');
        setDescription('');
    };

    const handleUpdateClick = (id: string) => {
        const noteToEdit = notes.find((note) => note.id === id);
        if (noteToEdit) {
            editNote(noteToEdit.id, {
                title: 'Updated title',
                description: 'Updated description',
            });
        }
    };

    const handleDeleteClick = (id: string, permanently = false) => {
        deleteNote(id, permanently);
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
                <span onClick={handleAddClick} className={styles.addBtn}>
                    Add a note
                </span>
            </div>
            <div className={styles.notes}>
                {notes.map((note) => (
                    <div className={styles.note} key={note.id}>
                        <span>{note.id}</span>
                        <span className={styles.title}>{note.title}</span>{' '}
                        <span>{note.description}</span>{' '}
                        <span
                            onClick={() => handleUpdateClick(note.id)}
                            className={styles.updateBtn}
                        >
                            Update
                        </span>{' '}
                        <span onClick={() => handleDeleteClick(note.id)} className={styles.delBtn}>
                            Move to trash
                        </span>
                    </div>
                ))}
            </div>
            <h1 className={styles.issueHere}>Trash</h1>
            <div className={styles.trash}>
                {trash.map((note) => (
                    <div className={Classnames(styles.note, styles.disabled)} key={note.id}>
                        <span>{note.id}</span>
                        <span className={styles.title}>{note.title}</span>{' '}
                        <span>{note.description}</span>{' '}
                        <span
                            onClick={() => handleDeleteClick(note.id, true)}
                            className={styles.delBtn}
                        >
                            Delete
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
