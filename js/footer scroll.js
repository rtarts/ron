window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer');
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const footerTop = maxScroll - footer.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= footerTop && scrollY <= maxScroll) {
        // Calculate progress: 0 (just entered) to 1 (fully scrolled over the footer)
        const progress = (scrollY - footerTop) / footerHeight;

        // Interpolate values based on scroll progress
        const blurValue = 5 - progress * 5; // From 10px to 0px
        const borderRadiusValue = 50 - progress * 50; // From 50% to 0%
        const opacityValue = 0.5 + progress * 0.5; // From 0.5 to 1

        // Apply styles
        footer.style.filter = `blur(${blurValue}px)`;
        footer.style.borderRadius = `${borderRadiusValue}% ${borderRadiusValue}% 0 0`;
        footer.querySelector('p').style.opacity = opacityValue;
    } else if (scrollY < footerTop) {
        // Before the footer is in view (reset to initial state)
        footer.style.filter = 'blur(5px)';
        footer.style.borderRadius = '50% 50% 0 0';
        footer.querySelector('p').style.opacity = '0.5';
    } else {
        // After fully scrolling over the footer (final state)
        footer.style.filter = 'blur(0px)';
        footer.style.borderRadius = '0%';
        footer.querySelector('p').style.opacity = '1';
    }
});
