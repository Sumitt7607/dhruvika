import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Search,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import beaglePhoto from "@/assets/puppy-beagle.jpg";
import bichonFrisePhoto from "@/assets/puppy-bichon-frise.jpg";
import cavalierPhoto from "@/assets/puppy-cavalier.jpg";
import cockerSpanielPhoto from "@/assets/puppy-cocker-spaniel.jpg";
import dachshundPhoto from "@/assets/puppy-dachshund.jpg";
import familyPhoto1 from "@/assets/happy-family-1.jpg";
import familyPhoto2 from "@/assets/happy-family-2.jpg";
import familyPhoto3 from "@/assets/happy-family-3.jpg";
import familyPhoto4 from "@/assets/happy-family-4.jpg";
import frenchBulldogPhoto from "@/assets/puppy-french-bulldog.jpg";
import germanShepherdPhoto from "@/assets/puppy-german-shepherd.jpg";
import goldenPhoto from "@/assets/puppy-golden.jpg";
import heroPhoto from "@/assets/puppy-hero.jpg";
import huskyPhoto from "@/assets/puppy-husky.jpg";
import labradorPhoto from "@/assets/puppy-labrador.jpg";
import maltesePhoto from "@/assets/puppy-maltese.jpg";
import maltipooPhoto from "@/assets/puppy-maltipoo.jpg";
import pomeranianPhoto from "@/assets/puppy-pomeranian.jpg";
import pugPhoto from "@/assets/puppy-pug.jpg";
import rottweilerPhoto from "@/assets/puppy-rottweiler.jpg";
import shihTzuPhoto from "@/assets/puppy-shih-tzu.jpg";
import tibetanMastiffPhoto from "@/assets/puppy-tibetan-mastiff.jpg";
import toyPoodlePhoto from "@/assets/puppy-toy-poodle.jpg";

const familyStories = [
  {
    id: 1,
    image: familyPhoto1,
    parent: "Ananya & Shadow",
    breed: "German Shepherd",
    location: "Greater Kailash, New Delhi",
    quote: "From the very first cuddle, Shadow felt right at home. The health checks and honest guidance gave our family total peace of mind.",
  },
  {
    id: 2,
    image: familyPhoto2,
    parent: "Priya & Mochi",
    breed: "Shih Tzu",
    location: "DLF Phase 5, Gurgaon",
    quote: "Finding our little bundle of joy through PupNest was the best decision. She’s brought endless laughter to our apartment.",
  },
  {
    id: 3,
    image: familyPhoto3,
    parent: "Rohan & Oreo",
    breed: "Shih Tzu",
    location: "Sector 50, Noida",
    quote: "Meeting him first and seeing how well-cared for he was made all the difference. He is calm, playful, and so deeply loved.",
  },
  {
    id: 4,
    image: familyPhoto4,
    parent: "Kabir & Rusty",
    breed: "Toy Poodle",
    location: "Vasant Kunj, New Delhi",
    quote: "Rusty is the smartest little buddy! The team helped us understand puppy routines in Delhi, making the transition so easy.",
  },
];

