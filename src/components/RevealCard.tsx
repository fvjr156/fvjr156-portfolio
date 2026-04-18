import React, { useEffect, useRef, useState } from "react";

interface RevealCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // in seconds
    duration?: number; // animation duration
    initialOffset?: number; // example: if fromDirection === 'up' then initial top-[<number>px]
    fromDirection?: 'up' | 'down' | 'left' | 'right';
}

