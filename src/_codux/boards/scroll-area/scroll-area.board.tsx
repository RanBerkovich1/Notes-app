import { createBoard } from '@wixc3/react-board';
import { ScrollArea } from '../../../components/scroll-area/scroll-area';
import ScrollArea_board_module from './scroll-area.board.module.scss';

export default createBoard({
    name: 'ScrollArea',
    Board: () => (
        <ScrollArea className={ScrollArea_board_module.area}>
            <p>
                At ultrices mi tempus imperdiet nulla malesuada. Egestas diam in arcu cursus euismod
                quis. Aenean euismod elementum nisi quis eleifend quam. Porttitor rhoncus dolor
                purus non enim praesent. Interdum varius sit amet mattis vulputate enim nulla.
                Pulvinar elementum integer enim neque volutpat ac tincidunt. Amet dictum sit amet
                justo donec. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.
                Faucibus a pellentesque sit amet porttitor eget dolor. Ac turpis egestas sed tempus
                urna et pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Amet mattis
                vulputate enim nulla. Odio facilisis mauris sit amet massa vitae tortor condimentum
                lacinia. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Risus sed
                vulputate odio ut enim blandit. Sodales ut etiam sit amet nisl purus in mollis nunc.
                Interdum velit laoreet id donec ultrices tincidunt. Urna duis convallis convallis
                tellus id interdum. Tincidunt augue interdum velit euismod. Senectus et netus et
                malesuada fames ac turpis egestas integer.
            </p>
            <p>
                Sem fringilla ut morbi tincidunt augue interdum velit euismod. Quis lectus nulla at
                volutpat diam ut venenatis tellus in. Hendrerit dolor magna eget est lorem ipsum
                dolor sit. Quam id leo in vitae turpis massa sed elementum. Eu augue ut lectus arcu
                bibendum. In ante metus dictum at tempor commodo ullamcorper a. Aenean pharetra
                magna ac placerat vestibulum. Eget nullam non nisi est. Eget felis eget nunc
                lobortis mattis aliquam. Egestas pretium aenean pharetra magna ac. Risus at ultrices
                mi tempus imperdiet nulla malesuada. Enim praesent elementum facilisis leo vel
                fringilla est. Quisque egestas diam in arcu cursus euismod quis viverra nibh.
                Senectus et netus et malesuada fames ac turpis egestas sed. Mattis nunc sed blandit
                libero volutpat sed.
            </p>
            <p>
                Cursus in hac habitasse platea dictumst quisque. Faucibus in ornare quam viverra
                orci. Orci dapibus ultrices in iaculis nunc sed augue. Elementum nibh tellus
                molestie nunc. Id neque aliquam vestibulum morbi blandit cursus risus. Ut aliquam
                purus sit amet luctus venenatis lectus magna. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames. Eu volutpat odio facilisis mauris sit amet
                massa vitae tortor. Quis hendrerit dolor magna eget est. Hac habitasse platea
                dictumst quisque. Vitae sapien pellentesque habitant morbi. Fames ac turpis egestas
                integer eget aliquet nibh praesent. Pharetra pharetra massa massa ultricies mi quis
                hendrerit dolor. Morbi blandit cursus risus at ultrices. Semper risus in hendrerit
                gravida rutrum quisque non tellus orci. Lorem donec massa sapien faucibus et
                molestie ac. Varius sit amet mattis vulputate enim nulla. Et netus et malesuada
                fames ac turpis. Euismod quis viverra nibh cras pulvinar mattis nunc. Ultrices
                gravida dictum fusce ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue
                eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Lectus
                vestibulum mattis ullamcorper velit sed ullamcorper. Et ligula ullamcorper malesuada
                proin. Venenatis a condimentum vitae sapien. Vel facilisis volutpat est velit
                egestas dui. Ut faucibus pulvinar elementum integer enim neque volutpat ac
                tincidunt. Enim lobortis scelerisque fermentum dui faucibus in. Gravida quis blandit
                turpis cursus in hac habitasse platea dictumst. Dictum non consectetur a erat nam at
                lectus urna. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Commodo
                odio aenean sed adipiscing. Est ultricies integer quis auctor elit sed vulputate mi
                sit. Iaculis nunc sed augue lacus. Molestie nunc non blandit massa. Amet risus
                nullam eget felis. Non blandit massa enim nec dui nunc. Lobortis elementum nibh
                tellus molestie nunc non.
            </p>
        </ScrollArea>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 456,
        windowWidth: 624,
    },
});
