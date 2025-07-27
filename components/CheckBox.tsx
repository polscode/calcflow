import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const imageSource = checked
    ? require('../assets/images/check.png')
    : require('../assets/images/un-check.png');

  return (
    <TouchableOpacity
      onPress={() => setChecked(prev => !prev)}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <Image
        source={imageSource}
        style={{ width: 30, height: 30, tintColor: '#fff' }}
      />
      <Text style={{ marginLeft: 10 }}>
        {checked ? 'Marcado' : 'No marcado'}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
