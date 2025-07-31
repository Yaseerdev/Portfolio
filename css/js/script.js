

            document.addEventListener('DOMContentLoaded', function() {
            // Theme Toggle
            const themeToggle = document.querySelector('.theme-toggle');
            const toggleBall = document.querySelector('.toggle-ball');
            const html = document.documentElement;

            // Check for saved theme preference or use preferred color scheme
            const savedTheme = localStorage.getItem('theme') || 
                            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            html.setAttribute('data-theme', savedTheme);

            if (savedTheme === 'dark') {
                toggleBall.style.transform = 'translateX(30px)';
            }

            themeToggle.addEventListener('click', () => {
                const currentTheme = html.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                

                console.log(`Switching to ${newTheme}`)

             


                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                if (newTheme === 'dark') {
                    toggleBall.style.transform = 'translateX(30px)';
                } else {
                    toggleBall.style.transform = 'translateX(0)';
                }
            });

            // Custom Cursor
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                
                setTimeout(() => {
                    cursorFollower.style.left = e.clientX + 'px';
                    cursorFollower.style.top = e.clientY + 'px';
                }, 100);
            });

            // Cursor effects on interactive elements
            const interactiveElements = document.querySelectorAll('a, button, .work-item, .social-link, .filter-btn');

            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(0.5)';
                    cursorFollower.style.transform = 'scale(3)';
                    cursorFollower.style.backgroundColor = 'rgba(108, 99, 255, 0.3)';
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                    cursorFollower.style.transform = 'scale(1)';
                    cursorFollower.style.backgroundColor = 'var(--primary-color)';
                });
            });

            // Mobile Navigation
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });

            // Typing Animation
            const typed = new Typed('.typing', {
                strings: ['Developer', 'Designer', 'Freelancer', 'Creator'],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });

            // Animate skill bars on scroll
            const skillBars = document.querySelectorAll('.skill-progress');

            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    if (isElementInViewport(bar)) {
                        bar.style.width = width + '%';
                    }
                });
            }

            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.bottom >= 0
                );
            }

            window.addEventListener('scroll', animateSkillBars);
            animateSkillBars(); // Run once on load

            // Work Filter
            const filterButtons = document.querySelectorAll('.filter-btn');
            const workItems = document.querySelectorAll('.work-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filterValue = button.getAttribute('data-filter');
                    
                    workItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Sticky header on scroll
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                header.classList.toggle('sticky', window.scrollY > 0);
            });

            // Set current year in footer
            document.getElementById('year').textContent = new Date().getFullYear();

            // Form submission
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Here you would typically send the form data to a server
                    // For demo purposes, we'll just show an alert
                    alert('Thank you for your message! I will get back to you soon.');
                    this.reset();
                });
            }

           // robot


           // Keep all previous JavaScript functionality but adjust:
            function createHeart() {
            // ... existing code ...

            // Smaller heart size range
            const size = 8 + Math.random() * 5; // Reduced from 15-25px
            const hue = 330 + Math.random() * 30;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;

            // Shorter flight distance
            const animation = heart.animate([
            { transform: 'translate(0, 0) scale(0.5)', opacity: 0 },
            { transform: 'translate(5px, -10px) scale(1)', opacity: 1 }, // Reduced movement
            { transform: `translate(${50 + Math.random() * 25}px, ${-100 - Math.random() * 50}px) scale(0.2)`, opacity: 0 } // Reduced distance
            ], {
            duration: 1500 + Math.random() * 500, // Faster animation
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            // ... rest of the function ...
            }

            // Adjust drag sensitivity for smaller robot
            document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            robot.style.left = `${e.clientX - offsetX}px`;
            robot.style.top = `${e.clientY - offsetY}px`;

            // Smaller movement range for hearts during drag
            if (Math.random() > 0.95) { // Less frequent hearts during drag
            createHeart();
            }
            });


            });