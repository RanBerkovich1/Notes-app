import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './test-data-storage.module.scss';
import { StorageService } from '../../services/storage-service';

export const TestDataStorage = () => {
    const storageService = new StorageService();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState(storageService.getAllNotes());

    const handleAddClick = () => {
        storageService.addNote({
            title: title,
            description: description,
            isPinned: false,
        });

        setTitle('');
        setDescription('');
        setNotes(storageService.getAllNotes());
    };

    const handleUpdateClick = (id: string) => {
        const noteToEdit = storageService.getNoteById(id);
        if (noteToEdit) {
            storageService.editNote(noteToEdit.id, {
                title: 'Updated title',
                description: 'Updated description',
            });
        }
        setNotes(storageService.getAllNotes());
    };

    const handleDeleteClick = (id: string) => {
        storageService.deleteNote(id, true);
        setNotes(storageService.getAllNotes());
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
                <span onClick={handleAddClick} className={styles.delBtn}>
                    Add
                </span>
            </div>
            {notes.map((note) => (
                <div className={styles.notes} key={note.id}>
                    <span>{note.id}</span>
                    <span className={styles.title}>{note.title}</span>{' '}
                    <span>{note.description}</span>{' '}
                    <span onClick={() => handleUpdateClick(note.id)} className={styles.updateBtn}>
                        Update
                    </span>{' '}
                    <span onClick={() => handleDeleteClick(note.id)} className={styles.delBtn}>
                        Delete
                    </span>
                </div>
            ))}
        </div>
    );
};
