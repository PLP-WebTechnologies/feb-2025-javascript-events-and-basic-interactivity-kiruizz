// 🧙‍♂️ JavaScript Magic - Event Handling & Interactive Elements
// Author: Your Friendly Coding Assistant
// Date: July 18, 2025

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 JavaScript playground loaded and ready!');
    
    // Initialize all interactive features
    initEventHandling();
    initInteractiveElements();
    initFormValidation();
});

// ========================================
// 🎈 EVENT HANDLING SECTION
// ========================================

function initEventHandling() {
    console.log('🎈 Initializing event handling...');
    
    // Button Click Events
    initButtonClicks();
    
    // Hover Effects
    initHoverEffects();
    
    // Keypress Detection
    initKeypressDetection();
    
    // Secret Actions (Double-click & Long Press)
    initSecretActions();
}

// Button Click Events
function initButtonClicks() {
    const magicBtn = document.getElementById('magic-btn');
    const colorBtn = document.getElementById('color-btn');
    const clickCounter = document.getElementById('click-counter');
    
    let clickCount = 0;
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    let currentColorIndex = 0;
    
    // Magic button click
    magicBtn.addEventListener('click', function() {
        clickCount++;
        clickCounter.textContent = `Clicks: ${clickCount}`;
        
        // Add bounce animation
        this.classList.add('bounce');
        setTimeout(() => this.classList.remove('bounce'), 600);
        
        // Change text based on clicks
        const texts = [
            'Click Me!', 'Nice!', 'Awesome!', 'Keep Going!', 'You\'re on Fire!', 
            'Incredible!', 'Unstoppable!', 'Legend!', 'Master Clicker!', 'Ultimate Power!'
        ];
        
        if (clickCount <= texts.length) {
            this.textContent = texts[clickCount - 1];
        } else {
            this.textContent = `${clickCount} Clicks! 🔥`;
        }
        
        // Special effects for milestones
        if (clickCount === 10) {
            showSpecialEffect('🎉 You reached 10 clicks! You\'re amazing!');
        } else if (clickCount === 50) {
            showSpecialEffect('🚀 50 clicks! You\'re unstoppable!');
        } else if (clickCount === 100) {
            showSpecialEffect('👑 100 clicks! You are the Click Master!');
        }
    });
    
    // Color changing button
    colorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        this.style.background = colors[currentColorIndex];
        this.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Update text to show current color
        this.textContent = `Color: ${colors[currentColorIndex]}`;
    });
}

// Hover Effects
function initHoverEffects() {
    const hoverBox = document.getElementById('hover-box');
    const hoverStatus = document.getElementById('hover-status');
    
    const hoverMessages = [
        'Wow! You\'re hovering! ✨',
        'This feels nice! 🥰',
        'Keep hovering! 🎭',
        'You\'re a hover master! 🎪',
        'Hover power activated! ⚡'
    ];
    
    let hoverCount = 0;
    
    hoverBox.addEventListener('mouseenter', function() {
        const message = hoverMessages[hoverCount % hoverMessages.length];
        hoverStatus.textContent = `Status: ${message}`;
        hoverCount++;
        
        // Add hover effect animation
        this.style.animation = 'pulse 0.5s ease-in-out';
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        hoverStatus.textContent = 'Status: Come back! I miss your hover...';
        this.style.animation = '';
    });
}

// Keypress Detection
function initKeypressDetection() {
    const keyInput = document.getElementById('key-input');
    const keyDisplay = document.getElementById('key-display');
    const secretMessage = document.getElementById('secret-message');
    
    let keySequence = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    keyInput.addEventListener('keydown', function(event) {
        const key = event.code;
        keyDisplay.textContent = `Last key pressed: ${event.key} (${key})`;
        
        // Add visual feedback
        this.style.transform = 'scale(1.02)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
        
        // Check for Konami code
        keySequence.push(key);
        if (keySequence.length > konamiCode.length) {
            keySequence.shift();
        }
        
        if (arraysEqual(keySequence, konamiCode)) {
            secretMessage.classList.remove('hidden');
            secretMessage.style.animation = 'bounce 1s ease';
            showSpecialEffect('🎮 KONAMI CODE ACTIVATED! You found the secret!');
            keySequence = []; // Reset
        }
    });
    
    // Real-time character count
    keyInput.addEventListener('input', function() {
        const length = this.value.length;
        if (length > 0) {
            keyDisplay.innerHTML += `<br><small>Character count: ${length}</small>`;
        }
    });
}

