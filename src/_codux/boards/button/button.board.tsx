import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'PrimaryButton',
    Board: () => <Button variant="primary">Primary Button</Button>,
    isSnippet: true,
});
