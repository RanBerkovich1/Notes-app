import { createBoard, ContentSlot } from '@wixc3/react-board';
import {
    Root as TooltipRoot,
    Trigger as TooltipTrigger,
    Portal as TooltipPortal,
    Content as TooltipContent,
    Arrow as TooltipArrow,
    Provider as TooltipProvider,
} from '@radix-ui/react-tooltip';

export default createBoard({
    name: 'Tooltip',
    Board: () => (
        <TooltipProvider>
            <ContentSlot>
                <TooltipRoot>
                    <TooltipTrigger>
                        <button>Trigger</button>
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipContent>
                            Tooltip content
                            <TooltipArrow />
                        </TooltipContent>
                    </TooltipPortal>
                </TooltipRoot>
            </ContentSlot>
        </TooltipProvider>
    ),
    isSnippet: true,
});
