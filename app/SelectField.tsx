import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/components/clinic-ui';

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function SelectField({
  label,
  value,
  placeholder = 'Selecione',
  options,
  onChange,
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);

  const selectedLabel =
    options.find((item) => item.value === value)?.label || placeholder;

  return (
    <View style={styles.fieldBlock}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={styles.selectButton}
        activeOpacity={0.8}
        onPress={() => setOpen(true)}
      >
        <Text style={[styles.selectText, !value && styles.placeholder]}>
          {selectedLabel}
        </Text>

        <Ionicons name={open ? 'chevron-up-outline' : 'chevron-down-outline'} size={20} color={COLORS.muted} />
      </TouchableOpacity>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <Pressable style={styles.modalCard}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldBlock: {
    marginBottom: 14,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  selectButton: {
    minHeight: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D7E5E1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: {
    fontSize: 16,
    color: COLORS.text,
    flex: 1,
  },
  placeholder: {
    color: COLORS.muted,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.18)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 8,
    maxHeight: 320,
    borderWidth: 1,
    borderColor: '#D7E5E1',
  },
  optionItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.text,
  },
});