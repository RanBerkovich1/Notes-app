import { createBoard } from '@wixc3/react-board';
import {
    Root as ScrollAreaRoot,
    Viewport as ScrollAreaViewport,
    Scrollbar as ScrollAreaScrollbar,
    Thumb as ScrollAreaThumb,
} from '@radix-ui/react-scroll-area';

export default createBoard({
    name: 'ScrollArea',
    Board: () => (
        <ScrollAreaRoot>
            <ScrollAreaViewport>Scroll area</ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="horizontal">
                <ScrollAreaThumb />
            </ScrollAreaScrollbar>
        </ScrollAreaRoot>
    ),
    isSnippet: true,
});
