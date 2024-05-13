import { createBoard } from '@wixc3/react-board';
import { SearchInput } from '../../../components/search-input/search-input';
import { useState } from 'react';

export default createBoard({
    name: 'SearchInput',
    Board: () => {
        const [value, setValue] = useState('');
        return <SearchInput value={value} onChange={setValue} placeholder="Search all notes" />;
    },
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#ebebe9',
        canvasPadding: {
            top: 32,
            right: 32,
            bottom: 32,
            left: 32,
        },
    },
});
