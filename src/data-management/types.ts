export interface Note {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    modifiedAt: Date;
    deletedAt?: Date;
    isPinned: boolean;
}
