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

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

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
    <View>
      <Text>Welcome Back!</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  error: { color: '#c00', marginBottom: 12 },
  link: { marginTop: 16, textAlign: 'center', color: '#06c' },
});
