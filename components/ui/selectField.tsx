import React, { useMemo, useState } from 'react';
import {
  ScrollView,
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

  const selectedLabel = useMemo(() => {
    return options.find((item) => item.value === value)?.label || placeholder;
  }, [options, value, placeholder]);

  return (
    <View style={styles.fieldBlock}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        activeOpacity={0.85}
        style={[styles.selectButton, open && styles.selectButtonOpen]}
        onPress={() => setOpen(!open)}
      >
        <Text style={[styles.selectText, !value && styles.placeholder]}>
          {selectedLabel}
        </Text>

        <Ionicons
          name={open ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={20}
          color={COLORS.muted}
        />
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <ScrollView
            style={styles.scrollArea}
            nestedScrollEnabled
            showsVerticalScrollIndicator={true}
          >
            {options.map((item) => {
              const isSelected = item.value === value;

              return (
                <TouchableOpacity
                  key={item.value}
                  style={[
                    styles.optionItem,
                    isSelected && styles.optionItemSelected,
                  ]}
                  onPress={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && styles.optionTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
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
  selectButtonOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: '#BFD6CF',
  },
  selectText: {
    fontSize: 16,
    color: COLORS.text,
    flex: 1,
  },
  placeholder: {
    color: COLORS.muted,
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#BFD6CF',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    overflow: 'hidden',
  },
  scrollArea: {
    maxHeight: 180,
  },
  optionItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  optionItemSelected: {
    backgroundColor: '#F2F8F6',
  },
  optionText: {
    fontSize: 16,
    color: COLORS.text,
  },
  optionTextSelected: {
    fontWeight: '700',
  },
});