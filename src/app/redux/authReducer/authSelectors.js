import { useSelector } from 'react-redux';

export const useSelectToken = () => useSelector(({ auth }) => auth?.token ?? '');
