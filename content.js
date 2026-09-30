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
    description: "The Quantum Society is a community for anyone curious about quantum physics and quantum computing. Talks, workshops, socials and more."
  },

  /* ---------- Top banner ---------- */
  hero: {
    eyebrow: "Physics · Computing · Curiosity",
    title: "Where curiosity exists in superposition.",
    text: "We're a community of students, tinkerers and big-question askers exploring quantum physics and quantum computing — through talks, hands-on workshops, hackathons and long conversations about what reality is actually made of.",
    buttons: [
      { text: "Join the society", link: "#join", style: "primary" },
      { text: "Wehn & where", link: "#info", style: "ghost" }
    ],
    stats: [
      { value: "120+", label: "Members" },
      { value: "30+",  label: "Events a year" },
      { value: "8",    label: "Hands-on workshops" },
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
      { icon: "chip",  title: "Build",   text: "Hands-on workshops writing real quantum circuits with open-source tools, and running them on actual quantum hardware." },
      { icon: "wave",  title: "Discuss", text: "Reading groups and debates on interpretations, the future of quantum tech, and its impact on the world." },
      { icon: "users", title: "Connect", text: "Socials, industry speakers and research visits that connect members with people working in the field." }
    ]
  },

  /* ---------- Info ---------- */
  info: {
    navLabel: "Info",
    title: "When & where",
    intro: "Everyone is welcome to every session. Just urn up!",
    emptyMessage: "New events are being planned. Check back soon or follow us on social media!",
    items: [
       { icon: "clock", label: "When", value: "Every Monday", detail: "1:00 - 1:30 pm" },
       { icon: "pin", label: "Where", value: "One of the english rooms, probably", detail: "Exact room will be sent on eQE" },
       { icon: "users", label: "Who", value: "Everyone welcome", detail: "Interest is all that is needed" },
       ]
      },
  
  /* ---------- Team / committee ---------- */
  team: {
    navLabel: "Team",
    title: "Meet the committee",
    intro: "The people who keep the society running. Say hello at any event!",
    members: [
      { name: "Alex Rivera",  role: "President",        bio: "Physics student who can't stop talking about entanglement.", photo: "", link: "" },
      { name: "Priya Shah",   role: "Vice President",   bio: "Organises our workshops and speaker line-up.",              photo: "", link: "" },
      { name: "Sam Okafor",   role: "Treasurer",        bio: "Keeps the budget balanced and the pizza flowing.",          photo: "", link: "" },
      { name: "Mei Tanaka",   role: "Events Officer",   bio: "Plans socials, trips and the legendary end-of-term quiz.",  photo: "", link: "" },
      { name: "Jordan Lee",   role: "Tech Lead",        bio: "Runs the coding workshops and looks after this website.",   photo: "", link: "" },
      { name: "Chloe Martin", role: "Outreach Officer", bio: "Connects us with researchers, companies and other clubs.",   photo: "", link: "" }
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
      { q: "Do I need to study physics to join?", a: "Not at all. Our members study everything from computer science to music. Events are designed to be accessible to complete beginners." },
      { q: "How much does membership cost?",        a: "Membership is free (or a small yearly fee — update this answer!). Most events are free for members." },
      { q: "Do I need to be good at maths?",        a: "No. We explain ideas intuitively first, and the more mathematical sessions are always clearly labelled." },
      { q: "Can I help run the society?",           a: "Yes please! Come to any event and talk to the committee, or email us. We hold elections at the end of each year." }
    ]
  },

  /* ---------- Join / contact ---------- */
  join: {
    navLabel: "Join",
    title: "Ready to collapse the wavefunction?",
    text: "Sign up to become a member, get event updates and join the conversation. It takes less than a minute.",
    button: { text: "Become a member", link: "https://forms.gle/" },
    email: "hello@quantumsociety.org"
  },

  /* ---------- Social links (delete any you don't use) ---------- */
  socials: [
    { name: "Instagram", link: "https://instagram.com/" },
    { name: "Discord",   link: "https://discord.com/" },
    { name: "LinkedIn",  link: "https://linkedin.com/" },
    { name: "GitHub",    link: "https://github.com/" }
  ],

  /* ---------- Footer ({year} is replaced automatically) ---------- */
  footer: {
    text: "© {year} Quantum Society. Made with curiosity and a little uncertainty."
  }
};
