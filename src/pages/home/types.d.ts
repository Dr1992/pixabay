import {NativeSyntheticEvent, TextInputEndEditingEventData} from 'react-native';
import {IPixabay} from '../../services/pixabay/types';

export interface IViewProps {
  loading: boolean;
  onBlur?: (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  hits: IPixabay[];
}
