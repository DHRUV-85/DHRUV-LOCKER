import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  GitHub,
  LinkedIn,
  Mail,
  Download,
  ArrowRight,
  Code,
  Palette,
  Zap,
} from "../icons";
import TypeIt from "typeit-react";
import { useTheme } from "../contexts/ThemeContext";
import api from "../services/api";

const skills = [
  {
    name: "JavaScript",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-gradient-to-br from-yellow-400/10 to-orange-400/10 dark:from-yellow-400/20 dark:to-orange-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-yellow-600 dark:fill-yellow-400"
      >
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: "React",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-400/20 dark:to-blue-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-cyan-600 dark:fill-cyan-400"
      >
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "text-green-700 dark:text-green-400",
    bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-400/20 dark:to-emerald-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-green-700 dark:fill-green-400"
      >
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "text-blue-700 dark:text-blue-400",
    bg: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/20 dark:to-indigo-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-blue-700 dark:fill-blue-400"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "text-slate-800 dark:text-slate-300",
    bg: "bg-gradient-to-br from-slate-400/10 to-gray-400/10 dark:from-slate-400/20 dark:to-gray-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-slate-800 dark:fill-slate-300"
      >
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6017.4224 2.5008.5197.323.0441.8684.0369 1.1945-.0175.9827-.1641 1.9652-.4699 2.8223-.8789.47-.2238.871-.4893 1.378-.9123.0148-.0123.0216-.0066.0117.0095-.0398.0433-.381.4218-.876.9749-4.2249 4.7212-9.6753 7.5462-16.1244 8.3648l-.2267.0282-.0307-.0134c.0307-.0133.0341-.0167.0341-.0167C.5536 16.8765.0336 13.2794-.0002 9.7621-.0341 6.2446.6026 3.0422 2.3156 1.1044c.1671-.1889.3342-.3553.3342-.366.0-.0106.0175-.0212.0199-.0212-.0024.0014.0107-.0037.0163-.0036C4.7749.1568 7.8458.1556 12.0998.1556c4.6314 0 8.4722.0014 8.5226.0037l.0493.0023-.0001.0135c-.0001.0134-.0025.0264-.0053.0289-.0143.013-.0175.0212-.0175.0368-.0001.0218-.0142.0291-.0142.0291-.0024-.0137.0006-.0135.0024-.0136.0024.0001.0039.0001.0053-.0001.0014-.0001.0039-.0001.0053-.0001l.0226-.0035-.0026.0035c-.0026.0034-.0044.0067-.0044.0067-.0049.008-.008.0134-.008.0196 0 .0133.0027.0265.0046.0398.0023.016.0027.0265.0027.0398-.0001.0218-.0142.0291-.0142.0291 0 0 .0024.0014.0026.0037.0002.0023.0023.0063.0023.0063s.0011.0096.0011.0134c0 .0074-.0014.0148-.003.0222-.0016.0074-.0037.0148-.0037.0222 0 .0074.0014.0148.003.0222.0013.0058.0027.0108.0039.0162.0027.0121.0052.0242.0052.0363 0 .0121-.0025.0242-.0052.0363-.0012.0054-.0026.0104-.0039.0162-.0016.0074-.003.0148-.003.0222 0 .0074.0021.0148.0037.0222.0016.0074.003.0148.003.0222 0 .0038-.0011.0076-.0011.0134 0 .0059.0011.0097.0011.0134 0 .0074-.0014.0148-.0013.0222.0001.0071.0021.0141.0036.0211.0023.0105.0046.021.0046.0316 0 .0106-.0023.0211-.0046.0316-.0015.007-.0035.014-.0036.0211-.0001.0074.0013.0148.0013.0222 0 .0037-.0011.0075-.0011.0134 0 .0058.0011.0096.0011.0134 0 .0074-.0014.0148-.003.0222-.0016.0074-.003.0148-.003.0222 0 .0074.0021.0148.0037.0222.0016.0074.003.0148.003.0222 0 .0074-.0014.0148-.003.0222-.0013.0058-.0027.0108-.0039.0162-.0027.0121-.0052.0242-.0052.0363 0 .0121.0025.0242.0052.0363.0012.0054.0026.0104.0039.0162.0016.0074.003.0148.003.0222 0 .0074-.0021.0148-.0037.0222-.0016.0074-.003.0148-.003.0222 0 .0038.0011.0076.0011.0134 0 .0058-.0011.0096-.0011.0134 0 .0218.0142.0291.0142.0291z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-gradient-to-br from-teal-400/10 to-cyan-400/10 dark:from-teal-400/20 dark:to-cyan-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-teal-600 dark:fill-teal-400"
      >
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-gradient-to-br from-emerald-400/10 to-green-400/10 dark:from-emerald-400/20 dark:to-green-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-emerald-700 dark:fill-emerald-400"
      >
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "text-orange-700 dark:text-orange-400",
    bg: "bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-orange-700 dark:fill-orange-400"
      >
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
];
const achievements = [
  { number: "50+", label: "Projects Completed", icon: Code },
  { number: "3+", label: "Years Experience", icon: Zap },
  { number: "15+", label: "Happy Clients", icon: Palette },
  { number: "98%", label: "Client Satisfaction", icon: ArrowRight },
];

export default function Home() {
  const { darkMode } = useTheme();
  const parallaxRef = useRef(null);
  const projectsSectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animationsInitialized, setAnimationsInitialized] = useState(false)
  const [animatedProjects, setAnimatedProjects] = useState(false) // Track if projects have been animated

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Handle contact form input changes
  const handleContactInputChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate form
      if (
        !contactForm.name.trim() ||
        !contactForm.email.trim() ||
        !contactForm.subject.trim() ||
        !contactForm.message.trim()
      ) {
        throw new Error("Please fill in all fields")
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(contactForm.email)) {
        throw new Error("Please enter a valid email address")
      }

      // Submit to your existing message API
      const response = await api.post("/messages", {
        name: contactForm.name.trim(),
        email: contactForm.email.trim(),
        subject: contactForm.subject.trim(),
        message: contactForm.message.trim(),
      })

      if (response.data.success) {
        setSubmitStatus("success")
        // Reset form
        setContactForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error(response.data.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }
   // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await api.get("/projects");
        const data = response.data.data;
        console.log("All projects:", data);
        console.log(
          "Featured projects:",
          data.filter((p) => p.featured)
        );
        console.log("Non-featured projects:", data.filter(p => !p.featured));
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Enhanced mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;

      const elements =
        parallaxRef.current.querySelectorAll(".parallax-element");
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      elements.forEach((element) => {
        const speed = Number.parseFloat(
          element.getAttribute("data-speed") || "0.05"
        );
        const x = deltaX * speed * 50;
        const y = deltaY * speed * 50;
        element.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${
          deltaY * speed * 5
        }deg) rotateY(${deltaX * speed * 5}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Enhanced scroll animations with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (entry.target.classList.contains("skill-bar")) {
              const bar = entry.target.querySelector(".skill-progress");
              const level = entry.target.getAttribute("data-level");
              if (bar) {
                setTimeout(() => {
                  bar.style.width = `${level}%`;
                }, 300);
              }
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const elements = document.querySelectorAll(
      ".fade-in, .slide-up, .slide-in-left, .slide-in-right, .scale-in, .skill-bar"
    );
    elements.forEach((el) => observer.observe(el));
    // Observe the projects section specifically
    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current)
    }

    return () => observer.disconnect();
  }, []);
  
   // Force animation of project cards when they're loaded
  useEffect(() => {
    if (!loading && projects.length > 0) {
      // Force animation of project cards after a short delay
      setTimeout(() => {
        const projectCards = document.querySelectorAll(".project-card")
        projectCards.forEach((card) => {
          card.classList.add("animate")
        })
        setAnimatedProjects(true)
      }, 500)
    }
  }, [loading, projects])

  // Project carousel auto-rotation
  useEffect(() => {
    if (!projects.length) return;

    const featuredProjects = projects.filter((p) => p.featured);
    if (featuredProjects.length === 0) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects]);

  // Get unique categories from project tags
  const getUniqueCategories = () => {
    const allTags = projects.flatMap((project) => project.tags || []);
    const uniqueTags = [...new Set(allTags)];
    return ["All", ...uniqueTags];
  };

  const categories = getUniqueCategories();

  // Filter projects by category (using tags)
  // const filteredProjects =
  //   activeCategory === "All"
  //     ? projects.filter((p) => !p.featured)
  //     : projects.filter(
  //         (p) => !p.featured && p.tags && p.tags.includes(activeCategory)
  //       );
  const filteredProjects =
  activeCategory === "All"
    ? projects.filter((p) => !p.featured)
    : projects.filter(
        (p) => !p.featured && p.tags && p.tags.includes(activeCategory)
      );

  // Get unique categories
  //const categories = ["All", ...new Set(projects.map((p) => p.category))];
  
  // Featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen overflow-hidden transition-all duration-700 ease-in-out bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30 dark:text-slate-100">
      {/* Enhanced Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40 dark:opacity-60">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 dark:opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            ) : i % 3 === 1 ? (
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rotate-45"></div>
            ) : (
              <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            )}
          </div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23e2e8f0%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      {/* Hero Section - Enhanced */}
      <section
        ref={parallaxRef}
        className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32 overflow-hidden"
      >
        {/* Enhanced glowing orbs with animation */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 dark:from-purple-500/40 dark:to-pink-500/40 blur-3xl parallax-element animate-pulse-slow"
          data-speed="0.02"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 dark:from-blue-500/40 dark:to-cyan-500/40 blur-3xl parallax-element animate-pulse-slow"
          data-speed="0.03"
        ></div>

        <div className="max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content - Enhanced */}
            <div className="fade-in px-4">
              <div className="relative mb-8">
                {/* Animated background text */}
                <div className="absolute -inset-2 text-8xl font-black text-slate-200/10 dark:text-slate-800/20 select-none pointer-events-none">
                  DEVELOPER
                </div>

                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-30 dark:opacity-50 animate-gradient-x"></div>
                  <h1 className="relative text-6xl md:text-8xl font-black leading-tight">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-100 dark:via-purple-100 dark:to-slate-100">
                      Hello, I'm
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x">
                      <TypeIt
                        options={{
                          strings: ["Dhruv Soni"],
                          speed: 100,
                          waitUntilVisible: true,
                          cursor: false,
                        }}
                      />
                    </span>
                  </h1>
                </div>
              </div>

              <div className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-8 h-12">
                <TypeIt
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "UI/UX Designer",
                      "Tech Innovator",
                      "Problem Solver",
                    ],
                    speed: 100,
                    breakLines: false,
                    loop: true,
                    waitUntilVisible: true,
                  }}
                />
              </div>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/40 dark:bg-slate-900/40 p-6 rounded-2xl border border-white/20 dark:border-slate-800/30">
                Crafting exceptional digital experiences through innovative
                design and cutting-edge technology. Specializing in scalable web
                applications that drive business growth and user engagement.
              </p>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-wrap gap-6 mb-12">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x"></div>
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                  <span className="relative z-10 text-white flex items-center gap-3">
                    Let's Connect
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>

                <a
                  href="#projects"
                  className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <span className="relative z-10 text-slate-900 dark:text-slate-100 flex items-center gap-3">
                    View Portfolio
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden backdrop-blur-sm bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  rel="noreferrer"
                >
                  <span className="relative z-10 text-slate-900 dark:text-slate-100 flex items-center gap-3">
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Resume
                  </span>
                </a>
              </div>

              {/* Achievement stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="text-center group fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Profile */}
            <div className="relative fade-in px-4">
              {/* Decorative elements with enhanced animations */}
              <div
                className="absolute -top-12 -left-12 w-96 h-96 rounded-full border-2 border-dashed border-purple-400/20 dark:border-purple-400/30 parallax-element animate-spin-slow"
                data-speed="0.01"
              ></div>
              <div
                className="absolute -bottom-12 -right-12 w-96 h-96 rounded-full border border-blue-400/20 dark:border-blue-400/30 parallax-element animate-spin-slow-reverse"
                data-speed="0.02"
              ></div>

              {/* Floating tech icons */}
              <div
                className="absolute top-10 right-10 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/50 shadow-xl parallax-element animate-float"
                data-speed="0.03"
              >
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div
                className="absolute bottom-20 left-10 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/50 shadow-xl parallax-element animate-float"
                data-speed="0.04"
                style={{ animationDelay: "1s" }}
              >
                <Palette className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div
                className="absolute top-1/2 -right-8 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/50 shadow-xl parallax-element animate-float"
                data-speed="0.05"
                style={{ animationDelay: "2s" }}
              >
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Enhanced profile image container */}
              <div className="relative z-10 w-full max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-full blur-2xl animate-pulse-slow"></div>

                {/* Main image container */}
                <div className="group relative z-10 w-full aspect-square overflow-hidden rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 p-2">
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-spin-slow opacity-75"></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"></div>

                  {/* Profile image */}
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
                      alt="Dhruv Soni - Full Stack Developer"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Enhanced floating particles */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full parallax-element animate-twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                    data-speed={0.02 + Math.random() * 0.03}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-500/50 dark:border-purple-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Scroll Down
            </span>
          </div>
        </div>
      </section>
      {/* About Section - Redesigned */}
      <section id="about" className="py-32 relative overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-slate-900/50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 blur-3xl animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-block relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-30 dark:opacity-50 animate-pulse"></div>
              <h2 className="relative text-5xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                  About Me
                </span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image */}
            <div className="slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                    alt="Workspace"
                    className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Overlay stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="backdrop-blur-md bg-white/80 dark:bg-slate-900/80 rounded-2xl p-4 border border-white/30 dark:border-slate-700/50">
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            3+
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Years Exp.
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                            50+
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Projects
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            15+
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Clients
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="slide-in-right">
              <div className="space-y-8">
                {/* Main content */}
                <div className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 rounded-3xl p-8 border border-white/30 dark:border-slate-700/50 shadow-xl">
                  <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    My Journey
                  </h3>

                  <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>
                      My passion for technology ignited during my teenage years
                      when I built my first website. What began as curiosity has
                      evolved into a fulfilling career creating digital
                      experiences that solve real-world problems.
                    </p>

                    <p>
                      With expertise spanning modern web technologies, cloud
                      architecture, and user experience design, I bridge the gap
                      between technical complexity and user-friendly solutions.
                    </p>

                    <p>
                      Beyond coding, I'm deeply involved in the tech community,
                      contributing to open-source projects, mentoring aspiring
                      developers, and staying at the forefront of emerging
                      technologies.
                    </p>
                  </div>

                  {/* Skills preview */}
                  <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                    <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
                      Core Expertise
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {["React", "Node.js", "TypeScript", "AWS", "MongoDB"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 text-sm font-medium text-slate-700 dark:text-slate-300 border border-purple-200/50 dark:border-purple-700/50"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="flex gap-4">
                  <a
                    href="#skills"
                    className="flex-1 group relative px-6 py-4 rounded-2xl font-medium overflow-hidden backdrop-blur-sm bg-gradient-to-r from-purple-100/70 to-blue-100/70 dark:from-purple-900/40 dark:to-blue-900/40 border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400/50 dark:hover:border-purple-400/50 transition-all duration-300"
                  >
                    <span className="relative z-10 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
                      <Code className="w-5 h-5" />
                      View Skills
                    </span>
                  </a>

                  <a
                    href="#contact"
                    className="flex-1 group relative px-6 py-4 rounded-2xl font-medium overflow-hidden backdrop-blur-sm bg-gradient-to-r from-pink-100/70 to-purple-100/70 dark:from-pink-900/40 dark:to-purple-900/40 border border-pink-200/50 dark:border-pink-700/50 hover:border-pink-400/50 dark:hover:border-pink-400/50 transition-all duration-300"
                  >
                    <span className="relative z-10 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Get in Touch
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section - Enhanced */}
      <section
        id="skills"
        className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-100/50 to-white/80 dark:from-slate-900/50 dark:to-slate-950/80"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-block relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-30 dark:opacity-50 animate-pulse"></div>
              <h2 className="relative text-5xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                  My Skills
                </span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills grid - Modified to remove percentage bars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`slide-up group ${skill.bg} backdrop-blur-md rounded-3xl p-8 border border-white/30 dark:border-slate-700/50 hover:border-purple-400/50 dark:hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 p-3 rounded-2xl bg-white/50 dark:bg-slate-800/50">
                    {skill.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold ${skill.color} transition-colors duration-500`}
                    >
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-16 text-center fade-in">
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200">
              Also Experienced With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Docker",
                "AWS",
                "GraphQL",
                "Redux",
                "Vue.js",
                "Python",
                "PostgreSQL",
                "Redis",
                "Webpack",
                "Jest",
                "Cypress",
                "Figma",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-6 py-3 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-medium hover:border-purple-400/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section - Enhanced */}
      {/* Projects Section - Updated to use real data */}
      {/* Projects Section - Updated to use real data */}
      {/* Projects Section - Updated to use real data */}
      {/* Projects Section - Updated to use real data */}
      <section id="projects" className="py-32 relative overflow-hidden" ref={projectsSectionRef}>
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50"></div>
        <div className="absolute -top-32 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20 fade-in animate">
            <div className="inline-block relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-30 dark:opacity-50 animate-pulse"></div>
              <h2 className="relative text-5xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                  Featured Work
                </span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of projects that demonstrate my skills and passion for innovation
            </p>
          </div>

          {/* Loading state */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          ) : (
            <>
              {/* Featured projects carousel */}
              {featuredProjects.length > 0 && (
                <div className="mb-20">
                  <h3 className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
                    Featured Projects
                  </h3>

                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${activeProject * 100}%)` }}
                      >
                        {featuredProjects.map((project, index) => (
                          <div key={project._id} className="w-full flex-shrink-0">
                            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/30 dark:border-slate-700/50">
                              {/* Project image */}
                              <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative overflow-hidden rounded-2xl">
                                  <img
                                    src={project.image?.url || "/placeholder.svg?height=400&width=600"}
                                    alt={project.title}
                                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

                                  {/* Overlay buttons */}
                                  <div className="absolute bottom-6 left-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl font-medium text-slate-900 text-center hover:bg-white transition-colors duration-300"
                                    >
                                      View Live
                                    </a>
                                    <a
                                      href={project.github || project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 px-4 py-2 bg-slate-900/90 backdrop-blur-sm rounded-xl font-medium text-white text-center hover:bg-slate-900 transition-colors duration-300"
                                    >
                                      View Code
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* Project details */}
                              <div className="space-y-6">
                                <div>
                                  <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    {project.category || "Project"}
                                  </div>
                                  <h4 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                                    {project.title}
                                  </h4>
                                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {project.description}
                                  </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                  {project.tags &&
                                    project.tags.map((tag, i) => (
                                      <span
                                        key={i}
                                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100/70 to-blue-100/70 dark:from-purple-900/40 dark:to-blue-900/40 text-sm font-medium text-slate-700 dark:text-slate-300 border border-purple-200/50 dark:border-purple-700/50"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                                  >
                                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    View Project
                                  </a>
                                  <a
                                    href={project.github || project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-3 bg-slate-200/70 dark:bg-slate-700/70 text-slate-900 dark:text-slate-100 rounded-2xl font-semibold hover:bg-slate-300/70 dark:hover:bg-slate-600/70 transition-all duration-300"
                                  >
                                    <GitHub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    Source Code
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Carousel indicators */}
                    {featuredProjects.length > 1 && (
                      <div className="flex justify-center gap-3 mt-8">
                        {featuredProjects.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveProject(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              activeProject === index
                                ? "bg-gradient-to-r from-purple-600 to-blue-600 scale-125"
                                : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Project category filter */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
                  {featuredProjects.length > 0 ? "More Projects" : "My Projects"}
                </h3>

                {/* Category filters - unchanged */}
                {categories.length > 1 && (
                  <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          activeCategory === category
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                            : "bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:border-purple-400/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}

                {/* All projects grid - FIXED HERE */}
                {filteredProjects.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {console.log("Rendering filtered projects:", filteredProjects)}
                    {filteredProjects.map((project, index) => (
                      <div
                        key={project._id}
                        className={`project-card group relative backdrop-blur-md rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/50 hover:border-purple-400/50 dark:hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 hover:-translate-y-2 bg-white/70 dark:bg-slate-900/70 animate ${animatedProjects ? "opacity-100" : "opacity-0"}`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        {/* Project image */}
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={project.image?.url || "/placeholder.svg?height=400&width=600" || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex gap-3">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300"
                                aria-label="View project"
                              >
                                <ExternalLink className="w-5 h-5 text-slate-900" />
                              </a>
                              <a
                                href={project.github || project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-900/90 backdrop-blur-sm rounded-full hover:bg-slate-900 transition-colors duration-300"
                                aria-label="View source code"
                              >
                                <GitHub className="w-5 h-5 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Project content */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                            {project.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags &&
                              project.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                                >
                                  {tag}
                                </span>
                              ))}
                          </div>

                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            View Project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No projects available in this category.</p>
                  </div>
                )}
              </div>

              {/* View all projects CTA - unchanged */}
              <div className="text-center mt-16 fade-in animate">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  <GitHub className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  View All Projects on GitHub
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </>
          )}
        </div>
      </section>
      {/* Contact Section - Enhanced */}
      {/* Contact Section - Enhanced with Working Form */}
      <section
        id="contact"
        className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-100/50 to-white/80 dark:from-slate-900/50 dark:to-slate-950/80"
      >
        {/* Background elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse-slow"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-block relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-30 dark:opacity-50 animate-pulse animate-gradient-x"></div>
              <h2 className="relative text-5xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                  Let's Connect
                </span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact form - Now Functional */}
            <div className="scale-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-2xl opacity-70 animate-pulse-slow"></div>
                <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-slate-700/50 p-8 shadow-2xl">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Send me a message</h3>
                    <p className="text-slate-600 dark:text-slate-400">I'll get back to you within 24 hours.</p>
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-green-700 dark:text-green-300 font-medium">
                          Message sent successfully! I'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <p className="text-red-700 dark:text-red-300 font-medium">
                          Failed to send message. Please try again.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleContactInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-6 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-400/20 outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 disabled:opacity-50"
                            placeholder="Your full name"
                          />
                          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-focus-within:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                      <div className="group">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleContactInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-6 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-400/20 outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 disabled:opacity-50"
                            placeholder="your@email.com"
                          />
                          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-focus-within:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3"
                      >
                        Subject *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleContactInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-400/20 outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 disabled:opacity-50"
                          placeholder="What's this about?"
                        />
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3"
                      >
                        Message *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={contactForm.message}
                          onChange={handleContactInputChange}
                          required
                          disabled={isSubmitting}
                          rows={6}
                          className="w-full px-6 py-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-400/20 outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 resize-none disabled:opacity-50"
                          placeholder="Tell me about your project or just say hello..."
                        ></textarea>
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-blue-600 group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-4 px-8 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x"></div>
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                      <span className="relative z-10 text-white flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact info and social links - Keep existing content */}
            <div className="slide-in-right space-y-8">
              {/* Contact methods */}
              <div className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 rounded-3xl p-8 border border-white/30 dark:border-slate-700/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Get in Touch</h3>

                <div className="space-y-6">
                  <a
                    href="mailto:sonidhruv557@gmail.com"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">Email</div>
                      <div className="text-slate-600 dark:text-slate-400">sonidhruv557@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/dhruvsoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <LinkedIn className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn</div>
                      <div className="text-slate-600 dark:text-slate-400">Connect with me</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/dhruvsoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GitHub className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">GitHub</div>
                      <div className="text-slate-600 dark:text-slate-400">View my code</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability status */}
              <div className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 rounded-3xl p-8 border border-white/30 dark:border-slate-700/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Current Status</h3>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                    Available for new projects
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  I'm currently accepting new freelance projects and would love to help bring your ideas to life. Let's
                  discuss how we can work together to create something amazing.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Project start: 1-2 weeks</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>Free consultation available</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 rounded-3xl p-8 border border-white/30 dark:border-slate-700/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Follow My Journey</h3>

                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="mailto:sonidhruv557@gmail.com"
                    className="group relative w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://github.com/dhruvsoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-16 h-16 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center hover:shadow-lg hover:shadow-slate-500/25 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <GitHub className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://linkedin.com/in/dhruvsoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <LinkedIn className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mt-6 text-center">
                  Let's stay connected and build something great together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="py-16 border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500 relative overflow-hidden bg-gradient-to-b from-transparent to-slate-100/50 dark:to-slate-950/50">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-blue-500/10"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Logo and brand */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 animate-pulse-slow transition-opacity duration-1000"></div>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/40 group-hover:scale-110 animate-gradient-x">
                <span className="text-2xl font-black text-white transform group-hover:scale-110 transition-transform duration-500">
                  AJ
                </span>
              </div>
            </div>
          </div>

          {/* Brand text */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Alex Johnson
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Full Stack Developer crafting exceptional digital experiences with
              passion and precision.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a
              href="#about"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:alex@example.com"
              className="group w-12 h-12 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center hover:border-slate-500/50 hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <GitHub className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedIn className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-8">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              © {new Date().getFullYear()} Alex Johnson. Crafted with ❤️ and
              lots of coffee.
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">
              All rights reserved. Made with React, Tailwind CSS, and modern web
              technologies.
            </p>
          </div>
        </div>
      </footer>
      Enhanced Global Styles
      <style jsx global>{`
        /* Custom keyframes and animations */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 400% 400%;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 3s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Enhanced base animations */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-up {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-up.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-left.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(80px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-right.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scale-in.animate {
          opacity: 1;
          transform: scale(1);
        }

        /* Enhanced animations */
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin 25s linear infinite reverse;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Skill progress bars */
        .skill-progress {
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #06b6d4);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #0891b2);
        }

        /* Dark mode improvements */
        .dark ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #06b6d4);
        }

        /* Selection styling */
        ::selection {
          background: #8b5cf6;
          color: white;
        }

        .dark ::selection {
          background: #a855f7;
          color: white;
        }

        /* Focus visible improvements */
        .focus\:ring-2:focus {
          outline: none;
        }

        /* Improved transitions */
        * {
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </main>
    
  );
}