// Secret Actions (Double-click & Long Press)
function initSecretActions() {
    const secretBox = document.getElementById('secret-box');
    const secretStatus = document.getElementById('secret-status');
    
    let longPressTimer;
    let isLongPressed = false;
    
    // Double-click event
    secretBox.addEventListener('dblclick', function() {
        secretStatus.textContent = '🎉 Double-click detected! You found a secret!';
        this.classList.add('activated');
        showSpecialEffect('💫 Double-click magic activated!');
        
        setTimeout(() => {
            this.classList.remove('activated');
            secretStatus.textContent = 'Try again for more surprises!';
        }, 2000);
    });
    
    // Long press events
    secretBox.addEventListener('mousedown', function() {
        isLongPressed = false;
        longPressTimer = setTimeout(() => {
            isLongPressed = true;
            secretStatus.textContent = '🔥 Long press detected! Secret power unlocked!';
            this.classList.add('activated');
            showSpecialEffect('⚡ Long press power activated!');
        }, 2000);
    });
    
    secretBox.addEventListener('mouseup', function() {
        clearTimeout(longPressTimer);
        if (!isLongPressed) {
            secretStatus.textContent = 'Try holding longer for the secret!';
        }
    });
    
    secretBox.addEventListener('mouseleave', function() {
        clearTimeout(longPressTimer);
        this.classList.remove('activated');
    });
}

// ========================================
// 🎮 INTERACTIVE ELEMENTS SECTION
// ========================================

function initInteractiveElements() {
    console.log('🎮 Initializing interactive elements...');
    
    // Image Gallery/Slideshow
    initImageGallery();
    
    // Tab Navigation
    initTabNavigation();
    
    // Accordion
    initAccordion();
}

// Image Gallery/Slideshow
function initImageGallery() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentImage = document.getElementById('current-image');
    const imageCounter = document.getElementById('image-counter');
    
    const images = [
        { content: '🌅 Beautiful Sunrise', color: 'linear-gradient(45deg, #ff9a9e, #fecfef)' },
        { content: '🏔️ Majestic Mountains', color: 'linear-gradient(45deg, #a8edea, #fed6e3)' },
        { content: '🌊 Ocean Waves', color: 'linear-gradient(45deg, #74b9ff, #0984e3)' },
        { content: '🌸 Cherry Blossoms', color: 'linear-gradient(45deg, #ffecd2, #fcb69f)' },
        { content: '🌟 Starry Night', color: 'linear-gradient(45deg, #667eea, #764ba2)' }
    ];
    
    let currentIndex = 0;
    
    function updateGallery() {
        currentImage.classList.add('fade-out');
        
        setTimeout(() => {
            currentImage.textContent = images[currentIndex].content;
            currentImage.style.background = images[currentIndex].color;
            imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
            
            currentImage.classList.remove('fade-out');
            currentImage.classList.add('fade-in');
            
            setTimeout(() => {
                currentImage.classList.remove('fade-in');
            }, 300);
        }, 150);
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'scale(1)', 100);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'scale(1)', 100);
    });
    
    // Auto-play feature (optional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }, 5000); // Change image every 5 seconds
}

// Tab Navigation
function initTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => this.style.transform = 'scale(1)', 100);
        });
    });
}

// Accordion
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            const isActive = this.classList.contains('active');
            
            // Close all other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                this.classList.remove('active');
                content.classList.remove('active');
            } else {
                this.classList.add('active');
                content.classList.add('active');
            }
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => this.style.transform = 'scale(1)', 100);
        });
    });
}

// ========================================
// 📋 FORM VALIDATION SECTION
// ========================================

function initFormValidation() {
    console.log('📋 Initializing form validation...');
    
    const form = document.getElementById('demo-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    // Real-time validation
    username.addEventListener('input', () => validateUsername());
    email.addEventListener('input', () => validateEmail());
    password.addEventListener('input', () => validatePassword());
    confirmPassword.addEventListener('input', () => validateConfirmPassword());
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const isValid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();
        
        if (isValid) {
            showFormResult('🎉 Form submitted successfully! All validations passed!', 'success');
            showSpecialEffect('✅ Perfect form submission!');
            
            // Reset form after success
            setTimeout(() => {
                form.reset();
                clearAllValidationMessages();
            }, 3000);
        } else {
            showFormResult('❌ Please fix the errors above before submitting.', 'error');
            form.classList.add('shake');
            setTimeout(() => form.classList.remove('shake'), 500);
        }
    });
}

