
// src/components/TypewriterEffect.js
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ messages, typingSpeed, delay }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);

    useEffect(() => {
        const handleType = () => {
            const currentMessage = messages[currentMessageIndex];
            const isComplete = !isDeleting && displayedText === currentMessage;
            const isEmpty = isDeleting && displayedText === '';

            if (isComplete) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isEmpty) {
                setIsDeleting(false);
                setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            } else {
                setDisplayedText(
                    isDeleting
                        ? currentMessage.substring(0, displayedText.length - 1)
                        : currentMessage.substring(0, displayedText.length + 1)
                );
            }
        };

        const timer = setTimeout(handleType, isDeleting ? typingSpeed / 2 : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentMessageIndex, messages, typingSpeed, delay]);

    return <span>{displayedText}</span>;
};

const AnimationText = () => {
    const messages = [
        "Frontend(Reactjs) developer",
        "Web developer",
        "UI/UX, Antd, MUI"
    ];

    return (
        <TypewriterEffect messages={messages} typingSpeed={100} delay={2000} />
    );
};

export default AnimationText;
