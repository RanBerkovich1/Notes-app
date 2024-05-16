import { ToastViewport } from '../toast-viewport/toast-viewport';
import { Toast } from '../toast/toast';
import { useToastStore } from './toast-store';

export const ToastContainer = () => {
    const { toasts, removeToast } = useToastStore();

    return (
        <>
            {toasts.map(({ id, ...toastData }) => (
                <Toast
                    key={id}
                    onOpenChange={(open) => {
                        if (!open) {
                            // Delay for exit animation.
                            setTimeout(() => {
                                removeToast(id);
                            }, 100);
                        }
                    }}
                    {...toastData}
                />
            ))}
            <ToastViewport />
        </>
    );
};
