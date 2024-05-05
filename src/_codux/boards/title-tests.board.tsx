import '../../styles/common/style-guide.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'title tests',
    Board: () => (
        <div>
            <h1>Heading 1</h1>
            <h1 className="sectionTitle">Section Title</h1>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1022,
    },
});
