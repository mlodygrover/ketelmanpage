// src/lib/projects.ts
import { 
  BarChart3, Clock, Database, ShieldCheck, 
  Users, CheckCircle2, Server, Globe, Smartphone, Zap,
  Map, Plane, Leaf, Heart, Ticket
} from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: "holding" | "client";
  heroImage: string;
  description: string;
  client: string;
  duration: string;
  teamSize: string;
  stats: { label: string; value: string; icon: any }[];
  challenge: string;
  solution: string;
  stack: string[];
  gallery: string[];
}

export const ALL_PROJECTS: Project[] = [
  // === PROJEKTY WŁASNE (HOLDING) ===
  {
    slug: "draft-and-go-web",
    type: "holding",
    title: "Draft&Go Platform",
    category: "TravelTech / SaaS",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
    description: "Rewolucyjna platforma webowa pozwalająca na dynamiczne konfigurowanie złożonych wyjazdów turystycznych typu 'Multi-City'. Algorytm łączy loty, hotele i atrakcje w spójny plan podróży w czasie rzeczywistym, eliminując godziny ręcznego planowania.",
    client: "Ketelman Ventures (Własne)",
    duration: "18 miesięcy",
    teamSize: "14 Specjalistów",
    stats: [
      { label: "Użytkownicy", value: "45k+", icon: Users },
      { label: "Obrót roczny", value: "€3.2M", icon: BarChart3 },
      { label: "Zrealizowane podróże", value: "12,500", icon: Plane },
      { label: "Partnerzy B2B", value: "150+", icon: Database },
    ],
    challenge: "Rynek turystyczny jest rozfragmentowany. Użytkownik musi odwiedzić 5 różnych stron, by zarezerwować lot, hotel, transfer i ubezpieczenie. Brakowało narzędzia, które obsłużyłoby tzw. 'complex itinerary' w jednym koszyku zakupowym, synchronizując dostępność wszystkich usług naraz.",
    solution: "Stworzyliśmy silnik rezerwacyjny oparty o grafową bazę danych, który w ułamku sekundy sprawdza dostępność u globalnych dostawców (GDS). Interfejs 'Drag & Drop' pozwala użytkownikom przesuwać klocki podróży, a system w tle przelicza ceny i logistykę połączeń.",
    stack: ["Next.js", "Node.js", "Neo4j (Graph DB)", "Stripe Connect", "Redis", "Google Places API"],
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2535&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    slug: "draft-and-go-mobile",
    type: "holding",
    title: "Draft&Go Mobile",
    category: "Mobile App / Navigation",
    heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?q=80&w=2667&auto=format&fit=crop",
    description: "Cyfrowy pilot wycieczki w kieszeni. Aplikacja mobilna, która przejmuje pałeczkę po zakupie wycieczki na platformie webowej. Oferuje nawigację offline, cyfrowy portfel biletów oraz system powiadomień o zmianach w podróży (np. opóźniony lot).",
    client: "Ketelman Ventures (Własne)",
    duration: "10 miesięcy",
    teamSize: "8 Mobile Devs",
    stats: [
      { label: "Pobrania", value: "80k+", icon: Smartphone },
      { label: "App Store", value: "4.9/5.0", icon: CheckCircle2 },
      { label: "Retencja", value: "75%", icon: Users },
      { label: "Mapy Offline", value: "100%", icon: Map },
    ],
    challenge: "Podróżni często tracą dostęp do internetu za granicą, co odcina ich od planu podróży. Dodatkowym problemem jest chaos w dokumentach – bilety PDF rozsiane po emailach.",
    solution: "Zastosowaliśmy architekturę 'Offline-First'. Wszystkie dane (mapy, bilety, rezerwacje) są synchronizowane lokalnie na urządzeniu przed wylotem. Aplikacja wykorzystuje geolokalizację w tle, aby sugerować atrakcje w pobliżu, nawet bez zasięgu GSM.",
    stack: ["React Native", "Mapbox SDK", "SQLite (Local DB)", "Firebase Cloud Messaging", "TypeScript"],
    gallery: [
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop"
    ]
  },

  // === PROJEKTY NA ZAMÓWIENIE (SOFTWARE HOUSE) ===
  {
    slug: "ekomis-system",
    type: "client",
    title: "System Ekomis",
    category: "GovTech / Enterprise",
    heroImage: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2670&auto=format&fit=crop",
    description: "Zaawansowany system ERP do ewidencji pojazdów importowanych oraz zarządzania masą towarową (recykling/odpady). Platforma automatyzuje procesy celno-skarbowe i generuje dokumentację zgodną z rygorystycznymi normami UE.",
    client: "Auto-Import Group Sp. z o.o.",
    duration: "12 miesięcy",
    teamSize: "16 Backend Devs",
    stats: [
      { label: "Przetworzone pojazdy", value: "150k+", icon: Database },
      { label: "Oszczędność czasu", value: "60%", icon: Clock },
      { label: "Błędy w dok.", value: "0%", icon: ShieldCheck },
      { label: "Raporty", value: "Auto", icon: Server },
    ],
    challenge: "Klient tracił setki godzin miesięcznie na ręczne wprowadzanie danych o imporcie pojazdów i rozliczaniu mas (opłaty recyklingowe). Błędy ludzkie skutkowały karami administracyjnymi.",
    solution: "Wdrożyliśmy system oparty o architekturę mikroserwisową, który integruje się z systemami rządowymi (API) oraz wagami przemysłowymi. OCR automatycznie sczytuje dane z faktur zagranicznych, a algorytmy walidują poprawność deklaracji celnych.",
    stack: ["Java Spring Boot", "Angular", "PostgreSQL", "Docker", "OCR Tesseract", "RabbitMQ"],
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    slug: "kulesza-foundation",
    type: "client",
    title: "Kulesza Foundation",
    category: "NGO / Web Development",
    heroImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop",
    description: "Nowoczesny hub cyfrowy dla fundacji charytatywnej pana Kamila Kuleszy. Strona nie tylko informuje, ale aktywnie wspiera zbiórki dzięki integracji z bramkami płatniczymi i systemem CRM do zarządzania darczyńcami.",
    client: "Fundacja im. K. Kuleszy",
    duration: "3 miesiące",
    teamSize: "4 Specjalistów",
    stats: [
      { label: "Wzrost datków", value: "+200%", icon: BarChart3 },
      { label: "Czas ładowania", value: "0.4s", icon: Zap },
      { label: "Dostępność WCAG", value: "AAA", icon: CheckCircle2 },
      { label: "Mobile Traffic", value: "85%", icon: Smartphone },
    ],
    challenge: "Poprzednia strona fundacji była nieintuicyjna i nie działała na telefonach, co zniechęcało potencjalnych darczyńców. Proces wpłaty wymagał ręcznego przelewu.",
    solution: "Zaprojektowaliśmy 'Mobile-First' Experience. Wdrożyliśmy płatności 'One-Click' (BLIK/Apple Pay) oraz CMS, który pozwala pracownikom fundacji samodzielnie dodawać relacje z akcji charytatywnych w czasie rzeczywistym.",
    stack: ["Next.js 15", "Sanity CMS", "Tailwind CSS", "Stripe API", "Vercel"],
    gallery: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    slug: "mlode-wilki",
    type: "client",
    title: "Młode Wilki Poznań",
    category: "Sports / Media",
    heroImage: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2574&auto=format&fit=crop",
    description: "Dynamiczny portal dla poznańskiej drużyny hokejowej. To nie tylko wizytówka, ale centrum społeczności kibica: terminarze live, profile zawodników, sklep online z gadżetami i system biletowy.",
    client: "KS Młode Wilki",
    duration: "4 miesiące",
    teamSize: "5 Specjalistów",
    stats: [
      { label: "Odsłony mies.", value: "15k+", icon: Globe },
      { label: "Sprzedaż biletów", value: "+40%", icon: Ticket },
      { label: "Sklep Online", value: "Tak", icon: checkCircleIconFake() }, // Używamy innej ikony lub tej samej
      { label: "Fan Engagement", value: "Wysoki", icon: Users },
    ],
    challenge: "Klub tracił kontakt z kibicami w mediach społecznościowych. Brakowało centralnego miejsca z aktualnymi wynikami i możliwością łatwego zakupu koszulek meczowych.",
    solution: "Stworzyliśmy portal zintegrowany z API ligi hokejowej (automatyczne wyniki). Moduł e-commerce pozwala na sprzedaż merchu, a panel administracyjny umożliwia sztabowi szkoleniowemu aktualizację statystyk zawodników.",
    stack: ["React", "Gatsby", "Shopify Headless", "GraphQL", "AWS S3"],
    gallery: [
      "https://images.unsplash.com/photo-1552065360-1e9d1dc9036c?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515703407324-5f7536622107?q=80&w=2670&auto=format&fit=crop"
    ]
  }
];

// Helper function (hack na ikonę w obiekcie powyżej, żeby TypeScript nie krzyczał przy kopiowaniu)
function checkCircleIconFake() {
    return CheckCircle2;
}

export function getProject(slug: string) {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}