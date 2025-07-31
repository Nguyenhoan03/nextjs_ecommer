import React from 'react';

interface TabsCustomProps {
  tabs: string[];
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  className?: string;
}

const TabsCustom = ({ tabs, value, onChange, className }: TabsCustomProps) => (
  <div className={`tabs-custom ${className || ''}`}>
    {tabs.map((label, idx) => (
      <button
        key={label}
        className={`tabs-custom__tab${value === idx ? ' tabs-custom__tab--active' : ''}`}
        onClick={e => onChange(e, idx)}
        type="button"
      >
        {label}
        {/* Dot cho Discount Item */}
        {className?.includes('discount-item__tabs') && idx === value && (
          <span className="discount-item__dot"></span>
        )}
      </button>
    ))}
  </div>
);

export default TabsCustom;