import { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../auth/AuthContext';
import { useTheme } from '../theme/useTheme';
import { radius, spacing } from '../constants/theme';

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { theme } = useTheme();

  const styles = generateStyles(theme);

  const onSubmit = async () => {
    setError(null);
    setSubmitting(true);
    try {
      await signIn(email.trim(), password);
      // The (app) guard redirects automatically once token is set
    } catch (e: any) {
      setError(
        e.response?.status === 401
          ? 'Invalid email or password.'
          : 'Could not reach the server.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      {submitting ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Log in"
          onPress={onSubmit}
          disabled={!email || !password}
        />
      )}

      <Link href="/(auth)/login" style={styles.link}>
        No account? Sign up
      </Link>
    </View>
  );
}

function generateStyles(theme: ReturnType<typeof useTheme>['theme']) {
  return StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 24 },
    title: { fontSize: 28, fontWeight: '700', marginBottom: 24 },
    input: {
      borderWidth: 1,
      borderColor: theme.critical,
      borderRadius: radius.sm,
      padding: spacing.md,
      marginBottom: spacing.md,
    },
    error: { color: theme.critical, marginBottom: spacing.md },
    link: { marginTop: spacing.md, textAlign: 'center', color: '#06c' },
  });
}
