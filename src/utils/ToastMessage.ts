import Toast from 'react-native-toast-message';

export const ToastSuccess = (title: string, description: string, time?: number) => {
    Toast.show({
        type: 'success',
        position: 'top',
        text1: title,
        text2: description ? description : "Hata",
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 40,
        bottomOffset: 40,
    });
};

export const ToastError = (title: string, description: string, time?: number) => {
    Toast.show({
        type: 'error',
        position: 'top',
        text1: title,
        text2: description,
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 40,
        bottomOffset: 40,
    });
};