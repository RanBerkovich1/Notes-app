import style from '../../styles/common/style-guide.module.scss';
import classNames from 'classnames';
import styles from './site-wrapper.module.scss';
import { SidebarPanel } from '../sidebar-panel/sidebar-panel';
import { Outlet } from 'react-router-dom';
import ContextMenuDemo from '../context-menu/context-menu';

export interface SiteWrapperProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SiteWrapper = ({ className }: SiteWrapperProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <SidebarPanel />
            <ContextMenuDemo/>
            <div className={classNames(styles.content, style['w30'])}>
                <Outlet />
            </div>
        </div>
    );
};
