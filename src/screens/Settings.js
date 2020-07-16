import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native';

import ActionBoxWrapper from '../components/ActionBoxWrapper';
import Button from '../components/Button';

import { increment, decrement, reset } from '../redux/slice';
import { createCounter, deleteCounter } from '../redux/slice';

const Settings = () => {
  const { selected } = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const styles = {
    top: { flex: 1, justifyContent: 'space-between' },
    active: { opacity: selected === null ? 0.3 : 1 },
  };

  return (
    <SafeAreaView style={styles.top}>
      <ActionBoxWrapper label="Counters">
        <Button type="ADD" onPress={() => dispatch(createCounter())} />
        <Button type="REMOVE" onPress={() => dispatch(deleteCounter())} />
      </ActionBoxWrapper>

      <ActionBoxWrapper
        style={styles.active}
        label={selected ? 'Selected Counter' : 'No Counter is Selected'}>
        <Button type="INCREMENT" onPress={() => dispatch(increment())} />
        <Button type="DECREMENT" onPress={() => dispatch(decrement())} />
        <Button type="RESET" onPress={() => dispatch(reset())} />
      </ActionBoxWrapper>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
