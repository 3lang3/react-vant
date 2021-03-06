import React, { useState } from 'react';
import { Field, Flex, Popup, Picker, Button } from 'react-vant';
import { ArrowDown } from '@react-vant/icons';

const columns = ['86 π¨π³', '87 πΊπΈ', '88 π³οΈβπ', '89 π³οΈββ§οΈ', '90 π΄π²', '91 π΅πͺ', '92 π©πͺ'];

export default () => {
  const [sms, setSms] = useState('');
  const [visible, setVisible] = useState(false);
  const [field, setVield] = useState(columns[0]);

  return (
    <>
      <Field
        value={sms}
        center
        label="η­δΏ‘ιͺθ―η "
        placeholder="ζζΊε·"
        onChange={setSms}
        prefix={
          <Flex align='center' onClick={() => setVisible(true)}>
            +{field} <ArrowDown style={{ paddingLeft: 8 }} />
          </Flex>
        }
        suffix={
          <Button size="small" type="primary">
            ει
          </Button>
        }
      />
      <Popup round visible={visible} position="bottom" onClose={() => setVisible(false)}>
        <Picker
          title="ζ ι’"
          onConfirm={(value: string) => {
            setVield(value);
            setVisible(false);
          }}
          columns={columns}
        />
      </Popup>
    </>
  );
};