const breeds = [
  {
    name: "Golden Retriever",
    note: "The sunny, people-loving companion",
    fit: "Family favourite",
    group: "family",
    image: goldenPhoto,
    detail:
      "A sociable, active breed that often thrives with companionship, daily movement and a little room to play.",
  },
  {
    name: "Labrador",
    note: "Gentle nature, endless playful loyalty",
    fit: "Family favourite",
    group: "family",
    image: labradorPhoto,
    detail:
      "An outgoing and devoted companion known for patience, eagerness to learn, and boundless affection for families.",
  },
  {
    name: "Cavalier King Charles Spaniel",
    note: "Royal gentleness with an affectionate spirit",
    fit: "Family favourite",
    group: "family",
    image: cavalierPhoto,
    detail:
      "A sweet, trusting lap companion whose calm temperament and deep affection make them wonderful friends for children and peaceful homes.",
  },
  {
    name: "Cocker Spaniel",
    note: "Merry disposition with soulful, gentle eyes",
    fit: "Family favourite",
    group: "family",
    image: cockerSpanielPhoto,
    detail:
      "A remarkably sweet, joyful sporting dog renowned for affectionate companionship, a lush silky coat, and eagerness to please.",
  },
  {
    name: "German Shepherd",
    note: "Noble, intelligent, and deeply devoted",
    fit: "For active homes",
    group: "active",
    image: germanShepherdPhoto,
    detail:
      "A loyal and highly trainable working breed that blossoms with purposeful activity, mental stimulation, and dedicated companionship.",
  },
  {
    name: "Rottweiler",
    note: "Steadfast protector with a big, affectionate heart",
    fit: "For active homes",
    group: "active",
    image: rottweilerPhoto,
    detail:
      "A confident, robust working dog that thrives with devoted early socialisation, clear structure, and deeply loyal family bonds.",
  },
  {
    name: "Siberian Husky",
    note: "Striking gaze with a playful, energetic spirit",
    fit: "For active homes",
    group: "active",
    image: huskyPhoto,
    detail:
      "A spirited, high-energy companion that thrives on exercise and outdoor play, needing cool indoor comfort during Delhi summers.",
  },
  {
    name: "Tibetan Mastiff",
    note: "Majestic guardian with an independent soul",
    fit: "For active homes",
    group: "active",
    image: tibetanMastiffPhoto,
    detail:
      "A grand, ancient guardian breed with an imposing double coat that requires dedicated space, cool indoor shelter during summer, and experienced guidance.",
  },
  {
    name: "Beagle",
    note: "Curious nose, cheerful spirit",
    fit: "For active homes",
    group: "active",
    image: beaglePhoto,
    detail:
      "A curious, energetic hound who benefits from engaging walks, play and a secure space to explore.",
  },
  {
    name: "Bichon Frisé",
    note: "Cheerful powder-puff of endless warmth and charm",
    fit: "Small-space friendly",
    group: "small",
    image: bichonFrisePhoto,
    detail:
      "A hypoallergenic, merry companion that brings bright smiles to apartment homes, loving companionship and gentle daily strolls.",
  },
  {
    name: "Toy Poodle",
    note: "Brilliant mind in an affectionate, compact frame",
    fit: "Small-space friendly",
    group: "small",
    image: toyPoodlePhoto,
    detail:
      "An exceptionally intelligent, low-shedding companion that excels in apartment settings with trick learning, social games, and cozy indoor cuddles.",
  },
  {
    name: "Maltese",
    note: "Gentle elegance and devoted lap warmth",
    fit: "Small-space friendly",
    group: "small",
    image: maltesePhoto,
    detail:
      "An ancient, affectionate toy breed with a silky white coat, gentle demeanour, and low-shedding traits ideal for calm indoor homes.",
  },
  {
    name: "Dachshund",
    note: "Spirited personality in a brave little package",
    fit: "Small-space friendly",
    group: "small",
    image: dachshundPhoto,
    detail:
      "A clever, lively hound with a curious nature and spunky spirit, needing moderate walks and thoughtful care to support their long spine.",
  },
  {
    name: "Maltipoo",
    note: "Teddy-bear sweetness and playful charm",
    fit: "Small-space friendly",
    group: "small",
    image: maltipooPhoto,
    detail:
      "A popular Maltese and Poodle cross with a soft, low-dander fleece coat, gentle disposition, and bright, social energy.",
  },
  {
    name: "Pomeranian",
    note: "Spirited fluff with a joyful personality",
    fit: "Small-space friendly",
    group: "small",
    image: pomeranianPhoto,
    detail:
      "An alert, petite companion with a glorious coat that thrives in flats and apartments with loving attention and gentle play.",
  },
  {
    name: "Pug",
    note: "Charming comedian with an easygoing heart",
    fit: "Small-space friendly",
    group: "small",
    image: pugPhoto,
    detail:
      "A sweet-natured, sociable companion well-suited to apartment life, preferring relaxed walks and cool indoor comfort.",
  },
  {
    name: "French Bulldog",
    note: "Playful bat-eared charmer with a relaxed heart",
    fit: "Small-space friendly",
    group: "small",
    image: frenchBulldogPhoto,
    detail:
      "A quiet, easygoing apartment companion with a comical, loving nature, requiring indoor cooling during Delhi's hot season.",
  },
  {
    name: "Shih Tzu",
    note: "A little shadow with a big heart",
    fit: "Small-space friendly",
    group: "small",
    image: shihTzuPhoto,
    detail:
      "A small companion breed that can suit apartment life, with regular grooming and close company part of the picture.",
  },
];

