import { createBoard } from '@wixc3/react-board';
import { SidebarPanel } from '../../../components/sidebar-panel/sidebar-panel';

export default createBoard({
    name: 'SidebarPanel',
    Board: () => <SidebarPanel />,
    isSnippet: true,
});