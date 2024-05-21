import classNames from 'classnames';
import styles from './search-input.module.scss';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SearchInput = ({ value, onChange, className, placeholder }: SearchInputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <MagnifyingGlassIcon className={styles.icon} />
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.input}
                placeholder={placeholder}
                type="search"
            />
        </div>
    );
};