const filters = [
  { label: "All breeds", value: "all" },
  { label: "Small-space friendly", value: "small" },
  { label: "Family favourites", value: "family" },
  { label: "Active companions", value: "active" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Puppies in Delhi NCR | PupNest" },
      {
        name: "description",
        content:
          "Explore popular puppy breeds in Delhi NCR, compare their needs, and find thoughtful questions to ask before choosing your new companion.",
      },
      { property: "og:title", content: "Puppies in Delhi NCR | PupNest" },
      {
        property: "og:description",
        content:
          "A thoughtful start to finding your puppy in Delhi NCR. Explore breeds and choose a companion that fits your life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CONTACT_PHONE = "+917678494050";
const CONTACT_PHONE_DISPLAY = "+91 76784 94050";
const WHATSAPP_NUMBER = "917678494050";

function Index() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryBreed, setInquiryBreed] = useState(breeds[0].name);
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi PupNest! My name is ${inquiryName || "Puppy Lover"} (${inquiryPhone || "Not provided"}). I am interested in a ${inquiryBreed} puppy in Delhi NCR. ${inquiryMessage ? `Note: ${inquiryMessage}` : ""}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setFormSent(true);
  };

  const visibleBreeds = breeds.filter((breed) => {
    const matchesFilter = activeFilter === "all" || breed.group === activeFilter;
    const normalizedSearch = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const targetText = `${breed.name} ${breed.note}`
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const matchesSearch = targetText.includes(normalizedSearch);
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="PupNest home">
          <span className="brand-icon"><PawPrint aria-hidden="true" /></span>
          <span>Pup<span className="brand-amp">Nest</span></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#puppies">Meet the breeds</a>
          <a href="#choosing">A thoughtful start</a>
          <a href="#families">Happy families</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button asChild className="header-cta">
          <a href="#puppies">Find your puppy <ArrowRight aria-hidden="true" /></a>
        </Button>
      </header>

      <section className="hero-section" id="top">
        <img
          className="hero-photo"
          src={heroPhoto}
          alt="A golden retriever puppy enjoying a sunny garden"
          width={1600}
          height={960}
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><MapPin aria-hidden="true" /> Delhi NCR, India</div>
          <h1>A little love<br />is closer than<br /><em>you think.</em></h1>
          <p>Find a puppy who feels like they were always meant to be part of your story.</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="hero-button">
              <a href="#puppies">Meet the breeds <ArrowRight aria-hidden="true" /></a>
            </Button>
            <a className="quiet-link" href="#choosing"><span className="quiet-link-icon"><ArrowDown aria-hidden="true" /></span>Choose with care</a>
          </div>
          <div className="hero-footnote"><span className="hero-footnote-line" />A thoughtful beginning, right here in NCR</div>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>Good days</span><PawPrint /><span>start here</span>
        </div>
      </section>

      <section className="trust-ribbon" aria-label="Choosing a puppy thoughtfully">
        <div><ShieldCheck aria-hidden="true" /><span>Ask to see health records</span></div>
        <span className="ribbon-dot" aria-hidden="true">✳</span>
        <div><PawPrint aria-hidden="true" /><span>Meet before you decide</span></div>
        <span className="ribbon-dot" aria-hidden="true">✳</span>
        <div><MapPin aria-hidden="true" /><span>Made for Delhi NCR families</span></div>
      </section>

      <section className="breed-section" id="puppies">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark">01</span> FIND YOUR KIND OF PUPPY</p>
            <h2>Different little souls.<br /><em>One big feeling.</em></h2>
          </div>
          <p className="section-intro">Start with the kind of life you share. The right companion is the one whose needs feel right for your home, too.</p>
        </div>

        <div className="breed-tools">
          <div className="filter-list" aria-label="Filter breeds">
            {filters.map((filter) => (
              <button
                className={`filter-chip${activeFilter === filter.value ? " is-active" : ""}`}
                key={filter.value}
                type="button"
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <label className="breed-search">
            <Search aria-hidden="true" />
            <span className="sr-only">Search breeds</span>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find a breed" />
          </label>
        </div>

        <div className="breed-grid">
          {visibleBreeds.map((breed, index) => (
            <article className="breed-card" key={breed.name}>
                <div className="breed-image-wrap">
                  <img
                    className="breed-image"
                    src={breed.image}
                    alt={`${breed.name} puppy`}
                    width={912}
                    height={912}
                    loading="lazy"
                  />
                  <span className="breed-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="breed-fit">{breed.fit}</span>
                </div>
                <div className="breed-card-copy">
                  <div>
                    <p className="breed-kicker">A breed to know</p>
                    <h3>{breed.name}</h3>
                  </div>
                  <div className="breed-actions">
                    <a
                      className="breed-btn-chat"
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi PupNest, I am interested in a ${breed.name} puppy in Delhi NCR.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Chat on WhatsApp about ${breed.name}`}
                    >
                      <MessageCircle aria-hidden="true" />
                      <span>Chat</span>
                    </a>
                    <a
                      className="breed-btn-call"
                      href={`tel:${CONTACT_PHONE}`}
                      aria-label={`Call now about ${breed.name}`}
                    >
                      <Phone aria-hidden="true" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          {visibleBreeds.length === 0 && (
            <p className="no-results">No breeds match that search. Try another name.</p>
          )}
        </div>
        <p className="availability-note">Breed profiles are a starting point. Ask about current availability and meet in person before making a decision.</p>
      </section>

      <section className="care-section" id="choosing">
        <div className="care-photo-wrap">
          <img src={shihTzuPhoto} alt="A small puppy at home beside a sunny window" width={912} height={912} loading="lazy" />
          <span className="care-photo-note">The best first step is a conversation.</span>
        </div>
        <div className="care-copy">
          <p className="eyebrow"><span className="eyebrow-mark">02</span> A GOOD START MATTERS</p>
          <h2>Choose with<br /><em>your heart.</em><br />Ask with your head.</h2>
          <p className="care-intro">A puppy is a promise for years to come. Take your time, ask clear questions, and make sure the fit feels right for everyone.</p>
          <ul className="care-checklist">
            <li><span><Check aria-hidden="true" /></span>Ask to see the puppy’s health and vaccination records.</li>
            <li><span><Check aria-hidden="true" /></span>Meet the puppy and ask about their daily care.</li>
            <li><span><Check aria-hidden="true" /></span>Take time to understand the breed’s needs and temperament.</li>
          </ul>
          <a className="care-link" href="#puppies">Explore the breeds <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="family-section" id="families">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark">03</span> HAPPY FAMILIES ACROSS NCR</p>
            <h2>Real love stories.<br /><em>Forever homes.</em></h2>
          </div>
          <p className="section-intro">
            From the very first cuddle to playful mornings, meet some of the wonderful families and puppies who found each other through PupNest.
          </p>
        </div>

        <div className="family-carousel-wrap">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="family-carousel-header">
              <span className="family-counter">Swipe to explore moments</span>
              <div className="family-controls">
                <CarouselPrevious className="family-nav-btn" />
                <CarouselNext className="family-nav-btn" />
              </div>
            </div>
            <CarouselContent className="-ml-4">
              {familyStories.map((story) => (
                <CarouselItem key={story.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <article className="family-card">
                    <div className="family-image-wrap">
                      <img
                        className="family-image"
                        src={story.image}
                        alt={`${story.parent} with their ${story.breed}`}
                        loading="lazy"
                      />
                      <span className="family-badge">
                        <PawPrint className="w-3.5 h-3.5 fill-primary text-primary" aria-hidden="true" />
                        {story.breed}
                      </span>
                    </div>
                    <div className="family-card-body">
                      <p className="family-quote">“{story.quote}”</p>
                      <div className="family-meta">
                        <span className="font-semibold text-foreground">{story.parent}</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {story.location}
                        </span>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark">04</span> WE'RE HERE TO HELP</p>
            <h2>Connect with us.<br /><em>Start your puppy journey.</em></h2>
          </div>
          <p className="section-intro">
            Have questions about a breed, health guarantees, or scheduling a private visit in Delhi NCR? We're available 7 days a week.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MessageCircle aria-hidden="true" />
              </div>
              <div className="contact-info-text">
                <h4>Instant WhatsApp &amp; Call</h4>
                <p>Speak directly with our puppy care advisors for live videos, photos, and current litter availability.</p>
                <div className="contact-info-links">
                  <a
                    className="breed-btn-chat"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello PupNest, I have an inquiry about a puppy.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a className="breed-btn-call" href={`tel:${CONTACT_PHONE}`}>
                    <Phone aria-hidden="true" />
                    <span>Call {CONTACT_PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Clock aria-hidden="true" />
              </div>
              <div className="contact-info-text">
                <h4>Visiting &amp; Consultation Hours</h4>
                <p>Open all 7 days from 10:00 AM to 8:00 PM for pedigree verification, vaccination checks, and initial pet meetings.</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail aria-hidden="true" />
              </div>
              <div className="contact-info-text">
                <h4>Direct Email Inquiries</h4>
                <p><a href="mailto:hello@pupnest.in" className="font-semibold text-foreground hover:underline">hello@pupnest.in</a> — Typically replied to within 2 hours.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3>Send a Direct Inquiry</h3>
            <p>Tell us what kind of companion you're looking for and our team will get in touch right away.</p>
            {formSent ? (
              <div className="rounded-xl border border-primary/20 bg-primary/10 p-5 text-center">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-primary" />
                <h4 className="font-semibold text-forest">Inquiry Received!</h4>
                <p className="mt-1 text-sm text-muted-foreground">Your message has been formatted and opened in WhatsApp.</p>
                <button
                  type="button"
                  onClick={() => setFormSent(false)}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="contact-form">
                <div className="form-field">
                  <label htmlFor="inquiry-name">Your Full Name</label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="inquiry-phone">Phone / WhatsApp Number</label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    placeholder="+91 76784 XXXXX"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="inquiry-breed">Preferred Puppy Breed</label>
                  <select
                    id="inquiry-breed"
                    value={inquiryBreed}
                    onChange={(e) => setInquiryBreed(e.target.value)}
                  >
                    {breeds.map((b) => (
                      <option key={b.name} value={b.name}>
                        {b.name} ({b.fit})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="inquiry-message">Questions or Home Preferences (Optional)</label>
                  <textarea
                    id="inquiry-message"
                    rows={3}
                    placeholder="Tell us about your home setup or any specific questions..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className="contact-submit-btn">
                  <Send className="h-4 w-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-inner">
          <p className="eyebrow">YOUR NEXT CHAPTER HAS FOUR PAWS</p>
          <h2>Somewhere in Delhi NCR,<br />there’s a little <em>hello</em> waiting.</h2>
          <Button asChild size="lg" className="closing-button">
            <a href="#puppies">Meet the breeds <ArrowRight aria-hidden="true" /></a>
          </Button>
          <span className="closing-spark" aria-hidden="true">✳</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <a className="brand-mark footer-brand" href="#top" aria-label="PupNest home">
              <span className="brand-icon"><PawPrint aria-hidden="true" /></span>
              <span>Pup<span className="brand-amp">Nest</span></span>
            </a>
            <p className="footer-brand-bio">
              Thoughtful, ethical, health-first puppy introductions across Delhi NCR. We connect prospective pet parents with transparent health records, vaccinated puppies, and lifetime guidance.
            </p>
            <div className="footer-coverage">
              <MapPin className="h-4 w-4" />
              <span>Serving Delhi, Gurgaon, Noida, Ghaziabad &amp; Faridabad</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#top">Home</a></li>
              <li><a href="#puppies">Meet the Breeds</a></li>
              <li><a href="#choosing">A Thoughtful Start</a></li>
              <li><a href="#families">Happy Families</a></li>
              <li><a href="#contact">Contact &amp; Visits</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Popular Breeds</h4>
            <ul className="footer-links">
              <li><a href="#puppies">Golden Retriever</a></li>
              <li><a href="#puppies">Labrador Retriever</a></li>
              <li><a href="#puppies">Shih Tzu</a></li>
              <li><a href="#puppies">Toy Poodle</a></li>
              <li><a href="#puppies">German Shepherd</a></li>
              <li><a href="#puppies">Cavalier King Charles</a></li>
              <li><a href="#puppies">Maltipoo &amp; Maltese</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone />
                <div>
                  <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
                  <div className="text-xs text-muted-foreground">Direct Line &amp; Consultations</div>
                </div>
              </li>
              <li className="footer-contact-item">
                <MessageCircle />
                <div>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
                  <div className="text-xs text-muted-foreground">Quick photos &amp; videos</div>
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail />
                <div>
                  <a href="mailto:hello@pupnest.in">hello@pupnest.in</a>
                  <div className="text-xs text-muted-foreground">General inquiries</div>
                </div>
              </li>
              <li className="footer-contact-item">
                <Clock />
                <div>
                  <span>10:00 AM – 8:00 PM</span>
                  <div className="text-xs text-muted-foreground">Open all 7 days</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-bottom-brand">
            © {new Date().getFullYear()} PupNest. All rights reserved.
          </div>
          <div>
            Powered by{" "}
            <a
              href="https://nexcoretech.online"
              target="_blank"
              rel="noopener noreferrer"
              className="powered-by-link"
            >
              nExcore technologhies
            </a>
          </div>
          <a href="#top" className="footer-back-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
