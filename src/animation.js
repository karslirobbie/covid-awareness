
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const animation = () => {

  /* hero section */
  (() => {
    gsap.from(".hero-tag", {
      scrollTrigger: {
        trigger: "#hero",
        end: "40% top",
        toggleActions: "restart reverse restart reverse",
      },
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: .4,
    })
  })(),

    /* body section */
    (() => {
      gsap.from(".body-tag", {
        scrollTrigger: {
          trigger: ".body-tag",
          toggleActions: "restart reverse restart reverse",
        },
        x: -100,
        opacity: 0,
        duration: 2,
        stagger: .4
      })

      gsap.from(".body-img", {
        scrollTrigger: {
          trigger: ".body-img",
          toggleActions: "restart pause resume restart",
        },
        x: 100,
        opacity: 0,
        duration: 2
      })
    })(),

    /* apart section */
    (() => {
      gsap.from("#apart", {
        scrollTrigger: {
          trigger: "#apart",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          scrub: 2
        }
      })

      gsap.from(".apart-tag", {
        scrollTrigger: {
          trigger: ".apart-tag",
          toggleActions: "restart reverse restart reverse",
        },
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: .4,
      })

      gsap.from(".apart-footer", {
        scrollTrigger: {
          trigger: ".apart-footer",
          toggleActions: "play restart restart restart",
        },
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: .4,
      })
    })(),

    /* last section */
    (() => {
      gsap.from("#last", {
        scrollTrigger: {
          trigger: "#last",
          pin: true,
          end: "-=100",
          scrub: 2,
          anticipatePin: 1
        }
      })

      gsap.from(".last-tag", {
        scrollTrigger: {
          trigger: "#last",
          start: "top 40%",
          toggleActions: "restart reverse restart reverse",
        },
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: .4,
      })

      /* graph section */
      gsap.from("#graph", {
        scrollTrigger: {
          trigger: "#graph",
          toggleActions: "restart reverse restart reverse",
        },
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: .4,
      })
    })(),

    /* map section */
    (() => {
      var mapTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#map",
          toggleActions: "restart pause resume restart",
        }
      })

      mapTl.from(".map-body", {
        y: 200,
        duration: 1
      })
        .from(".map-tag", {
          opacity: 0,
          y: 10,
          duration: 1,
          stagger: .2
        })


      gsap.from(".map-footer", {
        scrollTrigger: {
          trigger: "#map",
          start: "90% bottom",
          toggleActions: "restart restart restart restart",
        },
        y: 10,
        opacity: 0,
        duration: 2,
        stagger: .2
      })
    })(),

    /* black and white sections */
    (() => {
      gsap.from(".phil-tag", {
        scrollTrigger: {
          trigger: ".phil-tag",
          toggleActions: "restart restart restart restart",
        },
        x: 100,
        opacity: 0,
        duration: 2,
        stagger: .5
      })

      gsap.from(".china-tag", {
        scrollTrigger: {
          trigger: ".china-tag",
          start: "bottom bottom",
          toggleActions: "restart restart restart restart",
        },
        x: -100,
        opacity: 0,
        duration: 2,
        stagger: .3
      })

      gsap.from(".us-tag", {
        scrollTrigger: {
          trigger: ".us-tag",
          toggleActions: "restart restart restart restart",
        },
        x: 100,
        opacity: 0,
        duration: 2,
        stagger: .5
      })

      gsap.from(".nz-tag", {
        scrollTrigger: {
          trigger: ".nz-tag",
          toggleActions: "restart restart restart restart",
        },
        x: -100,
        opacity: 0,
        duration: 2,
        stagger: .3
      })
    })()

}
export default animation