'use client';

import styles from './tooltip.module.css';
import React from 'react';

export default function Tooltip({
    children,
    text,
    ...otherProps
}: {
    children: React.ReactNode | React.ReactNode[],
    text: string,
}) {
    return (
      <span className={styles.tooltip} data-label={text} {...otherProps}>
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
              // @ts-ignore
              "aria-label": text,
              "data-element": "clone",
            })
        )}
      </span>
    );
}