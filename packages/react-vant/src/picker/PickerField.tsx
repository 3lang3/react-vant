import React, { FC, useState } from 'react';
import Picker from './Picker';
import Field from '../field';
import Popup from '../popup';
import { FieldProps } from '../field/PropsType';
import { PopupProps } from '../popup/PropsType';
import { PickerProps } from './PropsType';

type PickerFieldProps = Omit<FieldProps, 'value' | 'onChange' | 'readonly'> & {
  value?: string;
  onChange?: (val: string) => void;
  popupProps?: Omit<PopupProps, 'visible' | 'position'>;
  pickerProps?: PickerProps;
};

const PickerField: FC<PickerFieldProps> = (props) => {
  const { value, onChange, pickerProps, popupProps, ...fieldProps } = props;
  const [visible, setVisible] = useState(false);

  const onFieldClick = (e) => {
    setVisible(true);
    if (fieldProps.onClick) fieldProps.onClick(e);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onPopupClose = () => {
    if (popupProps.onClose) popupProps.onClose();
    onCancel();
  };
  const onPickerCancel = (val, idx) => {
    if (pickerProps.onCancel) pickerProps.onCancel(val, idx);
    onCancel();
  };
  const onPickerConfirm = (val, idx) => {
    if (onChange) onChange(val);
    if (pickerProps.onConfirm) pickerProps.onConfirm(val, idx);
    onCancel();
  };

  return (
    <>
      <Field isLink readonly {...fieldProps} value={props.value} onClick={onFieldClick} />
      <Popup position="bottom" round {...popupProps} visible={visible} onClose={onPopupClose}>
        <Picker {...pickerProps} onConfirm={onPickerConfirm} onCancel={onPickerCancel} />
      </Popup>
    </>
  );
};

PickerField.defaultProps = {
  pickerProps: {
    columns: [],
  },
  popupProps: {},
};

export default PickerField;
