import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useBoolVariation, useLDClient } from '@launchdarkly/react-native-client-sdk';

export default function Welcome() {
  const flagValue = useBoolVariation('flag-test', false);
  const ldc = useLDClient();

  useEffect(() => {
    ldc
      .identify({ kind: 'user', key: 'example-user' })
      .catch((e: any) => console.error('error: ' + e));
  }, []);

  return (
    <View style={{ margin: 30 }}>
      <Text>flag-test: {flagValue.toString()}</Text>
    </View>
  );
}
