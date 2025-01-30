import React from 'react';
import { TextBlockProps } from '@/types/FormTypes';


export const TextBlock: React.FC<TextBlockProps> = ({ text, boldText}) => (
    <div>
        {text}{" "}
        {boldText && <strong>{boldText}</strong>}
    </div>
);