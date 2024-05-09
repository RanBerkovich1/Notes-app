export interface Note {
    id: string;
    title: string;
    description: string;
    createdDate: Date;
    modifiedDate: Date;
    deletedDate?: Date;
    isPinned: boolean;
}