// Validation Functions
function validateUsername() {
    const username = document.getElementById('username');
    const error = document.getElementById('username-error');
    const success = document.getElementById('username-success');
    
    const value = username.value.trim();
    
    if (value.length === 0) {
        showValidationMessage(username, error, success, 'Username is required', false);
        return false;
    } else if (value.length < 3) {
        showValidationMessage(username, error, success, 'Username must be at least 3 characters', false);
        return false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        showValidationMessage(username, error, success, 'Username can only contain letters, numbers, and underscores', false);
        return false;
    } else {
        showValidationMessage(username, error, success, '✓ Username looks great!', true);
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const error = document.getElementById('email-error');
    const success = document.getElementById('email-success');
    
    const value = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (value.length === 0) {
        showValidationMessage(email, error, success, 'Email is required', false);
        return false;
    } else if (!emailRegex.test(value)) {
        showValidationMessage(email, error, success, 'Please enter a valid email address', false);
        return false;
    } else {
        showValidationMessage(email, error, success, '✓ Email format is correct!', true);
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const error = document.getElementById('password-error');
    const success = document.getElementById('password-success');
    const strengthIndicator = document.getElementById('password-strength');
    
    const value = password.value;
    
    if (value.length === 0) {
        showValidationMessage(password, error, success, 'Password is required', false);
        strengthIndicator.textContent = '';
        strengthIndicator.className = 'password-strength';
        return false;
    } else if (value.length < 8) {
        showValidationMessage(password, error, success, 'Password must be at least 8 characters', false);
        updatePasswordStrength(value, strengthIndicator);
        return false;
    } else {
        // Check password strength
        const hasUpper = /[A-Z]/.test(value);
        const hasLower = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        
        const strength = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
        
        if (strength >= 3) {
            showValidationMessage(password, error, success, '✓ Strong password!', true);
        } else {
            showValidationMessage(password, error, success, '✓ Password meets minimum requirements', true);
        }
        
        updatePasswordStrength(value, strengthIndicator);
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const error = document.getElementById('confirm-password-error');
    const success = document.getElementById('confirm-password-success');
    
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;
    
    if (confirmValue.length === 0) {
        showValidationMessage(confirmPassword, error, success, 'Please confirm your password', false);
        return false;
    } else if (passwordValue !== confirmValue) {
        showValidationMessage(confirmPassword, error, success, 'Passwords do not match', false);
        return false;
    } else {
        showValidationMessage(confirmPassword, error, success, '✓ Passwords match!', true);
        return true;
    }
}

// Helper Functions
function showValidationMessage(input, errorElement, successElement, message, isValid) {
    if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        errorElement.textContent = '';
        successElement.textContent = message;
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        errorElement.textContent = message;
        successElement.textContent = '';
    }
}

function updatePasswordStrength(password, strengthIndicator) {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strength = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    
    strengthIndicator.className = 'password-strength';
    
    if (password.length < 6) {
        strengthIndicator.textContent = 'Too short';
        strengthIndicator.classList.add('weak');
    } else if (strength < 2) {
        strengthIndicator.textContent = 'Weak';
        strengthIndicator.classList.add('weak');
    } else if (strength < 4) {
        strengthIndicator.textContent = 'Medium';
        strengthIndicator.classList.add('medium');
    } else {
        strengthIndicator.textContent = 'Strong';
        strengthIndicator.classList.add('strong');
    }
}

function showFormResult(message, type) {
    const formResult = document.getElementById('form-result');
    formResult.textContent = message;
    formResult.className = `form-result ${type}`;
}

function clearAllValidationMessages() {
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error-message');
    const successes = document.querySelectorAll('.success-message');
    
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
    
    errors.forEach(error => error.textContent = '');
    successes.forEach(success => success.textContent = '');
    
    document.getElementById('password-strength').textContent = '';
    document.getElementById('form-result').textContent = '';
}

// ========================================
// 🎨 UTILITY FUNCTIONS
// ========================================

function showSpecialEffect(message) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add slideIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Easter egg: Console art
console.log(`
🎮 Welcome to the JavaScript Playground! 🎮

    ╔══════════════════════════════════════╗
    ║     JavaScript Event Handling        ║
    ║          Assignment                   ║
    ║                                      ║
    ║  🎈 Event Handling                   ║
    ║  🎮 Interactive Elements             ║
    ║  📋 Form Validation                  ║
    ║                                      ║
    ║        Made with ❤️ and JS          ║
    ╚══════════════════════════════════════╝

Try the Konami code: ↑↑↓↓←→←→BA
Double-click and long-press for secrets!
Have fun exploring! 🚀
`);

// Performance monitoring
console.log('⚡ Performance: All scripts loaded in', performance.now().toFixed(2) + 'ms');
