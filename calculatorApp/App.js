import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }

    let calculation;
    switch (operation) {
      case 'Add':
        calculation = num1 + num2;
        break;
      case 'Subtract':
        calculation = num1 - num2;
        break;
      case 'Multiply':
        calculation = num1 * num2;
        break;
      case 'Divide':
        if (num2 === 0) {
          alert('Cannot divide by zero');
          return;
        }
        calculation = num1 / num2;
        break;
      default:
        calculation = '';
    }
    setResult(calculation.toString());
  };

  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator App</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Number"
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Second Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Second Number"
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
        />
      </View>

      {/* Updated button layout */}
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.listButton} onPress={() => handleCalculate('Add')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listButton} onPress={() => handleCalculate('Subtract')}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listButton} onPress={() => handleCalculate('Multiply')}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listButton} onPress={() => handleCalculate('Divide')}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Result:</Text>
        <TextInput style={styles.resultBox} editable={false} value={result} />
      </View>

      {/* Reset button with blue text */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    width: '30%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
  },
  listContainer: {
    marginVertical: 20,
    width: '100%',
  },
  listButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  resultBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
  },
  resetButton: {
    
    padding: 10,
    borderRadius: 0,
    alignItems: 'center',
    width: '100%',
  },
  resetButtonText: {
    color: '#007bff', 
    fontSize: 16,
  },
});