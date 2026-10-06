import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تطبيقي الأول بـ React Native 📱</Text>
      
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.btnPlus]} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnMinus]} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 30 },
  counterBox: { backgroundColor: '#1e1e1e', paddingHorizontal: 60, paddingVertical: 30, borderRadius: 20, borderWidth: 2, borderColor: '#00d8ff', marginBottom: 40 },
  counterText: { fontSize: 60, color: '#00d8ff', fontWeight: 'bold' },
  buttonContainer: { flexDirection: 'row', gap: 20 },
  button: { width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center' },
  btnPlus: { backgroundColor: '#4CAF50' },
  btnMinus: { backgroundColor: '#F44336' },
  btnText: { fontSize: 30, color: '#fff', fontWeight: 'bold' }
});
