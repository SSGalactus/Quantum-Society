/* ==========================================================================
   QUANTUM SOCIETY — WEBSITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change what the website says.

   Tips:
   • Keep the quotation marks "..." around text, and the commas between items.
   • To add an event / team member / FAQ, copy an existing { ... } block,
     paste it after a comma, and change the text.
   • To hide a whole section (e.g. "resources"), delete it or set it to null.
     Its menu link disappears automatically.
   • Event dates use the format "YYYY-MM-DD". Past events move to the
     "Past events" list by themselves — no need to delete them.
   • Photos: upload images to your repo (e.g. an "images" folder) and put
     the path in, like  photo: "images/alex.jpg". Leave "" to show initials.
   ========================================================================== */

window.SITE = {

  /* ---------- Colours (any CSS colour, e.g. "#7dd3fc") ---------- */
  theme: {
    accent: "#7dd3fc",   // main highlight colour (cyan)
    accent2: "#a78bfa"   // second highlight colour (violet)
  },

  /* ---------- Name & browser-tab info ---------- */
  brand: {
    name: "Quantum Society"
  },
  seo: {
    title: "Quantum Society — Physics, Computing & Curiosity",
    description: "Quantum Society is a community for anyone curious about quantum physics and quantum computing. Talks, socials and more that delve deep into the modern breakthroughs in physics and maths."
  },

  /* ---------- Top banner ---------- */
  hero: {
    eyebrow: "Physics · Computing · Curiosity",
    title: "Where curiosity exists in superposition.",
    text: "We're a community of students, tinkerers and big-question askers exploring quantum physics and quantum computing — through talks, hands-on workshops, and long conversations about what reality is actually made of.",
    buttons: [
      { text: "Join the society", link: "#join", style: "primary" },
      { text: "Details", link: "#info", style: "ghost" }
    ],
    stats: [
      { value: "30+",  label: "Sessions a year" },
      { value: "4",    label: "Hands-on workshops" },
      { value: "∞",    label: "Open questions" }
    ]
  },

  /* ---------- About ---------- */
  about: {
    navLabel: "About",
    title: "No PhD required. Just curiosity.",
    intro: "Quantum mechanics is the most successful theory in science — and the strangest. We started the Quantum Society so anyone, from any background, could explore it together. Whether you're a physicist, a programmer, a philosopher or just fascinated, there's a seat for you.",
    pillars: [
      { icon: "atom",  title: "Learn",   text: "Beginner-friendly talks that build from qubits and superposition to entanglement and quantum algorithms." },
      { icon: "wave",  title: "Discuss", text: "Reading groups and debates on interpretations, the future of quantum tech, and its impact on the world." },
      { icon: "users", title: "Connect", text: "Socials, industry speakers and research that connect members with people working in the field." }
    ]
  },

  /* ---------- Info ---------- */
  info: {
    navLabel: "Info",
    title: "When & where",
    intro: "Everyone is welcome to every session. Just turn up!",
    emptyMessage: "New events are being planned. Check back soon or follow us on social media!",
    items: [
       { icon: "clock", label: "When", value: "Every Monday", detail: "1:00 - 1:30 pm" },
       { icon: "pin", label: "Where", value: "One of the maths rooms, probably", detail: "Exact room will be sent on eQE" },
       { icon: "users", label: "Who", value: "Everyone welcome", detail: "Interest is all that is needed" },
       ]
      },
  
  /* ---------- Team / committee ---------- */
  team: {
    navLabel: "Team",
    title: "Meet the committee",
    intro: "The people who keep the society running. Say hello at any session!",
    members: [
      { name: "Shravanth Sadheesh",  role: "President",        bio: "Organiser and leader of Quantum Society.", photo: "", link: "" },
      { name: "Pranav Nayak",   role: "Helper",   bio: "Helps run the club, from logistics to practical elements.",              photo: "", link: "" },
      { name: "Tivyan Gajendra",   role: "Visionary",        bio: "Creative inspiraion that has led to Quantum Society being what it is today.",          photo: "", link: "" },
    ]
  },

  /* ---------- Learning resources ---------- */
  resources: {
    navLabel: "Resources",
    title: "Start exploring",
    intro: "A few of our favourite free places to learn more.",
    items: [
      { title: "IBM Quantum Learning",  description: "Free courses and the chance to run circuits on real quantum computers.", link: "https://learning.quantum.ibm.com/" },
      { title: "Qiskit",                description: "Open-source Python toolkit for building quantum programs.",            link: "https://www.qiskit.org/" },
      { title: "Quantum Country",       description: "An interactive essay-style introduction to quantum computing.",      link: "https://quantum.country/" },
      { title: "MIT OpenCourseWare",    description: "Full university lecture courses on quantum physics, free online.",   link: "https://ocw.mit.edu/" }
    ]
  },

  /* ---------- FAQ ---------- */
  faq: {
    navLabel: "FAQ",
    title: "Questions, observed",
    items: [
      { q: "Do I need to study physics or maths to join?", a: "Not at all. The club is designed to be accessible to complete beginners as well as those already invested in modern technology." },
      { q: "Do I need to be good at maths?",        a: "No. All ideas are open to discussion, whether that includes teh technology side or thee philosophical implications." },
      { q: "Can I help run the society?",           a: "Yes please! Come to any event and talk to us, or email us. We hold elections at the end of each year." }
    ]
  },

  /* ---------- Join / contact ---------- */
  join: {
    navLabel: "Join",
    title: "Ready to collapse the wavefunction?",
    text: "Sign up to become a member, attend sessions and have fun learning about new breakthroughs. It takes less than a minute.",
    button: null,
    email: "21SSadheeshS@qerdp.co.uk"
  },

  /* ---------- Social links (delete any you don't use) ---------- */

  /* ---------- Footer ({year} is replaced automatically) ---------- */
  footer: {
    text: "© {year} Quantum Society. Made with curiosity and a little uncertainty."
  }
};
