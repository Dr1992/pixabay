import {NativeSyntheticEvent, TextInputEndEditingEventData} from 'react-native';

export interface IViewProps {
  onBlur?: (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  loadMore: () => void;
  errorAction: () => void;
}
