// gsap.registerPlugin(ScrollTrigger);
// let tl = gsap.timeline();
// gsap.from('.heading h3', {
//     x: -50,
//     opacity: 0,
//     duration: 1.5,
//     stagger: 1,
// })
// gsap.from('.about p', {
//     y: -30,
//     duration: 2,
//     stagger: 1,
//     opacity: 0,
//     scrub: 0.1,
//     scrollTrigger: {
//         trigger: '.about',     // triggers animation when `.about` comes into view
//         start: 'top 50%',     // when top of `.about` hits 80% of viewport height
//         toggleActions: 'play none none none', // play only once
//     }
// });
// gsap.from('.skils img', {
//     y: 20,
//     duration: 4,
//     opacity: 0,
//     stagger: 0.5,
//     scrub:0.1,
//     ease: 'power2.out',
//     scrollTrigger: {
//         trigger: '.page3',
//         start: 'top 80%',              // When top of .about hits 80% of viewport
//         // end: 'top 20%',             // When top of .about reaches 20% of viewport
//         toggleActions: 'play reverse play reverse',
        
//     }
// })

// // tl.from('.heading h3 span',{
// //     opacity:0,
// //     stagger:1,

// // })
// // tl.from('.pic',{
// //     y:100,
// //     opacity:0,
// //     duration:2,
// //     boxShadow: "0 20px 20px rgba(255, 255, 255, 1)",
// //     ease: "power2.out"
// // })
// gsap.to('.marque h1', {
//     xPercent: -100,
//     scrollTrigger: {
//         trigger: '.page2',
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true
//     }
// });
// //Trial
// // window.addEventListener('wheel', function (dets) {
// //     if (dets.deltaY > 0) {
// //         gsap.to('.marque h1', {
// //             transform: 'translateX(-150%)',
// //             ease: 'none',
// //             duration: 1,
// //             x: '20%',
// //             ease: "none"
// //         })

// //     }
// //     else {
// //         gsap.to('.marque h1', {
// //             transform: 'translateX(0%)',
// //             duration: 1,
// //             ease: 'none',
// //             x: '20%',
// //             ease: "none"
// //         })
// //     }
// // });

// // })

// // gsap.registerPlugin(ScrollTrigger);



// // const locoScroll = new LocomotiveScroll({
// //   el: document.querySelector("#main"),
// //   smooth: true
// // });
// function downloadResume() {
//     // URL of the resume file (PDF/Word/etc.)
//     const fileUrl = '09_SAURABH_Resume.pdf';  
//     const fileName = '09_SAURABH_Resume.pdf';

//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.download = fileName; // Set the file name for download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }


gsap.registerPlugin(ScrollTrigger);

// Heading animation
gsap.from('.heading h3', {
    x: -50,
    opacity: 0,
    duration: 1.5,
    stagger: 1,
});

// About section scroll animation
gsap.from('.about p', {
    y: -30,
    duration: 2,
    stagger: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.about',
        start: 'top 50%',
        toggleActions: 'play none none none',
    }
});

// Skills section scroll animation
gsap.from('.skils img', {
    y: 20,
    opacity: 0,
    stagger: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.page3',
        start: 'top 80%',
        scrub: 1,
        toggleActions: 'play none none none',
    }
});

// Marquee scroll-based animation
gsap.to('.marque h1', {
    xPercent: -150,
    ease: 'none',
    scrollTrigger: {
        trigger: '.page2',
        start: 'top 90%',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true
    }
});

// Resume download
function downloadResume() {
    const fileUrl = '09_SAURABH_Resume.pdf';  
    const fileName = '_SAURABH_Resume.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

