import { create } from 'zustand';
import { ToastProps } from '../toast/toast';

let toastCounter = 0;

type ToastData = Omit<ToastProps, 'open' | 'onOpenChange'>;

interface Toast extends ToastData {
    id: string;
}

interface ToastStore {
    toasts: Toast[];
    openToast: (toastData: ToastData) => void;
    removeToast: (toastId: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
    toasts: [],
    openToast: (toastData) => {
        const newToast: Toast = {
            id: `${toastCounter++}`,
            ...toastData,
        };
        set((state) => ({ toasts: [...state.toasts, newToast] }));
    },
    removeToast: (toastId: string) => {
        set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== toastId) }));
    },
}));
